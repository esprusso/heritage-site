import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/content.json?v=${import.meta.env.VITE_CONTENT_REVISION}`, { cache: 'no-cache' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load content configuration');
                }
                return response.json();
            })
            .then((data) => {
                if (!data.journal || !Array.isArray(data.journal.topics)) {
                    throw new Error('The content configuration does not match this version of the site');
                }
                setContent(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading content:", err);
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        <ContentContext.Provider value={{ content, loading, error }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => useContext(ContentContext);
