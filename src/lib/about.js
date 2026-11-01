/**
 * Keep the original About content available when the published page is missing
 * or unavailable. A deliberately empty published body stays empty.
 * @param {import('./ghost').GhostPage|null} page
 * @param {{ about: { text: string, image: string } }} content
 */
export function aboutContent(page, content) {
    return {
        title: page?.title || 'Hi, I’m Russ.',
        html: page ? page.html || '' : null,
        image: page?.feature_image || content.about.image,
        imageAlt: page?.feature_image_alt || 'Russ Heritage',
        metaTitle: page?.meta_title || 'About',
        description: page?.meta_description || page?.custom_excerpt || page?.excerpt || content.about.text,
    };
}
