import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';

const Gallery = () => {
    const { content, loading } = useContent();

    if (loading) return null;

    return (
        <section id="portfolio" style={{ padding: '2rem' }}>
            <div className="gallery-grid">
                {content.photography.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption || ''}
                            style={{
                                width: '100%',
                                display: 'block',
                                filter: 'grayscale(100%)', // Optional per aesthetic, can remove if he wants full color
                                transition: 'filter 0.3s ease'
                            }}
                            onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                            onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'}
                        />
                    </motion.div>
                ))}
            </div>
            <style>{`
                .gallery-grid {
                    column-count: 3;
                    column-gap: 1.5rem;
                }
                @media (max-width: 1024px) {
                    .gallery-grid { column-count: 2; }
                }
                @media (max-width: 600px) {
                    .gallery-grid { column-count: 1; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
