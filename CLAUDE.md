# Jan Cosmic Foundation (JCF) — jancosmicfoundation.org

The charitable foundation of Dr. Baffour Jan, a spiritual master with 38+ years of teaching. The foundation focuses on community service, spiritual education, and humanitarian projects.

## Tech Stack

- **Next.js 15** (App Router) with React 19, TypeScript
- **Tailwind CSS 4** (CSS-first config via `@tailwindcss/postcss`)
- **Raleway** font (Google Fonts, weights 300–700)
- **react-icons**, **@headlessui/react**, **react-paystack**
- No database — consume external APIs for dynamic data (blogs, events, gallery, causes, centres)
- Static mock data in `src/lib/mock-data.ts` during development (mirrors API response shapes)

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

- **Fraunces** (variable serif, via `next/font`) → `--font-serif` — display headings,
  quote moments, card/section titles (use the `.display` helper class)
- **Raleway** → body, UI, and uppercase tracked labels (use the `.eyebrow` helper)

### Design Patterns

- **Mobile-first**: base styles for mobile, `md:` and `lg:` breakpoints up
- Sticky navbar with scroll-aware transparent → solid transition
- Full-viewport hero sections with gradient overlays
- Card hover: image scale transforms + shadow elevation
- Section rhythm: cream → white → sand → dark alternation; no two same-coloured sections adjacent
- Editorial layouts: serif display headings, generous whitespace, hairline borders over heavy shadows
- Light/dark blend: light editorial body sections with dark cinematic moments (hero, quote, footer)
- Motion "like breath": slow fades via `ScrollReveal` (`--ease-breath`), honoring `prefers-reduced-motion`
- `transition-all duration-300` for smooth interactions
- Animated counters for impact statistics

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx          # Root layout (Raleway, Navbar, Footer)
│   ├── page.tsx            # Homepage
│   ├── about/              # /about, /about/mission-vision
│   ├── events/             # /events, /events/[slug]
│   ├── blog/               # /blog, /blog/[slug]
│   ├── gallery/            # /gallery
│   ├── centres/            # /centres, /centres/[slug]
│   ├── donate/             # /donate, /donate/[slug]
│   ├── volunteer/          # /volunteer
│   └── contact/            # /contact
├── components/
│   ├── layout/             # Navbar, Footer, MobileMenu, PageHero
│   ├── home/               # Homepage sections (Hero, AboutSnippet, ImpactStats, etc.)
│   ├── cards/              # EventCard, BlogCard, CauseCard, CentreCard
│   ├── ui/                 # Button, Badge, ProgressBar, Counter, SectionHeader, Newsletter
│   └── forms/              # ContactForm, VolunteerForm, JoinCentreForm, DonationCheckout
├── lib/
│   ├── api.ts              # API client (fetch blogs, events, etc.)
│   ├── mock-data.ts        # Static mock data matching API shapes
│   └── paystack.ts         # Paystack helper utilities
├── types/
│   └── index.ts            # TypeScript interfaces (Event, Blog, Cause, Centre, etc.)
└── styles/
    └── globals.css         # Tailwind imports, CSS custom properties, base styles
```

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage |
| `/about` | Static | About the Foundation |
| `/about/mission-vision` | Static | Mission & Vision |
| `/events` | Dynamic | Events listing (from API) |
| `/events/[slug]` | Dynamic | Single event detail |
| `/blog` | Dynamic | Blog grid (from API) |
| `/blog/[slug]` | Dynamic | Single blog post |
| `/gallery` | Dynamic | Photo/video gallery |
| `/centres` | SSG | Centres overview |
| `/centres/[slug]` | SSG | Single centre + join form |
| `/donate` | SSG | Donation causes |
| `/donate/[slug]` | SSG | Single cause + Paystack checkout |
| `/volunteer` | Static | Volunteering info + signup form |
| `/contact` | Static | Contact form |

## Payments

- **Paystack** via `react-paystack` for inline donation checkout
- `react-paystack` requires `ssr: false` (uses `window`) — wrap with dynamic import
- Preset amounts + custom amount input
- Currency: GH₵ (Ghanaian Cedis)

## Key Conventions

- Dynamic route params use `params: Promise<{ slug: string }>` pattern (Next.js 15 async params)
- All images use Next.js `<Image>` component for optimization
- Forms submit to API endpoints (mock during development)
- Prefer `@headlessui/react` for accessible interactive components (menus, dialogs, tabs)
- Design inspiration: Donar charity template (structure), drbaffourjan.com (visual identity)

## Related

- Dr. Baffour Jan personal site: drbaffourjan.com
- Design reference: `/Users/kami/Projects/Kami/JIVA/drbaffourjan/src/`
- Structure reference: `/Users/kami/websites/donar/`
