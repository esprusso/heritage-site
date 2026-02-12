import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';

const About = () => {
    const { content, loading } = useContent();

    if (loading) return null;

    return (
        <section id="about" style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 2rem'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                maxWidth: '1200px',
                width: '100%',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <img
                        src={content.about.image}
                        alt="Portrait"
                        style={{
                            width: '100%',
                            maxHeight: '80vh',
                            objectFit: 'cover',
                            filter: 'grayscale(100%)',
                            border: '1px solid var(--border-color)'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        marginBottom: '2rem',
                        textTransform: 'uppercase',
                        fontWeight: 300
                    }}>
                        {content.about.title}
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--sub-text-color)',
                        maxWidth: '500px'
                    }}>
                        {content.about.text}
                    </p>
                </motion.div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #about > div {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
