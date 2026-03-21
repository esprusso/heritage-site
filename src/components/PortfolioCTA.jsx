import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { ArrowRight } from 'lucide-react';

const PortfolioCTA = () => {
    const { content, loading } = useContent();

    if (loading || !content?.portfolioCategories) return null;

    const categories = content.portfolioCategories;

    return (
        <section id="portfolio" style={{
            padding: '6rem 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', maxWidth: '800px' }}
            >
                <div className="portfolio-cta-categories">
                    {categories.map((cat, i) => (
                        <React.Fragment key={cat.id}>
                            {i > 0 && <span className="portfolio-cta-divider" aria-hidden="true">/</span>}
                            <Link
                                to={`/portfolio/${cat.id}`}
                                className="portfolio-cta-link"
                            >
                                {cat.name}
                            </Link>
                        </React.Fragment>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                    <Link to="/portfolio" className="portfolio-cta-button">
                        Explore the Portfolio <ArrowRight size={18} />
                    </Link>
                </div>
            </motion.div>

            <style>{`
                .portfolio-cta-categories {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: baseline;
                    gap: 0.5rem 0;
                }
                .portfolio-cta-link {
                    font-family: var(--font-display);
                    font-size: clamp(2.2rem, 5vw, 4.5rem);
                    font-weight: 400;
                    font-style: italic;
                    color: var(--text-color);
                    text-decoration: none;
                    padding: 0 0.75rem;
                    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    line-height: 1.3;
                }
                .portfolio-cta-categories:hover .portfolio-cta-link {
                    opacity: 0.35;
                }
                .portfolio-cta-categories:hover .portfolio-cta-link:hover {
                    opacity: 1;
                    transform: translateY(-2px);
                }
                .portfolio-cta-link:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .portfolio-cta-divider {
                    font-family: var(--font-display);
                    font-size: clamp(1.8rem, 4vw, 3.5rem);
                    font-weight: 300;
                    color: var(--border-color);
                    user-select: none;
                }
                .portfolio-cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-family: var(--font-body);
                    font-size: 0.78rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--sub-text-color);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .portfolio-cta-button:hover {
                    color: var(--text-color);
                }
                .portfolio-cta-button:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                @media (max-width: 600px) {
                    .portfolio-cta-link {
                        padding: 0 0.4rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default PortfolioCTA;
