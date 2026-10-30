import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export default function JournalHero() {
    const { content } = useContent();
    const journal = content.journal;
    const [closingStart, ...closingEmphasis] = journal.titleEnd.split(/\s+/);
    return (
        <section className="personal-hero airy-hero" id="home" aria-labelledby="hero-title">
            <img
                src={journal.heroImage}
                srcSet="/images/journal/hero-640.webp 640w, /images/journal/hero-1280.webp 1280w, /images/journal/hero-1920.webp 1920w"
                sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1312px) calc(100vw - 80px), (max-width: 1599px) 1232px, 1320px"
                alt={journal.heroAlt}
                width="1920"
                height="1280"
                fetchPriority="high"
            />
            <div className="welcome-panel">
                <h1 id="hero-title">{journal.title}<br />{closingStart} <em>{closingEmphasis.join(' ')}</em></h1>
                <p>{journal.introduction}</p>
                <a className="text-link" href="#journal">Explore the journal <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" /></a>
            </div>
        </section>
    );
}
