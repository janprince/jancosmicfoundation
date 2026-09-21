# Community links and SEO launch review

Reviewed 20 September 2026. Changes are local; this review does not deploy either website.

## Community destinations

- Foundation: `/community` is the existing, expanded hub for WhatsApp, Telegram, YouTube, Instagram, and Facebook. It is linked from navigation and the footer. `/testimonials` continues to redirect to its stories section.
- Dr. Jan: `/connect` has a WhatsApp invitation immediately below its YouTube section, before Inner Space.
- Both sites use the supplied WhatsApp invitation: https://chat.whatsapp.com/Cb70KgYryHz0p83eIlOOJs
- Foundation Telegram invitation: https://t.me/+OZa023K6Pj4yOTdk
- Removed the Foundation's placeholder WhatsApp URLs and superseded Telegram URLs. No separate WhatsApp group or channel was invented.

## SEO changes

- Every indexable public page has a page-specific canonical URL, title, description, Open Graph preview, and Twitter card. CMS-backed Foundation detail pages use their own URLs and images.
- Foundation CMS descriptions are shortened at a sentence or word boundary for search and sharing snippets. This does not alter published page copy.
- Both robots files permit page assets to be crawled. API routes remain excluded.
- The Foundation sitemap includes published posts, events, causes, and centres alongside its public pages, and refreshes from the content source. Redirect-only aliases stay out.
- Dr. Jan's sitemap includes nine public destination pages. Enrolment checkout, sign-in, student routes, and confirmation pages are excluded. Removed the artificial current-time modification date from unchanged pages.
- Dr. Jan's utility and student routes return `X-Robots-Tag: noindex, nofollow`. Sign-in and confirmation pages also have noindex metadata; this includes the magic-link route. Student UI, authentication logic, and payment logic were not changed.
- Added a Person structured-data description on Dr. Jan's public site. Foundation Organization and Article data remain. Removed the blog video's unsupported upload date (it was using the article publication date), and safely escaped article JSON-LD.

## Validation

- Production builds pass for both repositories.
- Foundation lint and 17 tests pass; Dr. Jan's seven existing payment tests pass.
- Rendered production HTML reviewed for all 34 Foundation sitemap URLs and all nine Dr. Jan sitemap URLs: successful responses, unique canonicals, relevant descriptions, Open Graph and Twitter metadata, no index-blocking directive on sitemap pages.
- Community invitations verified against the supplied URLs; desktop and narrow-screen layouts reviewed.
- Sign-in, checkout, confirmation, and student noindex responses checked separately.

## Launch follow-through

1. Deploy each reviewed branch to its intended production domain. These changes are not yet live.
2. In the hosting domain settings, make each apex-to-www redirect permanent (301 or 308). Both live apex domains currently return 307 temporary redirects. The canonical host throughout the code is `www`.
3. Submit `https://www.jancosmicfoundation.org/sitemap.xml` and `https://www.drbaffourjan.com/sitemap.xml` in the respective Google Search Console properties. Ownership verification requires the owner's account; no verification token was supplied or invented.
4. After deployment, inspect the homepage, Community/Connect, and Inner Space URLs in Search Console, and check social sharing previews against the deployed version.
5. Confirm the Foundation's published Accra centre history: its current CMS text says the centre was established in 1988, while the site's organisation founding year is 2021. These may refer to different milestones, but the distinction should be clear to readers. Published facts were not rewritten without confirmation.
6. Preserve existing centre URLs unless a deliberate redirect is added. In particular, the current `/centres/toronto-canada` slug serves Sunyani content; changing the slug in the CMS alone would break existing links.

This was a technical SEO and community-link review, not a performance benchmark, production payment test, or full external-link audit.

## References

- [Google: technical SEO fundamentals](https://developers.google.com/search/docs/fundamentals/get-started)
- [Google: sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Next.js: metadata inheritance and canonical URLs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
