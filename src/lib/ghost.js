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

export async function getPosts() {
    if (!api) return [];
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch(err => {
            console.error(err);
            return [];
        });
}

export async function getSinglePost(postSlug) {
    if (!api) return null;
    return await api.posts
        .read({
            slug: postSlug
        }, {
            include: "tags,authors"
        })
        .catch(err => {
            console.error(err);
            return null;
        });
}
