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
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.08,
                            delayChildren: 0.3
                        }
                    }
                }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                    fontWeight: 800,
                    lineHeight: 0.9,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    color: 'var(--text-color)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.2em' // Add gap between words
                }}>
                    {content.hero.title.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} style={{ display: 'inline-flex' }}>
                            {word.split('').map((char, charIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>
                <p style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--sub-text-color)',
                    fontWeight: 500,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.5em'
                }}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        {content.hero.subtitle}
                    </motion.span>
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
