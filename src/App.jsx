import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import AIShowcase from './components/AIShowcase';
import VideoShowcase from './components/VideoShowcase';
import Writing from './components/Writing';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import { Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';

const Home = () => (
    <>
        <Hero />
        <Gallery />
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Writing />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
