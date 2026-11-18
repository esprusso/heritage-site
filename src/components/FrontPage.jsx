import { useState } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { formatDate } from '../lib/journal';
import useJournal from '../hooks/useJournal';
import usePageMetadata from '../hooks/usePageMetadata';
import Headline from './Headline';
import Meta from './Meta';
import NotesRail from './NotesRail';

const HERO_SOURCES = '/images/journal/hero-640.webp 640w, /images/journal/hero-1280.webp 1280w, /images/journal/hero-1920.webp 1920w';
const LEAD_SIZES = '(max-width: 900px) calc(100vw - 48px), (max-width: 1440px) calc(100vw - 544px), 896px';

function topicName(content, id) {
    return content.journal.topics.find(topic => topic.id === id)?.name;
}

const clamp = (value, low, high) => Math.min(high, Math.max(low, value));

function Lead({ entry }) {
    const { content } = useContent();
    const journal = content.journal;
    const [ratio, setRatio] = useState(null);
    // A wide cover is shown whole; a tall one is held to a lead's height, and given more room on a phone.
    const coverStyle = ratio ? { '--cover-ratio': clamp(ratio, 1.8, 2.6), '--cover-ratio-narrow': clamp(ratio, 0.8, 2.6) } : undefined;
    return (
        <article className="lead" aria-labelledby="lead-title">
            <h2 className="lead-title" id="lead-title"><Link to={entry.href}><Headline>{entry.title}</Headline></Link></h2>
            <Meta point items={[
                <strong key="format">Essay</strong>,
                <time key="date" dateTime={entry.date}>{formatDate(entry.date)}</time>,
                entry.readingLabel,
                topicName(content, entry.topic),
            ]} />
            <figure className="lead-figure">
                <Link className="frame lead-cover" style={coverStyle} to={entry.href} aria-label={'Read ' + entry.title}>
                    <img
                        src={entry.image || journal.heroImage}
                        srcSet={entry.image ? undefined : HERO_SOURCES}
                        sizes={LEAD_SIZES}
                        alt={entry.image ? entry.imageAlt : journal.heroAlt}
                        fetchpriority="high"
                        onLoad={event => setRatio(event.currentTarget.naturalWidth / event.currentTarget.naturalHeight)}
                    />
                </Link>
                {entry.image && entry.imageCaption ? <figcaption dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(entry.imageCaption) }} /> : null}
            </figure>
            <div className="lead-deck">
                {entry.excerpt ? <p>{entry.excerpt}</p> : <span />}
                <Link className="button" to={entry.href}>Read the essay <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
            </div>
        </article>
    );
}

/** With no essay to lead, the journal introduces itself over the site photograph. */
function Introduction() {
    const { content } = useContent();
    const journal = content.journal;
    return (
        <section className="lead lead-intro" aria-labelledby="lead-title">
            <h2 className="lead-title" id="lead-title">{journal.title} <em>{journal.titleEnd}</em></h2>
            <div className="frame lead-cover">
                <img src={journal.heroImage} srcSet={HERO_SOURCES} sizes={LEAD_SIZES} alt={journal.heroAlt} fetchpriority="high" />
            </div>
            <div className="lead-deck">
                <p>{journal.introduction}</p>
                <Link className="button" to="/blog">Explore the journal <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
            </div>
        </section>
    );
}

function LeadPlaceholder() {
    return (
        <div className="lead lead-loading" aria-busy="true">
            <p className="sr-only" role="status">Loading the latest essay.</p>
            <div className="placeholder lead-title" aria-hidden="true" />
            <div className="placeholder lead-meta" aria-hidden="true" />
            <div className="frame lead-cover" aria-hidden="true" />
        </div>
    );
}

function EarlierEssays({ essays, total }) {
    const { content } = useContent();
    return (
        <section className="essays" aria-labelledby="essays-title">
            <header className="section-head">
                <h2 className="section-title" id="essays-title">Earlier essays</h2>
                <Link className="link" to="/essays">{total > essays.length + 1 ? `All ${total} essays` : 'All essays'} <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
            </header>
            <ol>
                {essays.map(entry => (
                    <li key={entry.id}>
                        <article className={'essay-row' + (entry.image ? '' : ' no-image')}>
                            <div>
                                <h3 className="essay-title"><Link to={entry.href}>{entry.title}</Link></h3>
                                {entry.excerpt ? <p className="essay-excerpt">{entry.excerpt}</p> : null}
                                <Meta items={[
                                    <time key="date" dateTime={entry.date}>{formatDate(entry.date)}</time>,
                                    entry.readingLabel,
                                    topicName(content, entry.topic),
                                ]} />
                            </div>
                            {entry.image ? (
                                <Link className="frame essay-thumb" to={entry.href} tabIndex={-1} aria-hidden="true">
                                    <img src={entry.image} alt="" loading="lazy" decoding="async" />
                                </Link>
                            ) : null}
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    );
}

function Photographs({ photos }) {
    return (
        <section className="photo-band on-ink" aria-labelledby="photos-title">
            <header className="band-head">
                <h2 className="band-title" id="photos-title">Photographs</h2>
                <Link className="link" to="/portfolio">The photo archive <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
            </header>
            <ul className="photo-grid">
                {photos.map(entry => (
                    <li key={entry.id}>
                        <Link className="photo-card" to={entry.href}>
                            <span className="frame">
                                <img src={entry.image} srcSet={entry.previewSrcSet} sizes="(max-width: 700px) calc(100vw - 96px), 30vw" alt={entry.imageAlt || entry.title} loading="lazy" decoding="async" />
                            </span>
                            <span className="photo-name">{entry.title}</span>
                            <span className="meta">{entry.readingLabel}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function FrontPage() {
    const { content } = useContent();
    const { lead, essays, notes, photos, status, retry } = useJournal();
    usePageMetadata('', content.meta.description);
    const loading = status === 'loading';
    const earlier = essays.filter(entry => entry.id !== lead?.id).slice(0, 4);
    const showRail = loading || notes.length > 0 || Boolean(lead);

    return (
        <div className="front wrap" id="journal">
            <h1 className="sr-only">Russ Heritage: the journal</h1>
            <div className={'front-top' + (showRail ? '' : ' no-rail')}>
                {loading && !lead ? <LeadPlaceholder /> : lead ? <Lead key={lead.id} entry={lead} /> : <Introduction />}
                {showRail ? <NotesRail notes={notes} loading={loading} /> : null}
                <div className="front-more">
                    {status === 'error' ? (
                        <div className="notice" role="alert">
                            <p>The latest posts couldn’t be loaded. Please try again.</p>
                            <button className="link" onClick={retry}>Try again</button>
                        </div>
                    ) : null}
                    {earlier.length ? <EarlierEssays essays={earlier} total={essays.length} /> : null}
                </div>
            </div>
            {photos.length ? <Photographs photos={photos} /> : null}
        </div>
    );
}
