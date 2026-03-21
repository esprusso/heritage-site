import React from 'react';
import { MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            {/* Background image */}
            <div className="hero-bg" aria-hidden="true" />

            {/* Split layout */}
            <div className="hero-split">
                <div className="hero-panel hero-panel-left hero-fade-in">
                    <a
                        href="#writing"
                        className="hero-block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="hero-block-label">Stories & Essays</span>
                        <span className="hero-block-title">Ink</span>
                        <span className="hero-block-hint">Read</span>
                    </a>
                </div>

                {/* Center divider with name and location */}
                <div className="hero-center hero-reveal">
                    <div className="hero-divider-line" />
                    <div className="hero-center-content">
                        <span className="hero-name">Russ Heritage</span>
                        <span className="hero-location">
                            <MapPin size={10} strokeWidth={1.5} />
                            Twin Cities
                        </span>
                    </div>
                    <div className="hero-divider-line" />
                </div>

                <div className="hero-panel hero-panel-right hero-fade-in">
                    <a
                        href="#portfolio"
                        className="hero-block"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="hero-block-label">Editorial & Portraiture</span>
                        <span className="hero-block-title">Lens</span>
                        <span className="hero-block-hint">View</span>
                    </a>
                </div>
            </div>

            <style>{`
                .hero-section {
                    height: 100vh;
                    height: 100dvh;
                    position: relative;
                    overflow: hidden;
                    color: #ffffff;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/mm-2.jpg);
                    background-size: cover;
                    background-position: center;
                }
                .hero-split {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    height: 100%;
                    align-items: stretch;
                }

                /* Panels are passive layout containers */
                .hero-panel {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* The clickable block — contained around the text */
                .hero-block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: #fff;
                    cursor: pointer;
                    padding: 3rem 4rem;
                    position: relative;
                    border: 1px solid rgba(255, 255, 255, 0);
                    transition: border-color 0.5s ease, background 0.5s ease;
                }
                .hero-block:hover {
                    border-color: rgba(255, 255, 255, 0.25);
                    background: rgba(0, 0, 0, 0.15);
                }
                .hero-block:focus-visible {
                    outline: 2px solid rgba(255,255,255,0.6);
                    outline-offset: 4px;
                }

                .hero-block-label {
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.4);
                    margin-bottom: 1.25rem;
                    transition: color 0.4s ease;
                }
                .hero-block:hover .hero-block-label {
                    color: rgba(255, 255, 255, 0.65);
                }
                .hero-block-title {
                    font-family: var(--font-display);
                    font-size: clamp(4rem, 10vw, 8rem);
                    font-weight: 400;
                    font-style: italic;
                    letter-spacing: 0.02em;
                    line-height: 1;
                    transition: letter-spacing 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .hero-block:hover .hero-block-title {
                    letter-spacing: 0.06em;
                }
                .hero-block-hint {
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0);
                    margin-top: 1.5rem;
                    transition: color 0.4s ease, transform 0.4s ease;
                    transform: translateY(4px);
                }
                .hero-block:hover .hero-block-hint {
                    color: rgba(255, 255, 255, 0.5);
                    transform: translateY(0);
                }

                /* Center divider */
                .hero-center {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 0;
                    position: relative;
                    z-index: 2;
                    transform-origin: center;
                }
                .hero-divider-line {
                    flex: 1;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.2);
                }
                .hero-center-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 2rem 0;
                    white-space: nowrap;
                }
                .hero-name {
                    font-family: var(--font-heading);
                    font-size: 0.65rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.5);
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
                .hero-location {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.3rem;
                    font-family: var(--font-heading);
                    font-size: 0.55rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.3);
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }

                /* Entrance animations */
                @keyframes heroFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes heroReveal {
                    from { opacity: 0; transform: scaleY(0); }
                    to { opacity: 1; transform: scaleY(1); }
                }
                .hero-fade-in {
                    animation: heroFadeIn 0.8s ease 0.2s both;
                }
                .hero-reveal {
                    animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
                    transform-origin: center;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .hero-bg {
                        background-position: 62% center;
                    }
                    .hero-split {
                        flex-direction: column;
                    }
                    .hero-panel {
                        flex: 1;
                    }
                    .hero-block {
                        padding: 2rem 3rem;
                        border-color: rgba(255, 255, 255, 0.15);
                    }
                    .hero-block-title {
                        font-size: clamp(3.5rem, 14vw, 5rem);
                    }
                    .hero-block-label {
                        font-size: 0.6rem;
                        margin-bottom: 0.75rem;
                    }
                    .hero-block-hint {
                        margin-top: 1rem;
                        color: rgba(255, 255, 255, 0.3);
                        transform: translateY(0);
                    }
                    .hero-center {
                        width: 100%;
                        height: 0;
                        flex-direction: row;
                    }
                    .hero-divider-line {
                        flex: 1;
                        height: 1px;
                        width: auto;
                    }
                    .hero-center-content {
                        flex-direction: row;
                        padding: 0 1.5rem;
                        gap: 1rem;
                    }
                    .hero-name {
                        writing-mode: horizontal-tb;
                    }
                    .hero-location {
                        writing-mode: horizontal-tb;
                        flex-direction: row;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
