import test from 'node:test';
import assert from 'node:assert/strict';
import { aboutContent } from '../src/lib/about.js';

const content = { about: { text: 'Original biography.', image: '/images/russ2.jpg' } };

test('missing or unavailable Ghost page preserves the original About content', () => {
    const about = aboutContent(null, content);
    assert.equal(about.html, null);
    assert.equal(about.title, 'Hi, I’m Russ.');
    assert.equal(about.image, content.about.image);
    assert.equal(about.description, content.about.text);
});

test('published Ghost content replaces the biography and portrait', () => {
    const about = aboutContent({
        title: 'A new introduction', html: '<p>My updated biography.</p>',
        feature_image: 'https://ghost.russheritage.com/content/images/portrait.jpg',
        feature_image_alt: 'Russ outdoors', excerpt: 'My updated biography.',
    }, content);
    assert.equal(about.title, 'A new introduction');
    assert.equal(about.html, '<p>My updated biography.</p>');
    assert.equal(about.image, 'https://ghost.russheritage.com/content/images/portrait.jpg');
    assert.equal(about.imageAlt, 'Russ outdoors');
    assert.equal(about.description, 'My updated biography.');
});

test('an empty published body stays empty instead of restoring removed copy', () => {
    for (const html of ['', null]) {
        const about = aboutContent({ title: 'About', html }, content);
        assert.equal(about.html, '');
        assert.equal(about.image, content.about.image);
    }
});

test('Ghost search metadata takes precedence over the generated excerpt', () => {
    const about = aboutContent({
        title: 'About', html: '<p>Biography</p>', meta_title: 'Meet Russ',
        meta_description: 'A custom search description.', custom_excerpt: 'A short introduction.', excerpt: 'Biography',
    }, content);
    assert.equal(about.metaTitle, 'Meet Russ');
    assert.equal(about.description, 'A custom search description.');
});
