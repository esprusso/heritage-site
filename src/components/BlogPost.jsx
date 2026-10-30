import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { getSinglePost } from '../lib/ghost';
import { prepareArticle } from '../lib/articleContent';
import { topicForPost, excerpt } from '../lib/journal';
import { useContent } from '../contexts/ContentContext';
import usePageMetadata from '../hooks/usePageMetadata';
import ReadingLayout from './ReadingLayout';

export default function BlogPost() {
    const { slug } = useParams();
    const { content } = useContent();
    const [state, setState] = useState({ status: 'loading', post: null, slug });
    const [revision, setRevision] = useState(0);
    useEffect(() => {
        let active = true;
        setState({ status: 'loading', post: null, slug });
        getSinglePost(slug, { throwOnError: true }).then(post => {
            if (active) setState({ status: post ? 'ready' : 'missing', post, slug });
        }).catch(() => { if (active) setState({ status: 'error', post: null, slug }); });
        return () => { active = false; };
    }, [slug, revision]);
    const post = state.post;
    const prepared = useMemo(() => prepareArticle(post?.html), [post?.html]);
    usePageMetadata(post?.title || 'The journal', post ? excerpt(post.custom_excerpt || post.excerpt, 160) : content.meta.description);

    if (state.slug !== slug || state.status === 'loading') return <div className="page-state" role="status"><p>Opening the story…</p></div>;
    if (state.status === 'error') return <div className="page-state" role="alert"><h1>The story couldn’t be loaded.</h1><p>Please check your connection and try again.</p><button className="text-button" onClick={() => setRevision(value => value + 1)}>Try again</button><Link className="text-link" to="/#journal">Back to the journal</Link></div>;
    if (!post) return <div className="page-state"><h1>That story isn’t here.</h1><p>It may have moved, or the link may be out of date.</p><Link className="text-link" to="/#journal">Back to the journal</Link></div>;

    return (
        <ReadingLayout title={post.title} description={post.custom_excerpt} topic={topicForPost(post, content)} readingLabel={Math.max(1, post.reading_time || 1) + ' min read'} date={post.published_at} author={post.primary_author?.name || post.authors?.[0]?.name || 'Russ Heritage'} headings={prepared.headings} entryId={post.id}>
            <div className="article-copy">
                {post.feature_image ? <figure className="article-feature"><img src={post.feature_image} alt={post.feature_image_alt || post.title} decoding="async" />{post.feature_image_caption ? <figcaption dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.feature_image_caption) }} /> : null}</figure> : null}
                <div className="gh-content" dangerouslySetInnerHTML={{ __html: prepared.html }} />
            </div>
        </ReadingLayout>
    );
}
