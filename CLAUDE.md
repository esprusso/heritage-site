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
- `npm run deploy` — build + publish to GitHub Pages via `gh-pages`

## Architecture

**Stack:** Vite + React 18, React Router v6, Framer Motion, plain CSS (no Tailwind). Deployed to GitHub Pages.

**Routing:** SPA with React Router. The build copies `index.html` → `404.html` so deep links work on GitHub Pages.

**Content:** All site content (title, hero, about, photography, writing, socials) lives in `/public/content.json` and is loaded at runtime via `ContentContext`. To update copy or add images, edit that file — no component changes needed.

**Blog:** Fetches posts from Ghost CMS via `VITE_GHOST_API_URL` and `VITE_GHOST_CONTENT_API_KEY` environment variables (`/src/lib/ghost.js`).

**Fonts:** Cormorant Garamond (`--font-display`) for the hero display title; Montserrat (`--font-heading`, `--font-body`) for everything else. Both imported from Google Fonts in `src/index.css`.

**Styling:** CSS variables defined in `:root` in `src/index.css`. Components use inline `style={}` props and scoped `<style>` tags in JSX. Key variables: `--font-display`, `--font-heading`, `--bg-color`, `--text-color`, `--accent-color`, `--border-color`.

**Images:** Served from `/public/images/`. Referenced in components and `content.json` as `/images/<filename>`.
