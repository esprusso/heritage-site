import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { entryLabel, formatDate } from '../lib/journal';
import Headline from './Headline';
import Meta from './Meta';

/** Newer and older entries of the same kind, so a reader can keep going without the archive. */
export function Neighbours({ newer, older, label, all, words = ['Newer', 'Older'] }) {
    if (!newer && !older && !all) return null;
    const card = (entry, direction) => (
        <Link className={'neighbour neighbour-' + direction} to={entry.href}>
            <span className="neighbour-title">{entryLabel(entry)}</span>
            <span className="meta">
                {direction === 'newer' ? <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" /> : null}
                {direction === 'newer' ? words[0] : words[1]}
                {entry.date ? <><span className="sep" aria-hidden="true" />{formatDate(entry.date, true)}</> : null}
                {direction === 'older' ? <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" /> : null}
            </span>
        </Link>
    );
    return (
        <nav className="neighbours" aria-label={label}>
            {newer ? card(newer, 'newer') : <span />}
            {older ? card(older, 'older') : <span />}
            {all ? <Link className="link neighbours-all" to={all.to}>{all.label} <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link> : null}
        </nav>
    );
}

export default function ReadingLayout({ title, description, format = 'Essay', topic, readingLabel, date, author = 'Russ Heritage', credit = 'Written by', headings = [], cover = null, neighbours = null, children }) {
    const { content } = useContent();
    const topicName = content.journal.topics.find(item => item.id === topic)?.name;
    return (
        <article className="article wrap" aria-labelledby="article-title">
            <header className="article-head">
                <h1 className="article-title" id="article-title"><Headline>{title}</Headline></h1>
                {description ? <p className="article-deck">{description}</p> : null}
                <Meta point items={[
                    <strong key="format">{format}</strong>,
                    date ? <time key="date" dateTime={date}>{formatDate(date)}</time> : null,
                    readingLabel,
                    topicName,
                ]} />
            </header>
            <div className="article-columns">
                <div className="article-copy">
                    {cover}
                    {children}
                    <p className="article-end"><span className="point" aria-hidden="true" />Thanks for spending a little time here.</p>
                </div>
                <aside className="article-side" aria-label="About the author and story navigation">
                    <div className="author">
                        <img className="author-photo" src={content.about.image} alt="" width="72" height="72" />
                        <div>
                            <h2>{credit} {author}</h2>
                            <p>{content.journal.authorBio}</p>
                            <Link className="link" to="/about">A little more about me <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
                        </div>
                    </div>
                    {headings.length > 0 ? (
                        <nav className="contents" aria-labelledby="contents-title">
                            <h2 id="contents-title">In this story</h2>
                            <ol>{headings.map(heading => <li key={heading.id} className={'contents-' + heading.level}><a href={'#' + heading.id}>{heading.title}</a></li>)}</ol>
                        </nav>
                    ) : null}
                </aside>
            </div>
            {neighbours}
        </article>
    );
}
