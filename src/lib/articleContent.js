import DOMPurify from 'dompurify';

export function prepareArticle(html = '') {
    const sanitized = DOMPurify.sanitize(html, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'title', 'referrerpolicy'],
    });
    const document = new DOMParser().parseFromString(sanitized, 'text/html');
    const usedIds = new Set();
    const headings = [...document.body.querySelectorAll('h2, h3')].map((heading, index) => {
        const title = heading.textContent.trim();
        let id = heading.id || 'story-' + (title.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || `section-${index + 1}`);
        if (usedIds.has(id)) id += `-${index + 1}`;
        usedIds.add(id);
        heading.id = id;
        return { id, title, level: heading.tagName.toLowerCase() };
    }).filter(heading => heading.title);
    const opening = document.body.querySelector(':scope > p');
    if (opening?.textContent.trim().length > 120) opening.classList.add('article-opening');
    for (const image of document.body.querySelectorAll('img')) {
        image.setAttribute('loading', 'lazy');
        image.setAttribute('decoding', 'async');
    }
    for (const iframe of document.body.querySelectorAll('iframe')) {
        iframe.setAttribute('loading', 'lazy');
        if (!iframe.getAttribute('title')) iframe.setAttribute('title', 'Embedded media');
    }
    for (const link of document.body.querySelectorAll('a[target="_blank"]')) link.setAttribute('rel', 'noopener noreferrer');
    return { html: document.body.innerHTML, headings };
}
