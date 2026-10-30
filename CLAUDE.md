# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deployment

**ALWAYS run `npm run deploy` to deploy the site.** This builds the project AND publishes it to GitHub Pages (pushes the `dist/` output to the `gh-pages` branch). Running only `npm run build` updates the local `dist/` folder but does NOT update the live site.

After deploying, also commit and push source changes to `main`:
```
npm run deploy
git add <files>
git commit -m "..."
git push origin main
```

## Commands

- `npm run dev` — start local dev server (Vite, port 5173)
- `npm run build` — build to `dist/` (also copies `index.html` to `404.html` for SPA routing on GitHub Pages)
- `npm run lint` — check source and configuration with ESLint
- `npm run preview` — serve the production build locally
- `npm run deploy` — build + publish to GitHub Pages via `gh-pages`

## Architecture

**Stack:** Vite + React 18, React Router v6, Framer Motion, plain CSS (no Tailwind). Deployed to GitHub Pages.

**Routing:** SPA with React Router. The build copies `index.html` → `404.html` so deep links work on GitHub Pages.

**Routes:** `/` is the mixed journal; `/blog` is the searchable, topic-filtered archive; `/blog/:slug` renders Ghost articles; `/journal/:slug` renders configured photographic series. `/about` and `/contact` use the same editorial system. The original `/portfolio`, `/portfolio/:categoryId`, and `/vibe` routes remain available. Preserve gallery lightboxes, keyboard controls, and restricted-gallery confirmation.

**Content:** Site copy, the hero, about information, photography collections, journal configuration, and social links live in `/public/content.json`, loaded at runtime via `ContentContext`. The `journal.photoStories` entries reference existing unrestricted `portfolioCategories` model groups. Their image counts come from the underlying collection. Keep factual descriptions and original photographs intact; illustrative copy under `mockups/` is not publication copy.

**Blog:** `PostsContext` loads Ghost posts through `/src/lib/ghost.js` using `VITE_GHOST_API_URL` and `VITE_GHOST_CONTENT_API_KEY`. Requests share a short-lived cache. Journal topic assignment prefers public Ghost tags matching the configured topic IDs or tags, then `journal.postTopics`, then `life`. Use the configured `creativity`, `culture`, `community`, and `life` topics. `articleContent.js` sanitizes published HTML while preserving media and heading anchors; `ReadingLayout` provides the article and photographic-series frame. Preserve published text, dates, authors, and media.

**Fonts:** Locally hosted DM Sans for navigation and headings; Source Serif 4 for reading text, the personal introduction, and wordmark. Their licenses live in `/public/fonts/`.

**Styling:** `src/index.css` imports `src/styles/base.css`, `journal.css`, `reading.css`, and `pages.css`. The base defines the white, near-black, and muted-green tokens plus compatibility aliases used by the original gallery components. Consult `DESIGN.md` for the approved visual system. The approved homepage reference is `mockups/2026-10-30/airy-journal-refined.html` (refined-2); preserve its fully inset, vertically centered hero panel on desktop and its image-then-introduction flow on mobile.

**Images:** Originals remain in `/public/images/`. Responsive WebP derivatives for the hero and journal previews live in `/public/images/journal/`, with origin sidecars. Keep originals untouched when generating new derivatives.
