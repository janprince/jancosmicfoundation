# Jan Cosmic Foundation (JCF) — jancosmicfoundation.org

The charitable foundation of Dr. Baffour Jan, a spiritual master with 38+ years of teaching. The foundation focuses on community service, spiritual education, and humanitarian projects.

## Tech Stack

- **Next.js 16** (App Router) with React 19, TypeScript
- **Tailwind CSS 4** (CSS-first config via `@tailwindcss/postcss`) + `@tailwindcss/typography` (prose for blog/teachings)
- Fonts via `next/font/google`: **Newsreader** (serif, opsz + italics) + **Figtree** (sans) — same pairing as drbaffourjan.com
- **@phosphor-icons/react** (the only icon set), **@headlessui/react**, **react-paystack**
- **@next/third-parties** for Google Analytics
- No database — data comes from an external REST API (`NEXT_PUBLIC_API_URL`, defaults to
  `https://admin.jancosmicfoundation.org/api`) with a **static mock fallback** (`src/lib/mock-data.ts`)
  so pages never throw when the API is unreachable
- Foundation-level facts (name, stats, contact, address, socials) live in `src/lib/site-config.ts` —
  the single source of truth read by pages, components, and JSON-LD schema

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint

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
- **Figtree** → `--font-figtree` — body, UI, and small uppercase tracked labels (`.eyebrow`)
- Reference `var(--font-newsreader)` / `var(--font-figtree)` directly in CSS. Tailwind v4
  swallows `--font-sans`/`--font-serif` declared in `:root`, so those come out empty.
- Shared homepage/header/footer/page-heading styles live in `src/app/foundation.css`;
  element defaults there sit in `@layer base` so Tailwind utilities on inner pages still win.

### Design Patterns

- **Mobile-first**: base styles for mobile, `md:` and `lg:` breakpoints up
- Fixed navbar, transparent over dark heroes → cream/blur on scroll, with dropdowns and a gold pill **Give** CTA
  (every page opens on a dark hero: the homepage photo hero or the indigo `PageHero`)
- Full-viewport hero sections with gradient overlays
- Photography-led: real Foundation photos, 14px image radius, pill buttons; a homepage
  "Life at the Foundation" photo strip; a faint star field (`.stars`) on indigo sections
- Section rhythm: cream → white → sand → dark alternation; no two same-coloured sections adjacent
- Editorial layouts: serif display headings, generous whitespace, hairline borders over heavy shadows
- Light/dark blend: light editorial body sections with dark cinematic moments (hero, quote, footer)
- Motion "like breath": slow fades via `ScrollReveal` (`--ease-breath`), honoring `prefers-reduced-motion`
- `transition-all duration-300` for smooth interactions
- Animated counters for impact statistics

## Project Structure

```
src/
├── app/                    # App Router pages (globals.css lives here, not src/styles)
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer, RouteProgress, GA, JSON-LD)
│   ├── globals.css         # Tailwind imports, CSS custom properties (color tokens), base styles
│   ├── page.tsx            # Homepage
│   ├── error.tsx           # Global error boundary
│   ├── not-found.tsx       # 404 page
│   ├── about/              # /about, /about/founder ("The Mystic"), /about/mission-vision
│   ├── programs/           # /programs (programmes overview)
│   ├── teachings/          # /teachings (public teachings + video)
│   ├── blog/               # /blog ("Writings"), /blog/[slug]
│   ├── innerspace/         # /innerspace
│   ├── events/             # /events ("Retreats & Events"), /events/[slug]
│   ├── centres/            # /centres, /centres/[slug]
│   ├── community/          # /community (members-only hub)
│   ├── gallery/            # /gallery
│   ├── testimonials/       # /testimonials
│   ├── donate/             # /donate, /donate/[slug]
│   ├── volunteer/          # /volunteer
│   ├── contact/            # /contact
│   ├── privacy-policy/     # /privacy-policy
│   └── terms/              # /terms
│   # Most routes also ship a loading.tsx skeleton; list/detail pages with
│   # client interactivity split into a *PageContent.tsx client child.
├── components/
│   ├── layout/             # Navbar, Footer, MobileMenu, PageHero, NewsletterForm, RouteProgress
│   ├── home/               # GatheringNotice (next published gathering), LifeStrip (photo strip);
│   │                       #   the homepage sections themselves live in app/page.tsx
│   ├── cards/              # EventCard, BlogCard, CauseCard, CentreCard
│   ├── ui/                 # Button, Badge, ProgressBar, Counter, SectionHeader, Newsletter,
│   │                       #   QuoteBlock, ScrollReveal, TrustSignals
│   ├── forms/              # ContactForm, VolunteerForm, JoinCentreForm, DonationCheckout(+Wrapper)
│   ├── blog/               # ShareButtons
│   └── teachings/          # VideoSection
├── lib/
│   ├── api.ts              # API client: fetch + mock fallback, slug lookups, form submits
│   ├── mock-data.ts        # Static mock data matching API shapes (fallback source)
│   ├── site-config.ts      # Single source of truth for foundation facts + maps/schema helpers
│   ├── centres.ts          # Centre membership display helpers (threshold labels)
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
| `/about/mission-vision` | Mission & Vision |
| `/programs` | Programmes overview |
| `/teachings` | Public teachings + video |
| `/blog`, `/blog/[slug]` | Writings grid + single post |
| `/innerspace` | InnerSpace |
| `/events`, `/events/[slug]` | Retreats & events listing + detail |
| `/centres`, `/centres/[slug]` | Centres overview + single centre with join form |
| `/community` | Members-only community hub |
| `/gallery` | Photo/video gallery |
| `/testimonials` | Testimonials |
| `/donate`, `/donate/[slug]` | Donation causes + single cause with Paystack checkout |
| `/volunteer` | Volunteering info + signup form |
| `/contact` | Contact form |
| `/privacy-policy`, `/terms` | Legal pages |

Data is fetched in async Server Components via `src/lib/api.ts`, which fetches the
external API with `next: { revalidate: 60 }` and falls back to mock data on failure.
Nav structure: top-level **Home · About · Teachings · InnerSpace · Retreats & Events ·
Centres** (About and Teachings have dropdowns), with **Donate** as the standalone CTA.

## Payments

- **Paystack** via `react-paystack` for inline donation checkout
- `react-paystack` requires `ssr: false` (uses `window`) — wrap with dynamic import
- Preset amounts + custom amount input
- Currency: GH₵ (Ghanaian Cedis)

## Key Conventions

- Icons: **Phosphor only**, `weight="light"`, in navy or gold-ink, never in tinted square/circle tiles.
  Import from `@phosphor-icons/react/dist/ssr` in server components, `@phosphor-icons/react` in client ones.
  Concept cards (values, programmes) lead with type and photographs; a bare `.icon-mark` above a hairline at most.
- Inner pages use the shared vocabulary in `foundation.css`: `SectionHeader` (gold eyebrow + Newsreader title),
  `.button` pills (`gold`, `outline`, `ghost`), `.night.stars` closing sections, `.detail-list`, `.filter-pills`,
  `.field`, plus Tailwind tokens `bg-cream`, `bg-sand`, `text-navy`, `text-gold-ink`, `border-line`, `rounded-card`.
  Don't combine `.wrap`/`.section` with Tailwind `max-w-*`/`py-*`: those classes are unlayered and win.
- Dynamic route params use the `params: Promise<{ slug: string }>` pattern (Next.js async params)
- All images use Next.js `<Image>` component for optimization
- Forms submit through `src/lib/api.ts` (mocked during development)
- Read foundation facts from `siteConfig` (`src/lib/site-config.ts`) — never hard-code name,
  stats, contact details, address, or social URLs in components
- Centre membership counts render through `src/lib/centres.ts` helpers — counts below
  `MEMBER_DISPLAY_THRESHOLD` (20) show a "Newly forming" label instead of a small number
- Prefer `@headlessui/react` for accessible interactive components (menus, dialogs, tabs)
- Design inspiration: Donar charity template (structure), drbaffourjan.com (visual identity)

## Related

- Dr. Baffour Jan personal site: drbaffourjan.com
- Design reference: `/Users/kami/Projects/Kami/JIVA/drbaffourjan/src/`
- Structure reference: `/Users/kami/websites/donar/`
