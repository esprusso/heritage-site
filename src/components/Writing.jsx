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

    // Filter out posts that might not have a slug or are invalid, if needed.
    const validWritings = writings.filter(post => post.slug);

    if (loading) {
        return (
            <section id="writing" style={{ minHeight: '80vh', padding: '12rem 2rem 6rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '200px', height: '3rem', backgroundColor: '#f0f0f0', marginBottom: '4rem', borderRadius: '4px' }}></div>
                <div style={{ width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} style={{ borderBottom: '1px solid #f0f0f0', paddingBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '80%', height: '1.8rem', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                            <div style={{ width: '40px', height: '1rem', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="writing" style={{ minHeight: '80vh', padding: '12rem 2rem 6rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    marginBottom: '4rem',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    textAlign: 'center',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    maxWidth: '800px'
                }}
            >
                Written Words
            </motion.h2>

            <div style={{ maxWidth: '700px', width: '100%', margin: '0 auto' }}>
                {validWritings.length > 0 ? (
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {validWritings.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    borderBottom: '1px solid var(--border-color)',
                                    paddingBottom: '3rem',
                                    textAlign: 'center'
                                }}
                            >
                                <Link
                                    to={`/blog/${item.slug}`}
                                    style={{ display: 'block', group: 'group', textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        {item.feature_image && (
                                            <div style={{ width: '100%', maxWidth: '600px', marginBottom: '2rem' }}>
                                                {/* Debug Log */}
                                                {console.log("Post:", item.title, "Image:", item.feature_image)}
                                                <img
                                                    src={item.feature_image}
                                                    alt={item.title}
                                                    onError={(e) => {
                                                        console.error("Image failed to load:", item.feature_image);
                                                        e.target.style.display = 'none';
                                                    }}
                                                    style={{
                                                        width: '100%',
                                                        height: 'auto',
                                                        display: 'block',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <h3 style={{
                                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                                            marginBottom: '1rem',
                                            fontWeight: 500,
                                            lineHeight: 1.4,
                                            letterSpacing: '-0.01em'
                                        }}>
                                            {item.title}
                                            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.6rem' }}>
                                                <ArrowUpRight size={22} />
                                            </span>
                                        </h3>
                                        <span style={{
                                            color: 'var(--sub-text-color)',
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            {new Date(item.published_at).getFullYear()}
                                        </span>
                                    </div>
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                ) : (
                    <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed var(--border-color)' }}>
                        <p style={{ color: 'var(--sub-text-color)' }}>No posts found.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Writing;
