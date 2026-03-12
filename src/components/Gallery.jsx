import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollPrompt from './ScrollPrompt';

const Gallery = () => {
    const { content, loading } = useContent();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const triggerRef = useRef(null);
    const closeButtonRef = useRef(null);
    const modalRef = useRef(null);

    const closeModal = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const showNext = useCallback((e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % content.photography.length);
    }, [content?.photography?.length]);

    const showPrev = useCallback((e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + content.photography.length) % content.photography.length);
    }, [content?.photography?.length]);

    // Keyboard navigation
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

    // Body scroll lock and focus management
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => {
                closeButtonRef.current?.focus();
            });
        } else {
            document.body.style.overflow = '';
            triggerRef.current?.focus();
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedIndex]);

    // Focus trap inside modal
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

    return (
        <section id="portfolio" style={{
            padding: '8rem 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div className="gallery-grid" style={{ width: '100%' }}>
                {content.photography.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="gallery-item"
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
                        aria-label={`View photo ${index + 1}: ${photo.caption || 'Portfolio image'}`}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption || `Portfolio photograph ${index + 1}`}
                            loading="lazy"
                            style={{
                                width: '100%',
                                display: 'block',
                            }}
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
                        aria-label={`Photo ${selectedIndex + 1} of ${content.photography.length}`}
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
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 1001,
                                padding: '0.5rem'
                            }}
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={showPrev}
                            aria-label="Previous photo"
                            style={{
                                position: 'absolute',
                                left: '2rem',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 1001,
                                padding: '1rem'
                            }}
                            className="nav-btn"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <motion.img
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={content.photography[selectedIndex].src}
                            alt={content.photography[selectedIndex].caption || `Portfolio photograph ${selectedIndex + 1}`}
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
                            style={{
                                position: 'absolute',
                                right: '2rem',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 1001,
                                padding: '1rem'
                            }}
                            className="nav-btn"
                        >
                            <ChevronRight size={48} />
                        </button>

                        {/* Counter with live region for screen readers */}
                        <div
                            aria-live="polite"
                            aria-atomic="true"
                            style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '0',
                                width: '100%',
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.8)',
                                pointerEvents: 'none'
                            }}
                        >
                            <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>
                                {selectedIndex + 1} / {content.photography.length}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <ScrollPrompt targetId="writing" label="Read Words" />

            <style>{`
                .gallery-grid {
                    column-count: 3;
                    column-gap: 1.5rem;
                }
                .gallery-item {
                    outline: none;
                }
                .gallery-item:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .gallery-item img {
                    transition: filter 0.35s ease;
                }
                .gallery-item:hover img {
                    filter: brightness(0.88);
                }
                .nav-btn {
                    opacity: 0.7;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .nav-btn:hover {
                    opacity: 1;
                    transform: scale(1.1);
                }
                .nav-btn:focus-visible {
                    outline: 2px solid white;
                    outline-offset: 4px;
                    opacity: 1;
                }
                @media (max-width: 1024px) {
                    .gallery-grid { column-count: 2; }
                }
                @media (max-width: 600px) {
                    .gallery-grid { column-count: 1; }
                    .nav-btn svg { width: 32px; height: 32px; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
