import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosts } from '../lib/ghost';

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
            <section id="writing" style={{
                backgroundColor: '#f3f3f3',
                margin: '0 -9999px',
                padding: '6rem 9999px',
                scrollMarginTop: '100px'
            }}>
                <div className="blog-list">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="blog-card-skeleton">
                            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', padding: '2rem 0.5rem' }}>
                                <div style={{ width: '3.5rem', height: '2rem', backgroundColor: 'var(--skeleton-color)', borderRadius: '4px', flexShrink: 0 }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ width: '60%', height: '1.1rem', backgroundColor: 'var(--skeleton-color)', borderRadius: '4px', marginBottom: '0.5rem' }} />
                                    <div style={{ width: '90%', height: '0.8rem', backgroundColor: 'var(--skeleton-color)', borderRadius: '4px' }} />
                                </div>
                                <div style={{ width: '5rem', height: '0.7rem', backgroundColor: 'var(--skeleton-color)', borderRadius: '4px', flexShrink: 0 }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="writing" style={{
            scrollMarginTop: '100px',
            backgroundColor: '#f3f3f3',
            margin: '0 -9999px',
            padding: '6rem 9999px',
        }}>
            {validWritings.length > 0 ? (
                <div className="blog-list">
                    {validWritings.map((item, index) => {
                        const num = String(index + 1).padStart(2, '0');
                        const dateStr = new Date(item.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        });
                        return (
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
                                    className="blog-card-link"
                                >
                                    <span className="blog-card-number">{num}</span>
                                    <div className="blog-card-body">
                                        <h3 className="blog-card-title">{item.title}</h3>
                                        {item.excerpt && (
                                            <p className="blog-card-excerpt">
                                                {item.excerpt.length > 140
                                                    ? item.excerpt.substring(0, 140) + '...'
                                                    : item.excerpt}
                                            </p>
                                        )}
                                    </div>
                                    <div className="blog-card-end">
                                        <span className="blog-card-date">{dateStr}</span>
                                        <ArrowUpRight size={16} className="blog-card-arrow" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed var(--border-color)', maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ color: 'var(--sub-text-color)' }}>No posts found.</p>
                </div>
            )}


            <style>{`
                .blog-list {
                    max-width: 900px;
                    margin: 0 auto;
                    width: 100%;
                }
                .blog-card {
                    border-top: 1px solid rgba(0, 0, 0, 0.12);
                }
                .blog-card:last-child {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                }
                .blog-card-link {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    text-decoration: none;
                    color: inherit;
                    padding: 2rem 0.5rem;
                    transition: padding-left 0.4s ease;
                }
                .blog-card:hover .blog-card-link {
                    padding-left: 1.5rem;
                }
                .blog-card-link:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: -2px;
                }
                .blog-card-skeleton {
                    border-top: 1px solid rgba(0, 0, 0, 0.12);
                    padding: 2rem 0.5rem;
                }
                .blog-card-number {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 3vw, 2.8rem);
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.15);
                    letter-spacing: 0.02em;
                    flex-shrink: 0;
                    width: 3.5rem;
                    line-height: 1;
                    transition: color 0.4s ease;
                }
                .blog-card:hover .blog-card-number {
                    color: rgba(0, 0, 0, 0.4);
                }
                .blog-card-body {
                    flex: 1;
                    min-width: 0;
                }
                .blog-card-title {
                    font-family: var(--font-heading);
                    font-size: clamp(1.1rem, 1.8vw, 1.35rem);
                    font-weight: 500;
                    line-height: 1.3;
                    margin-bottom: 0.4rem;
                    letter-spacing: 0.02em;
                }
                .blog-card-excerpt {
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    line-height: 1.5;
                    color: var(--sub-text-color);
                }
                .blog-card-end {
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 0.75rem;
                }
                .blog-card-date {
                    font-family: var(--font-body);
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--sub-text-color);
                    white-space: nowrap;
                }
                .blog-card-arrow {
                    color: var(--sub-text-color);
                    transition: transform 0.3s ease, color 0.3s ease;
                }
                .blog-card:hover .blog-card-arrow {
                    transform: translate(3px, -3px);
                    color: var(--text-color);
                }
                @media (max-width: 600px) {
                    .blog-card-link {
                        flex-wrap: wrap;
                        gap: 0.75rem 1.25rem;
                        padding: 1.5rem 0.5rem;
                    }
                    .blog-card-number {
                        font-size: 1.8rem;
                        width: 2.5rem;
                    }
                    .blog-card-body {
                        flex-basis: calc(100% - 3.75rem);
                    }
                    .blog-card-title {
                        font-size: 1rem;
                    }
                    .blog-card-end {
                        flex-direction: row;
                        align-items: center;
                        width: 100%;
                        padding-left: 3.75rem;
                    }
                    .blog-card-excerpt {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Writing;
