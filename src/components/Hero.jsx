import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

const Hero = () => {
    const { content, loading } = useContent();

    if (loading) return null;

    return (
        <section id="home" className="hero-section">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.015,
                            delayChildren: 0.1
                        }
                    }
                }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3.5rem, 11vw, 9rem)',
                    fontWeight: 700,
                    lineHeight: 0.9,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    color: '#ffffff',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.25em'
                }}>
                    {content.hero.title.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} style={{ display: 'inline-flex' }}>
                            {word.split('').map((char, charIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 16 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.15 } }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    ))}
                </h1>
                <p style={{
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    color: 'rgba(255, 255, 255, 0.55)',
                    fontWeight: 400,
                    fontFamily: 'var(--font-heading)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.5em'
                }}>
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.02,
                                    delayChildren: 0.3
                                }
                            }
                        }}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.2em' }}
                    >
                        {content.hero.subtitle.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.7
                        }}
                        style={{
                            display: 'inline-block',
                            width: '0.12em',
                            height: '0.8em',
                            backgroundColor: 'rgba(255,255,255,0.55)',
                            marginLeft: '0.1em',
                            alignSelf: 'center'
                        }}
                    />
                </p>
            </motion.div>

            <motion.a
                href="#portfolio"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{
                    scale: 1.04,
                    backgroundColor: '#ffffff',
                    color: '#0d0d0d',
                    borderColor: '#ffffff'
                }}
                whileTap={{ scale: 0.96 }}
                style={{
                    marginTop: '2.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '0.85rem 2.2rem',
                    border: '1px solid rgba(255,255,255,0.35)',
                    borderRadius: '50px',
                    color: 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontFamily: 'var(--font-heading)',
                    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease'
                }}
            >
                <span>Explore Work</span>
                <ArrowDown size={16} />
            </motion.a>

            <style>{`
                .hero-section {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 2rem;
                    position: relative;
                    background-image: linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(/images/mm-2.jpg);
                    background-size: cover;
                    background-position: center;
                    color: #ffffff;
                }
                @media (max-width: 768px) {
                    .hero-section {
                        height: 100vh;
                        background-attachment: scroll;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
