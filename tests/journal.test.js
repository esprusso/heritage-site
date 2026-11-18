import test from 'node:test';
import assert from 'node:assert/strict';

// The journal reads plain text through the browser's parser; tests only need the tags gone.
globalThis.DOMParser = class {
    parseFromString(value) {
        return { body: { textContent: String(value).replace(/<[^>]+>/g, ' ') } };
    }
};

const {
    entryLabel, formatForPost, groupByMonth, journalEntries, latestEssay, noteTitle, postEntries, relativeDay, shortDay, wordCount,
} = await import('../src/lib/journal.js');

const words = count => '<p>' + Array.from({ length: count }, (_, index) => 'word' + index).join(' ') + '</p>';
const post = (slug, published_at, html, extra = {}) => ({ id: slug, slug, title: slug, published_at, html, excerpt: '', tags: [], ...extra });

const content = {
    journal: {
        topics: [{ id: 'life', name: 'Everyday life' }],
        photoStories: [{ slug: 'series', title: 'Series', topic: 'life', categoryId: 'portraits', model: 'a' }],
    },
    portfolioCategories: [{ id: 'portraits', name: 'Portraits', modelGroups: [{ model: 'a', photos: [{ src: '/a.jpg' }] }] }],
};

test('a short post is a note and a long one is an essay', () => {
    assert.equal(wordCount('<p>One <strong>two</strong>&nbsp;three</p><p>four</p>'), 4);
    assert.equal(formatForPost(post('short', '2026-11-01', words(120)), content), 'note');
    assert.equal(formatForPost(post('long', '2026-11-01', words(121)), content), 'essay');
    assert.equal(formatForPost(post('image-only', '2026-11-01', ''), content), 'note');
});

test('tags decide the format ahead of length', () => {
    const tagged = slug => ({ tags: [{ slug, visibility: slug.startsWith('hash-') ? 'internal' : 'public' }] });
    assert.equal(formatForPost(post('a', '2026-11-01', words(400), tagged('note')), content), 'note');
    assert.equal(formatForPost(post('b', '2026-11-01', words(400), tagged('hash-note')), content), 'note');
    assert.equal(formatForPost(post('c', '2026-11-01', words(20), tagged('essay')), content), 'essay');
});

test('the configured length and a missing body are respected', () => {
    const strict = { ...content, journal: { ...content.journal, formats: { note: { maxWords: 10 } } } };
    assert.equal(formatForPost(post('a', '2026-11-01', words(11)), strict), 'essay');
    assert.equal(formatForPost(post('b', '2026-11-01', words(11), { tags: [{ slug: 'note' }] }), strict), 'note');
    assert.equal(formatForPost({ slug: 'no-body', tags: [] }, content), 'essay');
});

test('a note keeps a real title and drops a placeholder or a repeated first line', () => {
    assert.equal(noteTitle({ title: '(Untitled)', html: '<p>Hello there.</p>' }), '');
    assert.equal(noteTitle({ title: 'Hello there…', html: '<p>Hello there. And more.</p>' }), '');
    assert.equal(noteTitle({ title: 'On notebooks', html: '<p>Buy the cheap ones.</p>' }), 'On notebooks');
});

test('a link to an untitled note uses its opening words, never the placeholder title', () => {
    const [note] = postEntries([post('n', '2026-11-16T12:00:00Z', '<p>Rereading old away messages. We were all poets in 2003.</p>', { title: '(Untitled)' })], content);
    assert.equal(note.title, '');
    assert.equal(entryLabel(note), 'Rereading old away messages. We were all poets in 2003.');
    assert.equal(entryLabel(note, 24), 'Rereading old away…');
    const [essay] = postEntries([post('e', '2026-11-16T12:00:00Z', words(300), { title: 'A long one' })], content);
    assert.equal(entryLabel(essay), 'A long one');
});

test('the newest essay leads, whatever the response order and however many notes follow it', () => {
    const posts = [
        post('older-essay', '2026-02-12T12:00:00Z', words(500)),
        post('new-note', '2026-11-16T12:00:00Z', words(12)),
        post('newest-essay', '2026-03-20T12:00:00Z', words(300)),
        post('draft', '2026-12-01T12:00:00Z', words(900), { status: 'draft' }),
    ];
    assert.equal(latestEssay(posts, content).slug, 'newest-essay');
    assert.equal(latestEssay([posts[1]], content), null);
});

test('entries run newest first, with an undated series folded in and grouped by month', () => {
    const posts = [
        post('february', '2026-02-12T18:00:00Z', words(500)),
        post('november-note', '2026-11-16T18:00:00Z', words(12)),
        post('march', '2026-03-20T18:00:00Z', words(300)),
        post('november-essay', '2026-11-02T18:00:00Z', words(300)),
    ];
    assert.deepEqual(postEntries(posts, content).map(entry => [entry.slug, entry.format]), [
        ['november-note', 'note'], ['november-essay', 'essay'], ['march', 'essay'], ['february', 'essay'],
    ]);
    const entries = journalEntries(content, posts);
    assert.deepEqual(entries.map(entry => entry.slug), ['november-note', 'november-essay', 'series', 'march', 'february']);
    assert.deepEqual(groupByMonth(entries).map(group => [group.label, group.entries.length]), [
        ['November 2026', 3], ['March 2026', 1], ['February 2026', 1],
    ]);
    assert.deepEqual(journalEntries(content, []).map(entry => entry.slug), ['series']);
});

test('dates read in Central time, relative for the last week only', () => {
    const now = new Date('2026-11-18T18:00:00Z');
    assert.equal(relativeDay('2026-11-18T14:00:00Z', now), 'Today');
    assert.equal(relativeDay('2026-11-17T03:00:00Z', now), '2 days ago');
    assert.equal(relativeDay('2026-11-10T18:00:00Z', now), '');
    assert.equal(shortDay('2026-11-16T18:00:00Z', now), 'Nov 16');
    assert.equal(shortDay('2025-11-16T18:00:00Z', now), 'Nov 16, 2025');
});
