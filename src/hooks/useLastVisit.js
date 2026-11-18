import { useEffect, useState } from 'react';

const VISIT_KEY = 'russ:last-visit';
const SINCE_KEY = 'russ:new-since';

function readSince() {
    try {
        const held = sessionStorage.getItem(SINCE_KEY);
        if (held !== null) return Number(held) || 0;
        const previous = Number(localStorage.getItem(VISIT_KEY)) || 0;
        sessionStorage.setItem(SINCE_KEY, String(previous));
        return previous;
    } catch {
        return 0;
    }
}

/**
 * When the reader was last here, held steady for the whole session so that
 * anything published since keeps its marker while they look around.
 * Returns 0 on a first visit, where nothing is marked.
 */
export default function useLastVisit() {
    const [since] = useState(readSince);
    useEffect(() => {
        try { localStorage.setItem(VISIT_KEY, String(Date.now())); } catch { /* Markers are optional. */ }
    }, []);
    return since;
}
