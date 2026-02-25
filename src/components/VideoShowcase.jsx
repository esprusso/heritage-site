import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import ScrollPrompt from './ScrollPrompt';

const VideoShowcase = () => {
    const { content, loading } = useContent();

    if (loading || !content?.video || content.video.length === 0) return null;

    return (
        <section id="video" style={{
            padding: '8rem 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
                Video Work
            </motion.h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                width: '100%',
                maxWidth: '1200px'
            }}>
                {content.video.map((video, index) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{ width: '100%' }}
                    >
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
                            <iframe
                                src={video.embedUrl}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                title={video.title}
                            ></iframe>
                        </div>
                        <h3 style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 600 }}>{video.title}</h3>
                        {video.description && (
                            <p style={{ marginTop: '0.5rem', color: 'var(--sub-text-color)', fontSize: '0.95rem' }}>
                                {video.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '4rem' }}>
                <ScrollPrompt targetId="about" label="About Me" />
            </div>
        </section>
    );
};

export default VideoShowcase;
