# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Product Purpose

Russ Heritage's personal website brings essays, short notes, and photography together as one journal. On November 18, 2026 the user asked for a redesign guided by the russ! Soft Signal brand kit: "a modern editorial blog that is exciting to add shortform and longform content to, presented in a visually interesting format that is easy to navigate." From the structures offered they liked the dated thread and the front page, asked for the two combined, and chose "Front page + notes thread". The user then asked for it to be deployed, and it was published to www.russheritage.com on November 18, 2026.

## Capabilities and Constraints

- The site uses React, Vite, React Router, and Ghost for posts.
- The front page leads with the newest published essay from Ghost, including its cover, title, excerpt, and article link.
- A Ghost post tagged `note` or `#note`, or any untagged post of 120 words or fewer, is a note and is shown in full on the front page and in the archive. An `essay` tag keeps a short post long-form.
- Preserve the current content, photography, routes, and Ghost publishing integration.
- Publish through the existing `npm run deploy` workflow to the configured GitHub Pages site at www.russheritage.com, and only when the user asks.
- Use real Ghost posts and existing photo collections. Keep published text, dates, media, gallery behavior, and restricted-gallery confirmations intact.
- Sample notes exist for local preview only (`?sample-notes` on the dev server) and are excluded from production builds.

## Brand Commitments

- The russ! Soft Signal brand kit is the identity: its unaltered mark on an Ink tile, Ink, Ivory, and Signal with Stone, Muted, and Deep Signal in support, Newsreader for headlines and notes, Instrument Sans for reading and controls.
- Keep the kit's graphic language: the tapered upright, the rounded-square point, flat colour fields, precise rules. Give Signal one clear job per view.
- Voice: curious, direct, informal, lightly playful; ordinary words and sentence case.
- Essays, notes, and photographs are three formats of one journal, each with its own scale.
- The October 2026 Open Journal direction and its screenshot references are superseded by this redesign.

## Evidence on Hand

- Brand kit: `~/Desktop/design/russ-soft-signal-brand-kit` (guidelines in `04-guidelines/BRAND-SYSTEM.md`).
- Existing site: public/content.json and src/.
- Original photographs: public/images/.
- Published posts on November 18, 2026: Write like it's 1999; Remember the Old Internet?; Things are really bad here in Minnesota. No notes are published yet.
- Structure sketches from the decision round: `.impeccable/mocks/decision/`.

## Open Decisions

- Chosen structure: "Front page + notes thread", composition reference `.impeccable/mocks/decision/front-page-notes-thread.html`.
- Until the first note is published the Ink column introduces the journal and Notes stays out of the navigation.
- Photographic series have no dates, so they sit between dated entries in the archive; adding a `date` to a series in `content.json` places it by day.
- Sample copy in `mockups/` is not approved publication copy.
