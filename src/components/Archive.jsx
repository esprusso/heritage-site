import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { formatDate, groupByMonth, relativeDay, shortDay, stripTags } from '../lib/journal';
import useJournal from '../hooks/useJournal';
import useLastVisit from '../hooks/useLastVisit';
import usePageMetadata from '../hooks/usePageMetadata';
import Meta from './Meta';
import NoteBody from './NoteBody';

const VIEWS = [
    { id: 'all', path: '/blog', label: 'Everything', title: 'The archive', intro: 'Photographs, essays, and things worth paying attention to.', noun: ['entry', 'entries'] },
    { id: 'essay', path: '/essays', label: 'Essays', title: 'Essays', intro: 'The long ones, newest first.', noun: ['essay', 'essays'] },
    { id: 'note', path: '/notes', label: 'Notes', title: 'Notes', intro: 'Short ones, as they happen.', noun: ['note', 'notes'] },
    { id: 'photo', path: '/photos', label: 'Photographs', title: 'Photographs', intro: 'Portrait series from the photo archive.', noun: ['series', 'series'] },
];

function searchText(entry) {
    return [entry.fullTitle || entry.title, entry.excerpt, entry.html ? stripTags(entry.html) : ''].join(' ').toLowerCase();
}

function Day({ entry, label }) {
    if (!entry.date) return null;
    const time = <time dateTime={entry.date}>{shortDay(entry.date)}</time>;
    return <span className="day">{label ? <Link to={entry.href} aria-label={label + ' from ' + formatDate(entry.date)}>{time}</Link> : time}</span>;
}

function ThreadEntry({ entry, topics, since }) {
    const topic = topics.find(item => item.id === entry.topic)?.name;
    const isNew = since > 0 && Boolean(entry.date) && Date.parse(entry.date) > since;
    const flags = [
        relativeDay(entry.date),
        isNew ? <span key="new" className="new-flag">New</span> : null,
        entry.sample ? 'Sample' : null,
    ];

    if (entry.format === 'note') {
        return (
            <li className={'thread-entry entry-note' + (isNew ? ' is-new' : '')}>
                <span className="knot" aria-hidden="true" />
                <Day entry={entry} label="Note" />
                {entry.title ? <h3 className="note-title"><Link to={entry.href}>{entry.title}</Link></h3> : null}
                <NoteBody entry={entry} />
                <Meta items={[<strong key="format">Note</strong>, topic, ...flags]} />
            </li>
        );
    }

    if (entry.format === 'photo') {
        return (
            <li className="thread-entry entry-photo">
                <span className="knot" aria-hidden="true" />
                <Day entry={entry} />
                <Link className="plate on-ink" to={entry.href} data-count={Math.min(3, entry.photos.length)}>
                    <span className="plate-text">
                        <h3 className="plate-title">{entry.title}</h3>
                        <span className="meta">{entry.readingLabel}</span>
                    </span>
                    <span className="plate-strip" data-count={Math.min(3, entry.photos.length)}>
                        {entry.photos.slice(0, 3).map((photo, index) => (
                            <span className="frame" key={photo.id || photo.src}>
                                <img src={entry.thumbs?.[photo.src] || photo.src} alt={index === 0 ? entry.imageAlt || entry.title : ''} loading="lazy" decoding="async" />
                            </span>
                        ))}
                    </span>
                </Link>
            </li>
        );
    }

    return (
        <li className={'thread-entry entry-essay' + (isNew ? ' is-new' : '')}>
            <span className="knot" aria-hidden="true" />
            <Day entry={entry} />
            <article className={'entry-essay-body' + (entry.image ? '' : ' no-image')}>
                <div>
                    <h3 className="entry-title"><Link to={entry.href}>{entry.title}</Link></h3>
                    {entry.excerpt ? <p className="entry-excerpt">{entry.excerpt}</p> : null}
                    <Meta items={[<strong key="format">Essay</strong>, entry.readingLabel, topic, ...flags]} />
                </div>
                {entry.image ? (
                    <Link className="frame entry-thumb" to={entry.href} tabIndex={-1} aria-hidden="true">
                        <img src={entry.image} alt="" loading="lazy" decoding="async" />
                    </Link>
                ) : null}
            </article>
        </li>
    );
}

/** Everything on one dated thread, or one format of it, with search and topics alongside. */
export default function Archive({ format = 'all' }) {
    const { content } = useContent();
    const { entries, counts, status, retry } = useJournal();
    const { search } = useLocation();
    const [params, setParams] = useSearchParams();
    const since = useLastVisit();
    const view = VIEWS.find(item => item.id === format);
    const topics = content.journal.topics;
    const requestedTopic = params.get('topic');
    const activeTopic = topics.some(topic => topic.id === requestedTopic) ? requestedTopic : 'all';
    const query = params.get('q') || '';
    const needle = query.toLowerCase().trim();
    // Photographic series come with the site content, so that view never waits for posts.
    const loading = status === 'loading' && format !== 'photo';
    usePageMetadata(view.title, view.intro);

    const inFormat = format === 'all' ? entries : entries.filter(entry => entry.format === format);
    const availableTopics = topics.filter(topic => inFormat.some(entry => entry.topic === topic.id) || topic.id === activeTopic);
    const filtered = inFormat.filter(entry => (activeTopic === 'all' || entry.topic === activeTopic) && (!needle || searchText(entry).includes(needle)));
    const groups = groupByMonth(filtered);
    const filtering = activeTopic !== 'all' || Boolean(needle);
    const total = { all: entries.length, ...counts };
    const tabs = VIEWS.filter(item => item.id !== 'note' || counts.note > 0 || format === 'note');

    const updateQuery = (key, value, replace = false) => {
        const next = new URLSearchParams(params);
        if (value && value !== 'all') next.set(key, value);
        else next.delete(key);
        setParams(next, { replace, preventScrollReset: true });
    };

    const summary = loading
        ? 'Loading the journal.'
        : `${filtered.length} ${view.noun[filtered.length === 1 ? 0 : 1]}${activeTopic !== 'all' ? ' in ' + topics.find(topic => topic.id === activeTopic)?.name : ''}${needle ? ` matching “${query.trim()}”` : ''}.`;

    return (
        <div className="archive wrap">
            <aside className="archive-side">
                <h1 className="archive-title">{view.title}</h1>
                <p className="archive-intro">{view.intro}</p>
                <nav className="format-list" aria-label="Browse by format">
                    {tabs.map(item => (
                        <Link key={item.id} to={{ pathname: item.path, search }} aria-current={item.id === format ? 'page' : undefined}>
                            <span className="point" aria-hidden="true" />
                            {item.label}
                            {status === 'loading' ? null : <span className="count">{total[item.id] || 0}</span>}
                        </Link>
                    ))}
                </nav>
                <form className="search" role="search" onSubmit={event => event.preventDefault()}>
                    <label htmlFor="journal-search">Search the journal</label>
                    <div className="search-field">
                        <Search size={18} strokeWidth={1.8} aria-hidden="true" />
                        <input id="journal-search" type="search" placeholder="Find a story" value={query} onChange={event => updateQuery('q', event.target.value, true)} />
                    </div>
                </form>
                {availableTopics.length > 1 ? (
                    <div className="topics" role="group" aria-label="Filter by topic">
                        <button className="chip" aria-pressed={activeTopic === 'all'} onClick={() => updateQuery('topic', 'all')}>All topics</button>
                        {availableTopics.map(topic => <button key={topic.id} className="chip" aria-pressed={activeTopic === topic.id} onClick={() => updateQuery('topic', topic.id)}>{topic.name}</button>)}
                    </div>
                ) : null}
            </aside>
            <section className="archive-main" aria-label={view.title} aria-busy={loading}>
                <p className="sr-only" role="status">{summary}</p>
                {status === 'error' ? (
                    <div className="notice" role="alert">
                        <p>The latest posts couldn’t be loaded. Please try again.</p>
                        <button className="link" onClick={retry}>Try again</button>
                    </div>
                ) : null}
                <div className="thread thread-wide">
                    <span className="stem" aria-hidden="true"><span /></span>
                    {loading ? (
                        <ol aria-hidden="true">
                            {[0, 1, 2].map(index => <li className="thread-entry entry-loading" key={index}><span className="knot" /><span className="placeholder" /><span className="placeholder" /><span className="placeholder" /></li>)}
                        </ol>
                    ) : groups.map(group => (
                        <section className="thread-month" key={group.key} aria-label={group.label || view.title}>
                            {group.label ? <h2 className="month">{group.label}</h2> : null}
                            <ol>{group.entries.map(entry => <ThreadEntry key={entry.id} entry={entry} topics={topics} since={since} />)}</ol>
                        </section>
                    ))}
                    {!loading && filtered.length === 0 ? (
                        <div className="thread-empty">
                            <h2>{filtering ? 'Nothing matches that.' : 'Nothing here yet.'}</h2>
                            <p>{filtering ? 'Try another topic or a different search.' : 'The rest of the journal is one step away.'}</p>
                            {filtering
                                ? <button className="button button-quiet" onClick={() => setParams({}, { preventScrollReset: true })}>Show everything</button>
                                : <Link className="button button-quiet" to="/blog">Open the archive</Link>}
                        </div>
                    ) : null}
                    <p className="thread-end">
                        {loading ? null : <span>{summary}</span>}
                        {format === 'photo' ? <Link className="link" to="/portfolio">The full photo archive <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link> : null}
                    </p>
                </div>
            </section>
        </div>
    );
}
