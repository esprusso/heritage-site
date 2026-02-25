import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(6rem, 15vw, 10rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'var(--accent-color)',
                    opacity: 0.1,
                    marginBottom: '-2rem'
                }}>
                    404
                </div>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    textTransform: 'uppercase'
                }}>
                    Lens Cap On?
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--sub-text-color)',
                    marginBottom: '3rem',
                    maxWidth: '400px',
                    margin: '0 auto 3rem'
                }}>
                    We couldn't focus on the page you're looking for. It might have been moved or doesn't exist.
                </p>

                <Link to="/" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '1rem 2.5rem',
                    backgroundColor: 'var(--accent-color)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'opacity 0.3s ease'
                }} className="back-home-btn">
                    Back to Portfolio
                </Link>
                <style>{`
                    .back-home-btn:hover {
                        opacity: 0.8;
                    }
                `}</style>
            </motion.div>
        </section>
    );
};

export default NotFound;
