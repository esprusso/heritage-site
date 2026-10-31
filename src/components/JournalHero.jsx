import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { usePosts } from '../contexts/PostsContext';
import { excerpt, latestPublishedPost } from '../lib/journal';

export default function JournalHero() {
    const { content } = useContent();
    const { posts, status } = usePosts();
    const journal = content.journal;
    const post = latestPublishedPost(posts);
    const loading = status === 'loading' && !post;
    const featured = post || loading;
    const postImage = post?.feature_image;
    const [closingStart, ...closingEmphasis] = journal.titleEnd.split(/\s+/);
    const cover = <img
                src={postImage || journal.heroImage}
                srcSet={postImage ? undefined : '/images/journal/hero-640.webp 640w, /images/journal/hero-1280.webp 1280w, /images/journal/hero-1920.webp 1920w'}
                sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1312px) calc(100vw - 80px), (max-width: 1599px) 1232px, 1320px"
                alt={postImage ? post.feature_image_alt || post.title : journal.heroAlt}
                fetchPriority="high"
            />;
    return (
        <section className={'personal-hero airy-hero' + (featured ? ' featured-hero' : '')} id="home" aria-labelledby="hero-title" aria-busy={loading}>
            {loading ? <div className="hero-placeholder" aria-hidden="true" /> : post ? <Link className="featured-cover" to={'/blog/' + post.slug} aria-label={'Read ' + post.title}>{cover}</Link> : cover}
            <div className="welcome-panel">
                <h1 id="hero-title">{post ? <Link to={'/blog/' + post.slug}>{post.title}</Link> : loading ? 'The latest story' : <>{journal.title}<br />{closingStart} <em>{closingEmphasis.join(' ')}</em></>}</h1>
                {loading ? <p role="status">Loading the latest story…</p> : <p>{post ? excerpt(post.custom_excerpt || post.excerpt, 135) : journal.introduction}</p>}
                {!loading && (post ? <Link className="text-link" to={'/blog/' + post.slug}>Read the latest post <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></Link> : <a className="text-link" href="#journal">Explore the journal <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></a>)}
            </div>
        </section>
    );
}
