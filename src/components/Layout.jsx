import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const { content, loading, error } = useContent();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const menuCloseRef = useRef(null);
    const menuToggleRef = useRef(null);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Body scroll lock and focus management for mobile menu
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => {
                menuCloseRef.current?.focus();
            });
        } else {
            document.body.style.overflow = '';
            menuToggleRef.current?.focus();
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Escape key to close mobile menu
    useEffect(() => {
        if (!isMenuOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen]);

    // Focus trap for mobile menu
    useEffect(() => {
        if (!isMenuOpen || !mobileMenuRef.current) return;
        const menu = mobileMenuRef.current;

        const handleTab = (e) => {
            if (e.key !== 'Tab') return;
            const focusable = menu.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        menu.addEventListener('keydown', handleTab);
        return () => menu.removeEventListener('keydown', handleTab);
    }, [isMenuOpen]);

    if (loading) return <div className="loading-screen" role="status">Loading...</div>;
    if (error || !content) return <div className="error-screen" role="alert">Error loading content.</div>;

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Work', href: '/#portfolio' },
        ...(content?.ai?.length > 0 ? [{ name: 'AI', href: '/#ai' }] : []),
        ...(content?.video?.length > 0 ? [{ name: 'Video', href: '/#video' }] : []),
        // ...(content?.vibe?.length > 0 ? [{ name: 'Vibe', href: '/vibe' }] : []),
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <div className="layout-container">
            <style>{`
                .skip-to-content {
                    position: absolute;
                    top: -100%;
                    left: 1rem;
                    z-index: 1000;
                    padding: 0.75rem 1.5rem;
                    background: var(--accent-color);
                    color: var(--bg-color);
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 600;
                    border-radius: 0 0 4px 4px;
                    transition: top 0.2s;
                }
                .skip-to-content:focus {
                    top: 0;
                }
                .nav-container {
                    padding: 2rem 3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 100;
                    color: var(--text-color);
                    transition: all 0.3s ease;
                }
                .nav-container.transparent-light {
                    color: #FFFFFF;
                }
                .nav-container.scrolled {
                    padding: 1.5rem 3rem;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--border-color);
                    color: var(--text-color) !important;
                }
                .logo {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    text-transform: uppercase;
                }
                .desktop-menu {
                    display: flex;
                    gap: 2rem;
                }
                .desktop-menu a {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    position: relative;
                    font-weight: 500;
                }
                .desktop-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: currentColor;
                    transition: width 0.3s ease;
                }
                .desktop-menu a:hover::after,
                .desktop-menu a:focus-visible::after {
                    width: 100%;
                }
                .mobile-toggle {
                    display: none;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: inherit;
                    padding: 0.5rem;
                }
                .mobile-toggle:focus-visible {
                    outline: 2px solid currentColor;
                    outline-offset: 4px;
                }
                @media (max-width: 768px) {
                    .nav-container { padding: 1.5rem; }
                    .desktop-menu { display: none; }
                    .mobile-toggle { display: block; }
                }
                footer {
                    padding: 3rem 2rem;
                    text-align: center;
                    border-top: 1px solid var(--border-color);
                }
            `}</style>

            {/* Grain Overlay */}
            <div className="grain-overlay" aria-hidden="true"></div>

            {/* Skip to content link */}
            <a href="#main-content" className="skip-to-content">
                Skip to main content
            </a>

            {/* Navigation */}
            <nav className={`nav-container ${scrolled ? 'scrolled' : ''} ${!scrolled && isHome ? 'transparent-light' : ''}`} aria-label="Main navigation">
                <Link to="/" className="logo">
                    {content.hero.title}
                </Link>

                <ul className="desktop-menu" role="menubar">
                    {navLinks.map((link) => (
                        <li key={link.name} role="none">
                            <a href={link.href} role="menuitem">{link.name}</a>
                        </li>
                    ))}
                </ul>

                <button
                    ref={menuToggleRef}
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <Menu size={24} />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={mobileMenuRef}
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'var(--bg-color)',
                            zIndex: 200,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <button
                            ref={menuCloseRef}
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close navigation menu"
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-color)',
                                cursor: 'pointer',
                                padding: '0.5rem'
                            }}
                        >
                            <X size={32} />
                        </button>

                        <nav aria-label="Mobile navigation" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '3rem',
                                        color: 'var(--accent-color)',
                                        textTransform: 'uppercase',
                                        fontWeight: 700
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main id="main-content">
                {children}
            </main>

            {/* Footer */}
            <footer>
                <p style={{ color: 'var(--sub-text-color)', fontSize: '0.75rem' }}>
                    &copy; {new Date().getFullYear()} {content.meta.title}
                </p>
            </footer>
        </div>
    );
};

export default Layout;
