import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { usePosts } from '../contexts/PostsContext';
import { formatDate, journalEntries } from '../lib/journal';

export default function ReadingLayout({ title, description, topic, readingLabel, date, author = 'Russ Heritage', creditLabel = 'written by', headings = [], entryId, children }) {
    const { content } = useContent();
    const { posts } = usePosts();
    const topicName = content.journal.topics.find(item => item.id === topic)?.name || 'Everyday life';
    const related = journalEntries(content, posts).filter(entry => entry.id !== entryId).slice(0, 2);
    return (
        <>
            <div className="article-layout">
                <article className="article-main" aria-labelledby="article-title">
                    <header className="article-header">
                        <h1 id="article-title">{title}</h1>
                        {description ? <p className="article-deck">{description}</p> : null}
                        <div className="article-byline"><span className="author-credit"><span className="by">{creditLabel}</span><span className="by-name">{author}</span></span><span className="sep" aria-hidden="true" /><span className="byline-detail"><span>{topicName}</span><span className="byline-dot" aria-hidden="true" /><span>{readingLabel}</span></span></div>
                        {date ? <time className="article-date" dateTime={date}>{formatDate(date)}</time> : null}
                    </header>
                    {children}
                    <div className="article-ending"><span>Thanks for spending a little time here.</span><Link className="text-link" to="/#journal">Back to the journal <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></Link></div>
                </article>
                <aside className="article-sidebar" aria-label="About the author and story navigation">
                    <div className="author-block"><h2>About Russ</h2><img className="author-photo" src={content.about.image} alt="Russ Heritage" width="66" height="76" /><p className="author-copy">{content.journal.authorBio}</p><Link className="text-link" to="/about">A little more about me <ArrowRight size={17} strokeWidth={1.4} aria-hidden="true" /></Link></div>
                    {headings.length > 0 ? <nav className="article-contents" aria-label="In this story"><h2>In this story</h2><ol>{headings.map(heading => <li key={heading.id}><a href={'#' + heading.id}>{heading.title}</a></li>)}</ol></nav> : null}
                    <p className="margin-note">Words and pictures.<br />Two ways of paying attention.</p>
                </aside>
            </div>
            {related.length > 0 ? <section className="article-related" aria-labelledby="related-title"><h2 id="related-title">Stay a little longer</h2><div className="article-related-grid">{related.map(entry => <article className={'related-story' + (entry.image ? '' : ' related-text')} key={entry.id}>{entry.image ? <Link className="story-image" to={entry.href}><img src={entry.image} alt={entry.imageAlt || entry.title} loading="lazy" /></Link> : null}<div><div className="meta"><span>{content.journal.topics.find(item => item.id === entry.topic)?.name || 'Everyday life'}</span><span className="dot" aria-hidden="true" /><span>{entry.readingLabel}</span></div><h3 className="story-title"><Link to={entry.href}>{entry.title}</Link></h3></div></article>)}</div></section> : null}
        </>
    );
}
