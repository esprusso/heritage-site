import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { prepareNote } from '../lib/articleContent';

/** A note's published text, shown in full unless it runs long enough to earn its own page. */
export default function NoteBody({ entry, className = '' }) {
    const html = useMemo(() => prepareNote(entry.html), [entry.html]);
    return (
        <>
            <div className={('note-body ' + className + (entry.long ? ' is-long' : '')).trim()} dangerouslySetInnerHTML={{ __html: html }} />
            {entry.image ? <img className="note-image" src={entry.image} alt={entry.imageAlt} loading="lazy" decoding="async" /> : null}
            {entry.long ? <Link className="link note-more" to={entry.href}>Keep reading <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link> : null}
        </>
    );
}
