---
name: Russ Heritage
description: An open journal of photographs, essays, and things noticed.
colors:
  paper: "#fff"
  ink: "#20271f"
  muted: "#646d64"
  accent: "#486151"
  rule: "#dce2da"
  wash: "#f3f5f1"
  skeleton-color: "#edf0eb"
  skeleton-shine: "#f6f7f4"
typography:
  display:
    fontFamily: "'Source Serif', serif"
    fontSize: "56px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-.035em"
  headline:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "56px"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-.034em"
  title:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.03em"
  body:
    fontFamily: "'Source Serif', serif"
    fontSize: "22px"
    fontWeight: 400
    lineHeight: 1.82
  interface:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  excerpt:
    fontFamily: "'Source Serif', serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  square: "0"
spacing:
  mobile-gutter: "24px"
  desktop-gutter: "40px"
  journal-column-gap: "44px"
  journal-row-gap: "53px"
  journal-margin-gap: "64px"
components:
  text-link:
    textColor: "{colors.accent}"
    size: "14px"
  text-button:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    padding: "5px 0"
  topic-filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    padding: "5px 0"
    size: "14px"
  topic-filter-selected:
    textColor: "{colors.accent}"
  navigation:
    size: "14px"
  search-field:
    backgroundColor: "transparent"
    padding: "7px 0"
    size: "16px"
  journal-card:
    typography: "{typography.title}"
  welcome-panel:
    backgroundColor: "{colors.paper}"
    padding: "40px"
    width: "500px"
  article-quote:
    padding: "24px 0"
    size: "28px"
  published-content-button:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    padding: "10px 18px"
    size: "16px"
---

# Design System: Russ Heritage

## Overview

**Creative North Star: "Open Journal"**

Open Journal brings photographs and writing into one airy editorial experience. Original photography supplies the visual presence; a white field, muted green accents, and generous margins give it room. The serif introduction and reading text feel personal, while sans serif story headings and navigation keep browsing clear.

The system is quiet and flat. Rectangular images, fine rules, and typographic contrast organize the page without ornamental containers. The journal and reading layouts share these materials while allowing their own composition.

**Key Characteristics:**

- Dominant original photography on a white field.
- Local serif reading text paired with sans serif headings.
- Muted green links, fine dividers, and square geometry.
- Airy browsing and a bounded long-form reading column.

This record describes the finished editorial system in `src/styles/{base,journal,reading,pages}.css`, sampled against Layout, JournalHero, JournalCard, Journal, and ReadingLayout. The preserved portfolio, category gallery, and /vibe interiors remain compatibility surfaces; their local styling is not the normative vocabulary for new pages.

## Colors

A white and green-grey palette supports the photographs without competing with them. The frontmatter records the source custom properties literally.

### Primary

- **Muted Green** (`accent`): links, selected topic filters, caret, and keyboard focus.

### Neutral

- **White Paper** (`paper`): page and desktop welcome-panel ground.
- **Green-Black Ink** (`ink`): headings and primary interface text.
- **Quiet Grey** (`muted`): metadata, secondary copy, and footer text.
- **Fine Rule** (`rule`): dividers and structural borders.
- **Pale Wash** (`wash`): empty image ground and published code blocks.
- **Loading Ground / Shine** (`skeleton-color`, `skeleton-shine`): compatibility custom properties; the journal's static placeholders use the ground only. There is no shimmer animation in the editorial styles.

Contextual source literals remain contextual rather than becoming extra accent families: the introduction uses `#515c51`, excerpts `#535e53`, article decks `#5a6256`, article copy `#30382b`, and quotes `#56694d`. Selection is `background:#dce8df;color:#203626`; article mastheads use `#f8f9f6`. Link rules and search strokes retain their literal declarations in the sidecar.

**The Quiet Accent Rule.** Use muted green for links, selected filters, and focus; let photography supply the broad color fields.

## Typography

**Display / Reading Font:** Source Serif 4, registered locally under the CSS family name `Source Serif`, with `serif` fallback. Normal weights 400–700 and italic weights 400–600 are hosted as WOFF2 with `font-display:swap`.

**Heading / Interface Font:** DM Sans, locally hosted normal weights 400–700, with `sans-serif` fallback. No external font service is required.

**Character:** Serif text carries the personal, reflective voice. The sans serif headlines are substantial but restrained, with tight tracking and balanced line wrapping.

### Hierarchy

- **Display:** the frontmatter display role is the homepage feature headline and fallback introduction. At 1250px and below it becomes 52px; at 960px, 40px; at 700px, 36px/1.12; at 350px, 33px.
- **Headline:** the frontmatter headline is the article title. It steps to 50px, 43px, then 37px at the 1250px, 960px, and 700px breakpoints. Mobile tracking is -.03em. Archive and content-page titles use the serif at 54px, reducing to 41px on mobile.
- **Title:** ordinary journal titles use the frontmatter title role; the lead title is 32px. At 1250px they are 26px/29px, at 960px 23px/25px, and at 700px both become 27px. Article subheadings are 28px/1.3 and 24px/1.35, reducing to 25px and 22px on mobile.
- **Body:** article copy uses the frontmatter body role, bounded to 720px. At 960px it becomes 20px; at 700px, 19px/1.85. Paragraphs retain 24px bottom margin and adjacent-paragraph spacing of 25px (23px mobile). The opening drop cap is 75px/.83, reducing to 64px on mobile.
- **Excerpt:** journal excerpts use the frontmatter role, with a 17px intermediate tablet size. Hero introduction copy is 18px/1.6 and becomes 16px at 960px.
- **Label / interface:** metadata uses the label role. Navigation is 14px, reducing to 12px on mobile. Article bylines use 12px uppercase with .055em tracking; the credit phrase remains italic serif, 15px desktop and 14px mobile. These identify content, rather than forming decorative heading kickers.
- **Wordmark:** Source Serif at 33px/1, weight 500, -.038em tracking; the given name is italic weight 400. It steps to 30px at 960px, 26px at 700px, 23px at 350px. Article wordmarks begin at 29px.

**The Two Voices Rule.** Use Source Serif for personal introductions and sustained reading, and DM Sans for story headings and interface text.

## Layout

These are observed composition values, not a fabricated universal spacing scale. Desktop editorial containers use 40px outer gutters, mobile uses 24px. The primary journal width is `calc(100% - 80px)`, capped at 1232px; at 1600px and wider it caps at 1320px. Mobile journal containers become `calc(100% - 48px)`.

The masthead is 94px high, capped at 1312px with 40px internal horizontal padding; at 1600px it caps at 1400px. Height reduces to 86px at 960px and 74px with 24px padding at 700px. Mobile keeps Journal, Archive, and About visible; the extra email link is hidden.

The desktop hero is 460px high, with 26px top and 53px bottom margin. Its square white panel is 500px wide, padded 40px, inset 32px from the left, and centered with `top:50%;transform:translateY(-50%)`. At 1250px it is 460px wide with 34px padding; at 960px the hero is 420px high and the panel is 292px wide with 24px padding and 24px inset. At 1600px the hero becomes 490px high. At 700px the image is 190px high; the introduction becomes normal flow below it, with 20px top padding, no panel fill, and no exploration link. At 350px only the hero outer gutter reduces to 20px.

The primary homepage feature uses this same panel and type with the newest published Ghost post. A grid centers the panel inside 32px padding (24px at 960px), using the above heights as minimums so longer titles can grow without clipping. The post cover fills the background; its title, cover, and reading action link to the article. Below 700px, the cover is 190px high and the panel follows in normal flow; the reading action remains visible. The introductory hero described above remains the fallback when no published posts are available.

The journal uses a 226px margin column, 64px gap, and a ruled edge with 32px inner padding. The feed is an asymmetric `1.08fr .92fr` grid with 53px row and 44px column gaps. At 1250px the margin/gap become 195px/40px and feed column gap 32px. At 960px they become 166px/30px, and the feed becomes equal columns with 39px/27px gaps. At 700px the layout stacks, topic filters scroll horizontally, and the feed becomes one column with 32px gaps. Mobile cards place metadata and heading before the photograph; desktop places the photograph first. Desktop images are 286px high (lead 320px), tablet 245px (lead 275px), mobile 250px (lead 275px).

Reading pages cap at 1192px. The desktop main track is up to 858px with 77px right padding; the sidebar has a left rule and 45px left padding. Header top/bottom padding is 91px/61px; reading copy begins after 49px. At 1250px, outer margins are 60px and sidebar 240px; at 960px margins are 40px and sidebar 205px. At 700px, 24px margins frame one reading column, the title padding becomes 43px/32px, copy top padding is 32px, and sidebar content follows the article in two columns. At 430px the sidebar becomes one column. Related entries stack at 700px. About and contact use the same outer margin steps; About's image moves below the text at 700px.

## Elevation & Depth

The editorial system uses no box shadows. White panels over photography, pale article mastheads, rectangular media, and fine one-pixel rules create its layers. Article quotes have ruled edges; journal cards sit directly on the page. Preserved legacy modal and gallery effects are outside this vocabulary.

**The Flat Ground Rule.** Separate the editorial surfaces with whitespace, fine rules, and tonal ground rather than shadows.

## Shapes

Square corners are the editorial default. Images crop through rectangular overflow frames; the hero uses `object-position:center top`, journal previews `center 8%`. Full photographic stories retain their natural aspect ratios, and article feature images use containment. Small circular metadata separators are 3px dots; they are punctuation, not rounded containers. Borders are generally 1px rules; links use underlines rather than filled capsules.

## Components

### Buttons and text links

Restrained text actions use green type. The text button is transparent, has a bottom stroke `#9cac9e`, 5px vertical padding, and 40px minimum height. Text links are inline-flex with a 12px gap, 14px weight-500 text and 36px minimum height (44px mobile). Their 20px arrow moves 4px right over `.2s ease-out`. Read links use 13px text, a 16px arrow, 9px gap, and a thin underline under the label; their minimum height is 40px desktop and 44px mobile. Published Ghost button cards preserve a filled green, white-text square link with 10px 18px padding and 16px sans text.

All links, buttons, and inputs receive `outline:2px solid var(--accent);outline-offset:5px` on `:focus-visible`. Ordinary links underline on hover; the wordmark does not. Disabled buttons have opacity .6 and a wait cursor. No distinct error-input or pressed-action appearance is defined. The skip link is hidden above the viewport until focused, then appears at 16px from the top.

### Topic filters

Text buttons, not pills: transparent, borderless, muted, left aligned, 14px with 5px vertical padding and 38px minimum height. Hover changes to ink. `aria-pressed=true` changes to green, weight 600, and a 1px underline offset 6px. Mobile filters use 12px text and 44px minimum height in a horizontally scrollable row with 21px gaps and a bottom rule.

### Journal cards

Image, metadata, tight sans heading, serif excerpt, and reading link form an unboxed story. Text-only entries begin with a top rule and 28px padding (23px tablet, 24px mobile). The first mobile lead omits the top rule. Image hover scales to 1.025 over `.55s cubic-bezier(.16,1,.3,1)`. This is a restrained crop interaction; the card itself does not lift. Loading stories are static pale bars, and recovery actions reuse text buttons.

### Inputs / fields

Archive search uses a 13px muted label above a flex row with 12px gap, green search SVG, and `border-bottom:1px solid #9ca99c`. The transparent borderless field has 16px text, 46px minimum height, 7px vertical padding, muted placeholder, and green caret. Keyboard focus uses the shared outline. Search has no separate error or disabled styling.

### Navigation

The masthead balances the personal serif wordmark with a simple sans row. Desktop navigation uses 33px gaps, reducing to 25px at 960px, 16px at 700px, and 11px at 350px. Current-page links use a green 1.5px underline offset 7px; hover retains ordinary underlining. Footer navigation is separated by fine rules and wraps as needed.

### Welcome panel and reading furniture

The inset welcome panel is specific to the photographic hero, with a serif heading and italic emphasis. Do not apply its overlay geometry to all components. Reading pages use a sans headline, serif deck, quiet byline, optional drop cap, ruled italic quotes, biography, optional contents, and related stories. Quotes use 28px/1.5 text (25px mobile), `#56694d`, and 24px vertical padding (22px mobile). Captions are centered 14px/1.6 sans in muted grey. Article links use a 1.5px underline in `#a8b59d`, offset 5px. Inline arrow icons are SVG, never font glyphs.

For the latest-post feature, the panel carries the authored headline without added italic emphasis, a plain-text excerpt of up to 135 characters, and “Read the latest post.” Use the post's cover image and alternative text when supplied; otherwise keep the configured site photograph. Loading reserves the feature's layout with a pale image placeholder. Empty or failed post requests retain the introductory fallback; the journal's existing retry action handles failures.

The page uses smooth scrolling by default. Under `prefers-reduced-motion:reduce`, scrolling becomes automatic and all CSS transitions and animations are disabled. Hover transforms remain instantaneous under that rule; the source does not remove their end states.

## Do's and Don'ts

### Do:

- **Do** retain original photographs and descriptive alternative text.
- **Do** use the shared focus outline and visible selected states.
- **Do** keep the desktop welcome panel fully inset and vertically centered, then put the introduction below the photograph on mobile.
- **Do** preserve authored reading content, captions, embeds, and optional contents navigation.

### Don't:

- **Don't** replace the white field and restrained green accents with ornamental surface treatments.
- **Don't** wrap journal stories in raised, rounded cards.
- **Don't** promote preserved legacy gallery styling into defaults for new editorial surfaces.
- **Don't** treat the preview tonal ramps as shipped palette tokens.
