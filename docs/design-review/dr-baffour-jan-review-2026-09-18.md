# Dr. Baffour Jan / Inner Space — UI, UX and content review

Reviewed 18 September 2026. Project: `/Users/kami/Projects/Kami/JIVA/drbaffourjan`.

## Recommendation

Give the public website the character of a teacher’s home and the student area the clarity of a study room. Connect both visually to Jan Cosmic Foundation, but give each a distinct job:

| Experience | Main responsibility | Main visitor action |
| --- | --- | --- |
| Jan Cosmic Foundation | Community, service, centres, visits, retreats and charitable giving | Visit, participate or support |
| Dr. Baffour Jan | The teacher, his story, his teachings and the invitation to study | Listen to a teaching or explore Inner Space |
| Inner Space | Structured study, continued practice and student support | Start or resume the appropriate lesson |

This calls for focused simplification, not replacement of the existing learning system. Preserve working progress tracking, lesson navigation, account/payment history, previews infrastructure, and course access controls.

## Scope and evidence

I inspected the local source across public pages, student home, course catalogue, course and lesson layouts, account, resources, interviews, guide/help, authentication, enrolment, payment handoff, access levels and progress. I ran the existing site locally on port 3001 and visually reviewed the homepage, teaching library, Inner Space invitation, preview page, enrolment and sign-in, including a 390px mobile viewport. I also checked current official spiritual-teacher websites for information architecture references.

No source code was changed in the Dr. Jan project. No accounts were created, messages sent, payments initiated, access controls bypassed or student records changed. The private student screens were assessed from source; an authenticated student session was not available. Findings about signed-in behaviour below are code findings, not claims of completed end-to-end testing. The preview data observed locally may differ from production data. A local preview creates normal development build/cache files.

## Findings that should be addressed first

### 1. Repair the free introduction before promoting it

The prominent “Sit with a Free Lesson” link opens `/student/preview`, which currently displays “Preview lessons are coming soon.” The page has no public navigation or clear route back to the invitation. It lists five core course titles, but does not deliver the promised sample lesson in this environment.

Publish one genuinely representative, approved sample lesson and put it directly within reach of the Inner Space introduction. Include its title, duration, subject and course context. Until a lesson is available, lead to an existing public teaching and describe it accurately. Give the preview the same public header and clear back/sign-in links.

Evidence: `src/app/student/preview/page.tsx`; observed local preview page.

### 2. Make the membership promise consistent

The same enrolment page advertises **12+ courses / 100+ teachings on mobile**, and **4+ structured courses / 50+ exclusive videos on desktop**. The terms refer to recurring subscriptions and cancellation, while pricing and the invitation describe a one-time payment. “Lifetime” and “ongoing” also alternate without a clear definition.

Use a single published offer specification for the invitation, checkout, terms summary and welcome email. Show counts only if derived from the published catalogue or maintained as verified content. State what is included, what is separate, the access duration, payment frequency and the approved refund process before payment.

Current code pricing is GHS 3,000, with a static approximate USD 250 display outside Ghana. This is an implementation observation, not a price recommendation. At checkout, make the actual **GHS 3,000 charge** the clearest figure; any USD amount should remain visibly approximate. The current form drops the approximation marker used elsewhere.

Evidence: `src/app/(public)/inner-space/join/page.tsx:112`, `:196`; `src/lib/pricing.ts`; `src/components/enrollment/enrollment-form.tsx`; `src/app/(public)/terms/page.tsx:123`.

### 3. Decide how payment and study levels relate

The system has Beginner, Intermediate and Advanced course access, with a considerate request-access screen. However, both payment verification and the payment webhook currently grant **Advanced** access. It is inaccurate to assume new paying students are necessarily gated by progression.

Confirm whether the intended model is all courses after payment, teacher-approved progression, or different arrangements for different student groups. Preserve that policy and explain it before enrolment. Separate the language of purchasing access from the recommended order of study. A progress percentage should never imply spiritual attainment.

Evidence: `src/lib/access-levels.ts`; `src/components/course-locked-state.tsx`; `src/app/api/checkout/verify/route.ts:89`; `src/app/api/webhooks/paystack/route.ts:86`.

### 4. Remove incomplete promises and inactive controls

- The seven-letter invitation promises delivery over two weeks and one-click unsubscribe. The repository implements the first welcome email; comments explicitly say the other six are not built, and no unsubscribe route was found. Replace the offer with an accurate invitation until the complete sequence and unsubscribe flow exist, unless a separately managed service can be verified.
- `/student/resources` is an empty placeholder and `src/data/interviews.ts` returns an empty array. Both are primary student navigation destinations. Hide these destinations until there is content, and remove the corresponding claims in the student guide.
- The personal offering amounts and payment-method buttons in `/donate` have no action handlers. Remove the inactive interface; keep a clear Foundation giving link and, if wanted, a genuine enquiry route for personal offerings.
- Homepage teaching-category tiles look interactive but are plain containers. Make each one open relevant published content, or replace the categories with actual teaching titles.
- “View Retreats” currently opens Inner Space. Point it to the Foundation’s relevant events/visit destination and label the site transition.

Evidence: `src/lib/email-templates.ts:147`; `src/lib/email.ts:160`; `src/data/interviews.ts:56`; `src/app/student/(centered)/resources/page.tsx`; `src/app/(public)/donate/page.tsx:286`; `src/app/(public)/page.tsx`.

### 5. Resolve entry and recovery problems

- The middleware public API list omits `/api/contact` and `/api/leads/subscribe`. From the code, anonymous form submissions are redirected to sign-in instead of reaching the intended JSON handlers. The forms then try to parse the response as JSON. Verify and repair this without weakening student protections; actual message submissions were not tested.
- Payment failures redirect to the join page with error parameters, but that page does not read those parameters. Provide a visible recovery state, retain safe form details, distinguish failed payment from verification pending, and offer support using the payment reference.
- The success page itself renders “Payment Successful” without checking transaction status. The normal callback verifies payment, but the display should also reflect verified state rather than the existence of a success URL. This is a misleading confirmation/analytics issue; it does not establish that the URL grants course access.
- The login screen has no visible home, join or help route. Add these and name the action “Send sign-in code” when that is what happens.
- Middleware records a return destination, but sign-in actions hard-code `/student`. Carry a validated same-site destination through login so an interrupted lesson opens again.
- Enrolment labels lack explicit associations with their inputs, confirmed by unnamed fields in the browser accessibility tree. Add IDs, associated labels, useful autocomplete attributes and clear validation. Optional update consent is preselected and is not included in the checkout payload; make the choice explicit and persist it if retained.

Evidence: `src/middleware.ts:56`; `src/components/contact-form.tsx`; `src/components/email-capture.tsx`; `src/app/api/checkout/verify/route.ts`; `src/app/(public)/inner-space/join/success/page.tsx`; `src/lib/auth-actions.ts`; `src/components/enrollment/enrollment-form.tsx`.

## Public design direction

The current public design relies heavily on very light Raleway headings, large navy panels, repeated orange emphasis, pills, glows, offset image panels, rounded cards and staged reveal animations. Repetition makes the real photography and biography feel packaged as a marketing template.

On mobile the homepage portrait occupies most of the first screen; even the explanatory paragraph and first actions require scrolling. Put the name, concise introduction and a useful action ahead of or alongside a more compact portrait. Keep the portrait prominent, but make the purpose of the page immediately readable.

### Relationship to the Foundation

Use a shared visual family: indigo, restrained gold, readable body type, familiar links/forms and consistent interaction behaviour. Let Dr. Jan’s name and portrait carry his identity. Use the Foundation logo for the Foundation reference, not as the personal site’s principal wordmark.

Suggested small token set:

| Token | Value | Purpose |
| --- | --- | --- |
| Foundation indigo | `#000B58` | Brand anchor, headings, primary actions |
| Paper | `#FBF8F2` | Reading surfaces |
| White | `#FFFFFF` | Player, forms and occasional clean surfaces |
| Ink | `#1C1A26` | Body text |
| Muted text | `#5F5D6B` | Supporting copy |
| Gold | `#D4A843` | Small accents and selected emphasis, not small text on white |

Use **Newsreader for public headings and selected quotations**, **Figtree for body text, forms, navigation and student controls**. Both already exist in the student platform and Foundation, so this can reduce the number of font families. Public body text: approximately 17–18px with comfortable line spacing. Student controls: 14–16px, with 16px form inputs and adequately sized touch targets. Avoid essential 10–11px labels.

The current `#B59A76` soft accent measures about 2.68:1 against white, making small labels too faint. Use darker text on light surfaces. The orange against navy measures about 3.71:1: suitable for some large text, but not ordinary small text. Check real component combinations, focus states and hover states during implementation.

Use left-aligned reading content, natural photography, modest image corners, and a few generous spaces rather than a new promotional panel for every paragraph. Keep visual effects limited. The frontend-design review informed this choice: the distinctive material is Dr. Jan’s own voice, life and photographs.

### Proposed homepage

```text
Dr. Baffour Jan      About  Teachings  Inner Space  Contact    Student sign in

Dr. Baffour Jan                              Authentic portrait
Spiritual teacher and mystic in Ghana
One short, specific introduction
[Watch a teaching]  [Study through Inner Space]

Begin with a teaching
One selected recording + two relevant talks, real titles and durations

His life and teaching
Short biography with a link to the full story

Study with Dr. Jan — Inner Space
What it is, who it is for, how study works, one representative lesson

Jan Cosmic Foundation
One clear explanation and link for community, visits and service

Contact / student help / Foundation / policies
```

This is an outline, not a requirement to add more content. Remove the separate “Ways to Study” and “Explore the Wisdom” repetition, promotional statistics strip and repeated enrolment finales. One well-placed invitation can do the work of several banners.

### Public page decisions

| Current destination | Recommendation |
| --- | --- |
| Home | Keep; shorten around teacher, actual teachings and two clear visitor paths |
| About | Keep the substantive Ghanaian biography and spiritual history; combine the repeating journey narrative and timeline, with a short introduction and optional deeper reading |
| Mission | Merge its unique purpose/approach content into About; redirect the old URL to the appropriate section |
| Teachings | Keep; add a curated “Start here” selection, concise descriptions, useful topic filters/search if needed; let people watch on the site where practical and clearly label YouTube links |
| Inner Space | Keep as the single study invitation; reduce to what it is, sample lesson, curriculum/order, included/separate, price/access, practical FAQ and join |
| Join | Keep as a short checkout step, not a second sales page |
| Preview | Keep only with playable approved content; integrate with public navigation |
| Give | Remove from primary navigation; use a concise Foundation handoff. Retain a separate personal offering route only if wanted and operational |
| Contact | Keep; distinguish prospective student questions, existing student help and Foundation enquiries |
| Terms / Privacy | Keep; align descriptions with the actual product and approved policies |

Do not add a separate public Retreats page that duplicates the Foundation’s events. Do not create a Writings category merely to fill a layout; introduce it only when there is an approved body of content and a clear relationship to Foundation writings.

## A simpler enrolment journey

```text
Public teaching or homepage
  → Inner Space: understand the programme, sample and actual fee
  → Join: name, email, optional phone, offer summary and agreements
  → Paystack
  → Verified status: confirmed / pending / unsuccessful
  → Sign in using the checkout identity
  → Begin the recommended first lesson
```

Keep email/phone code sign-in, Google and existing-password support where students already rely on them. Simplify presentation instead of removing working options during a redesign. Make the Ghana default country code visible and support international formatting. Explain that students should use the address or phone associated with enrolment. Keep help accessible outside the protected area.

The welcome screen should identify what is ready, how to enter, and what to do if the email is missing. Show a payment reference where appropriate, not a large celebration that obscures the next action. Do not ask students to pay again when payment is still being verified.

Replace “Enter Inner Space” with state-aware actions: “Join Inner Space” for a prospect, “Continue study” for an active student, and a clear access-status action for someone awaiting payment or approval.

## Student experience

### Make the daily task the main screen

The current dashboard places a large greeting, live-session panel and “The Map” promotion before the detailed progress card, then continues through several content collections and quick-access cards. Onboarding is explicitly disabled. Several areas compete to be the starting point.

Recommended navigation: **Home · Courses · Live sessions · Library**, with **Help** plainly visible and **Account** secondary. The library contains supplementary series and recordings; Courses contains the structured sequence. Put “The Map” within a brief “Start here” orientation and within relevant course context. Keep it discoverable without requiring every returning student to pass it.

```text
Inner Space        Home  Courses  Live sessions  Library       Help  Account

Welcome back, [name]

Continue your study
[Course name] — [Lesson title]
Resume at 12:40 · Lesson 3 of 8                       [Resume lesson]

Next live gathering                     Your courses
Confirmed date, time and timezone        Current course + progress
[Session details] [Past recordings]      [All courses]

Recently added to the library
Two or three relevant items
```

For a new student, replace the resume block with one recommended first lesson and a compact optional orientation: how to study, where to find the monthly gathering, how to get help. Use neutral completion tracking, without streak pressure or achievement badges.

### Fix what “continue” means

Video position saving and completion controls already exist; preserve them. The current dashboard helper selects the first incomplete main course in creation-date order. That is not necessarily the course the student last used or the teacher’s intended sequence, and it does not filter by access level.

Separate **Resume your last lesson** from **Recommended next lesson**. Base resume on actual recent progress, and recommendation on an explicit curriculum order and available access. Do not overwrite a student’s choice with an older incomplete course. Handle new, returning, completed and restricted states deliberately.

Evidence: `src/data/progress.ts:74`; `src/hooks/use-progress-tracker.ts`; `src/app/student/(centered)/page.tsx`.

### Refine the lesson screen rather than rebuilding it

Keep the player, course context, lesson count, saved position, completion button and next lesson. Keep the useful mobile Lessons/About arrangement on the course page. Improve:

- A clear resume action and visible saved/error state when progress cannot sync.
- A compact course outline and obvious previous/next navigation on mobile.
- Approved written notes/transcripts and captions where the content supports them.
- Deliberate video loading; no autoplay. Consider audio-only versions later, if hosting and rights support them, for students on limited data.
- A useful completion screen: revisit, practise or continue to the next appropriate course.
- Clear request status and contact path for restricted courses; no unexplained padlocks.

Do not promise offline playback, downloads, transcripts or personal notes before they exist. Bookmarking and cross-library search are worthwhile later improvements after the main study journey works.

### Make live gatherings dependable

The next session date is currently calculated as the last Saturday of the month. No start time, explicit timezone or exception/cancellation state is represented in that model. Different components also contain different Telegram destinations.

Use one confirmed event record and one approved community destination. Show date, time in Accra and the student’s local time, whether the session is voice/video, how to join, and when a recording is available. Add calendar export and a visible cancellation/change state. Do not show “Join now” for an entire calendar day based only on its date. Avoid assigning “your first gathering” to week two when the monthly schedule cannot guarantee that.

## Content rules

- Preserve Dr. Jan’s distinctive language and substantive biography. Use the primary source of each quotation; verify attributed welcome-letter copy and student testimonials before publication.
- Use one spelling, **Inner Space**, across both sites and emails. Treat the Foundation’s compact “InnerSpace” spelling as something to reconcile deliberately.
- Prefer “Teaching since 1986” to a manually ageing experience counter, if that date remains approved. Verify or omit “20K+ lives touched”, “30+ countries” and similar statistics.
- Use practical actions: “Watch this teaching”, “Explore the courses”, “Join Inner Space”, “Student sign in”, “Resume lesson”. Reserve spiritual language for the teaching rather than payment/error controls.
- Do not equate advanced content access, watching time or lesson completion with realization.
- Separate a required course fee from optional giving. “Contribution” can remain in explanatory prose, but the charge and included access must be explicit.
- Keep content ownership clear: teacher biography on Dr. Jan’s site; institutional/community detail on the Foundation; private curriculum within Inner Space. Cross-link summaries rather than maintaining duplicate long pages.

## Accessibility and responsive work

The public mobile menu is hidden with opacity and pointer-event styles; its closed links still appeared in the accessibility tree. It lacks the dialog/focus behaviour already used by the student menu. Reuse the established accessible pattern, with Escape, focus trapping/restoration and correct expanded/current state.

Associate form labels and error messages; add a skip link and consistent main landmark on public pages; make active navigation visible; finish keyboard relationships/behaviour for course tabs; use readable contrast; retain reduced-motion support. Review at 320, 390, 768 and desktop widths and at 200% zoom. Optimise real photographs with responsive sizes and deliberate crops. Review the Ghana/mobile-money journey and slower connections as first-class conditions.

## Execution plan

| Phase | Work | Completion check |
| --- | --- | --- |
| 1 — Correct the promises and paths | Verify offer/access policy; unify counts/currency/copy; remove inactive controls and empty navigation; fix public form routing, payment recovery and confirmation state | Every prominent action has an honest destination; product, checkout and policy wording agree |
| 2 — Public site | Shared type/colour tokens; stable readable header; homepage, About and Teachings refresh; merge Mission; concise Foundation handoff | A first-time visitor can identify Dr. Jan, watch a real teaching, understand Inner Space and find sign-in |
| 3 — Enrolment and arrival | Short invitation and checkout; labelled forms; clear charge; working sample; return destinations; payment/email recovery; concise first-study orientation | Test-mode paid, pending, failed, returning-member and delayed-email journeys reach the correct state |
| 4 — Everyday study | Student navigation; resume-first home; deliberate curriculum order; live-session details; lesson refinements; access request states | A returning student reaches the correct lesson quickly, resumes playback and sees saved progress across devices |
| 5 — Useful additions | Library search, bookmarks, approved transcripts/audio where available, completed email series | Ship only when content and operations are ready; avoid empty destinations |

Use small reviewable changes: foundations/navigation, public pages, enrolment, then private study. Preserve existing URLs with redirects where merging. Test existing migrated accounts as well as new students; do not replace authentication or payment providers merely for visual consistency. Use test-mode payments and designated test students for end-to-end checks.

Measure improvement with observed tasks and baseline analytics: reaching a public teaching, preview-to-enrolment progression, payment-to-first-lesson completion, successful resume, and requests for sign-in help. Do not invent conversion targets before measuring the existing experience. Record purchases only from verified outcomes.

Before implementation, settle the access policy, approved preview lesson, confirmed live-session details, current offer/refund wording, whether personal offerings remain, and which statistics/testimonials can be published. Most navigation and visual work can proceed while those content decisions are collected.

## Reference patterns

- [Rupert Spira](https://rupertspira.com/) foregrounds the teacher, actual recordings and clearly identified events. Borrow the direct route into teaching and calm content hierarchy.
- [Eckhart Tolle](https://eckharttolle.com/) distinguishes public resources, member login and the Foundation. Borrow those clear responsibilities, without adopting the volume of promotional blocks.
- [Isha’s beginner offerings](https://isha.sadhguru.org/ca/en/yoga-meditation/yoga-program-for-beginners) distinguish free, online and in-person options. Borrow clear eligibility and format information, without taking on the scale of its catalogue.

These are qualitative design references, not evidence that a particular layout will increase enrolment. The recommended direction is grounded in the local site’s real content and the Foundation’s established identity.
