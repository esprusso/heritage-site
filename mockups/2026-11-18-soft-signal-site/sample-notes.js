// Illustrative notes for local preview only. Nothing here is publication copy.
// Open any page of the dev server with ?sample-notes to add them (?sample-notes=2 for the newest two),
// and ?sample-notes=off to remove them.

const DAY = 86400000;

const samples = [
    { days: 2, html: '<p>A blog post doesn’t need a thesis. Sometimes it’s just a thing you noticed.</p>' },
    { days: 6, html: '<p>Rereading old away messages. We were all poets in 2003.</p>' },
    { days: 15, html: '<p>Three rolls back from the lab. One frame I love. That’s a good ratio.</p>', feature_image: '/images/journal/brittni-480.webp', feature_image_alt: 'Brittni seated in a vintage upholstered chair' },
    { days: 20, html: '<p>Finally fixed the scanner. It only took a year and one tutorial.</p>' },
    { days: 33, html: '<p>Still thinking about <a href="/blog/remember-the-old-internet">the old internet</a>. Half the replies were people describing their first homepage.</p>' },
    { days: 41, title: 'On keeping a notebook', html: '<p>The cheap ones get filled. The nice ones sit on the shelf waiting for a thought good enough.</p><p>Buy the cheap ones.</p>' },
    { days: 58, title: 'A longer note', tag: true, html: '<p>' + 'This one runs past the usual length so the front page can show how a tagged note is shortened in the column, with a link through to the whole thing. '.repeat(5) + '</p>' },
];

export function sampleNotes(now = Date.now()) {
    return samples.map((sample, index) => ({
        id: `sample-note-${index}`,
        slug: `sample-note-${index}`,
        title: sample.title || '(Untitled)',
        html: sample.html,
        excerpt: sample.html.replace(/<[^>]+>/g, ''),
        published_at: new Date(now - sample.days * DAY).toISOString(),
        reading_time: 1,
        feature_image: sample.feature_image || null,
        feature_image_alt: sample.feature_image_alt || null,
        tags: sample.tag ? [{ slug: 'hash-note', visibility: 'internal' }] : [],
        primary_author: { name: 'Russ Heritage' },
        sample: true,
    }));
}
