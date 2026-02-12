import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Writing from './components/Writing';
import Contact from './components/Contact';

import { Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';

const Home = () => (
    <>
        <Hero />
        <Gallery />
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
            </Routes>
        </Layout>
    );
}

export default App;
