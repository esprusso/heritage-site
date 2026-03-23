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

                <div className="about-section">
                    <h2 className="about-section-title">The Work</h2>
                    <p>My photography spans editorial, fine art, boudoir, and portraiture — but the thread connecting all of it is collaboration. Every session starts with a conversation, not a shot list. I'm interested in the space between direction and spontaneity, where something real emerges.</p>
                    <p>I shoot primarily with natural and continuous light, favoring environments that bring out personality over controlled studio setups. The Twin Cities and surrounding areas offer an incredible range of locations, and I'm always looking for new ones.</p>
                </div>

                <div className="about-section">
                    <h2 className="about-section-title">Working Together</h2>
                    <p>I'm open to both TFP collaborations and commissioned work. If you're a model looking to build your portfolio, an artist with a creative concept, or someone who wants images that feel genuinely like you — I'd love to hear from you.</p>
                    <p>I believe the best images happen when there's mutual trust and creative investment from both sides. That's why I take time to understand what you're looking for before we ever pick up a camera.</p>
                </div>

                <div className="about-section">
                    <h2 className="about-section-title">Beyond the Lens</h2>
                    <p>When I'm not shooting, I'm writing. My blog covers everything from the creative process to the culture around photography and the internet at large. I'm fascinated by how we present ourselves visually and what authenticity means in an era of constant curation.</p>
                </div>
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
