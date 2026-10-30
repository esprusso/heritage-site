import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { usePosts } from '../contexts/PostsContext';
import { journalEntries } from '../lib/journal';
import usePageMetadata from '../hooks/usePageMetadata';
import JournalHero from './JournalHero';
import JournalCard from './JournalCard';

export default function Journal({ archive = false }) {
    const { content } = useContent();
    const { posts, status, retry } = usePosts();
    const [params, setParams] = useSearchParams();
    const topics = content.journal.topics;
    const requestedTopic = params.get('topic');
    const activeTopic = topics.some(topic => topic.id === requestedTopic) ? requestedTopic : 'all';
    const query = params.get('q') || '';
    const entries = useMemo(() => journalEntries(content, posts, status === 'loading'), [content, posts, status]);
    const availableTopics = topics.filter(topic => entries.some(entry => entry.topic === topic.id) || topic.id === activeTopic);
    const filtered = entries.filter(entry => {
        if (entry.kind === 'loading') return activeTopic === 'all' && !query;
        return (activeTopic === 'all' || entry.topic === activeTopic) && (!query || (entry.title + ' ' + entry.excerpt).toLowerCase().includes(query.toLowerCase().trim()));
    });
    const visibleEntries = archive ? filtered : filtered.slice(0, 6);
    usePageMetadata(archive ? 'The archive' : '', content.meta.description);

    const updateQuery = (key, value, replace = false) => {
        const next = new URLSearchParams(params);
        if (value && value !== 'all') next.set(key, value);
        else next.delete(key);
        setParams(next, { replace, preventScrollReset: true });
    };

    return (
        <>
            {archive ? <header className="archive-intro"><h1>The archive</h1><p>Photographs, essays, and things worth paying attention to.</p></header> : <JournalHero />}
            <div id="journal" className={'airy-layout' + (archive ? ' archive-layout' : '')}>
                <aside className="journal-margin">
                    <h2>{archive ? 'Browse' : 'The journal'}</h2>
                    <nav className="journal-topics" aria-label="Filter stories by topic">
                        <button className="filter-button" aria-pressed={activeTopic === 'all'} onClick={() => updateQuery('topic', 'all')}>All stories</button>
                        {availableTopics.map(topic => <button key={topic.id} className="filter-button" aria-pressed={activeTopic === topic.id} onClick={() => updateQuery('topic', topic.id)}>{topic.name}</button>)}
                    </nav>
                    <div className="margin-rule" />
                    <p className="margin-about">{content.journal.about}<br /><Link to="/about">A little about me</Link></p>
                </aside>
                <div className="journal-main">
                    {archive ? <form className="journal-search" role="search" onSubmit={event => event.preventDefault()}><label htmlFor="journal-search">Search the journal</label><div><Search size={18} strokeWidth={1.5} aria-hidden="true" /><input id="journal-search" type="search" placeholder="Find a story" value={query} onChange={event => updateQuery('q', event.target.value, true)} /></div></form> : null}
                    {status === 'error' ? <div className="journal-notice" role="alert"><p>The latest posts couldn’t be loaded. Please try again.</p><button className="text-button" onClick={retry}>Try again</button></div> : null}
                    <p className="sr-only" role="status">{status === 'loading' ? 'Loading the latest stories.' : `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'}${activeTopic !== 'all' ? ' in ' + topics.find(topic => topic.id === activeTopic)?.name : ''}.`}</p>
                    <section className="journal-feed" aria-label={archive ? 'Archived stories' : 'Recent stories'} aria-busy={status === 'loading'}>
                        {visibleEntries.map((entry, index) => <JournalCard key={entry.id} entry={entry} topics={topics} lead={index === 0 && activeTopic === 'all' && !query} />)}
                        {visibleEntries.length === 0 && status !== 'loading' ? <div className="journal-empty"><h2>No stories found.</h2><p>Try another topic or a different search.</p><button className="text-button" onClick={() => setParams({}, { preventScrollReset: true })}>Show all stories</button></div> : null}
                    </section>
                    <div className="journal-more" id="archive"><span>A growing collection of things noticed.</span><Link className="text-link" to={archive ? '/#journal' : '/blog'}>{archive ? 'Back to the journal' : 'Browse the archive'}<ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></Link></div>
                </div>
            </div>
        </>
    );
}
