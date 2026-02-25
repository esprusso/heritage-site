import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollPrompt from './ScrollPrompt';

const Gallery = () => {
    const { content, loading } = useContent();
    const [selectedIndex, setSelectedIndex] = useState(null);

    const closeModal = () => setSelectedIndex(null);

    const showNext = useCallback((e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % content.photography.length);
    }, [content?.photography?.length]);

    const showPrev = useCallback((e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + content.photography.length) % content.photography.length);
    }, [content?.photography?.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, showNext, showPrev]);

    if (loading) return null;

    return (
        <section id="portfolio" style={{
            padding: '2rem 2rem 8rem 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
                width: '100%',
                paddingBottom: '2.5rem',
                borderBottom: '1px solid var(--border-color)',
                marginBottom: '2.5rem'
            }}
        >
            <span style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: 'var(--sub-text-color)',
                fontWeight: 500
            }}>
                Selected Work
            </span>
        </motion.div>

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
                        onClick={() => setSelectedIndex(index)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption || ''}
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
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 1001
                            }}
                        >
                            <X size={32} />
                        </button>

                        <button
                            onClick={showPrev}
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
                            alt={content.photography[selectedIndex].caption}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '4px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                        />

                        <button
                            onClick={showNext}
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

                        {/* Counter only, caption removed from visual display */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '0',
                            width: '100%',
                            textAlign: 'center',
                            color: 'rgba(255,255,255,0.8)',
                            pointerEvents: 'none'
                        }}>
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
