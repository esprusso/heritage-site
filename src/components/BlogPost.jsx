import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getSinglePost } from '../lib/ghost';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        async function fetchPost() {
            setLoading(true);
            const data = await getSinglePost(slug);
            setPost(data);
            setLoading(false);
        }
        if (slug) fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <article style={{ maxWidth: '800px', margin: '0 auto', padding: '12rem 2rem 6rem', minHeight: '100vh' }}>
                <div style={{ width: '120px', height: '1rem', backgroundColor: '#f0f0f0', marginBottom: '4rem', borderRadius: '4px' }}></div>
                <div style={{ width: '80%', height: '4rem', backgroundColor: '#f0f0f0', margin: '0 auto 1rem', borderRadius: '4px' }}></div>
                <div style={{ width: '100px', height: '1rem', backgroundColor: '#f0f0f0', margin: '0 auto 4rem', borderRadius: '4px' }}></div>
                <div style={{ width: '100%', height: '400px', backgroundColor: '#f0f0f0', marginBottom: '4rem', borderRadius: '4px' }}></div>
                <div style={{ width: '100%', height: '1.2rem', backgroundColor: '#f0f0f0', marginBottom: '1rem', borderRadius: '4px' }}></div>
                <div style={{ width: '100%', height: '1.2rem', backgroundColor: '#f0f0f0', marginBottom: '1rem', borderRadius: '4px' }}></div>
                <div style={{ width: '80%', height: '1.2rem', backgroundColor: '#f0f0f0', marginBottom: '1rem', borderRadius: '4px' }}></div>
            </article>
        );
    }

    if (!post) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h2>Post not found</h2>
                <Link to="/" style={{ textDecoration: 'underline' }}>Return Home</Link>
            </div>
        );
    }

    return (
        <article style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '12rem 2rem 6rem',
            minHeight: '100vh'
        }}>
            <Link to="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '4rem',
                color: 'var(--sub-text-color)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '0.1em'
            }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1rem',
                        fontWeight: 500,
                        lineHeight: 1.2
                    }}>
                        {post.title}
                    </h1>
                    <time style={{
                        color: 'var(--sub-text-color)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.9rem'
                    }}>
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </header>

                {post.feature_image && (
                    <figure style={{ marginBottom: '4rem', width: '100%' }}>
                        <img
                            src={post.feature_image}
                            alt={post.title}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                        {post.feature_image_caption && (
                            <figcaption
                                style={{
                                    textAlign: 'center',
                                    marginTop: '1rem',
                                    color: 'var(--sub-text-color)',
                                    fontSize: '0.9rem',
                                    fontStyle: 'italic'
                                }}
                                dangerouslySetInnerHTML={{ __html: post.feature_image_caption }}
                            />
                        )}
                    </figure>
                )}

                <div
                    className="gh-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        color: 'var(--text-color)'
                    }}
                />

                <style>{`
                    .gh-content p { margin-bottom: 2rem; }
                    .gh-content h2 { margin-top: 4rem; margin-bottom: 1.5rem; font-size: 2rem; }
                    .gh-content h3 { margin-top: 3rem; margin-bottom: 1rem; font-size: 1.5rem; }
                    .gh-content blockquote { border-left: 2px solid var(--accent-color); padding-left: 2rem; margin: 3rem 0; font-style: italic; }
                    .gh-content a { text-decoration: underline; color: inherit; }
                    .gh-content figure { margin: 3rem 0; }
                    .gh-content img { max-width: 100%; height: auto; }
                    .gh-content ul, .gh-content ol { margin-bottom: 2rem; padding-left: 2rem; }
                    .gh-content li { margin-bottom: 0.5rem; }
                `}</style>
            </motion.div>
        </article>
    );
};

export default BlogPost;
