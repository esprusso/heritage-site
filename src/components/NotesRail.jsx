import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { formatDate, relativeDay, shortDay } from '../lib/journal';
import useLastVisit from '../hooks/useLastVisit';
import { Exclamation } from './BrandMark';
import Meta from './Meta';
import NoteBody from './NoteBody';

const SHOWN = 6;
// Everything in the column that is not the list of notes: padding, heading, and the closing link.
const CHROME = 240;

function RailNote({ entry, index, since }) {
    const isNew = since > 0 && Date.parse(entry.date) > since;
    return (
        <li className={'thread-note' + (isNew ? ' is-new' : '')} style={{ '--i': index }}>
            <span className="knot" aria-hidden="true" />
            <Meta items={[
                <Link key="when" className="note-when" to={entry.href} aria-label={'Note from ' + formatDate(entry.date)}>
                    <time dateTime={entry.date}>{shortDay(entry.date)}</time>
                </Link>,
                relativeDay(entry.date),
                isNew ? <span key="new" className="new-flag">New</span> : null,
                entry.sample ? 'Sample' : null,
            ]} />
            {entry.title ? <h3 className="note-title"><Link to={entry.href}>{entry.title}</Link></h3> : null}
            <NoteBody entry={entry} />
        </li>
    );
}

/**
 * A short column ends at its last note and stays in view beside the essays;
 * a long one runs the height of the page so its stem never trails off bare.
 */
function useFitsViewport(list) {
    const [fits, setFits] = useState(false);
    useEffect(() => {
        if (!list) return;
        const measure = () => setFits(list.offsetHeight + CHROME < window.innerHeight - 48);
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(list);
        window.addEventListener('resize', measure);
        return () => {
            observer.disconnect();
            window.removeEventListener('resize', measure);
        };
    }, [list]);
    return fits;
}

/**
 * The short form, beside the lead: each note in full on the dated stem.
 * Before the first note is published the column introduces the journal instead.
 */
export default function NotesRail({ notes, loading }) {
    const { content } = useContent();
    const since = useLastVisit();
    // Held in state, not a ref: the list only exists once the notes have loaded.
    const [list, setList] = useState(null);
    const fits = useFitsViewport(list);
    const journal = content.journal;

    if (loading) {
        return (
            <aside className="rail on-ink" aria-busy="true" aria-label="Notes">
                <p className="sr-only" role="status">Loading the latest notes.</p>
                <div className="rail-loading" aria-hidden="true"><span /><span /><span /><span /></div>
            </aside>
        );
    }

    if (!notes.length) {
        return (
            <aside className="rail rail-intro on-ink" aria-labelledby="rail-title">
                <h2 className="rail-headline" id="rail-title">{journal.title} <em>{journal.titleEnd}</em></h2>
                <p className="rail-copy">{journal.introduction}</p>
                <Link className="link" to="/about">A little about me <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
                <div className="rail-mark" aria-hidden="true"><Exclamation /></div>
            </aside>
        );
    }

    return (
        <aside className={'rail on-ink' + (fits ? ' rail-fits' : '')} aria-labelledby="rail-title">
            <h2 className="rail-title" id="rail-title">Notes</h2>
            <p className="rail-copy">Short ones, as they happen.</p>
            <div className="thread">
                <span className="stem" aria-hidden="true"><span /></span>
                <ol ref={setList}>
                    {notes.slice(0, SHOWN).map((entry, index) => <RailNote key={entry.id} entry={entry} index={index} since={since} />)}
                </ol>
                <p className="thread-end">
                    <Link className="link" to="/notes">{notes.length > SHOWN ? `All ${notes.length} notes` : 'All notes'} <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
                </p>
            </div>
        </aside>
    );
}
