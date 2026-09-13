import Link from 'next/link';

interface PageHeroProps { title: string; subtitle?: string; }

/** Indigo page heading — the transparent navbar sits over it. */
export default function PageHero({ title, subtitle }: PageHeroProps) {
  return <section className="page-heading stars">
    <div className="wrap">
      <Link href="/" className="page-home-link hero-animate-1">Jan Cosmic Foundation</Link>
      <h1 className="hero-animate-2">{title}</h1>
      {subtitle && <p className="hero-animate-3">{subtitle}</p>}
    </div>
  </section>;
}
