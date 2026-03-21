import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';

const Portfolio = () => {
    const { content, loading } = useContent();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading || !content?.portfolioCategories) return null;

    return (
        <section className="portfolio-page-section" style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '10rem 2rem 6rem',
            minHeight: '100vh'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginBottom: '1rem'
                }}>
                    Portfolio
                </h1>
                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.1rem',
                    color: 'var(--sub-text-color)',
                    maxWidth: '500px',
                    margin: '0 auto'
                }}>
                    A curated collection of portrait, editorial, and fine art photography.
                </p>
            </motion.div>

            <div className="portfolio-grid">
                {content.portfolioCategories.map((category, index) => {
                    const count = category.modelGroups?.reduce((sum, g) => sum + g.photos.length, 0) ?? 0;
                    const num = String(index + 1).padStart(2, '0');
                    return (
                        <motion.div
                            key={category.id}
                            className="portfolio-card-wrapper"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.12, duration: 0.6 }}
                        >
                            <Link
                                to={`/portfolio/${category.id}`}
                                className="portfolio-category-card"
                                aria-label={`View ${category.name} gallery`}
                            >
                                <img
                                    src={category.thumbnail}
                                    alt={category.name}
                                    loading="lazy"
                                    className="portfolio-card-img"
                                />
                                <div className="portfolio-card-overlay" />
                                <div className="portfolio-card-frame" />
                                <span className="portfolio-card-number">{num}</span>
                                <div className="portfolio-card-content">
                                    <div className="portfolio-card-rule" />
                                    <h2 className="portfolio-card-title">{category.name}</h2>
                                    <span className="portfolio-card-count">
                                        {count} {count === 1 ? 'image' : 'images'}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            <style>{`
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }
                .portfolio-card-wrapper {
                    position: relative;
                }
                .portfolio-category-card {
                    position: relative;
                    display: block;
                    text-decoration: none;
                    color: #fff;
                    overflow: hidden;
                    height: clamp(420px, 62vh, 720px);
                    outline: none;
                }
                .portfolio-card-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                                filter 0.6s ease;
                }
                .portfolio-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.65) 0%,
                        rgba(0, 0, 0, 0.1) 45%,
                        transparent 100%
                    );
                    transition: background 0.5s ease;
                }
                /* Inset border frame */
                .portfolio-card-frame {
                    position: absolute;
                    inset: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    z-index: 2;
                    pointer-events: none;
                    transition: inset 0.5s ease, border-color 0.5s ease;
                }
                /* Issue number top-left */
                .portfolio-card-number {
                    position: absolute;
                    top: 22px;
                    left: 22px;
                    font-family: var(--font-display);
                    font-size: 0.85rem;
                    font-weight: 300;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 0.1em;
                    z-index: 3;
                    transition: color 0.4s ease;
                }
                .portfolio-card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 2rem 1.75rem;
                    z-index: 3;
                }
                /* Decorative rule above title */
                .portfolio-card-rule {
                    width: 24px;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.75rem;
                    transition: width 0.5s ease, background 0.4s ease;
                }
                .portfolio-card-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.1rem, 1.5vw, 1.5rem);
                    font-weight: 400;
                    font-style: italic;
                    text-transform: none;
                    letter-spacing: 0.03em;
                    margin-bottom: 0.5rem;
                    color: #fff;
                    line-height: 1.2;
                }
                .portfolio-card-count {
                    font-family: var(--font-body);
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.45);
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    display: block;
                    opacity: 0;
                    transform: translateY(6px);
                    transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
                }
                /* Hover effects */
                .portfolio-category-card:hover .portfolio-card-img {
                    transform: scale(1.06);
                }
                .portfolio-category-card:hover .portfolio-card-overlay {
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.8) 0%,
                        rgba(0, 0, 0, 0.25) 50%,
                        rgba(0, 0, 0, 0.05) 100%
                    );
                }
                .portfolio-category-card:hover .portfolio-card-frame {
                    inset: 14px;
                    border-color: rgba(255, 255, 255, 0.45);
                }
                .portfolio-category-card:hover .portfolio-card-number {
                    color: rgba(255, 255, 255, 0.8);
                }
                .portfolio-category-card:hover .portfolio-card-rule {
                    width: 48px;
                    background: rgba(255, 255, 255, 0.8);
                }
                .portfolio-category-card:hover .portfolio-card-count {
                    opacity: 1;
                    transform: translateY(0);
                }
                .portfolio-category-card:focus-visible {
                    outline: 2px solid #fff;
                    outline-offset: -4px;
                }
                @media (max-width: 900px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .portfolio-category-card {
                        height: clamp(320px, 50vh, 520px);
                    }
                }
                @media (max-width: 550px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    .portfolio-category-card {
                        height: clamp(280px, 45vh, 400px);
                    }
                    .portfolio-card-content {
                        padding: 1.5rem 1.25rem;
                    }
                    .portfolio-card-title {
                        font-size: 1.25rem;
                    }
                    .portfolio-card-count {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .portfolio-page-section {
                        padding-top: 7rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Portfolio;
