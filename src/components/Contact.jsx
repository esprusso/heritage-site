import { ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { emailHref } from '../lib/journal';
import usePageMetadata from '../hooks/usePageMetadata';

export default function Contact() {
    const { content } = useContent();
    usePageMetadata('Say hello', 'Get in touch with Russ Heritage, photographer and writer in the Twin Cities.');
    const email = emailHref(content);
    return (
        <section className="content-page contact-page wrap">
            <h1>Say hello.</h1>
            <p className="contact-intro">Interested in working together?<br />Let’s create something.</p>
            <a className="contact-email" href={email}>{email.slice(7)} <ArrowRight strokeWidth={1.6} aria-hidden="true" /></a>
            <nav className="contact-socials" aria-label="Find Russ online">{content.socials.filter(social => social.name.toLowerCase() !== 'email').map(social => <a className="link" key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">{social.name} <ArrowRight strokeWidth={1.8} aria-hidden="true" /></a>)}</nav>
        </section>
    );
}
