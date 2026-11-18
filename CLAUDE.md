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
- `npm test` — check the About page content and fallback behavior, and how posts sort into notes and essays
- `npm run preview` — serve the production build locally
- `npm run deploy` — build + publish to GitHub Pages via `gh-pages`

## Architecture

**Stack:** Vite + React 18, React Router v6, Framer Motion, plain CSS (no Tailwind). Deployed to GitHub Pages.

**Routing:** SPA with React Router. The build copies `index.html` → `404.html` so deep links work on GitHub Pages.

**Routes:** `/` is the front page: the newest essay leads, the notes thread runs beside it, earlier essays and the photographic series follow. `/blog` is the searchable, topic-filtered archive, with everything on one dated thread; `/essays`, `/notes`, and `/photos` are the same thread for one format. `/blog/:slug` renders Ghost essays and notes; `/journal/:slug` renders configured photographic series. `/about` and `/contact` use the same system. The original `/portfolio`, `/portfolio/:categoryId`, and `/vibe` routes remain available. Preserve gallery lightboxes, keyboard controls, and restricted-gallery confirmation.

**Content:** Site copy, fallback about information, photography collections, journal configuration, and social links live in `/public/content.json`, loaded at runtime via `ContentContext`. The `journal.photoStories` entries reference existing unrestricted `portfolioCategories` model groups. Their image counts come from the underlying collection; `thumbs` maps each original to its small derivative, and an optional `date` places a series on the thread by day. Keep factual descriptions and original photographs intact; illustrative copy under `mockups/` is not publication copy.

Vite derives a content revision from `public/content.json` for the runtime request URL. The provider revalidates that versioned URL and checks the journal configuration before rendering, so returning visitors do not mix a new app with an older cached content file.

**Blog:** `PostsContext` loads Ghost posts through `/src/lib/ghost.js` using `VITE_GHOST_API_URL` and `VITE_GHOST_CONTENT_API_KEY`. Requests share a short-lived cache. Journal topic assignment prefers public Ghost tags matching the configured topic IDs or tags, then `journal.postTopics`, then `life`. Use the configured `creativity`, `culture`, `community`, and `life` topics. `articleContent.js` sanitizes published HTML while preserving media and heading anchors; `ReadingLayout` provides the essay frame. Preserve published text, dates, authors, and media.

**Notes and essays:** `src/lib/journal.js` sorts each Ghost post into a format. A post tagged `note` or `#note` is a note; one tagged `essay` or `#essay` is an essay; an untagged post is a note at 120 words or fewer and an essay above that. `journal.formats` in `content.json` holds the tags and the word limit. A note is shown in full where it stands (the front-page column, the archive thread, its own page); a tagged note longer than the limit is shortened with a link. A note's title is hidden when it is Ghost's `(Untitled)` or repeats the note's opening words. Notes joins the navigation once the first note is published. `useLastVisit` marks entries published since the reader's previous visit.

To preview notes before publishing any, open the dev server with `?sample-notes` (and `?sample-notes=off` to remove them). The samples live in `mockups/2026-11-18-soft-signal-site/` and are excluded from production builds.

The front page leads with the newest published essay by `published_at`, independent of response ordering and of any newer notes. Its cover image, headline, excerpt, and reading link update from Ghost without a site rebuild. A missing cover uses the configured site photograph; loading reserves the lead's layout, and empty/error states show the introduction over the site photograph with a retry. Before the first note exists, the Ink column introduces the journal. Keep the reading action visible on mobile.

**About:** `/about` reads the published Ghost **page** with slug `about` on each visit. Edit it in Ghost's **Pages** section (initial title: `Hi, I’m Russ.`), keep its URL slug `about` and access public, then click **Update**. The page title, rich-text body, optional feature image/alt text, and search metadata update without redeploying the website. The first paragraph is the lead; links, headings, lists, and media use the existing reading styles and HTML sanitizer. With no feature image, the original portrait remains. A missing/unpublished page or request failure uses the local About copy. An intentionally empty published body stays empty. `npm test` covers the content selection contract.

**Fonts:** Locally hosted Newsreader for headlines and notes; Instrument Sans for reading text, navigation, labels, and controls. Both are the original variable families from the brand kit, with their licenses in `/public/fonts/`.

**Brand:** The identity is the russ! Soft Signal brand kit (`~/Desktop/design/russ-soft-signal-brand-kit`): Ink `#000000`, Ivory `#F5F0E5`, Signal `#F3531C`, Stone, Muted, and Deep Signal. `BrandMark.jsx` holds the unaltered vector mark; icons and the full-colour master are in `/public/brand/`. Scale the mark uniformly, keep it on an Ink field, and give Signal one clear job per view.

**Styling:** `src/index.css` imports `src/styles/base.css`, `journal.css`, `archive.css`, `reading.css`, and `pages.css`. The base defines the kit's tokens plus compatibility aliases used by the original gallery components. Consult `DESIGN.md` for the visual system. The approved homepage composition is `.impeccable/mocks/decision/front-page-notes-thread.html`: lead essay at the left, Ink notes column with the tapered Signal stem at the right; on a phone the lead comes first, then the latest three notes.

**Images:** Originals remain in `/public/images/`. Responsive WebP derivatives for the hero, series covers, and series thumbnails live in `/public/images/journal/`, with origin sidecars. Keep originals untouched when generating new derivatives.
