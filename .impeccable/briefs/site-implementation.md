# Personal journal implementation

The user approved Open Journal A, revision refined-2, and said: Love it. Let's go with it. Implement the real React site using the approved HTML mockup and the companion article blueprint. This is local implementation and verification; no publication is requested yet.

## Direction contract

THESIS: One personal journal brings photographs and essays into the same reading experience. Preserve original published content and the existing photography archive.

OWN-WORLD: White ground, near-black type, muted green links and selection. Locally hosted DM Sans headings, Source Serif 4 reading text and personal introduction, italic Russ wordmark. Rectangular photographs and generous whitespace.

STORY: A reader arrives through an inviting photograph, browses interleaved real entries, filters by topic, opens a readable essay or photographic series, and continues through the archive.

FIRST VIEWPORT: Match approved refined-2: quiet masthead; expansive rooftop photograph; fully inset, vertically centered white introduction with balanced padding; sidebar and two-column mixed journal below. Mobile keeps the compact image and introduction, with post headings before their images. Article pages follow the approved James Clear-inspired title, serif reading column, quiet biography and optional contents sidebar.

FORM: User-selected Open Journal A, code-led approved HTML blueprint. seed:684bde9c5ea94309. Reference mockups/2026-10-30/airy-journal-refined.html and screenshots/airy-journal-panel-opening.png. Article blueprint mockups/2026-10-30/article.html. Content differs intentionally: use actual Ghost posts and factual existing portrait collections, never publish illustrative mockup essays.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Scope and verification

Keep existing /blog/:slug, /portfolio, /portfolio/:categoryId, /about and /vibe routes functional. Preserve gallery lightboxes, keyboard controls and restricted-gallery confirmation. Home and /blog become a unified journal and archive, with new photographic story routes backed by existing collections. Header and footer carry the approved system throughout. Verify built assets, live Ghost content, real article media, topic/search/navigation interactions, errors and missing routes, desktop and mobile. Keep unrelated untracked files and all mockup revisions. The pre-existing lint command lacks configuration; add a scoped lint configuration if necessary to validate this implementation.
