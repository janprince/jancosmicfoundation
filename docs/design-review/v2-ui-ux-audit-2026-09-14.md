# Jan Cosmic Foundation — V2 UI/UX review

> This records the site before implementation. For changes now applied to V2 and the remaining work, see [the implementation notes](./v2-implementation-2026-09-14.md).

**Reviewed 13–14 September 2026 · Branch: v2 · Commit: 6d389b9 (update)**

This is a review of the current local website and its source, including the V2 changes. It supersedes the earlier review as a description of the present interface. It proposes work; it does not apply a redesign or change Foundation content.

## Recommendation

**Keep V2’s visual foundation. The next substantial improvement should make the site more informative, trustworthy, and easier to act on.** Newsreader, Figtree, the indigo palette, and photographs of Dr. Jan and the community are appropriate. Changing the fonts or replacing the whole design again would leave the most important problems unresolved.

The remaining sense of a template comes from repetition: a large atmospheric heading, an abstract introduction, several panels, another spiritual invitation, and a large footer. Too many pages explain similar intentions without supplying different information. An established spiritual foundation feels established through the specificity of its people, teaching, places, history, and work.

The recommended direction is a **warm, editorial, practical spiritual foundation website rooted in Accra**. Preserve the spiritual language where it expresses the teaching. Use clear everyday language where someone needs to decide whether to attend, study, volunteer, or give.

The highest-value changes are:

1. Reconcile conflicting event, centre, and gallery content, and establish one authoritative publishing source.
2. Complete the general-donation journey and improve donation feedback.
3. Publish useful first-visit information and make it a primary navigation destination.
4. Bring actions and practical facts much earlier on mobile.
5. Fix keyboard navigation, gallery dialog behavior, and low-contrast interface details.
6. Consolidate overlapping pages and reduce repeated introductions and closing invitations.

## Scope and confidence

Reviewed all **18 static public page routes and four dynamic detail templates**, plus the 404 page, shared components, forms, data transformations, metadata, sitemap, loading templates, and error handling. Browser review covered the current pages and representative event, article, centre, and cause details. Responsive checks used desktop 1280 × 720, mobile 390 × 844, a tablet teaching view at 768 × 1024, and donation controls at 320 × 740.

Evidence labels used below:

- **Observed:** reproduced in the local browser, including content currently served to the site.
- **Code:** confirmed in the current implementation; an edge case was not necessarily induced.
- **Recommendation:** design or editorial judgment, not an observed defect or measured conversion result.

Content supplied by the API can change independently of this commit. Observed examples are a snapshot of the review. The presence of a claim in the API or repository does not establish that it is accurate; the Foundation needs to confirm it.

### What V2 already does well

- Real community photography now gives the homepage a recognizable place and people. The desktop opening is substantially more compelling than a collection of decorative marketing cards.
- Newsreader gives headings an editorial character; Figtree works well for navigation and ordinary reading. Keep both.
- Shared page headings, buttons, spacing, colours, and Phosphor icons make the pages more consistent.
- The homepage exposes teachings and visiting without requiring an account.
- The calendar correctly displayed zero upcoming and two past events during this review. Empty/unavailable calendars no longer insert sample events, and missing event details do not invent a fallback event.
- Teaching title search and its no-results state work. The main YouTube iframe is deferred until a visitor chooses to play.
- The homepage photo strip is manually controlled rather than automatically rotating.
- Contact fields have visible labels and native required-field validation. The newsletter has a live status region and disables its controls while sending.
- There is one main landmark, a skip link, reduced-motion CSS, and a no-IntersectionObserver fallback for reveals. The mobile menu uses Headless UI’s dialog machinery rather than an entirely custom focus system.
- Article pages already include canonical URLs, article metadata, and structured data. The site already has an API-backed content system; it does not need a new CMS simply to address this review.

These are foundations to retain, not features to rebuild.

## Priority findings

P1 means address before treating V2 as ready for a wider public release. P2 means the next focused improvement cycle. P3 means worthwhile when content or usage justifies it. Effort estimates describe relative implementation scope, not calendar promises: S = localized, M = a template/workflow, L = several templates or editorial coordination.

| ID | Priority | Finding | Evidence | Main owner | Effort |
| --- | --- | --- | --- | --- | --- |
| 01 | P1 | Public information disagrees across and within pages | Observed | Editor + content administrator | M |
| 02 | P1 | Local fallback content can override or repopulate published content | Code | Frontend + backend | M |
| 03 | P1 | General giving is offered without a checkout action | Observed + code | Frontend + fundraising | M |
| 04 | P1 | Gallery and navigation have keyboard/accessibility defects | Observed + code | Frontend | M |
| 05 | P1 | First-time visitors cannot readily plan attendance | Observed + recommendation | Foundation operations + editor | M |
| 06 | P1 | Volunteer applications use centre choices that do not match the directory | Observed + code | Frontend + operations | S–M |
| 07 | P1 | Privacy and terms pages explicitly remain unfinished | Observed | Foundation owner + editor | M |
| 08 | P2 | Mobile page order buries the useful information and actions | Observed | Design + frontend | M |
| 09 | P2 | Article text and secondary interface text need better readability | Observed + measured colours | Design + frontend | S |
| 10 | P2 | Forms and donation states need clearer recovery and confirmation | Observed + code | Frontend + backend | M |
| 11 | P2 | Overlapping pages and inconsistent labels weaken navigation | Observed + recommendation | Design + editor | M |
| 12 | P2 | Teachings and programmes need curation and practical metadata | Observed + code | Teaching editor + frontend | M |
| 13 | P2 | Repeated decoration and slow reveals make pages feel templated | Observed + code | Design + frontend | M |
| 14 | P2 | API pagination and publication states need explicit handling | Code | Frontend + backend | M |
| 15 | P3 | Sharing, search visibility, and performance need production validation | Code + recommendation | Frontend | M |

### 01. Correct the information before polishing its presentation

The following examples are visible now:

| Location | Observed issue | Required correction |
| --- | --- | --- |
| /events/annual-spiritual-retreat-2026 | Summary says a ten-day retreat; the body describes five days in Aburi; the details give 31 July–9 August and Cape Coast, Central Region. The body still encourages early registration despite the concluded status. | Reconcile the record against the organiser’s actual event details. Turn concluded-event copy into an archive or recap. |
| /centres | “JCF Sunyani Centre” links to /centres/toronto-canada. | Confirm whether this is a renamed record or an incorrectly repurposed one. Give Sunyani its correct URL and use a redirect only where it preserves the same entity. |
| /centres/accra-ghana | “Newly forming” sits alongside a description of a flagship centre established in 1988 with the largest meditation community in West Africa. About dates the Foundation to 2021. | Replace inferred status with a verified status. Explain any distinction between Dr. Jan’s earlier work, the centre, and the Foundation’s founding. Verify the superlative or remove it. |
| /events/meditation-intensive-accra-may-2026 | The listing names the Accra Centre in Airport Residential Area, while the current centre/contact information points to Kwabenya. | Confirm the historical event venue; label it clearly if it differs from the present headquarters. Do not automatically rewrite historical venues to the current address. |
| /gallery | “Winter Solstice Fire Ceremony” describes an evening fire, but opens a daylight photograph of students sitting on grass. “2024 JCF Retreat” displays a September 2025 date. | Match every photograph to its actual event and explain whether the displayed date is the event date or publication date. |

Also review the gallery’s fundraising, scholarship, medical-outreach, and attendance claims; the GH₵50/200/500 impact examples; team biographies; testimonials; and attributed quotations against Foundation records. This review does **not** establish that those claims are false. It establishes that the site lacks a consistently reliable presentation and visible sourcing.

Do not use a membership count as a substitute for a centre’s operational status. The [membership helper](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/lib/centres.ts:12) labels every count below 20 “Newly forming”; [API transformation](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/lib/api.ts:148) also turns an absent count into zero. All seven directory entries consequently appeared newly forming. “Count not published,” “community contact,” and “new centre” are different states.

**Acceptance:** each current event has one coherent date range and location; centre names, addresses, identities, and URLs agree; each gallery image has a verified caption; unknown counts and dates are not presented as factual activity statuses.

### 02. Make the publishing source authoritative

The calendar now handles missing content honestly, but most other content types still substitute local mock records when an API response is empty or unavailable. Detail lookups can also fall back to local records after errors. In addition, local cause, programme, and team text overwrites matching backend content, and local programmes absent from the backend are appended to its results. See [API transformations](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/lib/api.ts:124) and [fallback/list behavior](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/lib/api.ts:284).

This creates a practical editorial problem: clearing, changing, or unpublishing something in the administrator may not remove or change the public page as expected. An intentionally empty list and a network failure become indistinguishable. A fallback cause may also expose a checkout without proving that its identifier belongs to a currently published backend cause.

Move approved local content into the authoritative content system, or explicitly document a deliberate static-content ownership model. Keep demonstration records in development. In public operation, distinguish empty, unavailable, unpublished, and available content. Disable giving for a cause whose valid publication/identity cannot be established. Use a known-good published cache where appropriate rather than silently substituting demonstration material.

**Acceptance:** editing/unpublishing a record has predictable public results; empty collections remain empty; an outage does not resurrect content or offer an unverified donation destination.

### 03. Finish the general-donation journey

On /donate, “Or give to the whole work” offers three monetary examples but contains no donation button, link, or checkout. All four visible cause links lead to specific initiatives. This is a confirmed dead end in the [general-giving section](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/app/donate/page.tsx:94).

Put a working “Give to the Foundation” choice near the beginning of the page, backed by a valid general fund in the donation system. Present specific initiatives as an alternative. Suggested amounts should be selectable only if they actually carry the selected amount into checkout; otherwise label them clearly as examples.

Pair the giving decision with concise factual information: recipient identity, what this fund supports, GHS currency, available payment methods confirmed in the configured checkout, receipt arrangements, and a giving-support contact. Link to real stewardship information. Verify exact “this amount funds this outcome” statements; where costs vary, use an honest approximate contribution explanation.

On cause details, show a compact story and the donation action together. Mobile visitors should not have to read the entire story before discovering the form.

**Acceptance:** a visitor can make an unrestricted gift from /donate without selecting an unrelated initiative; the chosen fund and amount persist into the payment flow; payment, cancellation, pending, verification, and receipt behavior are tested in the payment provider’s test environment.

### 04. Repair the navigation and gallery interactions

**Desktop menu:** opening About with the keyboard and pressing Escape leaves it open, with aria-expanded still true. The implementation combines hover and click toggles but has no Escape handler. See [Navbar](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/layout/Navbar.tsx:121). Make disclosure behavior deterministic for pointer and keyboard use; close on Escape, route selection, and focus leaving the group. Add aria-current to the current page link.

**Mobile menu:** on /about, its children are visible while About reports aria-expanded=false. “Overview” and “The Foundation” both link to /about. The dialog has no accessible name. See [MobileMenu](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/layout/MobileMenu.tsx:42). Use one actual expanded state, remove the duplicate destination, and give the dialog a name. Preserve Headless UI’s working focus and dismissal behavior.

**Gallery lightbox:** opening an image leaves focus on the background thumbnail. The overlay has no dialog role/name, and Escape does not close it. Its enlarged image still uses a fixed crop, so opening a photograph does not necessarily reveal the whole photograph. See [GalleryPageContent](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/app/gallery/GalleryPageContent.tsx:118). Use an accessible dialog, focus containment/restoration, Escape, background scroll locking, and a contained image that preserves its aspect ratio. Ensure tall captions remain scrollable on small screens. Previous/next controls would then make archive browsing easier. [W3C modal dialog guidance](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

**Writing filters:** they declare tablist/tab roles without the corresponding tab-panel relationships and keyboard behavior. These are filters, so the simpler event/gallery pattern—buttons in a labelled group with aria-pressed—is appropriate. See [writing filters](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/app/blog/BlogPageContent.tsx:52).

**Acceptance:** menus and gallery work using keyboard alone; names and expanded/selected states match the visible interface; focus returns to the opener; no interaction requires hover.

### 05. Give newcomers a useful Visit page

The homepage’s first-visit section is a useful beginning, but its answers mostly direct people to contact the Foundation. The calendar currently has no future dates. A new visitor is left without enough information to plan a visit confidently.

Add /visit, accessible directly from the main navigation and homepage. It should contain verified answers to:

- Where exactly should I arrive? Include the address, map link, useful landmark, and a photograph of the entrance.
- When may I attend? Distinguish office hours, regular practice, special events, and visits by arrangement. Show when the schedule was last confirmed.
- Is booking required? Is there a fee, suggested contribution, or no charge? What is included?
- What happens at a first sitting, how long does it last, and is previous experience needed?
- What language is used? Are children welcome? Are there relevant age or supervision arrangements?
- What should I wear or bring? Is seating available for someone who cannot sit on the floor? What access arrangements are available?
- Who can answer a specific question, and through which maintained channel?

These are content requirements to confirm, not permission to invent policies or a recurring schedule. If visits are by arrangement, say so prominently and provide a short visit enquiry path. Keep the essential information visible; reserve accordions for secondary questions.

**Acceptance:** a newcomer can find the location, attendance arrangement, cost basis, and contact without visiting several pages or sending an exploratory message merely to understand the offering.

### 06. Make volunteering concrete and consistent

The application offers Accra, Kumasi, London, Toronto, and New York. The current directory instead includes Central Region, Western/Takoradi, Sunyani, UK/Europe, USA, Kumasi, and Accra. The [form choices are hardcoded](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/forms/VolunteerForm.tsx:94).

Populate choices from the verified directory, using stable identifiers. Add “Remote / no centre preference” if supported. The visible digital/communications opportunity should link directly to an application with that role selected. Explain tasks, expected time, location/remote arrangement, coordinator, and the next step. Distinguish genuinely open roles from general expressions of interest.

The volunteer page currently presents the entire testimonial collection as words from current and former volunteers, although a visible attribution is simply “Member — London Centre.” Select stories relevant to volunteering or change that section’s description. Consent and accurate attribution matter more than adding portrait circles.

**Acceptance:** every selectable centre is current, an advertised role can be selected without retyping it, and the confirmation tells the applicant what happens next using a response expectation the team can actually meet.

### 07. Finish the public trust material

Privacy says the formal policy is being finalised; Terms says the full terms are coming soon. These are visibly unfinished pages on a site collecting enquiries, volunteer information, newsletter subscriptions, and donations.

Have the responsible Foundation owner approve complete, accurate content describing the actual handling of those activities. Include a revision date and a clear contact. Check the wording against the actual API, Paystack integration, newsletter system, optional analytics, YouTube, and map embeds. Put a short relevant privacy link beside forms, with newsletter frequency and unsubscribe expectations beside signup. This is a content/readiness finding, not a legal-compliance determination.

Add a concise stewardship section to About and link to it from Donate: who operates the Foundation, who oversees resources, current project status, and any approved reports. A dedicated reports page is useful only when there are real reports to publish. For programmes involving children or personal guidance, explain the actual supervision, provider roles, boundaries, and contact arrangements without implying services that have not been established.

### 08. Reorder mobile pages around the visitor’s task

The layout usually stacks correctly, but correct stacking is not sufficient. At 390 × 844, these were the approximate document positions of useful information:

| Page | Observed position from document top | Implication |
| --- | --- | --- |
| Volunteer | First application field: 5,171px | Benefits, an opening, and four stories precede the application; there is no early application jump. |
| Cause detail: Guide the Children | Email field: 1,919px | The main donation controls come after the story. |
| Annual retreat detail | “Event Details”: 1,400px | Date, location, and concluded status in the details panel come after the long description. |
| Contact | “How to reach the Foundation”: 1,220px | A person seeking a phone number or directions must pass the form. |
| Teachings | Search field: 1,047px | The large heading and player precede the archive’s discovery tool. |

These are local layout measurements, not engagement or performance metrics. Full document heights, including the footer, were roughly 7,434px for Volunteer, 8,446px for Programmes, and 6,719px for Mission & Vision. Long pages are acceptable when each section earns its place; here the main issue is repeated framing before the task.

Add early in-page actions and rearrange mobile order: “Apply to volunteer,” “Give to this work,” event facts, call/directions, and teaching search. Use ordinary anchor links and sticky-header-aware offsets before adding persistent floating UI. If a mobile sticky giving action is later used, it must not cover content or keyboard focus.

### 09. Improve reading comfort and contrast without changing the fonts

The article body in the inspected teaching was **14px on mobile**, because the [article template](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/app/blog/[slug]/page.tsx:172) uses prose-sm. That is an uncomfortable priority choice for a site whose central offering is teaching. Use 17–18px for long reading on mobile and approximately 18–20px on desktop, with a comfortable line height and roughly 60–70 characters per line. These sizes are design targets, not WCAG minimum font-size requirements.

Keep the strong body and heading colours. Tighten the use of 11–12px uppercase metadata and increase essential captions/supporting text. The following ratios were calculated from the source colours:

| Pair | Contrast | Decision |
| --- | --- | --- |
| Navy #000B58 on gold #D4A843 | 7.98:1 | Keep for gold primary actions. |
| Muted #5F5D6B on cream #FBF8F2 | 6.07:1 | Good base for secondary body copy. |
| Gold ink #8A6516 on cream | 5.01:1 | Suitable text accent; preferable to bright gold on light backgrounds. |
| Bright gold #D4A843 on cream | 2.09:1 | Insufficient as the sole custom focus indicator on cream. |
| Border #E3DDD0 on white | 1.35:1 | Too faint where the border is the only way to identify a blank input. |
| Legacy gray #9CA3AF on white | 2.54:1 | Too light for small normal text; replace remaining equivalent grey treatments. |

Use a navy focus ring on light backgrounds and a light/gold ring on navy. Measure actual composited colours where opacity is used. The visible payment assurance text is particularly faint; give this useful reassurance normal readable contrast. Not every decorative divider or button outline must meet a contrast threshold, but meaningful control/state cues need sufficient contrast. [W3C non-text contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

### 10. Make form and payment feedback dependable

The forms have a sound basic structure, but [ContactForm](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/forms/ContactForm.tsx:19), [VolunteerForm](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/forms/VolunteerForm.tsx:22), and [JoinCentreForm](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/forms/JoinCentreForm.tsx:24) only change the button text while sending. They do not disable repeat submissions. API error detail is discarded, and success/error replacements lack the newsletter’s live-status pattern.

Disable repeat submits while pending, preserve entered values on failure, associate field errors with fields, announce submission status, and move focus deliberately to a confirmation or error summary. Add appropriate autocomplete attributes and identify optional fields consistently. “Connect with this centre” should lead to “Send enquiry,” not unexpectedly become “Join [centre]” if the form only sends a message. [W3C form feedback guidance](https://www.w3.org/WAI/tutorials/forms/notifications/).

The donation form was tested locally with a valid-looking email and a custom amount of zero, without sending a payment. It displayed the amount error but still labelled the disabled button “Enter email to donate.” The guidance should explain the actual blocking issue. See [DonationCheckout](/Users/kami/Projects/Kami/JIVA/jancosmicfoundation/src/components/forms/DonationCheckout.tsx:256).

For payment completion, show the reference, confirmed amount/fund, and a useful support link. The pending state currently offers “Make another donation” prominently but no displayed reference. Prioritise confirmation/help there to reduce accidental repeat giving. Freeze the submitted transaction details during verification so the amount shown in the thank-you state cannot drift with edits. Validate the existing receipt promise end to end. A missing payment configuration should have an explicit unavailable state. These completion paths were source-reviewed, not exercised with a real transaction.

## Page decisions and proposed structure

The site does not need a large number of new pages. It needs fewer overlapping introductions and clearer responsibilities for the pages that remain.

### Proposed primary navigation

| Primary item | Destinations |
| --- | --- |
| The Foundation | About, Dr. Baffour Jan, Community, Life at the Foundation |
| Teachings | Public teachings, Writings, InnerSpace — structured study |
| Visit & Gatherings | Plan a visit, Retreats & events, Centres |
| Our Work | Programmes & service, Volunteer |
| Give | Direct access to /donate |

The logo returns home. Contact remains plainly visible as a utility link and in the footer. Every navigation group must provide real destination links; a compact accessible disclosure is sufficient. On mobile show the full Foundation name in a compact two-line wordmark instead of only “JCF.” InnerSpace remains findable, but its unfamiliar name no longer competes with basic visitor tasks without explanation.

This is a proposed information architecture, not a mandatory URL migration. Existing /blog and /programs URLs can remain while their visible labels become consistent. Any actual consolidation needs redirects, internal-link updates, and sitemap updates.

### Route-by-route recommendations

| Current route/template | Decision | Recommended purpose and changes |
| --- | --- | --- |
| / | Keep, tighten | Identify the Foundation and place; introduce one teaching; show how to visit; show real community and service. Bring the next practical step earlier and remove repeated definitions of the Foundation. |
| /about | Keep, strengthen | Own the Foundation’s story, founding context, mission/vision, actual people, structure, and stewardship. Reduce lengthy repetition of the teaching framework. |
| /about/founder | Keep | Dr. Jan deserves a distinct page. Add an approved biography and clearly dated milestones; distinguish the teacher’s earlier work from the Foundation’s founding. Replace “Public materials around his work describe…” with owned, verified prose. The closing “Sit with the teaching” should offer a teaching, not primarily route to Programmes. |
| /about/mission-vision | Merge into About | The mission itself matters; the extra page mostly repeats About and Programmes. Preserve the approved mission and vision in a concise section and redirect the old route to it. Retain a standalone page only if it develops substantial distinct material. |
| /teachings | Keep, curate | Become the clear entrance to the teaching library. Add a small “New to Dr. Jan?” selection, visible search, subjects, duration, language, and text/audio availability as approved metadata becomes available. |
| /innerspace | Keep, shorten | Useful bridge to the teacher’s external course site. Give format, commitment, availability, prerequisites, fees, sample material, and support details. One concise explanation and a clear external handoff are enough; current repetition makes a short offer feel vague. |
| /programs | Keep, refocus | Use “Programmes & service” consistently. Give each real programme its audience, activity, location, current status, responsible contact, evidence, and a relevant next step. Link existing teachings/events/donation pages rather than create seven thin detail pages. |
| /events | Keep | Retain upcoming/past separation and honest empty state. Add regular practice information only when verified. Sort the past archive newest first; current client filtering preserves the ascending all-events order. |
| /events/[slug] | Keep | Put dates, duration, time zone, location, cost, suitability, booking and availability near the top. Add directions and calendar export. Completed events need recap language and relevant recordings/photos. |
| /blog | Keep; standardize label to Writings | Currently four articles, all in one category, make “All” and “Spiritual Growth” redundant filters. Remove low-value controls at this size; add meaningful topics/search when the archive warrants them. |
| /blog/[slug] | Keep; improve reading | Larger body type, source/author or editor attribution, good headings, and a narrow reading column. Move duplicate “Article Info” into one metadata row; use the space for contents on long articles. Change “Back to Blog” to “All writings.” |
| /centres | Keep, verify | Prioritise Accra and distinguish physical centres from regional/online communities. Display correct locations and operating status. At seven entries, a clear grouped list is sufficient; a large interactive map is unnecessary. |
| /centres/[slug] | Keep if operationally distinct | Add actual meeting arrangements, arrival details, directions, centre contact, accessibility, and linked local events. Avoid blank contact rows. Do not force a joining form to be the principal route for an ordinary visitor. |
| /community | Keep, reorganize | Explain how people participate, then offer in-person connection and the relevant maintained channels. Avoid duplicating the whole centre directory and another full social-media section. Explain what membership means only if a defined membership process exists. |
| /gallery | Keep as Life at the Foundation | A useful source of credibility and atmosphere if images and captions are accurate. Group by actual gathering/project, use natural image proportions, and fix the lightbox. Twelve images do not need a large gallery platform. |
| /testimonials | Merge into Community for now | Four visible reflections do not justify a long independent page plus reuse on Volunteer. Place selected, consented stories next to the activities they explain. Keep or revive a stories archive when there are substantial interviews or profiles. |
| /volunteer | Keep, shorten | Open with actual roles and an application action. Provide responsibilities and time commitment, link each role to the form, and use only a small relevant story selection. |
| /donate | Keep, complete | Make unrestricted giving work immediately; offer named initiatives and clear stewardship information. Reduce duplicate introductory and closing sections. |
| /donate/[slug] | Keep | Explain current work, evidence, need and use of funds alongside checkout. Show trustworthy campaign status and last update. Ongoing work does not need an artificial fundraising target. |
| /contact | Keep | Put call, email, office hours and directions before or beside the form, including on mobile. Distinguish office hours from practice/visitor times. Offer enquiry subjects that route usefully. |
| /privacy-policy | Keep, finish | Accurate handling of the site’s actual data collection and third parties, with owner-approved wording and revision date. Use a compact document heading. |
| /terms | Keep, finish | Complete terms appropriate to the actual website and transactions; remove “coming soon.” Use the same readable document template. |
| 404 and error states | Keep, refine | Existing home/contact recovery is useful. Preserve the entered path where useful and offer teachings/events as additional destinations only if it helps. Keep error details understandable. |

### What to add—and what to avoid adding yet

**Add now:** /visit; an About stewardship section; verified introductory teaching selections; useful per-programme actions; complete giving and form states.

**Add when supported by real content:** individual teaching pages with shareable URLs/transcripts, a reports archive, substantive community stories, approved translations, and recurring donation options if the Foundation can maintain them.

**Do not add simply to make the site appear larger:** a member dashboard, AI spiritual chat, app download promotion, shop without a real catalogue, achievement counters, a testimonial carousel, a second newsletter funnel, or one thin page per activity. None is needed to solve the observed problems.

## Visual system recommendations

### Typography and tone

Retain Newsreader/Figtree. Use Newsreader primarily for titles, short quotations, and editorial emphasis; Figtree for longer explanatory content and controls. The serif should express warmth without making every section feel ceremonial.

Use a clearer hierarchy: homepage title around 44–52px on mobile and 72–88px on desktop; ordinary page titles about 36–44px and 48–64px respectively; section headings about 28–34px mobile; practical body text 16–18px; long reading 17–20px; essential supporting text 14–16px. Validate wrapping with actual titles rather than treating these as rigid rules.

Use sentence case for most labels and one naming convention: “Writings,” “Programmes,” “Dr. Baffour Jan,” and “Donate” or “Give” chosen consistently. Explain “sitting,” “satsang,” or “balanced-state practice” on first use where needed. Frequent qualifications such as “sincere,” “honest,” “committed,” and “deeper” may unintentionally make a newcomer feel they must prove readiness. Retain them where they belong in an attributed teaching; prefer direct invitations in navigation and practical copy.

### Page headings and spacing

The observed desktop Donate heading occupies roughly 465px before the page’s actual task begins. On mobile, repeated generous sections compound into long journeys. A major homepage photograph can justify a substantial opening; a contact form, archive, donation page, or policy document benefits from a shorter heading.

Create three deliberate heading treatments: photographic homepage/story opening; compact practical/listing heading; readable article/document heading with metadata. Keep the navigation background legible independently of the hero so every page is not forced to begin with a large dark block.

Reduce ordinary mobile section padding from the current 72px minimum to approximately 40–56px, adjusting for content. Reserve larger gaps for genuine changes of subject. Standardize reading width, cards, columns, and interior padding, while allowing actual content to produce some variation.

### Photography and identity

The desktop homepage photograph is a strength. At 390px, its crop leaves a large blank wall above the text and places Dr. Jan mostly outside the frame. Use a mobile-specific crop or another existing photograph where the teacher and community remain visible. Keep the text/background contrast reliable as the crop changes.

Use photographs as evidence: an entrance photograph for visiting, a specific gathering for its event, actual programme activity for service, a portrait for a biography. A group meditation image should not stand in for a fire ceremony, a farm, or a fundraising gala simply because it is available.

Gallery tile aspect ratios are currently assigned from the last character of the item ID. Replace that arbitrary rule with image proportions or editorial crop metadata. Show the complete image when opened. For staff and community portraits, use approved photographs when available; otherwise a simple text attribution is more honest and less application-like than a large initial avatar repeated across the site.

The site’s Ghanaian identity should emerge from its people, language choices, location, stories, and photographs. Do not add generic “African” motifs or borrowed Eastern temple imagery as a substitute for that specificity.

### Components and interaction

| Component | Keep | Improve |
| --- | --- | --- |
| Buttons and text links | Recognizable primary/secondary hierarchy; generous main targets | One primary action per section. Use underlined text links for browsing. Reserve pills mainly for interactive controls; avoid making every fact resemble a chip. |
| Icons | One Phosphor family, restrained use | Decorative icons should stay hidden from assistive technology. Use enough stroke weight/contrast at small sizes; avoid icons that merely repeat the adjacent label. |
| Cards | Useful for distinct causes and opportunities | Use editorial rows or lists where comparison is simple. Reduce nested white panels and extra borders; don’t force identical card structures onto biography, teaching, and operational information. |
| Badges | Past-event and truly meaningful programme status | Derive status from actual data, not absent counts. Increase tiny uppercase labels where they carry important meaning. Show event year/date range clearly, especially in archives. |
| Photographic strip | Real images, captions, manual browsing | Indicate position and unavailable previous/next directions. Respect reduced motion in explicit scrollBy calls. Keep swipe and keyboard access. |
| Teaching player | Click-to-load iframe and descriptive title | Make search/selection easier to reach, expose the selected item programmatically, add a normal YouTube fallback link for each recording, and let links preserve a chosen teaching. Don’t imply playback with animated bars before playback starts. |
| Filters | Simple controls with visible counts | Use consistent button semantics, meaningful categories, and announced result changes. Preserve filters/search in the URL when the collection grows enough to justify sharing and Back-button restoration. |
| FAQ | Native disclosure is a good fit | Give actual answers. Do not hide the essential arrival/booking facts inside accordions. |
| Forms | Visible labels, 16px inputs, native required checks | Better optional-field cues, autocomplete, sending lock, specific errors, accessible confirmation, and nearby privacy context. |
| Donation progress | Ongoing causes correctly avoid fabricated targets | Show progress only with verified amounts/goals. Keep ARIA values valid for zero goals and overfunding; include a source/update date for figures. Current live causes exercised the ongoing path, not those edge cases. |
| Footer | One newsletter, contact links, legal links | Reduce repeated navigation and group by visitor task. Add a short unsubscribe/privacy sentence. Mobile currently stacks a substantial footer after already long pages. |
| Loading and errors | Dedicated loading/error/empty components exist | Match skeletons to current layouts. Replace fixed 384px skeleton bars on narrow screens with bounded widths. Distinguish empty content from connection failure; provide a useful retry/contact path. |

### Motion and colour restraint

The star field is a legitimate interpretation of the brand. Use it selectively—perhaps a principal closing section and footer—rather than in every page heading, quote, mission panel, and closing invitation. Maintain indigo as the anchor, cream as the reading surface, and gold as a limited accent.

The homepage’s 22-second infinite image scaling has no pause control. A static photograph would suit the intended calm identity and remove the issue. Repeated 0.9-second reveals and long hover zooms make routine browsing feel staged. Keep short, subtle transitions where feedback benefits from them; show practical information immediately. Reduced-motion CSS already exists, but explicit smooth scrolling in the photo strip and teaching selection should also respect that preference. [W3C guidance on automatically moving content](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

## Teaching, content, and operational structure

### Give each visitor a short, complete path

| Visitor | Recommended path | Information that must be available |
| --- | --- | --- |
| Curious newcomer | Home → introductory teaching → Visit or more teachings | What JCF is, who Dr. Jan is, what to try first, no unexplained commitment |
| Local first-time visitor | Visit → confirmed gathering/arrangement → directions | Date/time, cost basis, suitability, arrival, access, contact |
| Remote learner | Teachings → useful recording/writing → InnerSpace | Topic, duration/language, source, course facts and external destination |
| Returning member | Events or centre → latest information | Current schedule, changes, local contact; minimal repeated introduction |
| Volunteer | Open role → selected application → confirmation | Work, location/remote options, commitment, coordinator, next step |
| Donor | General fund or cause → checkout → confirmation/support | Purpose, recipient, amount/currency, verification, receipt, reference |
| Parent or partner | Specific programme → responsible contact | Actual activities, supervision/provider roles, scope, participation arrangements |

### Content governance that supports the design

Assign owners and review dates to content, not just page layouts. Maintain approved records for:

- **Events:** time zone, start/end, booking state, venue, fee/inclusions, suitability, organiser, and last update.
- **Centres:** stable identity, operating status, address or regional scope, map, regular arrangements, contact, and last confirmation.
- **Programmes/causes:** current versus planned work, practical activities, accountable person, funding need, and evidence of progress.
- **Teachings:** title, speaker, recording/publication date, subject, duration, language, transcript/source, and permissions where applicable.
- **People/stories:** correct roles, approved quotations, relevant participation context, and publication consent.
- **Images:** what/where/when, descriptive alternative text, rights/consent, and suitable crop.

Specific, accurate content will do more for credibility than more counters or symbolic graphics. The source still contains unused stats and UI components; do not treat unused values as live homepage claims. Remove confirmed-unused demo/decorative code during cleanup to reduce accidental reuse.

## Lessons from comparable spiritual organisations

These are reference patterns, not evidence that another organisation has better conversion rates. They support the practical direction without requiring JCF to copy a much larger catalogue, commercial model, theology, or visual identity.

| Reference | Useful pattern | Appropriate application to JCF |
| --- | --- | --- |
| [Isha visitor guide](https://isha.sadhguru.org/en/center/welcome-isha-yoga-center-coimbatore) | A distinct practical guide covers daily schedule, transport and visitor facilities. | Give visiting the same editorial care as philosophy. Publish JCF’s own arrangements, not borrowed routines. |
| [Plum Village practicalities](https://plumvillage.org/retreats/visiting-us/practicalities) | Arrival, transport, clothing, meals and length of stay are organized around visitors’ questions. | Build a welcoming /visit page with plain answers and useful section navigation. |
| [OSHO online meditation days](https://booking.osho.com/meditation-days/) | A recurring participation format explicitly addresses time zones. | If JCF offers online gatherings, make schedule and participation format explicit for Ghana and overseas communities. |
| [Eckhart Tolle](https://eckharttolle.com/) | Public resources, named courses and events have distinguishable roles and specific subjects. | Curate an understandable route from public teachings to structured study. Avoid importing its many promotional campaigns and trial-oriented presentation. |

The strongest common lesson is that atmosphere and practical clarity can coexist. JCF’s scale calls for a smaller, well-maintained site with a recognisable human voice.

## Engineering and discoverability

**Pagination:** list helpers read only the first results array from a paginated response and ignore next/count. As the archive grows, filters, centre totals, lists, and the sitemap can silently represent only that page. Decide where to paginate visibly and where to fetch the complete collection, especially for the sitemap. Do not describe a partial list as “all.” This is a code-level growth risk, not a claim that records are already missing from the current four-post archive.

**Missing versus unavailable:** event detail catches any fetch failure and returns not-found; other details may return mock content. Distinguish a real 404 from a transient API failure. Consider an explicit timeout and useful recovery so visitors are not left waiting indefinitely.

**Metadata and sharing:** article metadata is already relatively complete. Add a proper default share image and route-specific sharing details for important events, causes, and centres; add breadcrumbs where they genuinely help. Event structured data should reflect verified public facts and booking status. Use actual update dates for sitemap lastModified values: an event’s occurrence date is not its page’s modification date. Keep one canonical domain and preserve redirects when consolidating routes.

**Performance:** retain Next Image optimization and deferred video loading. Check real image dimensions/crops, delivered sizes, font requests, and third-party loading in a production build. A click-to-load map can be appropriate if measurement shows the embed adds unnecessary work before someone seeks directions. Do not diagnose Core Web Vitals from the development server or infer performance from page height. Measure before introducing a new image pipeline or extra infrastructure.

**Maintenance:** the shared CSS plus Tailwind utilities still allow local typography and state styles to drift. Consolidate fields, statuses, heading variants, and metadata styles first. Remove confirmed-unused old components/styles later. A new framework or broad backend rewrite is not justified by this review.

## Recommended delivery sequence

| Stage | Work | Completion criteria |
| --- | --- | --- |
| 1. Correct and complete | Reconcile content, control fallback publishing, implement general giving, fix centre choices, finish trust pages | No conflicting current facts; no demonstration content offered as a live transaction; every advertised giving choice works; public policies are complete |
| 2. Repair access and mobile tasks | Menu/lightbox fixes, form states, contrast, reading typography, early practical actions | Keyboard flows work; meaningful focus/field cues are legible; visitors reach the relevant action without passing unrelated stories |
| 3. Restructure the experience | /visit, navigation, merge Mission/Vision and short Testimonials page, shorten InnerSpace/Programmes, three page-heading variants | Every route has a distinct purpose; redirects preserve useful old links; ordinary visitor questions have verified answers |
| 4. Deepen useful content | Introductory teaching collection, programme evidence, centre arrangements, better captions, stewardship updates | Content owners can maintain it; a visitor can understand and act without interpreting generic spiritual invitations |
| 5. Validate growth | Pagination, sharing, production performance, targeted analytics and user testing | Complete sitemap/archive behavior; meaningful share previews; measured production performance; evidence from actual visitors guides further additions |

Start implementation with stages 1 and 2. Visual simplification in stage 3 should follow the agreed content hierarchy, so the Foundation does not go through another surface redesign while the same practical gaps remain.

### Focused acceptance tests for the next implementation

1. Ask someone unfamiliar with JCF to identify what it is, where it is, and how to attend from the homepage without coaching.
2. Ask a returning visitor to find the next actual gathering; if none is published, verify that the alternative arrangement is clear.
3. Complete a role-specific volunteer enquiry in a test environment; confirm correct centre/role mapping, one submission, and useful confirmation.
4. Exercise general and cause-specific donations in Paystack test mode, including invalid amount, cancellation, verification delay, failure, and receipt/support paths.
5. Traverse navigation, filters, forms, and gallery using keyboard alone; check names, focus order, Escape, restoration, and reduced motion.
6. Read a long article and complete a form at 320/390px widths and with enlarged text. Check loading and error states as well as the ideal loaded page.
7. Test intentionally empty collections, API outage, removed records, and multiple pages of API results. Confirm that none resurrect demonstration content.

## Verification completed for this review

| Check | Result |
| --- | --- |
| Working branch and baseline | v2 at 6d389b9; working tree was clean at the start and before report creation |
| ESLint | Passed |
| TypeScript, no emit | Passed |
| Existing test suite | Six of six event/calendar tests passed |
| Production build | Passed; Next.js generated the current static and dynamic route set |
| Browser review | Public routes, representative detail pages, navigation, mobile layouts, gallery opening/Escape, event filters, teaching no-results state, empty contact validation, and local donation amount validation inspected |
| Source review | All public page templates and shared interaction/data paths; loading/error/edge-state recommendations identified separately from reproduced issues |

No enquiries, newsletters, applications, external messages, or payments were submitted. Payment settlement, receipt delivery, backend administrative behavior, external memberships, and analytics were not tested end to end. No production Lighthouse/Core Web Vitals benchmark, exhaustive screen-reader audit, legal assessment, or user research was performed. The recommendations are grounded in the local interface, current source, and the cited reference patterns.

**Changes made for this task:** this report only. Website implementation, content, branch, and deployment were left unchanged.
