import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageMetadata from '../hooks/usePageMetadata';
import { Exclamation } from './BrandMark';

export default function NotFound() {
    usePageMetadata('Page not found', 'This page could not be found. Return to Russ Heritage’s journal.');
    return (
        <section className="poster wrap">
            <div className="poster-field">
                <h1>That page isn’t here.</h1>
                <p>It may have moved, or the link may be out of date.</p>
                <Link className="button button-ink" to="/">Back to the journal <ArrowRight strokeWidth={1.8} aria-hidden="true" /></Link>
                <Exclamation className="poster-mark" />
            </div>
        </section>
    );
}
