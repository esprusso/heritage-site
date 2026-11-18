import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { usePosts } from '../contexts/PostsContext';
import { emailHref, formatForPost } from '../lib/journal';
import { BrandMark, Exclamation } from './BrandMark';

const HAS_NOTES_KEY = 'russ:has-notes';

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

/** Notes join the navigation with the first published note, and stay there between visits. */
function useHasNotes(content, posts, status) {
    const hasNotes = status === 'ready' && Boolean(content) && posts.some(post => formatForPost(post, content) === 'note');
    useEffect(() => {
        if (status !== 'ready' || !content) return;
        try { localStorage.setItem(HAS_NOTES_KEY, hasNotes ? '1' : '0'); } catch { /* Private browsing: the link appears once posts load. */ }
    }, [status, content, hasNotes]);
    if (status === 'ready' && content) return hasNotes;
    try { return localStorage.getItem(HAS_NOTES_KEY) === '1'; } catch { return false; }
}

function currentSection(pathname, content, posts) {
    if (pathname === '/essays') return 'essay';
    if (pathname === '/notes') return 'note';
    if (pathname === '/photos' || /^\/(journal|portfolio)(\/|$)/.test(pathname)) return 'photo';
    if (pathname === '/blog') return 'archive';
    if (pathname === '/about' || pathname === '/contact') return 'about';
    const slug = pathname.match(/^\/blog\/([^/]+)/)?.[1];
    const post = slug && posts.find(item => item.slug === slug);
    return post && content ? formatForPost(post, content) : '';
}

export default function Layout({ children }) {
    const { content, loading, error } = useContent();
    const { posts, status } = usePosts();
    const { pathname } = useLocation();
    const hasNotes = useHasNotes(content, posts, status);
    const section = currentSection(pathname, content, posts);
    const socials = content?.socials?.filter(social => social.name.toLowerCase() !== 'email') || [];
    const email = emailHref(content);
    const current = id => (section === id ? 'page' : undefined);

    return (
        <div className="site-shell">
            <RoutePosition />
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <header className="masthead wrap">
                <Link className="brand" to="/" aria-label="Russ Heritage, home">
                    <span className="brand-tile">
                        <BrandMark className="brand-full" aria-hidden="true" />
                        <Exclamation className="brand-symbol" />
                    </span>
                    <span className="brand-name">
                        <strong>Russ Heritage</strong>
                        {content?.journal?.about ? <span>{content.journal.about}</span> : null}
                    </span>
                </Link>
                <nav className="site-nav" aria-label="Main navigation">
                    <Link to="/essays" aria-current={current('essay')}>Essays</Link>
                    {hasNotes ? <Link to="/notes" aria-current={current('note')}>Notes</Link> : null}
                    <Link to="/photos" aria-current={current('photo')}>Photos</Link>
                    <Link to="/blog" aria-current={current('archive')}>Archive</Link>
                    <Link to="/about" aria-current={current('about')}>About</Link>
                </nav>
            </header>
            <main id="main-content" tabIndex={-1}>
                {loading ? <div className="page-state" role="status"><p>Opening the journal…</p></div> : error ? (
                    <div className="page-state" role="alert">
                        <h1>The journal couldn’t be loaded.</h1>
                        <p>Please check your connection and try again.</p>
                        <button className="button" onClick={() => window.location.reload()}>Try again</button>
                    </div>
                ) : children}
            </main>
            <footer className="site-footer on-ink" id="contact">
                <div className="footer-inner wrap">
                    <p className="footer-line">Made with a little attention.</p>
                    <div className="footer-columns">
                        <nav aria-label="The journal">
                            <h2>The journal</h2>
                            <Link to="/essays">Essays</Link>
                            {hasNotes ? <Link to="/notes">Notes</Link> : null}
                            <Link to="/photos">Photographs</Link>
                            <Link to="/blog">Archive</Link>
                        </nav>
                        <nav aria-label="Russ">
                            <h2>Russ</h2>
                            <Link to="/about">About</Link>
                            <Link to="/portfolio">Photo archive</Link>
                            <a href={email}>Say hello</a>
                        </nav>
                        {socials.length ? (
                            <nav aria-label="Elsewhere">
                                <h2>Elsewhere</h2>
                                {socials.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">{social.name}</a>)}
                            </nav>
                        ) : null}
                    </div>
                    <p className="footer-legal">© {new Date().getFullYear()} Russ Heritage</p>
                    <Exclamation className="footer-mark" />
                </div>
            </footer>
        </div>
    );
}
