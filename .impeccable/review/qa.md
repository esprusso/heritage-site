# Implementation verification — October 30, 2026

Production preview: http://127.0.0.1:4173/. This is a local build; nothing has been published or pushed.

## Build and static checks

- `npm run build` passed; `dist/index.html` and `dist/404.html` match.
- `npm run lint` passed with no warnings; `git diff --check` passed.
- Scoped Impeccable detector returned `[]` for the new styles and changed UI components. No new exceptions.
- Provenance scan passed for all nine new WebP derivatives. Existing originals were preserved.

## Browser verification

- Home contains six real entries, mixing three unrestricted photo collections with the three live Ghost posts.
- Topic filters: Culture 2; Creativity 3; Community 1; All 6. URL parameters update.
- Archive search finds Remember the Old Internet; unmatched search displays the empty state; Show all stories restores six entries.
- Meredith photo story contains five original photographs with the correct photographic credit.
- Remember the Old Internet preserves its published date, original text and images, and five table-of-contents links. The first anchor scrolls its heading to the intended top inset.
- Write like it's 1999 preserves its YouTube embed, title, and responsive 16:9 geometry (720 × 405 on desktop).
- Original editorial gallery opens its lightbox; ArrowRight advances from photo 1 to photo 2; Escape closes it.
- Restricted gallery confirmation remains visible with no gallery photographs rendered before confirmation. Go back works.
- Legacy /#contact opens the contact route with the original email link.
- Missing Ghost post and unknown site routes display their appropriate recovery pages.
- Aborting the Ghost request leaves three static photographic stories and a retry control. Restoring the network and retrying restores the six entries.
- Aborting content.json displays the journal recovery page. Restoring the request and retrying returns to the journal.
- No horizontal document overflow at widths 1600, 1440, 1280, 768, 724, 390, 375, or 320.
- Sanitizer removes scripts, inline event handlers, and unsafe iframe sources; preserves authored heading IDs; generates unique IDs for repeated headings.
- First functional suite produced no uncaught page errors. Expected missing-post and deliberate network-failure checks produced only the corresponding network errors.

## Screenshot evidence

All final normal screenshots were captured from the production build after the expected real content, local fonts, and images were ready. Each file was opened and checked. The archive loading capture was replaced with a settled six-entry capture before review.

- desktop.png: home, 1440 × 2492 full page; homepage-opening.png: 1440 × 1200.
- home-wide.png: 1600 × 1000; home-1280.png: 1280 × 1000.
- home-tablet.png: 768 × 1000; user-724.png: 724 × 1000 (user pane width).
- mobile.png: 390 × 844; home-375.png: 375 × 844; home-320.png: 320 × 844.
- article-opening.png: 1440 × 1400; article-desktop.png: 1440 × 5710 full page; article-mobile.png: 390 × 844.
- photo-story.png, archive.png, about.png, contact.png: 1440 × 1200 openings.
- posts-error.png and content-error.png: deliberate error-state captures from the same production build.

Approved blueprint: mockups/2026-10-30/airy-journal-refined.html with journal-refinement.css, screenshot screenshots/airy-journal-panel-opening.png. Companion article blueprint: mockups/2026-10-30/article.html and screenshots/article-desktop.png. Factual published copy and photo collections intentionally replace illustrative mockup essays; the approved layout and typography are retained.
