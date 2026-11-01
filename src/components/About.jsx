import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { emailHref, excerpt } from '../lib/journal';
import { getSinglePage } from '../lib/ghost';
import { aboutContent } from '../lib/about';
import { prepareArticle } from '../lib/articleContent';
import usePageMetadata from '../hooks/usePageMetadata';

export default function About() {
    const { content } = useContent();
    const [state, setState] = useState({ loading: true, page: null });

    useEffect(() => {
        let active = true;
        getSinglePage('about', { throwOnError: true })
            .then(page => { if (active) setState({ loading: false, page }); })
            .catch(() => { if (active) setState({ loading: false, page: null }); });
        return () => { active = false; };
    }, []);

    const about = aboutContent(state.page, content);
    const prepared = useMemo(() => prepareArticle(about.html || ''), [about.html]);
    usePageMetadata(about.metaTitle, excerpt(about.description, 160));
    const sections = content.about.sections?.map(section => ({ ...section, paragraphs: section.paragraphs.filter(text => text.trim() && text.trim() !== '...') })).filter(section => section.paragraphs.length) || [];

    return (
        <article className="about-page content-page" aria-busy={state.loading}>
            <div className="about-intro">
                <div>
                    <h1>{about.title}</h1>
                    {about.html !== null ? (
                        <div className="about-body gh-content" dangerouslySetInnerHTML={{ __html: prepared.html }} />
                    ) : (
                        <>
                            <p className="about-lede">{content.about.text}</p>
                            <p className="about-journal-intro">{content.journal.introduction}</p>
                        </>
                    )}
                    <div className="about-links">
                        <Link className="text-link" to="/#journal">Explore the journal <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></Link>
                        <a className="text-link" href={emailHref(content)}>Say hello <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></a>
                    </div>
                </div>
                <img className="about-photo" src={about.image} alt={about.imageAlt} width="440" height="550" />
            </div>
            {about.html === null && sections.map(section => <section className="about-section" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
        </article>
    );
}
