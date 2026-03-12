import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosts } from '../lib/ghost';

import ScrollPrompt from './ScrollPrompt';

const Writing = () => {
    const [writings, setWritings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const posts = await getPosts();
            setWritings(posts);
            setLoading(false);
        }
        fetchData();
    }, []);

    const validWritings = writings.filter(post => post.slug);

    if (loading) {
        return (
            <section id="writing" style={{ minHeight: '80vh', padding: '8rem 2rem', scrollMarginTop: '100px' }}>
                <div style={{ width: '200px', height: '3rem', backgroundColor: 'var(--skeleton-color)', marginBottom: '4rem', borderRadius: '4px', margin: '0 auto 4rem' }}></div>
                <div className="blog-masonry">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="blog-card-skeleton">
                            <div style={{ width: '100%', height: '220px', backgroundColor: 'var(--skeleton-color)' }}></div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ width: '80%', height: '1.2rem', backgroundColor: 'var(--skeleton-color)', borderRadius: '4px', marginBottom: '0.75rem' }}></div>
                                <div style={{ width: '40%', height: '0.8rem', backgroundColor: 'var(--skeleton-color)', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="writing" style={{
            minHeight: '80vh',
            padding: '8rem 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    marginBottom: '4rem',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    textAlign: 'center',
                    fontWeight: 500,
                    letterSpacing: '0.02em'
                }}
            >
                Written Words
            </motion.h2>

            {validWritings.length > 0 ? (
                <div className="blog-masonry">
                    {validWritings.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Link
                                to={`/blog/${item.slug}`}
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                {item.feature_image && (
                                    <div className="blog-card-thumbnail">
                                        <img
                                            src={item.feature_image}
                                            alt={item.title}
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.parentElement.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="blog-card-content">
                                    <h3 className="blog-card-title">
                                        {item.title}
                                        <ArrowUpRight size={16} className="blog-card-arrow" />
                                    </h3>
                                    {item.excerpt && (
                                        <p className="blog-card-excerpt">
                                            {item.excerpt.length > 120
                                                ? item.excerpt.substring(0, 120) + '...'
                                                : item.excerpt}
                                        </p>
                                    )}
                                    <span className="blog-card-date">
                                        {new Date(item.published_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed var(--border-color)', maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ color: 'var(--sub-text-color)' }}>No posts found.</p>
                </div>
            )}

            <div style={{ marginTop: 'auto', paddingTop: '4rem', display: 'flex', justifyContent: 'center' }}>
                <ScrollPrompt targetId="about" label="About Me" />
            </div>

            <style>{`
                .blog-masonry {
                    column-count: 3;
                    column-gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                .blog-card {
                    break-inside: avoid;
                    margin-bottom: 1.5rem;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    background: var(--bg-color);
                }
                .blog-card:hover,
                .blog-card:focus-within {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                }
                .blog-card a:focus-visible {
                    outline: none;
                }
                .blog-card:focus-within {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .blog-card-skeleton {
                    break-inside: avoid;
                    margin-bottom: 1.5rem;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                }
                .blog-card-thumbnail {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                }
                .blog-card-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }
                .blog-card:hover .blog-card-thumbnail img,
                .blog-card:focus-within .blog-card-thumbnail img {
                    transform: scale(1.03);
                }
                .blog-card-content {
                    padding: 1.5rem;
                }
                .blog-card-title {
                    font-size: 1.15rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.01em;
                    display: flex;
                    align-items: flex-start;
                    gap: 0.4rem;
                }
                .blog-card-arrow {
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                .blog-card:hover .blog-card-arrow,
                .blog-card:focus-within .blog-card-arrow {
                    opacity: 1;
                    transform: translate(2px, -2px);
                }
                .blog-card-excerpt {
                    font-size: 0.9rem;
                    line-height: 1.6;
                    color: var(--sub-text-color);
                    margin-bottom: 1rem;
                }
                .blog-card-date {
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--sub-text-color);
                }
                @media (max-width: 1024px) {
                    .blog-masonry { column-count: 2; }
                }
                @media (max-width: 600px) {
                    .blog-masonry { column-count: 1; }
                    .blog-card-thumbnail { height: 200px; }
                }
            `}</style>
        </section>
    );
};

export default Writing;
