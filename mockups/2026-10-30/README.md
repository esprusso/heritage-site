# Russ Heritage: blog redesign mockups

Three homepage directions and a companion article layout, prepared October 30, 2026.

- **A, The Open Journal:** the latest proposal is `airy-journal-refined.html`. It applies all five refinements requested by the user: consistent post typography, a hero aligned with the page's margins, interleaved photographs and essays with a lead story, a refined wordmark and muted green accents, and a compact mobile opening with story titles before images. Its isolated styles live in `journal-refinement.css`. Updated captures use the `airy-journal-refined-` prefix.
- **Previous A with hero:** `airy-journal.html`, also preserved as `airy-journal-hero-v1.html`. Captures use the `airy-journal-hero-` prefix.
- **Desktop panel correction:** revision `refined-2` places the white introductory panel fully inside the hero photograph, vertically centered with equal padding on all sides. The prior off-edge treatment is preserved in `airy-journal-refined-v1.html` with `journal-refinement-v1.css`; the current review menu's Previous A link opens that version. Current captures use the `airy-journal-panel-` prefix. The mobile opening is unchanged.
- **Original A:** `airy-journal-original.html`, with the original `airy-journal-desktop.png` and `airy-journal-mobile.png` captures.
- **B, The Editorial:** `editorial.html`. The Art of Non-Conformity's curated front-page structure and Deem's photographic confidence, with an off-white ground and expressive editorial type.
- **C, The Personal Welcome:** `personal.html`. A large photograph and warm introduction, drawing on Kelsey O'Halloran, followed immediately by mixed journal entries.
- **Article:** `article.html`. James Clear's confident sans-serif headline, serif reading text, generous column and margins, understated metadata, and an author sidebar. Links from stories demonstrate the same layout with alternate illustrative copy.
- **Presentation:** `index.html` compares the directions and links to each full mockup.

All sample headlines, excerpts, article text, and reading times are illustrative, generated with the user's authorization from the existing subject matter. They are not published posts. Photographs are unchanged copies of existing website assets. Typography uses locally bundled DM Sans and Source Serif 4 from Google Fonts.

The existing application, content, and deployment remain untouched. `PRODUCT.md` records the confirmed brief; `.impeccable` contains design-workflow context only. These mockups do not select or establish the final site design system.

For a local preview, run `python3 -m http.server 4891 --bind 127.0.0.1` from this directory, then open `http://127.0.0.1:4891/`.

Desktop and mobile captures are in `screenshots/`. The small bottom-right menu switches between proposals; captures omit that review-only menu.
