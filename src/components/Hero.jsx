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
                            staggerChildren: 0.05,
                            delayChildren: 0.2
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
                    color: '#FFFFFF', // Explicit white
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '0.2em'
                }}>
                    {content.hero.title.split(' ').map((word, wordIndex) => (
                        <span key={wordIndex} style={{ display: 'inline-flex' }}>
                            {word.split('').map((char, charIndex) => (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
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
                    color: 'rgba(255, 255, 255, 0.9)', // Light/white with slight transparency
                    fontWeight: 500,
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
                                    staggerChildren: 0.03,
                                    delayChildren: 1.5
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
                            delay: 2.5
                        }}
                        style={{
                            display: 'inline-block',
                            width: '0.15em',
                            height: '0.8em',
                            backgroundColor: '#FFFFFF', // White cursor
                            marginLeft: '0.1em',
                            alignSelf: 'center'
                        }}
                    />
                </p>
            </motion.div>

            <motion.a
                href="#portfolio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                whileHover={{
                    scale: 1.05,
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                    marginTop: '6rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1rem 2.5rem',
                    border: '1px solid #FFFFFF',
                    borderRadius: '50px',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'colors 0.3s ease'
                }}
            >
                <span>Explore Work</span>
                <ArrowDown size={20} />
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
                    /* background-image: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url(/images/dd-3.jpg); */
                    background-size: cover;
                    background-position: center;
                    color: #FFFFFF;
                }
                @media (max-width: 768px) {
                    .hero-section {
                        height: 70vh; /* Reduced height on mobile to show more width */
                        min-height: 500px;
                        background-attachment: scroll; /* often better for mobile perf */
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
