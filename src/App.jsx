import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import FrontPage from './components/FrontPage';

const Archive = lazy(() => import('./components/Archive'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const PhotoStory = lazy(() => import('./components/PhotoStory'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const CategoryGallery = lazy(() => import('./components/CategoryGallery'));
const VibeShowcase = lazy(() => import('./components/VibeShowcase'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
    return (
        <Layout>
            <Suspense fallback={<div className="page-state" role="status"><p>Opening the journal…</p></div>}>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/blog" element={<Archive />} />
                    <Route path="/essays" element={<Archive format="essay" />} />
                    <Route path="/notes" element={<Archive format="note" />} />
                    <Route path="/photos" element={<Archive format="photo" />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/journal/:slug" element={<PhotoStory />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/portfolio/:categoryId" element={<CategoryGallery />} />
                    <Route path="/vibe" element={<VibeShowcase />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Layout>
    );
}
