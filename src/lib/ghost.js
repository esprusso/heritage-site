import GhostContentAPI from '@tryghost/content-api';

const url = import.meta.env.VITE_GHOST_API_URL;
const key = import.meta.env.VITE_GHOST_CONTENT_API_KEY;

let api;

if (url && key) {
    try {
        api = new GhostContentAPI({
            url,
            key,
            version: "v5.0"
        });
    } catch (e) {
        console.error("Failed to initialize Ghost API:", e);
    }
} else {
    console.warn("Ghost API credentials missing in .env");
}

let cachedPosts = null;
let fetchedAt = 0;
let pendingPosts = null;

export async function getPosts({ refresh = false, throwOnError = false } = {}) {
    try {
        if (!api) throw new Error('The journal connection is not configured.');
        if (!refresh && cachedPosts && Date.now() - fetchedAt < 60000) return cachedPosts;
        if (!pendingPosts) {
            pendingPosts = api.posts.browse({ limit: 'all', include: 'tags,authors' })
                .then(posts => {
                    cachedPosts = posts.filter(post => post.slug);
                    fetchedAt = Date.now();
                    return cachedPosts;
                })
                .finally(() => { pendingPosts = null; });
        }
        return await pendingPosts;
    } catch (error) {
        if (throwOnError) throw error;
        return [];
    }
}

export async function getSinglePost(postSlug, { throwOnError = false } = {}) {
    try {
        if (!api) throw new Error('The journal connection is not configured.');
        const cached = cachedPosts?.find(post => post.slug === postSlug);
        if (cached?.html) return cached;
        return await api.posts.read({ slug: postSlug }, { include: 'tags,authors' });
    } catch (error) {
        if (error.response?.status === 404 || error.name === 'NotFoundError') return null;
        if (throwOnError) throw error;
        return null;
    }
}

/**
 * @typedef {Object} GhostPage
 * @property {string} id
 * @property {string} slug
 * @property {string} title
 * @property {string|null} html
 * @property {string|null} [feature_image]
 * @property {string|null} [feature_image_alt]
 * @property {string|null} [meta_title]
 * @property {string|null} [meta_description]
 * @property {string|null} [custom_excerpt]
 * @property {string} [excerpt]
 */

/**
 * Read on each visit so published page edits don't need a website deployment.
 * @param {string} slug
 * @param {{ throwOnError?: boolean }} [options]
 * @returns {Promise<GhostPage|null>}
 */
export async function getSinglePage(slug, { throwOnError = false } = {}) {
    try {
        if (!api) throw new Error('The journal connection is not configured.');
        return await api.pages.read({ slug });
    } catch (error) {
        if (error.response?.status === 404 || error.name === 'NotFoundError') return null;
        if (throwOnError) throw error;
        return null;
    }
}
