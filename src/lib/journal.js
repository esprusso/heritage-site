const TIME_ZONE = 'America/Chicago';

const DEFAULT_FORMATS = {
    note: { maxWords: 120, tags: ['note', 'notes', 'hash-note'] },
    essay: { tags: ['essay', 'essays', 'hash-essay'] },
};

export const FORMATS = [
    { id: 'essay', name: 'Essays', singular: 'Essay', path: '/essays' },
    { id: 'note', name: 'Notes', singular: 'Note', path: '/notes' },
    { id: 'photo', name: 'Photographs', singular: 'Photographs', path: '/photos' },
];

export function plainText(value = '') {
    const document = new DOMParser().parseFromString(value, 'text/html');
    return (document.body.textContent || '').replace(/\s+/g, ' ').trim();
}

export function excerpt(value = '', limit = 190) {
    const text = plainText(value);
    if (text.length <= limit) return text;
    const ending = text.lastIndexOf(' ', limit);
    return text.slice(0, ending > limit / 2 ? ending : limit).replace(/[.,;:]$/, '') + '…';
}

/** Text of published HTML without a document, so it also runs outside the browser. */
export function stripTags(html = '') {
    return String(html || '')
        .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&(nbsp|#160|#xa0);/gi, ' ')
        .replace(/&[a-z0-9#]+;/gi, 'x')
        .replace(/\s+/g, ' ')
        .trim();
}

export function wordCount(html = '') {
    const text = stripTags(html);
    return text ? text.split(' ').length : 0;
}

function formatRules(content) {
    const configured = content?.journal?.formats || {};
    return {
        note: { ...DEFAULT_FORMATS.note, ...configured.note },
        essay: { ...DEFAULT_FORMATS.essay, ...configured.essay },
    };
}

/**
 * A post is a note when it is tagged as one, or when it is short enough to read
 * where it stands. An essay tag keeps a short post in the long form.
 */
export function formatForPost(post, content) {
    const rules = formatRules(content);
    const slugs = (post.tags || []).map(tag => tag.slug);
    if (slugs.some(slug => rules.essay.tags.includes(slug))) return 'essay';
    if (slugs.some(slug => rules.note.tags.includes(slug))) return 'note';
    if (typeof post.html !== 'string') return 'essay';
    return wordCount(post.html) <= rules.note.maxWords ? 'note' : 'essay';
}

/** Ghost needs a title; a note often has nothing to add to its own first line. */
export function noteTitle(post) {
    const title = (post.title || '').trim();
    if (!title || /^\(?untitled\)?$/i.test(title)) return '';
    const start = title.replace(/(…|\.{3})$/, '').trim().toLowerCase();
    return stripTags(post.html).toLowerCase().startsWith(start) ? '' : title;
}

/** What to call an entry in a link: its title, or for an untitled note its opening words. */
export function entryLabel(entry, limit = 72) {
    if (entry.format !== 'note') return entry.fullTitle || entry.title;
    if (entry.title) return entry.title;
    const text = stripTags(entry.html);
    if (!text) return 'Note from ' + formatDate(entry.date);
    if (text.length <= limit) return text;
    const ending = text.lastIndexOf(' ', limit);
    return text.slice(0, ending > limit / 2 ? ending : limit).replace(/[.,;:]$/, '') + '…';
}

function isPublished(post) {
    return Boolean(post.slug) && (!post.status || post.status === 'published');
}

function timeOf(value) {
    return Date.parse(value) || 0;
}

export function latestPublishedPost(posts = []) {
    return posts.reduce((latest, post) => {
        if (!isPublished(post)) return latest;
        return !latest || timeOf(post.published_at) > timeOf(latest.published_at) ? post : latest;
    }, null);
}

/** The newest long-form post leads the front page, independent of response order. */
export function latestEssay(posts = [], content) {
    return latestPublishedPost(posts.filter(post => formatForPost(post, content) === 'essay'));
}

export function photoEntries(content) {
    return (content?.journal?.photoStories || []).flatMap(story => {
        const category = content.portfolioCategories?.find(item => item.id === story.categoryId && !item.nsfw);
        const group = category?.modelGroups?.find(item => item.model === story.model);
        if (!group?.photos?.length) return [];
        return [{
            ...story,
            id: `photo-${story.slug}`,
            kind: 'photo',
            format: 'photo',
            href: `/journal/${story.slug}`,
            photos: group.photos,
            categoryName: category.name,
            date: story.date || null,
            image: story.preview || story.image || group.photos[0].src,
            readingLabel: `${group.photos.length} ${group.photos.length === 1 ? 'photograph' : 'photographs'}`,
        }];
    });
}

export function topicForPost(post, content) {
    const topics = content?.journal?.topics || [];
    const tags = post.tags?.filter(tag => tag.visibility !== 'internal') || [];
    const matched = topics.find(topic => tags.some(tag => [topic.id, topic.tag].includes(tag.slug)));
    return matched?.id || content?.journal?.postTopics?.[post.slug] || 'life';
}

export function postEntries(posts, content) {
    return posts.filter(isPublished).map(post => {
        const format = formatForPost(post, content);
        const words = wordCount(post.html);
        return {
            id: post.id,
            slug: post.slug,
            kind: 'post',
            format,
            title: format === 'note' ? noteTitle(post) : post.title,
            fullTitle: post.title,
            href: `/blog/${post.slug}`,
            topic: topicForPost(post, content),
            excerpt: excerpt(post.custom_excerpt || post.excerpt),
            html: format === 'note' ? post.html || '' : null,
            words,
            long: format === 'note' && words > formatRules(content).note.maxWords,
            readingLabel: format === 'note' ? 'Note' : `${Math.max(1, post.reading_time || 1)} min read`,
            date: post.published_at,
            image: post.feature_image || null,
            imageAlt: post.feature_image_alt || post.title,
            imageCaption: post.feature_image_caption || '',
            sample: Boolean(post.sample),
        };
    }).sort((a, b) => timeOf(b.date) - timeOf(a.date));
}

/** Every entry: dated writing newest first, with the photographic series folded in. */
export function journalEntries(content, posts) {
    const writing = postEntries(posts, content);
    const photos = photoEntries(content);
    const dated = [...writing, ...photos.filter(photo => photo.date)].sort((a, b) => timeOf(b.date) - timeOf(a.date));
    const plates = photos.filter(photo => !photo.date);
    if (!dated.length) return plates;
    const entries = [];
    const every = Math.max(2, Math.ceil(dated.length / (plates.length + 1)));
    dated.forEach((entry, index) => {
        entries.push(entry);
        if ((index + 1) % every === 0 && plates.length) entries.push(plates.shift());
    });
    return [...entries, ...plates];
}

export function formatCounts(entries) {
    return entries.reduce((counts, entry) => ({ ...counts, [entry.format]: (counts[entry.format] || 0) + 1 }), {});
}

function dateParts(value) {
    const date = new Date(value);
    if (!value || Number.isNaN(date.getTime())) return null;
    const parts = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: TIME_ZONE }).formatToParts(date);
    const read = type => Number(parts.find(part => part.type === type).value);
    return { year: read('year'), month: read('month'), day: read('day') };
}

/** Group entries under a heading for each month, newest first; an undated series joins the group it follows. */
export function groupByMonth(entries) {
    const groups = [];
    for (const entry of entries) {
        const parts = dateParts(entry.date);
        const current = groups[groups.length - 1];
        if (!parts && current) {
            current.entries.push(entry);
            continue;
        }
        const key = parts ? `${parts.year}-${String(parts.month).padStart(2, '0')}` : 'undated';
        if (current?.key === key) current.entries.push(entry);
        else groups.push({
            key,
            label: parts ? new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: TIME_ZONE }).format(new Date(entry.date)) : '',
            entries: [entry],
        });
    }
    return groups;
}

export function formatDate(value, short = false) {
    if (!value || Number.isNaN(new Date(value).getTime())) return '';
    return new Intl.DateTimeFormat('en-US', {
        month: short ? 'short' : 'long', day: 'numeric', year: 'numeric', timeZone: TIME_ZONE,
    }).format(new Date(value));
}

/** “Nov 16”, with the year once it is not this one. */
export function shortDay(value, now = new Date()) {
    const parts = dateParts(value);
    if (!parts) return '';
    const sameYear = parts.year === dateParts(now).year;
    return new Intl.DateTimeFormat('en-US', {
        month: 'short', day: 'numeric', year: sameYear ? undefined : 'numeric', timeZone: TIME_ZONE,
    }).format(new Date(value));
}

/** “Today”, “Yesterday”, or “3 days ago” for the last week; older dates return nothing. */
export function relativeDay(value, now = new Date()) {
    const then = dateParts(value);
    const today = dateParts(now);
    if (!then || !today) return '';
    const days = Math.round((Date.UTC(today.year, today.month - 1, today.day) - Date.UTC(then.year, then.month - 1, then.day)) / 86400000);
    if (days < 0 || days > 6) return '';
    return days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days} days ago`;
}

export function emailHref(content) {
    const email = content?.socials?.find(social => social.name.toLowerCase() === 'email')?.url || 'russ@russheritage.com';
    return email.startsWith('mailto:') ? email : `mailto:${email}`;
}
