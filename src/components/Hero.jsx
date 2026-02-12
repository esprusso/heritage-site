import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';

const Hero = () => {
    const { content, loading } = useContent();

    if (loading) return null;

    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    fontWeight: 800,
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    color: 'var(--text-color)'
                }}>
                    {content.hero.title}
                </h1>
                <p style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--sub-text-color)',
                    fontWeight: 500
                }}>
                    {content.hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
