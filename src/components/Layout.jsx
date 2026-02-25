import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) return <div className="loading-screen">Loading...</div>;
    if (error || !content) return <div className="error-screen">Error loading content.</div>;

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'Work', href: '/#portfolio' },
        ...(content?.ai?.length > 0 ? [{ name: 'AI', href: '/#ai' }] : []),
        ...(content?.video?.length > 0 ? [{ name: 'Video', href: '/#video' }] : []),
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/#about' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <div className="layout-container">
            <style>{`
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
                    color: var(--text-color) !important; /* Ensure dark text when scrolled */
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
                .desktop-menu a:hover::after {
                    width: 100%;
                }
                .mobile-toggle {
                    display: none;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .nav-container { padding: 1.5rem; }
                    .desktop-menu { display: none; }
                    .mobile-toggle { display: block; }
                }
                footer {
                    padding: 6rem 2rem;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
                    border-top: 1px solid var(--border-color);
                }
                .social-links {
                    display: flex;
                    gap: 2rem;
                }
                .social-links a {
                    text-transform: uppercase;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    color: var(--sub-text-color);
                    transition: color 0.3s;
                }
                .social-links a:hover {
                    color: var(--text-color);
                }
            `}</style>

            {/* Grain Overlay */}
            <div className="grain-overlay"></div>

            {/* Navigation */}
            <nav className={`nav-container ${scrolled ? 'scrolled' : ''} ${!scrolled && isHome ? 'transparent-light' : ''}`}>
                <Link to="/" className="logo">
                    {content.hero.title}
                </Link>

                <ul className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="mobile-toggle" onClick={() => setIsMenuOpen(true)}>
                    <Menu size={24} />
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
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
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-color)',
                                cursor: 'pointer'
                            }}
                        >
                            <X size={32} />
                        </button>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer>
                <div className="social-links">
                    {content.socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                            {social.name}
                        </a>
                    ))}
                </div>
                <p style={{ color: 'var(--sub-text-color)', fontSize: '0.75rem', opacity: 0.5 }}>
                    &copy; {new Date().getFullYear()} {content.meta.title}
                </p>
            </footer>
        </div>
    );
};

export default Layout;
