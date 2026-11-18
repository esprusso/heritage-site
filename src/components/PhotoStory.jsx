import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { photoEntries } from '../lib/journal';
import usePageMetadata from '../hooks/usePageMetadata';
import Meta from './Meta';
import { Neighbours } from './ReadingLayout';

/** Rows of two lead, rows of three follow, so any number of photographs closes the field evenly. */
function figureClass(position, count) {
    if (count === 1) return 'photo-figure is-alone';
    const halves = count % 3 === 0 ? 0 : count % 3 === 1 ? 4 : 2;
    return 'photo-figure' + (position < halves ? ' is-half' : '');
}

export default function PhotoStory() {
    const { slug } = useParams();
    const { content } = useContent();
    const stories = photoEntries(content);
    const index = stories.findIndex(entry => entry.slug === slug);
    const story = stories[index];
    usePageMetadata(story?.title || 'Story not found', story?.excerpt || content.meta.description);
    if (!story) return <div className="page-state"><h1>That story isn’t here.</h1><p>Try another story from the journal.</p><Link className="link" to="/#journal">Back to the journal</Link></div>;
    const topic = content.journal.topics.find(item => item.id === story.topic)?.name;
    return (
        <article className="article photo-story wrap" aria-labelledby="article-title">
            <header className="article-head">
                <h1 className="article-title" id="article-title">{story.title}</h1>
                {story.excerpt ? <p className="article-deck">{story.excerpt}</p> : null}
                <Meta point items={[<strong key="format">Photographs</strong>, 'By Russ Heritage', story.readingLabel, topic]} />
            </header>
            <div className="photo-field on-ink">
                {story.photos.map((photo, position) => (
                    <figure className={figureClass(position, story.photos.length)} key={photo.id || photo.src}>
                        <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photograph ${position + 1} of ${story.model} at full size`}>
                            <img src={photo.src} alt={photo.caption || `${story.model}, ${story.categoryName.toLowerCase()} photograph ${position + 1}`} loading={position === 0 ? 'eager' : 'lazy'} decoding="async" />
                        </a>
                        {photo.caption ? <figcaption>{photo.caption}</figcaption> : null}
                    </figure>
                ))}
            </div>
            <p className="photo-story-more">
                <Link className="link" to={'/portfolio/' + story.categoryId}>Explore the {story.categoryName.toLowerCase()} archive <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
            </p>
            <Neighbours newer={stories[index - 1]} older={stories[index + 1]} label="More photographs" words={['Previous series', 'Next series']} all={{ to: '/photos', label: 'All photographs' }} />
        </article>
    );
}
