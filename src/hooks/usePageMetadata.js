import { useEffect } from 'react';

export default function usePageMetadata(title, description) {
    useEffect(() => {
        document.title = title ? `${title} · Russ Heritage` : 'Russ Heritage — A personal journal';
        if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }, [title, description]);
}
