import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-heading, Montserrat, sans-serif)'
                }} role="alert">
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Something went wrong
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'var(--sub-text-color, #666)',
                        marginBottom: '2rem',
                        maxWidth: '500px'
                    }}>
                        An unexpected error occurred. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => {
                            this.setState({ hasError: false, error: null });
                            window.location.href = '/';
                        }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '1rem 2.5rem',
                            backgroundColor: 'var(--accent-color, #000)',
                            color: 'var(--bg-color, #fff)',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            cursor: 'pointer',
                            transition: 'opacity 0.3s ease'
                        }}
                    >
                        Return Home
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
