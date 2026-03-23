import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';

const About = () => {
    const { content, loading } = useContent();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading || !content) return null;

    return (
        <article className="about-page">
            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="about-intro">
                    <div className="about-intro-text">
                        <h1 className="about-title">About</h1>
                        <p className="about-lede">{content.about.text}</p>
                    </div>
                    <div className="about-photo-wrap">
                        <img
                            src={content.about.image}
                            alt={`Portrait of ${content.hero?.title || 'the photographer'}`}
                            className="about-photo"
                        />
                    </div>
                </div>

                {content.about.sections?.map((section, i) => (
                    <div className="about-section" key={i}>
                        <h2 className="about-section-title">{section.title}</h2>
                        {section.paragraphs.map((p, j) => (
                            <p key={j}>{p}</p>
                        ))}
                    </div>
                ))}
            </motion.div>

            <style>{`
                .about-page {
                    min-height: 100vh;
                }
                .about-content {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 8rem 2rem 8rem;
                }
                .about-intro {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: start;
                    margin-bottom: 4rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid var(--border-color);
                }
                .about-title {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 400;
                    font-style: italic;
                    color: var(--text-color);
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.02em;
                }
                .about-lede {
                    font-family: var(--font-body);
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-color);
                }
                .about-photo-wrap {
                    position: relative;
                }
                .about-photo {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }
                .about-section {
                    max-width: 680px;
                    margin-bottom: 3rem;
                }
                .about-section-title {
                    font-family: var(--font-heading);
                    font-size: 0.8rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1.25rem;
                    color: var(--sub-text-color);
                }
                .about-section p {
                    font-family: var(--font-body);
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: var(--text-color);
                    margin-bottom: 1.25rem;
                }
                @media (max-width: 700px) {
                    .about-content {
                        padding: 6rem 1.5rem 6rem;
                    }
                    .about-intro {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .about-photo-wrap {
                        order: -1;
                    }
                }
            `}</style>
        </article>
    );
};

export default About;
