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
        <section style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '12rem 2rem 6rem',
            minHeight: '100vh'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '5rem' }}
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
                {content.portfolioCategories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <Link
                            to={`/portfolio/${category.id}`}
                            className="portfolio-category-card"
                            aria-label={`View ${category.name} gallery`}
                        >
                            <div className="portfolio-card-image">
                                <img
                                    src={category.thumbnail}
                                    alt={category.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className="portfolio-card-info">
                                <h2 className="portfolio-card-title">{category.name}</h2>
                                <p className="portfolio-card-desc">{category.description}</p>
                                <span className="portfolio-card-count">
                                    {category.photos.length} {category.photos.length === 1 ? 'image' : 'images'}
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <style>{`
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }
                .portfolio-category-card {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    outline: none;
                }
                .portfolio-category-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                }
                .portfolio-category-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .portfolio-card-image {
                    overflow: hidden;
                }
                .portfolio-card-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .portfolio-category-card:hover .portfolio-card-image img {
                    transform: scale(1.03);
                }
                .portfolio-card-info {
                    padding: 1.5rem;
                }
                .portfolio-card-title {
                    font-family: var(--font-heading);
                    font-size: 1.3rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 0.5rem;
                }
                .portfolio-card-desc {
                    font-family: var(--font-body);
                    font-size: 0.95rem;
                    color: var(--sub-text-color);
                    line-height: 1.5;
                    margin-bottom: 0.75rem;
                }
                .portfolio-card-count {
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    color: var(--sub-text-color);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                @media (max-width: 600px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Portfolio;
