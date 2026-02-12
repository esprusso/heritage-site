import ScrollPrompt from './ScrollPrompt';

const Gallery = () => {
    const { content, loading } = useContent();

    if (loading) return null;

    return (
        <section id="portfolio" style={{
            padding: '2rem 2rem 8rem 2rem', // Increased bottom padding
            scrollMarginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div className="gallery-grid" style={{ width: '100%' }}>
                {content.photography.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        style={{ marginBottom: '1.5rem', breakInside: 'avoid' }}
                    >
                        <img
                            src={photo.src}
                            alt={photo.caption || ''}
                            style={{
                                width: '100%',
                                display: 'block',
                            }}
                        />
                    </motion.div>
                ))}
            </div>

            <ScrollPrompt targetId="writing" label="Read Words" />

            <style>{`
                .gallery-grid {
                    column-count: 3;
                    column-gap: 1.5rem;
                }
                @media (max-width: 1024px) {
                    .gallery-grid { column-count: 2; }
                }
                @media (max-width: 600px) {
                    .gallery-grid { column-count: 1; }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
