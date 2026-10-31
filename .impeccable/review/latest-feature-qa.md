# Latest-post homepage feature

The user requested that the top feature showcase the latest post. The existing inset panel, typography, and responsive journal system are preserved. The feature uses the newest published Ghost post by publication date, its supplied cover and excerpt, and article links on the title, cover, and reading action.

## Verification

- Real Ghost content selected “Write like it's 1999,” its original banner, and /blog/write-like-its-1999. The reading action opened the article successfully.
- At widths 1440 and 724, the panel remained fully inset and vertically centered (33px and 40px above/below respectively). At 390 and 320, the cover precedes the title and the reading action remains visible. No document overflow occurred.
- An unordered synthetic response containing an older post, a newer published post, and a future scheduled post selected the newer published post. This proves future publication does not require a manual homepage edit.
- A post with no image retained its title and used the configured site photograph.
- Loading reserved the feature layout and exposed an accessible status. Empty responses retained the introduction and three static photographic stories. Failed requests retained the introduction and existing retry action; retry restored the real latest feature.
- A long synthetic headline remained fully inside the hero without document overflow at widths 1440, 724, 390, and 320. The hero grows with its content.
- Lint, production build, and whitespace checks passed. The scoped design detector found no primary issues; advisories concerned existing color and responsive type declarations already described in DESIGN.md. No new detector exceptions were introduced.

Screenshots: latest-feature-desktop.png, latest-feature-tablet.png (724), latest-feature-mobile.png (390), latest-feature-narrow.png (320), latest-feature-no-image.png, latest-feature-long-724.png, latest-feature-long-320.png. These are local review evidence, not published content. Synthetic fixtures were supplied only to the browser test and were removed afterward.
