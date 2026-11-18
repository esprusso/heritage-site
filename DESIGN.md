---
name: Russ Heritage
description: Essays, short notes, and photographs as one journal, in the russ! Soft Signal identity.
colors:
  ink: "#000000"
  ivory: "#f5f0e5"
  signal: "#f3531c"
  stone: "#d8d1c7"
  muted: "#6c665c"
  signal-deep: "#af3614"
  on-ink-muted: "#b5b2a9"
  ink-rule: "#3b3a37"
typography:
  display:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(44px, 6.4vw, 92px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.02em"
  page-title:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "clamp(40px, 5.6vw, 80px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.02em"
  statement:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "72px"
    letterSpacing: "-.015em"
  headline:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "50px"
    letterSpacing: "-.015em"
  row-title:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: "42px"
    letterSpacing: "-.015em"
  title:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: "36px"
    letterSpacing: "-.015em"
  note:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: "30px"
    letterSpacing: "-.01em"
  note-reading:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "36px"
    letterSpacing: "-.01em"
  lede:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "28px"
  reading:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  nav:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: "20px"
  control:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: "20px"
  meta:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "20px"
  flag:
    fontFamily: "'Instrument Sans', Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "18px"
rounded:
  chip: "6px"
  control: "12px"
  card: "16px"
  point: "24%"
spacing:
  "4": "4px"
  "8": "8px"
  "12": "12px"
  "16": "16px"
  "20": "20px"
  "24": "24px"
  "28": "28px"
  "32": "32px"
  "40": "40px"
  "48": "48px"
  "56": "56px"
  "64": "64px"
  "72": "72px"
  "96": "96px"
  inline-gap: "10px"
  gutter: "48px"
  gutter-medium: "32px"
  gutter-narrow: "24px"
  page: "1344px"
  control-height: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
  button-primary-on-ink-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
  link:
    textColor: "{colors.signal-deep}"
    typography: "{typography.control}"
    height: "44px"
  link-hover:
    textColor: "{colors.ink}"
  link-on-ink:
    textColor: "{colors.ivory}"
  link-on-ink-hover:
    textColor: "{colors.signal}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "0 10px"
    height: "32px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
  search-field:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "48px"
  brand-tile:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.card}"
    size: "104px"
  ink-field:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.card}"
    padding: "32px"
  poster-field:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "48px 220px 48px 48px"
  new-flag:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.flag}"
    rounded: "{rounded.chip}"
    padding: "0 6px"
  point:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.point}"
    size: "10px"
---

# Design System: Russ Heritage

## Overview

**Creative North Star: "Soft Signal"**

The site is a personal journal in the russ! Soft Signal identity. The page is Ivory. Type, rules that close a section, and a few large fields are Ink. Signal orange appears as solid shapes: the punctuation of the logo, a tapered upright stem, small rounded-square points, and the fill of the primary button. Headlines and notes are set in Newsreader; reading copy, navigation, and controls are set in Instrument Sans.

The journal has three formats and each has its own scale. An essay gets a display headline and a cover. A note is shown in full, in Newsreader, on a dated stem. A photographic series sits on an Ink field. They are never put in the same box at the same size. The front page puts the newest essay beside an Ink column of notes; the archive puts every entry on one stem, grouped by month.

Surfaces are flat. There are no cast shadows, gradients, or blurs. Contrast comes from Ivory against Ink, from the jump between display type and 13px meta text, and from one Signal stem per view. All copy is sentence case.

The portfolio, category gallery, and `/vibe` pages are older surfaces kept for their behaviour. They read these tokens through aliases, but their local styling is not part of this system. Do not copy patterns from them.

**Key Characteristics:**
- Ivory ground, Ink type, Ink fields with 16px corners for notes, photographs, and the footer.
- Signal as solid shapes only: stem, points, primary button, current-page underline.
- Newsreader at regular weight for headlines and for the full text of notes; Instrument Sans for everything practical.
- One dated thread per view: a tapered Signal stem, a rounded-square point per entry, a Signal dot at the end.
- Flat surfaces, 1px rules, sentence case, no uppercase labels.
- The unaltered russ! mark on an Ink tile at the top left of every page.

## Colors

Three core colours do almost all the work: Ink, Ivory, and Signal. Three supporting colours handle rules, secondary text, and small coloured text. Two more are Ivory stepped toward Ink for use inside Ink fields.

### Primary
- **Signal** (`signal`): the brand orange. Used for the logo's exclamation, the thread stem and its closing dot, the 10px point that opens a meta row or marks the current format, the primary button fill, the underline under the current navigation link, the "New" flag, the point of a note published since the last visit, text selection, and the 2px underline that appears under an Ink headline on hover. It is the whole field on the 404 poster and nowhere else.
- **Deep Signal** (`signal-deep`): small coloured text on Ivory. Used for underlined links, list markers in essays, and the text caret. Use this, not Signal, whenever orange has to be read as text on Ivory.

### Neutral
- **Ink** (`ink`): pure black. Primary text, the logo tile, the Notes column, the Photographs band, series plates, the footer, code blocks, the selected chip, focus outlines, and the 1px rule that closes a section heading.
- **Ivory** (`ivory`): the page ground, text on Ink, the search field fill, and the points on an Ink thread.
- **Stone** (`stone`): 1px dividers between rows, the placeholder colour behind loading images and skeleton bars. Decorative only.
- **Muted** (`muted`): secondary text on Ivory (meta rows, excerpts, captions, counts, placeholder text) and the 1px boundary of controls that need one (search field, chips, quiet button, bookmark cards).
- **Muted on Ink** (`on-ink-muted`): secondary text inside an Ink field. In the stylesheet it is Ivory mixed 74% into Ink.
- **Rule on Ink** (`ink-rule`): dividers, image placeholders, and skeleton bars inside an Ink field. In the stylesheet it is Ivory mixed 24% into Ink.

### Named Rules
**The Solid Signal Rule.** On Ivory, Signal is a shape or a fill, never a text colour. Coloured text on Ivory is Deep Signal. Inside an Ink field, Signal may be the hover colour of a link.

**The Ink Field Rule.** Anything placed on Ink takes the on-Ink set: Ivory text, Muted on Ink for secondary text, Rule on Ink for dividers and placeholders, an Ivory focus outline, and Ivory links that turn Signal on hover. A primary button on Ink hovers to Ivory instead of Ink.

**The Boundary Rule.** A control that needs an edge gets 1px of Muted, and 2px of Ink on hover. Stone is for dividers and placeholders; it is too faint to bound a control.

## Typography

**Display Font:** Newsreader, variable 200 to 800, roman and italic (with Georgia, serif)
**Body Font:** Instrument Sans, variable 400 to 700, roman and italic (with Arial, sans-serif)
**Label/Mono Font:** none. Labels are Instrument Sans. Code in published essays falls back to the system monospace stack.

**Character:** Newsreader carries anything said in Russ's voice: headlines, section titles, the full text of notes, pull quotes, the About lead. Instrument Sans carries anything practical: essay body copy, excerpts, meta rows, navigation, and controls. Both families are hosted locally in `public/fonts` with their OFL files.

### Hierarchy
- **Display** (400, `clamp(44px, 6.4vw, 92px)`, line-height 1, -0.02em): the lead essay headline on the front page. One per page.
- **Page title** (400, `clamp(40px, 5.6vw, 80px)`, line-height 1, -0.02em): the headline of an essay, a photographic series, About, and Contact. The 404 poster uses the same style up to 96px.
- **Statement** (400, 72/72px, -0.015em): the footer line. Steps to 56/58px at 1100px and 44/46px at 700px.
- **Headline** (400, 48/50px, -0.015em): the Photographs band title, an essay title on the archive thread, empty and error states. The archive's own title is the same style at 64/64px. Steps down to 40/42px and 34/36px on smaller screens.
- **Row title** (400, 40/42px, -0.015em): an essay in the Earlier essays list. Steps to 34/36px and 30/32px.
- **Title** (500, 32/36px, -0.015em): section titles, the Notes column title, month headings on the thread, h2 inside an essay. Titles that are also links (series plates, previous/next) use the same size at weight 400. h3 inside an essay and photo names are 26/30px.
- **Note** (Newsreader 400, 23/30px, -0.01em): the full text of a note in the front-page column. On the archive thread it is 28/36px with a 25em measure. On its own page it is `clamp(30px, 3.4vw, 44px)` at line-height 1.18 with a 21em measure. A note's optional title is Instrument Sans 600 at 16/24px, so the serif text stays the main voice.
- **Lede** (Instrument Sans 400, 20/28px): the excerpt beside the lead button; an essay's deck is 20/30px in Muted. Both drop to 18/28px at 700px.
- **Reading** (400, 18/28px): essay body copy, with a 33em measure, which is about 70 characters. Also the archive introduction and excerpts on the thread.
- **Body** (400, 16/24px): the default. Excerpts in lists, author bio, footer links at weight 500.
- **Navigation** (500, 16/20px) and **Control** (600, 16/20px): masthead links; buttons and text links.
- **Meta** (400, 13/20px, Muted): the row of facts under a headline, captions, counts, the search label, footer column headings. The first fact, usually the format name, is weight 600 in Ink.
- **Flag** (600, 12/18px): the "New" flag only.

### Named Rules
**The Two Voices Rule.** If the words are Russ talking, set them in Newsreader. If the words describe, label, or operate something, set them in Instrument Sans. An essay's body copy is Instrument Sans; a note's body is Newsreader.

**The Sentence Case Rule.** No uppercase text and no letter-spaced labels. Negative tracking is used on Newsreader only: -0.02em at display sizes, -0.015em on headlines and titles, -0.01em on note text. Instrument Sans stays at normal tracking.

**The Italic Year Rule.** In display headlines, a four-digit year is set in Newsreader Italic by the `Headline` component. The published words are not changed. The second half of the journal's own title is italic in the same way.

## Layout

Content sits in one centred wrap, at most 1344px wide. The outer gutter is 48px, 32px at 1100px and below, and 24px at 700px and below. There is no shared column grid; each page has its own two-part layout built from a flexible column and a fixed one.

- **Front page:** the lead essay and Earlier essays in a flexible column, the Notes column fixed at 400px beside them with a 48px gap (344px and 32px at 1200px). A short Notes column is sticky 24px from the top; a long one runs the height of the lead and the essays. At 900px the order becomes lead, notes, earlier essays, and the column shows only the latest three notes.
- **Archive:** a sticky 304px side column (title, format list, search, topic chips) and the thread, 64px apart. On the thread, dates sit in an 80px right-aligned column, the stem at 96px, and entries start at 136px. At 900px the side column stacks on top, the format list becomes a horizontally scrolling row, the stem moves to the left edge, and each date sits above its entry.
- **Essay:** a 720px column and a 304px sticky margin for the author and the contents list, 72px apart. The margin drops below the essay at 900px.
- **Photographic series:** a six-column grid inside an Ink field. Figures span two or three columns, chosen from the count so the last row is never short. One column at 700px.

Vertical rhythm uses a 4px base. The steps in use are 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, and 96. Major sections on a page are 72px apart (56px at 900px). The footer starts 96px below the content (64px at 700px). List rows have 28px of padding; thread entries are 44px apart. A 10px gap is used between a point or icon and its label, and between meta items.

Interactive targets: buttons and the search field are 48px high. Text links have a 44px minimum height. Chips are 32px, and 36px at 900px and below. Breakpoints are 1200, 1100, 900, 800, 700, and 350px.

## Elevation & Depth

The system is flat. Nothing casts a shadow, nothing is blurred, and there are no gradients. Depth is the difference between the Ivory page and an Ink field placed on it. Sticky columns stay in the same plane as the page.

`box-shadow` is used in three places, all of them hard edges and none of them elevation: the inset boundary of the quiet button, the 4px ring around a thread point (in the colour of the field behind it, so the point reads as sitting on the stem), and the 2px Signal underline on the current tab of the archive's format row on small screens.

### Named Rules
**The Flat Field Rule.** A surface is a single flat colour: Ivory, Ink, or, for the 404 poster, Signal. To separate two things, change the field or draw a 1px rule.

## Shapes

Three radii, by size of object: 6px for chips, the "New" flag, inline code, skeleton bars, and images inside a note; 12px for 48px controls, code blocks, callouts, and the small logo tile; 16px for Ink fields, the poster, the full logo tile, and the author photo. Brand points are squares with a radius of 24% of their side, in 10px (meta rows, markers) and 12px (thread) sizes.

Photographs in frames have square corners: the lead cover, list thumbnails, photo cards, series plates, essay covers, and the About portrait. Frames have a Stone placeholder (Rule on Ink inside an Ink field) and clip their image.

Rules are 1px. An Ink rule closes a section heading or opens the author block and previous/next; Stone rules separate rows. The current navigation link and hover states use a 2px line.

The stem is 12px wide with a rounded top. It narrows to half its width at the bottom and ends in a 6px round tip. A 12px Signal point sits under it as the closing dot. Together they repeat the logo's exclamation. The exclamation itself, from the brand vector, is used large in three places: cropped at the right edge of the footer, filling the Notes column before the first note is published, and in Ink on the 404 poster.

## Components

### Buttons
- **Shape:** 48px high, 12px radius, 22px side padding, Instrument Sans 600, optional 18px arrow after the label with a 10px gap.
- **Primary:** Signal fill, Ink label. One per view, for the main action ("Read the essay").
- **Hover / Focus:** hover turns the fill Ink and the label Ivory over 0.2s; on an Ink field it turns Ivory with an Ink label. The arrow moves 4px right. Focus is a 2px Ink outline offset 2px, Ivory inside an Ink field.
- **Quiet:** transparent, Ink label, 1px inset Muted boundary that becomes 2px Ink on hover. For the second action beside a primary button and for empty states.
- **Ink:** Ink fill, Ivory label, hovering to Ivory. Used only on the Signal poster, where a Signal button would disappear.
- **Disabled:** 60% opacity with a wait cursor.

### Links
- **Text link:** Instrument Sans 600, Deep Signal, underlined, 44px minimum height, optional arrow. Hover turns it Ink. On Ink it is Ivory and hovers to Signal.
- **Headline link:** an Ink Newsreader headline with no underline at rest. Hover adds a Signal underline (0.06em thick on large headlines, 2px on titles).
- **Links in essays:** Deep Signal, underlined, Ink on hover.

### Chips
- **Style:** 32px high, 6px radius, 10px side padding, 14/20px weight 500, 1px Muted border, transparent fill.
- **State:** hover thickens the border to 2px Ink. The selected chip is Ink with Ivory text. Used for topic filters in the archive. On small screens they scroll in one row.

### Cards / Containers
- **Ink field:** Ink, 16px radius, no border, no shadow. Padding is 32px for the Notes column, 40px for the Photographs band and the series field, 24px for a series plate, reducing to 24px, 16px, or 20px on small screens.
- **Series plate:** an Ink field that interrupts the archive thread. Title and count at the bottom left, up to three 4:5 frames at the right with 8px gaps. The whole plate is one link; hover underlines the title in Signal.
- **Rows:** essays in lists are not cards. They are rows separated by 1px Stone rules with an optional 4:3 thumbnail at the right.
- **Notice:** an error message between two 1px Stone rules with a "Try again" text link.

### Inputs / Fields
- **Style:** 48px high, 12px radius, 1px Muted border, Ivory fill, 18px search icon, Muted placeholder, a visible label above in 13px weight 500.
- **Focus:** the 2px Ink outline is drawn around the whole field, offset 2px.

### Navigation
- **Masthead:** the logo tile and name at the left, text links at the right. The full mark is 80px wide on a 104px Ink tile with a 16px radius. At 800px and below the tile is 56px with a 12px radius and shows only the exclamation at 36px high. The name is Newsreader 500 at 26/28px with a Muted 14px line under it, hidden at 1100px.
- **Links:** Instrument Sans 500, 36px apart. Hover draws a 2px Ink underline from the left over 0.3s. The current section has a 2px Signal underline. At 700px the links move to their own row under a 1px Stone rule and spread across the width.
- **Format list (archive):** rows 48px high separated by Stone rules, with a count at the right. The current row is marked with a Signal point.
- **Previous / next:** two Newsreader titles under an Ink rule, each with a meta line and a 16px arrow, followed by a link to the full list.
- **Footer:** an Ink field, full width, with the statement line, three link columns under 13px headings, a rule, and the exclamation cropped at the right edge.

### Meta row
One line of facts in 13px Muted, separated by 3px round dots. The first fact is weight 600 in Ink. It may open with one 10px Signal point; use the point under a page's main headline and leave it off in lists. The separators belong to the item after them and are clipped at line starts, so a wrapped row never begins with a dot. Captions use the same size and colour.

### The thread (signature)
The dated stem that carries notes on the front page and every entry in the archive.
- **Stem:** Signal, 12px wide, tapered, on the left of the entries. One per view.
- **Points:** a 12px rounded square per entry with a 4px ring in the field colour. Ivory on the Ink column, Ink on the Ivory archive. An entry published since the reader's last visit has a Signal point and a "New" flag in its meta row.
- **End:** a 12px Signal dot under the stem, beside the closing link or the entry count.
- **Entries:** a note is shown in full; one that runs past seven lines is clamped and gets a "Keep reading" link. An essay is a headline, excerpt, meta row, and thumbnail. A series is an Ink plate.
- **Motion:** on the front-page column only, once on load, the stem is revealed top to bottom over 1.2s, each point scales in over 0.6s at 0.09s intervals, and the closing dot lands at 0.85s. Easing is `cubic-bezier(.16, 1, .3, 1)`. The text is in place from the first frame. The archive thread does not animate. All of it is removed under reduced motion.

### Story break and ending
A horizontal rule in an essay is drawn as a single 10px Signal point. An essay ends with one point and a short sign-off line in 14px Muted.

### Poster (404)
A Signal field with a 16px radius, at least 600px or 72% of the viewport high. Ink Newsreader headline at the bottom left, one line of 20px copy, an Ink button, and the exclamation in Ink at full height on the right. This is the only Signal field on the site.

### Loading and empty states
Loading shows Stone bars with a 6px radius in the shape of what will arrive (Rule on Ink inside the Notes column). A page-level state is a 48/50px Newsreader sentence, one line of 18px Muted copy, and a button or link, left-aligned in a 720px column.

## Do's and Don'ts

### Do:
- **Do** put the russ! mark on an Ink tile, unaltered, with Ivory letters and Signal punctuation. Scale it uniformly.
- **Do** give each format its own scale: display Newsreader and a cover for an essay, full text in Newsreader on the stem for a note, an Ink field for photographs.
- **Do** use Deep Signal for coloured text and links on Ivory, and Ink labels on Signal fills.
- **Do** switch to the on-Ink set inside any Ink field: Ivory text, Muted on Ink, Rule on Ink, Ivory focus outline.
- **Do** bound controls with 1px Muted and separate rows with 1px Stone.
- **Do** keep one primary Signal button and one stem per view.
- **Do** keep essay body copy within 33em and notes within 21 to 25em.
- **Do** keep every animation behind `prefers-reduced-motion`, and keep text visible from the first frame.
- **Do** use radii by object size: 6px chips, 12px controls, 16px fields, 24% points.

### Don't:
- **Don't** set Signal as text on Ivory, and don't use it as a page or section background outside the 404 poster.
- **Don't** put a note and an essay in the same card at the same size.
- **Don't** add cast shadows, gradients, blurs, or tinted overlays. Surfaces are flat Ivory, Ink, or Signal.
- **Don't** use uppercase or letter-spaced labels. Everything is sentence case.
- **Don't** round the corners of framed photographs. Radius belongs to fields, controls, the logo tile, images inside a note, and the author photo.
- **Don't** use Stone as the boundary of a control or as a text colour.
- **Don't** redraw, recolour, or re-space the mark. The exclamation may be cropped by an edge as a graphic; the full mark may not.
- **Don't** take patterns from the portfolio, category gallery, or `/vibe` pages. They keep their own older styling.
- **Don't** animate the archive thread or add a second entrance animation. The front-page stem draw is the one authored motion.
