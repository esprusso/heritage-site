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
            <motion.header
                className="about-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={content.about.image}
                    alt={`Portrait of ${content.hero?.title || 'the photographer'}`}
                    className="about-header-img"
                />
                <div className="about-header-overlay" />
                <h1 className="about-header-title">About</h1>
            </motion.header>

            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="about-intro">
                    <p className="about-lede">{content.about.text}</p>
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
                .about-header {
                    position: relative;
                    height: 50vh;
                    min-height: 350px;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                }
                .about-header-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                }
                .about-header-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.6) 0%,
                        rgba(0, 0, 0, 0.1) 50%,
                        transparent 100%
                    );
                }
                .about-header-title {
                    position: relative;
                    z-index: 1;
                    font-family: var(--font-display);
                    font-size: clamp(3rem, 8vw, 6rem);
                    font-weight: 400;
                    font-style: italic;
                    color: #fff;
                    padding: 2rem 3rem;
                    letter-spacing: 0.02em;
                }
                .about-content {
                    max-width: 680px;
                    margin: 0 auto;
                    padding: 5rem 2rem 8rem;
                }
                .about-intro {
                    margin-bottom: 4rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid var(--border-color);
                }
                .about-lede {
                    font-family: var(--font-body);
                    font-size: 1.35rem;
                    line-height: 1.8;
                    color: var(--text-color);
                }
                .about-section {
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
                @media (max-width: 600px) {
                    .about-header {
                        height: 40vh;
                    }
                    .about-header-title {
                        padding: 1.5rem;
                    }
                    .about-content {
                        padding: 3rem 1.5rem 6rem;
                    }
                }
            `}</style>
        </article>
    );
};

export default About;
