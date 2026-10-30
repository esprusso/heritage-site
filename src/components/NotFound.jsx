import { Link } from 'react-router-dom';
import usePageMetadata from '../hooks/usePageMetadata';

export default function NotFound() {
    usePageMetadata('Page not found', 'This page could not be found. Return to Russ Heritage’s journal.');
    return <section className="page-state"><h1>That page isn’t here.</h1><p>It may have moved, or the link may be out of date.</p><Link className="text-link" to="/">Back to the journal</Link></section>;
}
