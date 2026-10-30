import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { emailHref } from '../lib/journal';
import usePageMetadata from '../hooks/usePageMetadata';

export default function About() {
    const { content } = useContent();
    usePageMetadata('About', content.about.text);
    const sections = content.about.sections?.map(section => ({ ...section, paragraphs: section.paragraphs.filter(text => text.trim() && text.trim() !== '...') })).filter(section => section.paragraphs.length) || [];
    return (
        <article className="about-page content-page">
            <div className="about-intro">
                <div><h1>Hi, I’m Russ.</h1><p className="about-lede">{content.about.text}</p><p className="about-journal-intro">{content.journal.introduction}</p><div className="about-links"><Link className="text-link" to="/#journal">Explore the journal <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></Link><a className="text-link" href={emailHref(content)}>Say hello <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></a></div></div>
                <img className="about-photo" src={content.about.image} alt="Russ Heritage" width="440" height="550" />
            </div>
            {sections.map(section => <section className="about-section" key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
        </article>
    );
}
