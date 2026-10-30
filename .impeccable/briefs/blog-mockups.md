# Russ Heritage blog redesign: mockup review

Scope: four isolated, responsive design mockups for discussion; no production application changes or publication. The user asked for a few homepage directions and one article layout. They explicitly authorized generating new sample copy based on their existing work.

## FORM

seed:684bde9c5ea94309. The user's pinned screenshots determine the visual direction. The work is a reading and browsing surface with original photographs, not a marketing site. Three alternative compositions are deliberately presented before selecting a production world. The library-reading-room candidate is the assigned grounded structure: the article's generous margin, useful author sidebar, and calm reading column. The other two first-viewport experiences carry the same source material through an open journal and an editorial front page.

Catalog alternatives were evaluated against the pinned brief. Hand-drawn zine, cutting bench, cloud quarry, folded sheet, and acetate manual declined for both audience identification and clarity relative to the supplied references; their transferable disciplines are readable hierarchy, clear ordering, open ground, responsive structural continuity, and deliberate margins. Swiss grid discipline is compatible with the photographic editorial direction, but the literal poster system's geometric-only imagery contradicts the user's photography requirement. User references, rather than catalog imagery, set the finish bar.

## PALETTE AND TYPE

The A proposal uses white and black with muted natural gray. B uses warm white, black, and a restrained olive accent. C uses warm ivory, black, and a restrained rust accent. All are light and airy as the user requested. DM Sans supplies clean headlines and navigation. Source Serif 4 supplies editorial display and comfortable long-form reading. All fonts are local.

## FIRST VIEWPORT

- A, Open Journal: latest file airy-journal-refined.html. The user authorized five refinements: unified sans-serif post headings with serif running text, an integrated hero, an interleaved feed with a slightly emphasized lead portrait, a quiet italic-first-name wordmark and muted green accents, and a shorter mobile hero with post headings before images. Subsequent user feedback identified the off-edge desktop white panel as unintentional. Revision refined-2 gives it a clear inset, equal internal padding, and vertical centering so photography frames every edge. The panel's internal margin now serves that intentional foreground composition; the masthead and journal grid remain as approved. The mobile rendering is pixel-identical to the preceding refinement. The previous refined panel is preserved in airy-journal-refined-v1.html with journal-refinement-v1.css; earlier hero and original A files also remain. No new visual-world selection or production implementation is asserted.
- B, Editorial: an editorial introduction, large featured photograph, lead essay alongside, and further mixed stories. Deem's photographic presence and the Art of Non-Conformity's curation are the primary references.
- C, Personal Welcome: a large single photograph, a warm introductory panel, and an immediate mixed feed. Kelsey O'Halloran is the primary opening-page reference.
- Article: James Clear's article reference governs the title, metadata, margins, serif body, heading rhythm, and quiet author sidebar. Mobile puts the reading column first and the author/sidebar content after the article.

## SIGNATURE AND BEHAVIOR

Photographs and writing occupy one unified journal in every proposal. Topic filters in A operate; all story links open the companion article layout with matching illustrative headline and copy. Article contents links work. Small review navigation links switch between proposals. No photographs were generated or modified. Image crop rules retain the subject's face.

## RESPONSIVE

Required review captures are desktop at 1440px and mobile at 390px for all four pages. Airy's left margin becomes an opening introduction and horizontally scrollable topic row. The editorial feature stacks. The personal welcome panel follows the photograph with a slight overlap. The article's reading column fills the available width; sidebar content follows the article. No document-level horizontal overflow is allowed.

## FINISH

Review only the requested mockups, not production implementation completeness. Original app code, data, assets, deployment and unrelated working-tree changes must remain untouched. The mockups need to make the distinct compositions, photographic presence, spaciousness, mixed content, and article reading layout easy to assess. The review wrapper/overview clearly labels new text and reading times as illustrative. No final design system or production-world selection is being asserted. There is no approved raster comp and no comp/build fidelity comparison is applicable.
