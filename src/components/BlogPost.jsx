import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { getSinglePost } from '../lib/ghost';
import { prepareArticle, prepareNote } from '../lib/articleContent';
import { excerpt, formatDate, formatForPost, noteTitle, topicForPost } from '../lib/journal';
import { useContent } from '../contexts/ContentContext';
import useJournal from '../hooks/useJournal';
import usePageMetadata from '../hooks/usePageMetadata';
import Meta from './Meta';
import ReadingLayout, { Neighbours } from './ReadingLayout';

function neighboursOf(list, slug) {
    const index = list.findIndex(entry => entry.slug === slug);
    return index < 0 ? {} : { newer: list[index - 1], older: list[index + 1] };
}

function Note({ post }) {
    const { content } = useContent();
    const { notes } = useJournal();
    const html = useMemo(() => prepareNote(post.html), [post.html]);
    const title = noteTitle(post);
    const topic = content.journal.topics.find(item => item.id === topicForPost(post, content))?.name;
    return (
        <article className="note-page wrap" aria-labelledby="note-title">
            <h1 className={title ? 'note-page-title' : 'sr-only'} id="note-title">{title || 'Note from ' + formatDate(post.published_at)}</h1>
            <div className="note-body note-page-body" dangerouslySetInnerHTML={{ __html: html }} />
            {post.feature_image ? <img className="note-image" src={post.feature_image} alt={post.feature_image_alt || ''} decoding="async" /> : null}
            <Meta point items={[
                <strong key="format">Note</strong>,
                <time key="date" dateTime={post.published_at}>{formatDate(post.published_at)}</time>,
                topic,
                post.sample ? 'Sample' : null,
            ]} />
            <Neighbours {...neighboursOf(notes, post.slug)} label="More notes" all={{ to: '/notes', label: 'All notes' }} />
        </article>
    );
}

export default function BlogPost() {
    const { slug } = useParams();
    const { content } = useContent();
    const { essays } = useJournal();
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
    const isNote = Boolean(post) && formatForPost(post, content) === 'note';
    usePageMetadata(
        post ? (isNote ? noteTitle(post) || 'Note from ' + formatDate(post.published_at) : post.title) : 'The journal',
        post ? excerpt(post.custom_excerpt || post.excerpt, 160) : content.meta.description,
    );

    if (state.slug !== slug || state.status === 'loading') return <div className="page-state" role="status"><p>Opening the story…</p></div>;
    if (state.status === 'error') return <div className="page-state" role="alert"><h1>The story couldn’t be loaded.</h1><p>Please check your connection and try again.</p><button className="button" onClick={() => setRevision(value => value + 1)}>Try again</button><Link className="link" to="/#journal">Back to the journal</Link></div>;
    if (!post) return <div className="page-state"><h1>That story isn’t here.</h1><p>It may have moved, or the link may be out of date.</p><Link className="link" to="/#journal">Back to the journal</Link></div>;
    if (isNote) return <Note post={post} />;

    const cover = post.feature_image ? (
        <figure className="article-cover">
            <img src={post.feature_image} alt={post.feature_image_alt || post.title} decoding="async" />
            {post.feature_image_caption ? <figcaption dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.feature_image_caption) }} /> : null}
        </figure>
    ) : null;

    return (
        <ReadingLayout
            title={post.title}
            description={post.custom_excerpt}
            topic={topicForPost(post, content)}
            readingLabel={Math.max(1, post.reading_time || 1) + ' min read'}
            date={post.published_at}
            author={post.primary_author?.name || post.authors?.[0]?.name || 'Russ Heritage'}
            headings={prepared.headings}
            cover={cover}
            neighbours={<Neighbours {...neighboursOf(essays, post.slug)} label="More essays" all={{ to: '/essays', label: 'All essays' }} />}
        >
            <div className="gh-content" dangerouslySetInnerHTML={{ __html: prepared.html }} />
        </ReadingLayout>
    );
}
