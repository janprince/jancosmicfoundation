import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { getPrograms } from '@/lib/api';

export const metadata: Metadata = { title: 'Programmes & service', description: 'Explore the teaching, practice, and service work of Jan Cosmic Foundation, and find out how to take part.' };

const actions: Record<string, { label: string; href: string }> = {
  'spiritual-teachings': { label: 'Explore public teachings', href: '/teachings' },
  'meditation-retreats': { label: 'Find a gathering', href: '/events' },
  'community-service': { label: 'Enquire about volunteering', href: '/volunteer' },
  'media-digital-outreach': { label: 'Offer your media skills', href: '/volunteer' },
};

export default async function ProgramsPage() {
  const programmes = await getPrograms();
  return <>
    <PageHero title="Programmes & service" subtitle="Teaching, practice, and service are connected parts of the Foundation’s work. Explore an area below and contact the team about taking part." />
    <section className="section"><div className="wrap">
      <nav aria-label="Areas of work" className="flex flex-wrap gap-x-6 gap-y-3 pb-8 border-b border-line">{programmes.map(programme => <a key={programme.id} href={`#${programme.slug}`} className="underline text-base">{programme.title}</a>)}</nav>
      <div className="divide-y divide-line">{programmes.map(programme => {
        const action = actions[programme.slug] || { label: 'Ask about this programme', href: `/contact?subject=${encodeURIComponent(programme.title)}#enquiry` };
        return <article id={programme.slug} key={programme.id} className="grid gap-8 py-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-14 lg:py-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image src={programme.image} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" /></div>
          <div className="self-center"><h2 className="text-3xl sm:text-4xl">{programme.title}</h2><p className="text-lg text-muted mt-5">{programme.description}</p><Link href={action.href} className="text-link mt-6">{action.label}</Link></div>
        </article>;
      })}</div>
    </div></section>
  </>;
}
