# V2 implementation — 14 September 2026

Implemented locally on `v2`, following the [UI/UX audit](./v2-ui-ux-audit-2026-09-14.md). This is a substantial interface and content-delivery pass. It does not complete the factual, operational, policy, or payment-provider work listed below. No deployment or production content mutation was performed.

## Design direction

The Foundation retains its own indigo, gold and warm cream palette, Newsreader headings, Figtree body text, and real photographs. The redesign removes repeated large dark introductions from practical pages. A consistent cream masthead, compact page headings, comfortable article text, and shorter routes to useful actions establish a calmer, more editorial character.

On phones the homepage photograph appears above the introduction, allowing both the people and the words to remain legible. Shared section spacing is tighter, labels and form outlines are clearer, and long-form reading text is 17px on phones and 19px on desktop. Content no longer depends on scroll-triggered reveals to become visible.

## Implemented

| Area | Result |
| --- | --- |
| Navigation | Four groups: The Foundation, Teachings, Visit & gatherings, Our work; Contact and Give remain directly accessible. Desktop popovers and the mobile dialog use Headless UI. Mobile sections disclose their actual expanded state, avoid duplicate Overview links, and close on navigation. |
| First visit | New `/visit` page with the published Accra address, phone, email, map directions, next-gathering/contact path, and a contextual enquiry. Unknown arrangements are explicitly things to confirm. Homepage and footer link to it. |
| About | Shorter Foundation introduction, mission and vision, published team records, and a stewardship enquiry section. `/about/mission-vision` permanently redirects to `/about#mission`. |
| Community | Concise public introduction, community channels and published stories. `/testimonials` permanently redirects to `/community#stories`. |
| Programmes | Seven locally maintained editorial programme summaries, section links, real photographs and relevant next actions. Repeated abstract frameworks and operational badges are removed. |
| InnerSpace | A shorter explanation with a clear external destination and public-teaching alternative. Availability and pricing are left to the actual course destination. |
| Teachings and writings | A public introductory teaching is featured, the collection is easier to reach, playback indicators reflect playback, and reading layouts are wider and more legible. Writing categories use pressed filter buttons and unnecessary one-category filters are hidden. |
| Events | Practical facts precede the story on phones. Past events are ordered newest first and their original descriptions are identified. Current event enquiries carry the event title. No unpublished time zone is added. |
| Volunteer | Current roles, actual published centre choices, optional fields labelled clearly, and an early form link. Role links preselect the opportunity and carry its name in the existing message payload. |
| Contact and centre enquiries | Direct form anchors, contextual contact subjects, phone/email autocomplete, clearer validation and feedback, duplicate-send guards, and focus on confirmation. Contact details appear before the form on phones with an early form link. Centre pages expose an early enquiry link. |
| Giving | General giving has a useful enquiry path. An optional configured, published backend fund can enable unrestricted checkout. Cause checkout validates amount and email, freezes the submitted transaction context, presents verification-pending separately from failure, preserves the reference, and avoids inviting another payment while verification is pending. |
| Gallery | Only records with real published image URLs are shown. Actual images replace unrelated thumbnail fallbacks. Uniform uncropped photo areas, meaningful available filters, and an accessible dialog with previous/next controls, Escape, arrow-key navigation and focus restoration replace the old overlay. |
| Shared details | Smaller loading skeletons fit narrow phones. Photo-strip controls indicate their ends. Progress values have accessible bounds and currency text. Missing membership/donor counts no longer imply zero or a newly forming community. Decorative initial avatars are removed from centre cards and details. |
| Sharing and indexing | A real default share image, event/cause/centre Open Graph images, the new Visit sitemap entry, and removal of merged route entries. Event occurrence dates no longer masquerade as sitemap modification dates. |
| Policies | Shared compact headings and reading typography now apply. Existing policy text remains interim and must be completed factually before release. |

## Published content and API behaviour

The frontend no longer pads API lists or overrides matching backend records with `mock-data.ts`. Empty collections stay empty. Detail 404s stay missing; transient detail failures reach the error boundary. General content fetches have a timeout and follow same-origin pagination with loop protection. The calendar retains a contact alternative when it cannot show upcoming events.

There is no public programmes endpoint at the time of implementation. The existing programme collection is therefore explicitly owned in `src/content/programmes.ts`; it is not an outage fallback. This distinction is documented in `CLAUDE.md`. Legacy sample data remains isolated and unused in production so it cannot silently become a live event, cause or centre.

Backend list and detail responses sometimes expose different information. For example, a donor count absent from a cause list may be available in its detail. The UI displays only what each response supplies.

## General giving configuration

`NEXT_PUBLIC_GENERAL_DONATION_CAUSE_ID` may identify an existing, active, published backend cause that the Foundation has designated for unrestricted gifts. Its string value must match that cause's actual ID. The existing Paystack public key is still used; no secret belongs in a public environment variable.

Without a valid general-fund record, `/donate` offers “Enquire about a general gift” and preselects the contact subject. It does not fabricate a Paystack destination. Specific published causes retain their checkout. If the Paystack public key is absent, checkout offers a giving enquiry instead.

Before enabling unrestricted checkout, confirm the fund designation and account destination, then exercise it in a controlled test environment. Changes to public environment variables require rebuilding/restarting the frontend as appropriate.

## Work requiring confirmed information

| Priority | Required information / action | Owner or dependency |
| --- | --- | --- |
| Before release | Confirm Accra visit days/times, booking, fees/contributions, what to bring, accessibility, language, children and the currently published office hours. Replace contact-to-confirm guidance where reliable answers exist. | Foundation team |
| Before release | Reconcile retreat duration and venue across event summary, dates and body. The audit found ten days/Cape Coast versus five days/Aburi. Verify the underlying record before changing it. | Event organiser / admin editor |
| Before release | Correct the Sunyani centre record currently reached through a Toronto-named slug; verify its identity and establish the intended permanent URL/redirect. Confirm all regional contacts and gathering arrangements. | Centre coordinators / backend editor |
| Before release | Correct mismatched gallery descriptions. Current examples include “JCF Kumasi Students” with scholarship copy and “JCF Mothers – 2024 Retreat” with meditation-hall copy. Confirm captions, dates and publication permissions against the actual photographs. | Media editor |
| Before release | Finalise privacy and terms from real practices: enquiry/newsletter storage, processors, retention, contact route, analytics/embeds, donation handling and relevant participation terms. Existing interim text is not a completed policy. | Foundation operations and appropriate adviser |
| Before release | Confirm unrestricted giving destination and run provider/backend tests for successful payment, cancellation, retry, verification delay, support and receipt delivery. Verify each published cause's currency and recipient. | Finance / backend team |
| Before release | Submit controlled contact, volunteer, centre and newsletter tests in an agreed test environment; confirm delivery, role/centre mapping and error responses. Local UI checks did not send live enquiries. | Website / backend team |
| Content follow-up | Confirm which programmes are current versus planned; add accountable contacts, specific activities and genuine progress evidence. Maintain local editorial programme content until it has an agreed CMS source. | Programme leads |
| Content follow-up | Supply approved founder chronology, team biographies and portraits, attributable stories, and useful stewardship updates. Do not add invented numbers or outcome promises. | Foundation / editorial team |
| Content follow-up | Add a small curated introductory teaching collection, transcripts/captions, subjects, duration and language; obtain the actual InnerSpace prerequisites, access arrangements and fees. | Teaching / media team |
| After release candidate | Measure production performance and third-party loading, run screen-reader and enlarged-text checks, and ask first-time visitors to find a teaching, plan a visit and enquire about volunteering. Use findings before adding more navigation or features. | Website team and real visitors |

## Validation

Automated checks and browser evidence are recorded below. A successful build is not evidence of payment settlement, legal completeness, or end-user usability.

- ESLint, `npx tsc --noEmit`, and `git diff --check` passed. The production build passed and generated 36 pages; all 14 calendar/API regression tests passed.
- Regression coverage includes empty/outage calendars, date boundaries, authoritative published copy, missing/inactive records, unknown counts, gallery URL requirements, pagination, and rejecting off-origin pagination requests.
- Desktop navigation: opening and Escape closing verified.
- Mobile navigation: named dialog, expanded section state, Escape and focus restoration verified at 390px.
- First-visit enquiry: link lands with the form approximately 100px below the viewport top; “Planning a first visit” is prefilled.
- Volunteer role enquiry: selected role persists into the form; the anchor places the form approximately 100px below the viewport top. No horizontal overflow at 320px.
- Gallery: actual image loaded, arrow-key navigation changed the selected image, Escape closed the dialog, and focus returned to its original photograph button. Controls inspected at 320px.
- Cause checkout: an amount with three decimal places disables payment and marks the field invalid. A valid decimal amount and synthetic email expose the correct donation amount. No payment was initiated. No horizontal overflow at 320px.
- Legacy routes: mission resolves to `/about#mission`; testimonials resolves to `/community#stories`.
- Article: computed reading type is 17px with 30.6px line height at 320px, with no horizontal overflow.
- Homepage: mobile photograph, typography, masthead and actions visually inspected at 390px; desktop masthead and hero inspected at 1280px.

No live forms, subscriptions, payments, external messages, or production admin changes were submitted. No production performance score or complete accessibility certification is claimed.
