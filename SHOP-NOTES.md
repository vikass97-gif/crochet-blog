# Pattern shop preparation

Updated 2026-10-16. Seven collection concepts are defined in `src/lib/patterns.ts`: roses, sunflowers, bouquets, an everyday bag, granny squares, coasters, and a small storage basket. Routes are `/shop` and `/shop/[slug]`.

The three latest concepts link to their free planning guides. Those guides contain about 1,250 words each, five FAQs, a cover and two contextual real photographs. Images are visual references, not fabricated step sequences or photographs of results from our own patterns. Credits and licences are recorded under `public/images/collections/LICENSES.md` and the existing image folders.

The homepage features the four most recently added concepts, with categories derived from current products. Search, category and experience filters, alphabetical sorting, and browser-stored favourites are available in the full catalogue. Favourites sync between tabs; storage failures show an error.

Little Crochet Roses has a free, explicitly untested draft download. The other six concepts have no downloadable PDF. There is no paid checkout, payment integration, or confirmed price. Product copy keeps availability explicit.

All shop pages use `noindex, follow` and are excluded from the sitemap. Free article pages are indexable and included automatically. Social share images for product pages now come from their own product data, so future additions do not require a separate hard-coded image mapping.

Before opening sales, complete and physically test each design, photograph its actual results, confirm all materials and dimensions, finalise its PDF and product information, and implement and test payment and file delivery. Do not advertise offers or a tested result before those facts exist.

## Validation for the latest additions

ESLint and a full production build passed. Chrome checks on the three new articles and three product pages passed: images decode, guide/product links work, and product noindex is present. No horizontal overflow at 320, 768 or 1440px on the new guides. The catalogue shows seven concepts; each new category filter returns its matching concept. The homepage remains limited to four featured cards; the journal shows eleven articles. No browser JavaScript errors were observed.
