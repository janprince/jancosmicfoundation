# Jan Cosmic Foundation (JCF) — jancosmicfoundation.org

The charitable foundation of Dr. Baffour Jan, a spiritual master with 38+ years of teaching. The foundation focuses on community service, spiritual education, and humanitarian projects.

## Tech Stack

- **Next.js 16** (App Router) with React 19, TypeScript
- **Tailwind CSS 4** (CSS-first config via `@tailwindcss/postcss`) + `@tailwindcss/typography` (prose for blog/teachings)
- Fonts via `next/font/google`: **Newsreader** (serif, opsz + italics) + **Figtree** (sans) — same pairing as drbaffourjan.com
- **@phosphor-icons/react** (the only icon set), **@headlessui/react**, **react-paystack**
- **@next/third-parties** for Google Analytics
- No database — data comes from an external REST API (`NEXT_PUBLIC_API_URL`, defaults to
  `https://admin.jancosmicfoundation.org/api`). Published API records are authoritative; never pad or
  overwrite them with sample records. Programmes are explicitly maintained in `src/content/programmes.ts`
  until a programmes endpoint exists. Content outages use the error boundary; missing details return 404.
- Foundation-level facts (name, stats, contact, address, socials) live in `src/lib/site-config.ts` —
  the single source of truth read by pages, components, and JSON-LD schema

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint
- `npm test` — calendar and API content-integrity regression tests
- `npx tsc --noEmit` — TypeScript validation

## Design System

### Colors (Cosmic Identity — "a living path inward")

JCF's palette is the night sky and the light within it: deep indigo / violet
depth, gold as light emerging from stillness, on a warm cream ground.
**There is no green in the brand.** (The codebase previously shipped a forest-green
primary `#2D6A4F` by mistake — it has been removed. Do not reintroduce it.)

Tokens live in `src/app/globals.css`:
- Deep Indigo `#000B58` (`--color-deep`) — dark sections, hero, footer, cosmic depth
- Indigo-violet `#2A2A6E` (`--color-primary`) — interactive: buttons, links, focus
- Twilight Violet `#5B4B9E` (`--color-violet`) — gradients (navy→violet), hovers, highlights
- Gold `#D4A843` (`--color-secondary`) — accents, badges, progress, "Give" CTA
- Warm Cream `#FDFBF7` (`--color-bg-light`) — default background
- Warm Sand `#F2EFE9` (`--color-bg-alt`) — alternating section backgrounds
- Warm Ink `#1c1a26` (`--color-text`) — body text
- Rust `#C05021` (`--color-accent`) — reserved for error/critical states only

### Typography

- **Newsreader** → `--font-newsreader` — display headings, section/card titles, one italic
  accent phrase in heroes (use the `.display` helper class)
- **Figtree** → `--font-figtree` — body, UI, and readable section labels (`.eyebrow`)
- Reference `var(--font-newsreader)` / `var(--font-figtree)` directly in CSS. Tailwind v4
  swallows `--font-sans`/`--font-serif` declared in `:root`, so those come out empty.
- Shared homepage/header/footer/page-heading styles live in `src/app/foundation.css`;
  element defaults there sit in `@layer base` so Tailwind utilities on inner pages still win.

### Design Patterns

- **Mobile-first**: base styles for mobile, `md:` and `lg:` breakpoints up
- A stable cream masthead on every page, with accessible desktop popovers and a mobile dialog.
- Homepage uses real Foundation photography; on mobile the photograph sits above the indigo introduction.
- Inner pages use a compact, light `PageHero`, so practical information is close to the top.
- Photography-led: real Foundation images, restrained image rounding and pill buttons; no stock-image
  substitution for unavailable gallery records and no initial-letter avatars standing in for portraits.
- Editorial layouts: Newsreader headings, comfortable reading widths, hairline borders and deliberate spacing.
- Use dark indigo sparingly for the homepage introduction, selected closing sections and footer.
- Content is visible on first render. `ScrollReveal` is a layout compatibility wrapper, not a hidden-content
  animation. Do not restore reveal-on-scroll dependencies or decorative animated counters.
- Honour reduced motion for intentional scrolling and playback indicators.
- `.reading-copy.prose` uses 19px desktop / 17px mobile text with generous line height.
- Enquiry links should carry context into forms and provide a direct form anchor on long pages.

## Project Structure

```
src/
├── app/                    # App Router pages (globals.css lives here, not src/styles)
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer, RouteProgress, GA, JSON-LD)
│   ├── globals.css         # Tailwind imports, CSS custom properties (color tokens), base styles
│   ├── page.tsx            # Homepage
│   ├── error.tsx           # Global error boundary
│   ├── not-found.tsx       # 404 page
│   ├── about/              # /about, /about/founder; legacy mission route redirects to /about#mission
│   ├── programs/           # /programs (programmes overview)
│   ├── teachings/          # /teachings (public teachings + video)
│   ├── blog/               # /blog ("Writings"), /blog/[slug]
│   ├── innerspace/         # /innerspace
│   ├── events/             # /events ("Retreats & Events"), /events/[slug]
│   ├── centres/            # /centres, /centres/[slug]
│   ├── community/          # /community (public community introduction and stories)
│   ├── visit/              # /visit (directions and first-visit enquiry)
│   ├── gallery/            # /gallery
│   ├── testimonials/       # Legacy redirect to /community#stories
│   ├── donate/             # /donate, /donate/[slug]
│   ├── volunteer/          # /volunteer
│   ├── contact/            # /contact
│   ├── privacy-policy/     # /privacy-policy
│   └── terms/              # /terms
│   # Most routes also ship a loading.tsx skeleton; list/detail pages with
│   # client interactivity split into a *PageContent.tsx client child.
├── components/
│   ├── layout/             # Navbar, Footer, MobileMenu, PageHero, NewsletterForm, RouteProgress
│   ├── home/               # GatheringNotice (next published gathering), LifeGallery (three-photo story);
│   │                       #   the homepage sections themselves live in app/page.tsx
│   ├── cards/              # EventCard, BlogCard, CauseCard, CentreCard
│   ├── ui/                 # Button, Badge, ProgressBar, Counter, SectionHeader, Newsletter,
│   │                       #   QuoteBlock, ScrollReveal, TrustSignals
│   ├── forms/              # ContactForm, VolunteerForm, JoinCentreForm, DonationCheckout(+Wrapper)
│   ├── blog/               # ShareButtons
│   └── teachings/          # VideoSection
├── content/                # Explicit local editorial content (programmes)
├── lib/
│   ├── api.ts              # API client: paginated published content, slug lookups, form submits
│   ├── mock-data.ts        # Legacy sample data; not imported by production pages
│   ├── site-config.ts      # Single source of truth for foundation facts + maps/schema helpers
│   ├── centres.ts          # Centre membership display helpers; missing counts remain unknown
│   └── paystack.ts         # Paystack helper utilities
└── types/
    └── index.ts            # TS interfaces (Event, BlogPost, Cause, Centre, Program, Testimonial…)
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About the Foundation |
| `/about/founder` | Dr. Baffour Jan — "The Mystic" |
| `/about/mission-vision` | Permanent redirect to `/about#mission` |
| `/programs` | Programmes overview |
| `/teachings` | Public teachings + video |
| `/blog`, `/blog/[slug]` | Writings grid + single post |
| `/innerspace` | InnerSpace |
| `/events`, `/events/[slug]` | Retreats & events listing + detail |
| `/centres`, `/centres/[slug]` | Centres overview + single centre with join form |
| `/community` | Community introduction and stories |
| `/visit` | First-visit information and directions |
| `/gallery` | Published photographs with an accessible lightbox |
| `/testimonials` | Permanent redirect to `/community#stories` |
| `/donate`, `/donate/[slug]` | Donation causes + single cause with Paystack checkout |
| `/volunteer` | Volunteering info + signup form |
| `/contact` | Contact form |
| `/privacy-policy`, `/terms` | Legal pages |

Data is fetched in async Server Components via `src/lib/api.ts`, which fetches the
external API with `next: { revalidate: 60 }`, follows same-origin pagination, and preserves empty
collections. Events may return an empty calendar on an outage, with a contact fallback; other content
outages surface through the error boundary. Do not silently replace backend titles or descriptions.
Nav groups: **The Foundation · Teachings · Visit & gatherings · Our work**, followed by **Contact · Give**.
Mission and vision live within About; testimonials live within Community. Keep legacy redirects.

## Payments

- **Paystack** via `react-paystack` for inline donation checkout
- `react-paystack` requires `ssr: false` (uses `window`) — wrap with dynamic import
- Preset amounts + custom amount input
- Currency: GH₵ (Ghanaian Cedis)
- `NEXT_PUBLIC_GENERAL_DONATION_CAUSE_ID` optionally identifies an existing published backend cause for
  unrestricted donations. Never invent this ID. Without it, general giving leads to a contextual enquiry.
- Freeze the submitted amount, email and reference while payment/verification is underway. A payment
  pending verification must keep its reference and must not invite the donor to pay again.
- Live payment completion and notification delivery need a controlled provider/backend test before release.

## Key Conventions

- Copywriting: retain the Foundation’s specific teaching and service language from the live website.
  See `docs/design-review/v2-copy-revision-2026-09-17.md`; avoid replacing substantive explanations
  with repeated generic invitations. Keep published API records authoritative.

- Icons: **Phosphor only**, `weight="light"`, in navy or gold-ink, never in tinted square/circle tiles.
  Import from `@phosphor-icons/react/dist/ssr` in server components, `@phosphor-icons/react` in client ones.
  Concept cards (values, programmes) lead with type and photographs; a bare `.icon-mark` above a hairline at most.
- Inner pages use the shared vocabulary in `foundation.css`: `SectionHeader` (gold eyebrow + Newsreader title),
  `.button` pills (`gold`, `outline`, `ghost`), `.night.stars` closing sections, `.detail-list`, `.filter-pills`,
  `.field`, plus Tailwind tokens `bg-cream`, `bg-sand`, `text-navy`, `text-gold-ink`, `border-line`, `rounded-card`.
  Don't combine `.wrap`/`.section` with Tailwind `max-w-*`/`py-*`: those classes are unlayered and win.
- Dynamic route params use the `params: Promise<{ slug: string }>` pattern (Next.js async params)
- All images use Next.js `<Image>` component for optimization
- Forms submit through `src/lib/api.ts` to the configured API; there is no mock-success path.
- Read foundation facts from `siteConfig` (`src/lib/site-config.ts`) — never hard-code name,
  stats, contact details, address, or social URLs in components
- Centre membership counts render through `src/lib/centres.ts`; do not infer community status from a
  missing or zero count. Unknown donor and membership totals remain nullable.
- Prefer `@headlessui/react` for accessible interactive components (menus, dialogs, tabs)
- Design direction and outstanding factual work: `docs/design-review/v2-ui-ux-audit-2026-09-14.md` and
  `docs/design-review/v2-implementation-2026-09-14.md`. Retain the Foundation’s own identity and photographs.

## Related

- Dr. Baffour Jan personal site: drbaffourjan.com
- Design reference: `/Users/kami/Projects/Kami/JIVA/drbaffourjan/src/`
- Structure reference: `/Users/kami/websites/donar/`
