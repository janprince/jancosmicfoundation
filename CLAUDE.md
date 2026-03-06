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

### Colors (Hybrid Identity)

Shared with drbaffourjan.com:
- Deep Indigo `#000B58` — hero sections, footer, cosmic depth
- Warm Cream `#FDFBF7` — light backgrounds
- Rust `#C05021` — sparingly as supporting accent

Foundation-specific:
- **Primary Green** `#2D6A4F` — CTAs, links, buttons
- **Secondary Gold** `#D4A843` — highlights, badges, progress bars
- Alt Beige `#F2EFE9` — alternating section backgrounds

### Design Patterns

- **Mobile-first**: base styles for mobile, `md:` and `lg:` breakpoints up
- Sticky navbar with scroll-aware transparent → solid transition
- Full-viewport hero sections with gradient overlays
- Card hover: image scale transforms + shadow elevation
- Section rhythm: cream → white → beige → dark alternation
- Typography: light weight (300) headings, uppercase tracked labels
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
