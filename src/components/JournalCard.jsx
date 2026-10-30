import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function JournalCard({ entry, topics, lead = false }) {
    if (entry.kind === 'loading') return <div className="journal-story story-loading" aria-hidden="true"><div /><div /><div /></div>;
    const topic = topics.find(item => item.id === entry.topic)?.name || 'Everyday life';
    return (
        <article className={'journal-story' + (entry.image ? '' : ' text-story') + (lead ? ' lead-story' : '')}>
            <div className="meta"><span>{topic}</span><span className="dot" aria-hidden="true" /><span>{entry.readingLabel}</span></div>
            <h2 className="story-title"><Link to={entry.href}>{entry.title}</Link></h2>
            {entry.image ? (
                <Link className="story-image" to={entry.href} aria-label={'Open ' + entry.title}>
                    <img src={entry.image} srcSet={entry.previewSrcSet} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 960px) 260px, 490px" alt={entry.imageAlt || entry.title} loading="lazy" decoding="async" />
                </Link>
            ) : null}
            {entry.excerpt ? <p className="excerpt">{entry.excerpt}</p> : null}
            <Link className="read-link" to={entry.href}><span>{entry.kind === 'photo' ? 'View the series' : 'Read the story'}</span><ArrowRight size={16} strokeWidth={1.4} aria-hidden="true" /></Link>
        </article>
    );
}
