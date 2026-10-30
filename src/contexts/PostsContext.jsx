import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getPosts } from '../lib/ghost';

const PostsContext = createContext(null);

export function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState('loading');
    const [revision, setRevision] = useState(0);
    const retry = useCallback(() => setRevision(value => value + 1), []);

    useEffect(() => {
        let active = true;
        setStatus('loading');
        getPosts({ refresh: revision > 0, throwOnError: true })
            .then(data => {
                if (!active) return;
                setPosts(data);
                setStatus('ready');
            })
            .catch(() => { if (active) setStatus('error'); });
        return () => { active = false; };
    }, [revision]);

    return <PostsContext.Provider value={{ posts, status, retry }}>{children}</PostsContext.Provider>;
}

export function usePosts() {
    return useContext(PostsContext);
}
