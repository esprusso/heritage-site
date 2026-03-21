import React, { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import AIShowcase from './components/AIShowcase';
import VideoShowcase from './components/VideoShowcase';
import Writing from './components/Writing';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';

// Lazy load non-home routes — these are separate pages, not needed on initial load
const VibeShowcase = lazy(() => import('./components/VibeShowcase'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const CategoryGallery = lazy(() => import('./components/CategoryGallery'));
const NotFound = lazy(() => import('./components/NotFound'));

const RouteLoader = () => (
    <div style={{
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--sub-text-color)'
    }}>
        Loading...
    </div>
);

const Home = () => (
    <>
        <Hero />
        <FeaturedWork />
        <AIShowcase />
        <VideoShowcase />
        <Writing />
        <About />
        <Contact />
    </>
);

function App() {
    return (
        <Layout>
            <Suspense fallback={<RouteLoader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:categoryId" element={<CategoryGallery />} />
                    <Route path="/vibe" element={<VibeShowcase />} />
                    <Route path="/blog" element={<Writing />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default App;
