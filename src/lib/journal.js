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

export function photoEntries(content) {
    return (content?.journal?.photoStories || []).flatMap(story => {
        const category = content.portfolioCategories?.find(item => item.id === story.categoryId && !item.nsfw);
        const group = category?.modelGroups?.find(item => item.model === story.model);
        if (!group?.photos?.length) return [];
        return [{
            ...story,
            id: `photo-${story.slug}`,
            kind: 'photo',
            href: `/journal/${story.slug}`,
            photos: group.photos,
            categoryName: category.name,
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
    return posts.map(post => ({
        id: post.id,
        slug: post.slug,
        title: post.title,
        kind: 'post',
        href: `/blog/${post.slug}`,
        topic: topicForPost(post, content),
        excerpt: excerpt(post.custom_excerpt || post.excerpt),
        readingLabel: `${Math.max(1, post.reading_time || 1)} min read`,
        date: post.published_at,
        image: post.tags?.some(tag => ['photo-essay', 'photography'].includes(tag.slug)) ? post.feature_image : null,
        imageAlt: post.feature_image_alt || post.title,
    }));
}

export function journalEntries(content, posts, loading = false) {
    const photos = photoEntries(content);
    const writing = loading ? Array.from({ length: 3 }, (_, index) => ({ id: `loading-${index}`, kind: 'loading' })) : postEntries(posts, content);
    const entries = [];
    for (let index = 0; index < Math.max(photos.length, writing.length); index += 1) {
        const pair = index % 2 ? [writing[index], photos[index]] : [photos[index], writing[index]];
        entries.push(...pair.filter(Boolean));
    }
    return entries;
}

export function formatDate(value, short = false) {
    if (!value || Number.isNaN(new Date(value).getTime())) return '';
    return new Intl.DateTimeFormat('en-US', {
        month: short ? 'short' : 'long', day: 'numeric', year: 'numeric', timeZone: 'America/Chicago',
    }).format(new Date(value));
}

export function emailHref(content) {
    const email = content?.socials?.find(social => social.name.toLowerCase() === 'email')?.url || 'russ@russheritage.com';
    return email.startsWith('mailto:') ? email : `mailto:${email}`;
}
