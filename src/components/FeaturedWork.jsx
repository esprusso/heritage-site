import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';
import ScrollPrompt from './ScrollPrompt';

const FeaturedWork = () => {
    const { content, loading } = useContent();

    if (loading || !content?.featuredWork) return null;

    const items = content.featuredWork;

    return (
        <section id="portfolio" style={{
            padding: '8rem 2rem 6rem',
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
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '4rem',
                    textAlign: 'center'
                }}
            >
                Featured Work
            </motion.h2>

            <div className="featured-rows">
                {items.map((item, index) => {
                    const reversed = index % 2 !== 0;
                    return (
                        <motion.div
                            key={item.categoryId}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link
                                to={`/portfolio/${item.categoryId}`}
                                className={`featured-row-card${reversed ? ' featured-row-reversed' : ''}`}
                                aria-label={`View ${item.category} portfolio`}
                            >
                                <div className="featured-row-image">
                                    <img src={item.src} alt={item.category} loading="lazy" />
                                </div>
                                <div className="featured-row-info">
                                    <span className="featured-row-label">{item.category}</span>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginTop: '3.5rem' }}
            >
                <Link
                    to="/portfolio"
                    className="portfolio-cta"
                >
                    View Full Portfolio <ArrowRight size={18} />
                </Link>
            </motion.div>

            <ScrollPrompt targetId="writing" label="Read Words" />

            <style>{`
                .featured-rows {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    width: 100%;
                    max-width: 1100px;
                }

                .featured-row-card {
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    text-decoration: none;
                    color: inherit;
                    outline: none;
                    height: clamp(320px, 35vw, 450px);
                }

                .featured-row-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }

                .featured-row-reversed {
                    grid-template-columns: 2fr 3fr;
                }

                .featured-row-reversed .featured-row-image {
                    order: 2;
                }

                .featured-row-reversed .featured-row-info {
                    order: 1;
                }

                .featured-row-image {
                    overflow: hidden;
                    position: relative;
                    height: 100%;
                }

                .featured-row-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    display: block;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .featured-row-card:hover img {
                    transform: scale(1.03);
                }

                .featured-row-info {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f3f3f3;
                    transition: background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .featured-row-label {
                    font-family: var(--font-heading);
                    font-size: 1.05rem;
                    font-weight: 500;
                    letter-spacing: 0.08em;
                    color: var(--sub-text-color);
                    transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .featured-row-card:hover .featured-row-info,
                .featured-row-card:focus-visible .featured-row-info {
                    background: #1a1a1a;
                }

                .featured-row-card:hover .featured-row-label,
                .featured-row-card:focus-visible .featured-row-label {
                    color: #f0f0f0;
                }

                .portfolio-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: var(--font-heading);
                    font-size: 0.95rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--text-color);
                    text-decoration: none;
                    padding: 1rem 2.5rem;
                    border: 1px solid var(--border-color);
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                }
                .portfolio-cta:hover {
                    background-color: var(--text-color);
                    color: var(--bg-color);
                    border-color: var(--text-color);
                }
                .portfolio-cta:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }

                @media (max-width: 768px) {
                    .featured-row-card,
                    .featured-row-reversed {
                        grid-template-columns: 1fr;
                        min-height: auto;
                    }
                    .featured-row-image {
                        aspect-ratio: 4 / 3;
                    }
                    .featured-row-reversed .featured-row-image {
                        order: 0;
                    }
                    .featured-row-reversed .featured-row-info {
                        order: 0;
                    }
                    .featured-row-info {
                        padding: 2.5rem 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default FeaturedWork;
