import { Link, useParams } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { photoEntries } from '../lib/journal';
import usePageMetadata from '../hooks/usePageMetadata';
import ReadingLayout from './ReadingLayout';

export default function PhotoStory() {
    const { slug } = useParams();
    const { content } = useContent();
    const story = photoEntries(content).find(entry => entry.slug === slug);
    usePageMetadata(story?.title || 'Story not found', story?.excerpt || content.meta.description);
    if (!story) return <div className="page-state"><h1>That story isn’t here.</h1><p>Try another story from the journal.</p><Link className="text-link" to="/#journal">Back to the journal</Link></div>;
    return (
        <ReadingLayout title={story.title} description={story.excerpt} topic={story.topic} readingLabel={story.readingLabel} creditLabel="photographs by" entryId={story.id}>
            <div className="article-copy photo-story-copy">
                {story.photos.map((photo, index) => <figure className="photo-story-figure" key={photo.id || photo.src}><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photograph ${index + 1} of ${story.model} at full size`}><img src={photo.src} alt={photo.caption || `${story.model}, ${story.categoryName.toLowerCase()} photograph ${index + 1}`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" /></a>{photo.caption ? <figcaption>{photo.caption}</figcaption> : null}</figure>)}
                <Link className="text-link series-archive-link" to={'/portfolio/' + story.categoryId}>Explore the {story.categoryName.toLowerCase()} archive</Link>
            </div>
        </ReadingLayout>
    );
}
