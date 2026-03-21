import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';
import ScrollPrompt from './ScrollPrompt';

const FeaturedWork = () => {
    const { content, loading } = useContent();

    if (loading || !content?.featuredWork) return null;

    return (
        <section id="portfolio" style={{
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

            <div className="featured-grid">
                {content.featuredWork.map((item, index) => (
                    <motion.div
                        key={item.categoryId}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            to={`/portfolio/${item.categoryId}`}
                            className="featured-card"
                            aria-label={`View ${item.category} portfolio`}
                        >
                            <div className="featured-image-wrapper">
                                <img
                                    src={item.src}
                                    alt={item.category}
                                    loading="lazy"
                                />
                                <div className="featured-overlay">
                                    <span className="featured-label">{item.category}</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginTop: '3rem' }}
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
                .featured-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 1200px;
                }
                .featured-card {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    outline: none;
                }
                .featured-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .featured-image-wrapper {
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 3 / 4;
                }
                .featured-image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .featured-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0);
                    display: flex;
                    align-items: flex-end;
                    justify-content: center;
                    padding: 2rem;
                    transition: background 0.4s ease;
                }
                .featured-label {
                    font-family: var(--font-heading);
                    font-size: 1rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: white;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                }
                .featured-card:hover .featured-overlay,
                .featured-card:focus-visible .featured-overlay {
                    background: rgba(0, 0, 0, 0.4);
                }
                .featured-card:hover .featured-label,
                .featured-card:focus-visible .featured-label {
                    opacity: 1;
                    transform: translateY(0);
                }
                .featured-card:hover img {
                    transform: scale(1.03);
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
                    .featured-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }
            `}</style>
        </section>
    );
};

export default FeaturedWork;
