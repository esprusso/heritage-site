import { useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { emailHref } from '../lib/journal';

function RoutePosition() {
    const { pathname, hash } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (hash === '#contact' && pathname === '/') {
            navigate('/contact', { replace: true });
            return;
        }
        if (!hash) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            return;
        }
        let targetId = hash === '#writing' ? 'journal' : hash.slice(1);
        try { targetId = decodeURIComponent(targetId); } catch { /* Preserve a literal malformed fragment. */ }
        let frame;
        let attempts = 0;
        const findTarget = () => {
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ block: 'start', behavior: 'instant' });
            else if (attempts++ < 60) frame = requestAnimationFrame(findTarget);
        };
        frame = requestAnimationFrame(findTarget);
        return () => cancelAnimationFrame(frame);
    }, [pathname, hash, navigate]);
    return null;
}

export default function Layout({ children }) {
    const { content, loading, error } = useContent();
    const { pathname } = useLocation();
    const isArticle = /^\/(blog|journal)\//.test(pathname);
    const isJournal = pathname === '/' || isArticle;
    const socials = content?.socials?.filter(social => social.name.toLowerCase() !== 'email') || [];
    const email = emailHref(content);

    return (
        <div className={'site-shell ' + (isArticle ? 'article-page' : 'airy airy-with-hero airy-refined')}>
            <RoutePosition />
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <div className={isArticle ? 'header-wrap' : undefined}>
                <header className="site-header">
                    <Link className="brand" to="/" aria-label="Russ Heritage homepage"><span className="brand-given">Russ</span> Heritage</Link>
                    <nav className="site-nav" aria-label="Main navigation">
                        <Link to="/" aria-current={isJournal ? 'page' : undefined}>Journal</Link>
                        <NavLink to="/blog" end>Archive</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <a className="desktop-only" href={email}>Say hello</a>
                    </nav>
                </header>
            </div>
            <main id="main-content" tabIndex={-1}>
                {loading ? <div className="page-state" role="status"><p>Opening the journal…</p></div> : error ? (
                    <div className="page-state" role="alert">
                        <h1>The journal couldn’t be loaded.</h1>
                        <p>Please check your connection and try again.</p>
                        <button className="text-button" onClick={() => window.location.reload()}>Try again</button>
                    </div>
                ) : children}
            </main>
            <footer className="site-footer" id="contact">
                <div className="footer-primary">
                    <span>© {new Date().getFullYear()} Russ Heritage</span>
                    <span>Made with a little attention.</span>
                    {socials[0] ? <a href={socials[0].url} target="_blank" rel="noopener noreferrer">{socials[0].name}</a> : <a href={email}>Say hello</a>}
                </div>
                <nav className="footer-links" aria-label="More from Russ">
                    <Link to="/portfolio">Photo archive</Link>
                    <Link to="/contact">Get in touch</Link>
                    {socials.slice(1).map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>)}
                </nav>
            </footer>
        </div>
    );
}
