# Pattern shop preparation

Local routes: /shop and /shop/[slug]. Three clearly labelled collection concepts are defined in src/lib/patterns.ts. The current collection focuses on roses, sunflowers, and bouquets. Licensed Pexels photographs illustrate floral inspiration; source credits and licensing notes are in public/images/flowers/LICENSES.md. These photographs do not show results from our proposed patterns. These are not tested or purchasable patterns.

The catalogue supports search, category and experience filters, alphabetical sorting, and saved favourites in localStorage on the current browser. Favourites sync between tabs. Browser storage failures display an error. There is no account, checkout, price, downloadable PDF, or payment integration.

All shop pages currently use noindex, follow and are deliberately omitted from the sitemap. Remove noindex and add the final product routes to the sitemap when real products are ready. Do not add purchasable Product/Offer schema before verified product information and prices exist.

Before selling each pattern:

- Replace concepts with tested designs and images of the actual finished object.
- Confirm terminology, level, yarn quantities, hook size, gauge, dimensions, and exact PDF contents.
- Prepare the PDF and its usage terms, price, currency, seller/contact information, and relevant customer policies.
- Choose a payment and delivery provider. Keep paid PDFs outside the public directory; grant access only after verified payment.
- Test checkout, payment confirmation, email/download delivery, and failed-payment handling before opening sales.

Validation in this session: TypeScript and diff checks passed. Catalogue and three concept routes returned HTTP 200; preview labels, headings, and noindex were verified. Browser interaction and visual QA have not been performed.

## Presentation refinements

The main navigation has a native mobile menu and active section indicators behind a Suspense boundary. Favourites are shared between catalogue and detail pages, with a deterministic empty server snapshot to avoid storage-driven hydration mismatches. Level options now reflect available concepts.

A complete production build passed after these refinements. HTTP checks passed for home, About, shop, rose details, beginner guide, sitemap, and an unknown path (404). Canonical URLs, share images, and preview noindex tags were checked in rendered HTML. Browser interaction/visual QA remains outstanding. No new deployment was performed.
