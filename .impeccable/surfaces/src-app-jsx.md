---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/components/Journal.jsx","src/components/BlogPost.jsx","src/index.css"]
---

# Soft Signal journal: front page with a notes thread

Read mode. The user asked for a redesign guided by the russ! Soft Signal brand kit: a modern editorial blog that is exciting to add shortform and longform content to, visually interesting, easy to navigate. From the surface round they liked the dated thread and the front page, asked for the two combined, and chose "Front page + notes thread" on November 18, 2026.

## Direction contract

THESIS: Two speeds on one front page. The newest essay leads at display scale, and short notes run beside it on a dated stem, so publishing either kind changes the first screen. It refuses the single mixed card feed where a note and an essay get the same box.

OWN-WORLD: The Soft Signal kit, unaltered. Ivory ground, Ink type and fields, Signal for the stem, the points and the primary action, Stone rules, Muted secondary text, Deep Signal links. Newsreader for headlines and for notes; Instrument Sans for reading copy, navigation and labels. Ink logo tile with the russ! mark, rounded-square points, a tapered upright, radii 6/12/16, flat surfaces.

STORY: A visitor sees the latest long piece, reads the newest notes in place without opening anything, moves on to photographs and earlier essays, and reaches any format in one step from the masthead. The archive holds everything on one dated thread.

FIRST VIEWPORT: Masthead with the Ink logo tile at the left and Essays, Notes, Photos, Archive, About at the right. Left two-thirds: essay headline in Newsreader up to 92px, a meta row opened by a Signal point, the cover, its caption, then the excerpt beside a Signal "Read the essay" button. Right third: an Ink column titled Notes with a tapered Signal stem, and an Ivory point, date and full text for each note, running past the fold. On a phone the lead comes first, then the notes thread.

FORM: User-combined hybrid of the dealt dated-thread and front-page structures, code-led. Composition reference: .impeccable/mocks/decision/front-page-notes-thread.html. seed:161823972e19e432. Signature interaction: the notes thread. Its stem draws down once on load, a note published since the reader's last visit carries a Signal point, and the stem ends in the brand's rounded-square dot.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Scope

All routes. Notes are Ghost posts tagged `note` (or `#note`), or any post of 120 words or fewer; an `essay` tag keeps a short post long-form. New `/essays`, `/notes`, and `/photos` views share the archive thread; `/blog` stays the searchable archive and keeps its `topic` and `q` parameters. Article, photo-story, About and Contact pages move to the same system. Portfolio, category galleries and `/vibe` keep their behaviour, lightboxes, keyboard controls and restricted-gallery confirmation, and take the new tokens. Published text, dates, authors and media stay as authored; sample notes exist only for local preview.

## Open

Nothing published is a note yet, so the live Notes column starts with the introduction until the first one goes out.
