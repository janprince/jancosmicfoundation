import Link from 'next/link';

interface PageHeroProps { title: string; subtitle?: string; }

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return <section className="page-heading">
    <div className="wrap">
      <Link href="/" className="page-home-link">Jan Cosmic Foundation</Link>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </section>;
}
