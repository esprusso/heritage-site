import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const CategoryGallery = () => {
    const { categoryId } = useParams();
    const { content, loading } = useContent();
    const [confirmed, setConfirmed] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const triggerRef = useRef(null);
    const closeButtonRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setConfirmed(false);
        setSelectedIndex(null);
    }, [categoryId]);

    const category = content?.portfolioCategories?.find(c => c.id === categoryId);

    const closeModal = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const showNext = useCallback((e) => {
        e?.stopPropagation();
        if (!category) return;
        setSelectedIndex((prev) => (prev + 1) % category.photos.length);
    }, [category]);

    const showPrev = useCallback((e) => {
        e?.stopPropagation();
        if (!category) return;
        setSelectedIndex((prev) => (prev - 1 + category.photos.length) % category.photos.length);
    }, [category]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, showNext, showPrev, closeModal]);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => closeButtonRef.current?.focus());
        } else {
            document.body.style.overflow = '';
            triggerRef.current?.focus();
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedIndex]);

    useEffect(() => {
        if (selectedIndex === null || !modalRef.current) return;
        const modal = modalRef.current;
        const handleTab = (e) => {
            if (e.key !== 'Tab') return;
            const focusable = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
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
        modal.addEventListener('keydown', handleTab);
        return () => modal.removeEventListener('keydown', handleTab);
    }, [selectedIndex]);

    if (loading) return null;

    if (!category) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
                <h2>Category not found</h2>
                <Link to="/portfolio" style={{ textDecoration: 'underline' }}>Back to Portfolio</Link>
            </div>
        );
    }

    if (category.nsfw && !confirmed) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#111',
                padding: '2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        textAlign: 'center',
                        color: '#fff',
                        maxWidth: '420px'
                    }}
                >
                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}>
                        {category.name}
                    </h2>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '2.5rem'
                    }}>
                        This gallery contains artistic nudity. You must be 18+ to view.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link
                            to="/portfolio"
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                padding: '0.8rem 2rem',
                                border: '1px solid rgba(255,255,255,0.2)',
                                transition: 'border-color 0.3s'
                            }}
                        >
                            Go Back
                        </Link>
                        <button
                            onClick={() => setConfirmed(true)}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#fff',
                                backgroundColor: 'transparent',
                                padding: '0.8rem 2rem',
                                border: '1px solid rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, border-color 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                e.target.style.borderColor = 'rgba(255,255,255,0.8)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                            }}
                        >
                            Enter
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <section style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '12rem 2rem 6rem',
            minHeight: '100vh'
        }}>
            <Link to="/portfolio" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '3rem',
                color: 'var(--sub-text-color)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.3s ease'
            }}
                className="cat-back-link"
            >
                <ArrowLeft size={16} /> Back to Portfolio
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '4rem' }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '0.5rem'
                }}>
                    {category.name}
                </h1>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    color: 'var(--sub-text-color)'
                }}>
                    {category.description}
                </p>
            </motion.div>

            <div className="cat-gallery-grid">
                {category.photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="cat-gallery-item"
                        style={{ marginBottom: '1.5rem', breakInside: 'avoid', cursor: 'pointer' }}
                        onClick={() => {
                            triggerRef.current = document.activeElement;
                            setSelectedIndex(index);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                triggerRef.current = e.currentTarget;
                                setSelectedIndex(index);
                            }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`View photo ${index + 1}`}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption || `${category.name} photograph ${index + 1}`}
                            loading="lazy"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Photo ${selectedIndex + 1} of ${category.photos.length}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000,
                            padding: '2rem'
                        }}
                    >
                        <button
                            ref={closeButtonRef}
                            onClick={closeModal}
                            aria-label="Close lightbox"
                            style={{
                                position: 'absolute', top: '2rem', right: '2rem',
                                background: 'none', border: 'none', color: 'white',
                                cursor: 'pointer', zIndex: 1001, padding: '0.5rem'
                            }}
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={showPrev}
                            aria-label="Previous photo"
                            className="cat-nav-btn"
                            style={{
                                position: 'absolute', left: '2rem',
                                background: 'none', border: 'none', color: 'white',
                                cursor: 'pointer', zIndex: 1001, padding: '1rem'
                            }}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <motion.img
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={category.photos[selectedIndex].src}
                            alt={category.photos[selectedIndex].caption || `${category.name} photograph ${selectedIndex + 1}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                        />

                        <button
                            onClick={showNext}
                            aria-label="Next photo"
                            className="cat-nav-btn"
                            style={{
                                position: 'absolute', right: '2rem',
                                background: 'none', border: 'none', color: 'white',
                                cursor: 'pointer', zIndex: 1001, padding: '1rem'
                            }}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div
                            aria-live="polite"
                            aria-atomic="true"
                            style={{
                                position: 'absolute', bottom: '2rem', left: '0',
                                width: '100%', textAlign: 'center',
                                color: 'rgba(255,255,255,0.8)', pointerEvents: 'none'
                            }}
                        >
                            <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>
                                {selectedIndex + 1} / {category.photos.length}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .cat-back-link:hover { color: var(--text-color); }
                .cat-gallery-grid {
                    column-count: 3;
                    column-gap: 1.5rem;
                }
                .cat-gallery-item {
                    outline: none;
                }
                .cat-gallery-item:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .cat-gallery-item img {
                    transition: filter 0.35s ease;
                }
                .cat-gallery-item:hover img {
                    filter: brightness(0.88);
                }
                .cat-nav-btn {
                    opacity: 0.7;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .cat-nav-btn:hover {
                    opacity: 1;
                    transform: scale(1.1);
                }
                .cat-nav-btn:focus-visible {
                    outline: 2px solid white;
                    outline-offset: 4px;
                    opacity: 1;
                }
                @media (max-width: 1024px) {
                    .cat-gallery-grid { column-count: 2; }
                }
                @media (max-width: 600px) {
                    .cat-gallery-grid { column-count: 1; }
                    .cat-nav-btn svg { width: 32px; height: 32px; }
                }
            `}</style>
        </section>
    );
};

export default CategoryGallery;
