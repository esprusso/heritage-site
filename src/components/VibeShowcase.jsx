import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const VibeShowcase = () => {
    const { content, loading } = useContent();
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const triggerRef = useRef(null);

    // Prevent body scrolling when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => {
                closeButtonRef.current?.focus();
            });
        } else {
            document.body.style.overflow = '';
            triggerRef.current?.focus();
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedProject]);

    const closeProject = useCallback(() => {
        setSelectedProject(null);
    }, []);

    // Keyboard navigation for modal
    useEffect(() => {
        if (!selectedProject) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeProject();
            if (e.key === 'ArrowRight' && selectedProject.media?.length > 1) {
                setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
            }
            if (e.key === 'ArrowLeft' && selectedProject.media?.length > 1) {
                setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedProject, closeProject]);

    // Focus trap for modal
    useEffect(() => {
        if (!selectedProject || !modalRef.current) return;
        const modal = modalRef.current;

        const handleTab = (e) => {
            if (e.key !== 'Tab') return;
            const focusable = modal.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };

        modal.addEventListener('keydown', handleTab);
        return () => modal.removeEventListener('keydown', handleTab);
    }, [selectedProject]);

    if (loading || !content?.vibe || content.vibe.length === 0) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="status">
                <p style={{ fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {loading ? 'Loading Vibe...' : 'No Vibe Projects Found'}
                </p>
            </div>
        );
    }

    const projects = content.vibe;

    const handleNextMedia = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
        }
    };

    const handlePrevMedia = (e) => {
        e.stopPropagation();
        if (selectedProject) {
            setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
        }
    };

    const openProject = (project, element) => {
        triggerRef.current = element;
        setSelectedProject(project);
        setCurrentMediaIndex(0);
    };

    return (
        <section
            id="vibe-showcase"
            style={{
                minHeight: '100vh',
                padding: '8rem 2rem 4rem',
                backgroundColor: 'var(--bg-color)',
                color: 'var(--text-color)'
            }}
        >
            <style>{`
                .vibe-card {
                    border: 1px solid var(--border-color);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    outline: none;
                }
                .vibe-card:hover,
                .vibe-card:focus-visible {
                    transform: translateY(-4px);
                }
                .vibe-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .vibe-card-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                .vibe-tag {
                    border: 1px solid var(--border-color);
                    padding: 0.3rem 0.8rem;
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--sub-text-color);
                    display: inline-block;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .vibe-nav-btn {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: var(--text-color);
                    transition: background 0.2s ease;
                }
                .vibe-nav-btn:hover {
                    background: var(--border-color);
                }
                .vibe-nav-btn:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .vibe-close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--text-color);
                    padding: 0.5rem;
                    transition: opacity 0.2s ease;
                }
                .vibe-close-btn:hover {
                    opacity: 0.6;
                }
                .vibe-close-btn:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
            `}</style>

            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.25em',
                        color: 'var(--sub-text-color)',
                        marginBottom: '1.5rem',
                        fontWeight: 500
                    }}>
                        Side Projects
                    </p>
                    <h1 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        color: 'var(--text-color)'
                    }}>
                        Vibe Coded
                    </h1>
                    <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        color: 'var(--sub-text-color)',
                        maxWidth: '500px',
                        margin: '1rem auto 0',
                        lineHeight: 1.6
                    }}>
                        Application interfaces designed for immersive digital experiences.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="vibe-card"
                            role="button"
                            tabIndex={0}
                            aria-label={`View project: ${project.title}`}
                            onClick={(e) => openProject(project, e.currentTarget)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    openProject(project, e.currentTarget);
                                }
                            }}
                        >
                            {/* Card Media Preview */}
                            <motion.div
                                layoutId={`media-container-${project.id}`}
                                style={{
                                    width: '100%',
                                    height: '240px',
                                    backgroundColor: '#f5f5f5',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {project.media && project.media.length > 0 && (
                                    <motion.img
                                        layoutId={`image-${project.id}-0`}
                                        src={project.media[0].src}
                                        alt={`${project.title} preview`}
                                        loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                )}
                            </motion.div>

                            <motion.div layoutId={`content-${project.id}`} className="vibe-card-content">
                                <motion.h3
                                    layoutId={`title-${project.id}`}
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.25rem',
                                        fontWeight: 600,
                                        marginBottom: '0.8rem',
                                        color: 'var(--text-color)'
                                    }}
                                >
                                    {project.title}
                                </motion.h3>

                                <motion.p
                                    layoutId={`desc-${project.id}`}
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--sub-text-color)',
                                        marginBottom: '1.5rem',
                                        flexGrow: 1,
                                        lineHeight: 1.6
                                    }}
                                >
                                    {project.description.substring(0, 100)}{project.description.length > 100 ? '...' : ''}
                                </motion.p>

                                {project.techStack && (
                                    <motion.div layoutId={`tech-${project.id}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="vibe-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded Modal View */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 1000,
                            }}
                            onClick={closeProject}
                            aria-hidden="true"
                        />

                        <motion.div
                            ref={modalRef}
                            role="dialog"
                            aria-modal="true"
                            aria-label={`${selectedProject.title} project details`}
                            layoutId={`card-${selectedProject.id}`}
                            style={{
                                position: 'fixed',
                                top: '5%',
                                left: '5%',
                                right: '5%',
                                bottom: '5%',
                                zIndex: 1001,
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--border-color)',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '1.5rem 2rem',
                                borderBottom: '1px solid var(--border-color)'
                            }}>
                                <motion.h3
                                    layoutId={`title-${selectedProject.id}`}
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '1.5rem',
                                        fontWeight: 600,
                                        color: 'var(--text-color)',
                                        margin: 0
                                    }}
                                >
                                    {selectedProject.title}
                                </motion.h3>

                                <button
                                    ref={closeButtonRef}
                                    className="vibe-close-btn"
                                    onClick={closeProject}
                                    aria-label="Close project details"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexGrow: 1,
                                overflow: 'auto',
                                flexWrap: 'wrap'
                            }}>
                                {/* Media Gallery Area */}
                                <div style={{
                                    flex: '1 1 60%',
                                    minWidth: '300px',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f5f5f5'
                                }}>
                                    <motion.div
                                        layoutId={`media-container-${selectedProject.id}`}
                                        style={{
                                            width: '100%',
                                            height: '60vh',
                                            maxHeight: '600px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <AnimatePresence mode="wait">
                                            {selectedProject.media && selectedProject.media.length > 0 && selectedProject.media[currentMediaIndex].type === 'image' && (
                                                <motion.img
                                                    key={`media-${currentMediaIndex}`}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    src={selectedProject.media[currentMediaIndex].src}
                                                    alt={selectedProject.media[currentMediaIndex].caption || selectedProject.title}
                                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                                />
                                            )}
                                        </AnimatePresence>

                                        {/* Gallery Controls */}
                                        {selectedProject.media && selectedProject.media.length > 1 && (
                                            <>
                                                <div style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)' }}>
                                                    <button className="vibe-nav-btn" onClick={handlePrevMedia} aria-label="Previous image">
                                                        <ChevronLeft size={20} />
                                                    </button>
                                                </div>
                                                <div style={{ position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)' }}>
                                                    <button className="vibe-nav-btn" onClick={handleNextMedia} aria-label="Next image">
                                                        <ChevronRight size={20} />
                                                    </button>
                                                </div>
                                                {/* Caption & Counter */}
                                                <div aria-live="polite" aria-atomic="true" style={{ position: 'absolute', bottom: '1rem', left: 0, right: 0, textAlign: 'center' }}>
                                                    <span style={{
                                                        background: 'var(--bg-color)',
                                                        padding: '0.4rem 0.8rem',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 500,
                                                        color: 'var(--sub-text-color)',
                                                        border: '1px solid var(--border-color)',
                                                        letterSpacing: '0.02em'
                                                    }}>
                                                        {selectedProject.media[currentMediaIndex].caption || `${currentMediaIndex + 1} / ${selectedProject.media.length}`}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Project Details Area */}
                                <div style={{
                                    flex: '1 1 40%',
                                    padding: '3rem',
                                    minWidth: '300px',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <motion.div layoutId={`content-${selectedProject.id}`}>
                                        <h4 style={{
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.15em',
                                            fontSize: '0.7rem',
                                            color: 'var(--sub-text-color)',
                                            marginBottom: '1rem',
                                            fontWeight: 500
                                        }}>
                                            About Project
                                        </h4>
                                        <motion.p
                                            layoutId={`desc-${selectedProject.id}`}
                                            style={{
                                                fontSize: '1rem',
                                                lineHeight: 1.7,
                                                color: 'var(--sub-text-color)',
                                                marginBottom: '3rem'
                                            }}
                                        >
                                            {selectedProject.description}
                                        </motion.p>

                                        {selectedProject.techStack && (
                                            <>
                                                <h4 style={{
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.15em',
                                                    fontSize: '0.7rem',
                                                    color: 'var(--sub-text-color)',
                                                    marginBottom: '1rem',
                                                    fontWeight: 500
                                                }}>
                                                    Built With
                                                </h4>
                                                <motion.div layoutId={`tech-${selectedProject.id}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                    {selectedProject.techStack.map(tech => (
                                                        <span key={tech} className="vibe-tag" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </motion.div>
                                            </>
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VibeShowcase;
