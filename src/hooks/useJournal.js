import { useMemo } from 'react';
import { useContent } from '../contexts/ContentContext';
import { usePosts } from '../contexts/PostsContext';
import { journalEntries, photoEntries, postEntries } from '../lib/journal';

/** The journal in its three formats, derived once from the loaded content and posts. */
export default function useJournal() {
    const { content } = useContent();
    const { posts, status, retry } = usePosts();
    return useMemo(() => {
        const writing = postEntries(posts, content);
        const essays = writing.filter(entry => entry.format === 'essay');
        const notes = writing.filter(entry => entry.format === 'note');
        const photos = photoEntries(content);
        return {
            entries: journalEntries(content, posts),
            essays,
            notes,
            photos,
            lead: essays[0] || null,
            counts: { essay: essays.length, note: notes.length, photo: photos.length },
            status,
            retry,
        };
    }, [content, posts, status, retry]);
}
