import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../contexts/ContentContext';
import { Instagram, Mail } from 'lucide-react';

const ThreadsIcon = ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12.0001C19 16.9707 14.9706 21.0001 10 21.0001H9.00003C6.46743 21.0001 4.36435 19.347 3.63583 17.0001M16.1213 14.1214C15.5587 14.6841 14.7813 15.0001 13.9852 15.0001C12.3284 15.0001 10.9852 13.657 10.9852 12.0001C10.9852 10.3433 12.3284 9.00012 13.9852 9.00012C14.7813 9.00012 15.5587 9.3162 16.1213 9.8788M19 12.0001C19 8.68641 16.3137 6.00012 13 6.00012C9.68629 6.00012 7 8.68641 7 12.0001C7 15.3138 9.68629 18.0001 13 18.0001C14.1687 18.0001 15.2642 17.6652 16.2071 17.0859M19 12.0001V8.50012" />
    </svg>
);

const SubstackIcon = ({ size = 20, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5399 9.61084V8.45785H1.46094V9.61084H22.5399ZM22.5399 2.05371V3.20671H1.46094V2.05371H22.5399ZM22.5399 11.6667V21.9463L11.9999 16.0527L1.46094 21.9463V11.6667H22.5399Z" />
    </svg>
);

const getSocialIcon = (name) => {
    const iconProps = { size: 20, color: 'currentColor' };
    switch (name.toLowerCase()) {
        case 'instagram': return <Instagram {...iconProps} />;
        case 'threads': return <ThreadsIcon {...iconProps} />;
        case 'substack': return <SubstackIcon {...iconProps} />;
        default: return null;
    }
}

const Contact = () => {
    const { content, loading } = useContent();
    if (loading) return null;
    return (
        <section id="contact" style={{
            minHeight: '80vh',
            padding: '100px 2rem',
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--sub-text-color)' }}>
                    Interested in working together?
                </p>
                <a
                    href={`mailto:${content.socials.find(s => s.name === 'Email')?.url.replace('mailto:', '')}`}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: '800',
                        textDecoration: 'none',
                        color: 'var(--accent-color)',
                        lineHeight: 1
                    }}
                    className="contact-link"
                >
                    GET IN TOUCH
                </a>
                <style>{`
                    .contact-link {
                        position: relative;
                        transition: opacity 0.3s;
                    }
                    .contact-link:hover {
                        opacity: 0.8;
                    }
                    .contact-link::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: currentColor;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .contact-link:hover::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                `}</style>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {content.socials.map((social) => (
                        social.name !== 'Email' && (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: 'var(--text-color)',
                                    transition: 'opacity 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                                className="social-icon-link"
                            >
                                {getSocialIcon(social.name)}
                                <span>{social.name}</span>
                            </a>
                        )
                    ))}
                </div>
                <style>{`
                    .social-icon-link:hover {
                        opacity: 0.6;
                    }
                `}</style>
            </motion.div>
        </section>
    );
};

export default Contact;
