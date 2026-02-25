import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import ScrollPrompt from './ScrollPrompt';

const AIShowcase = () => {
    const { content, loading } = useContent();

    if (loading || !content?.ai || content.ai.length === 0) return null;

    return (
        <section id="ai" style={{
            padding: '8rem 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FAFAFA' // Slightly different background to distinguish section
        }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    marginBottom: '4rem',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    textAlign: 'center',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                }}
            >
                AI Generated
            </motion.h2>

            <div className="gallery-grid" style={{ width: '100%', maxWidth: '1200px' }}>
                {content.ai.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src={item.src}
                            alt={item.caption || ''}
                            style={{ width: '100%', display: 'block', borderRadius: '4px' }}
                        />
                        {item.caption && (
                            <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--sub-text-color)' }}>
                                {item.caption}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '4rem' }}>
                <ScrollPrompt targetId="video" label="View Video Work" fallbackId="about" />
            </div>
        </section>
    );
};

export default AIShowcase;
