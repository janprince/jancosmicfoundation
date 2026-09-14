import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { siteConfig, mapsDirectUrl } from '@/lib/site-config';
import GatheringNotice from '@/components/home/GatheringNotice';

export const metadata: Metadata = { title: 'Plan a visit', description: 'Find Jan Cosmic Foundation in Kwabenya, Accra. Ask about attending a gathering, get directions, and plan your first visit.' };

export default function VisitPage() {
  return <>
    <PageHero title="Come and meet the community" subtitle="Find us in Kwabenya, Accra. Before setting out, contact the Foundation to confirm the gathering or visit you would like to attend." />
    <section className="section"><div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 className="text-3xl sm:text-4xl">Your visit to Accra</h2>
        <dl className="visit-facts">
          <div><dt>Where to find us</dt><dd>{siteConfig.address.streetAddress}, {siteConfig.address.locality}<br />Accra, {siteConfig.address.countryName}</dd></div>
          <div><dt>Before you travel</dt><dd>Confirm your visit with the Foundation.</dd></div>
          <div><dt>Call the Foundation</dt><dd><a className="underline" href={`tel:${siteConfig.contact.phoneE164}`}>{siteConfig.contact.phone}</a></dd></div>
          <div className="sm:col-span-2"><dt>Email</dt><dd><a className="underline break-all" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></dd></div>
        </dl>
        <div className="section-jump"><Link href="/contact?subject=Planning+a+first+visit#enquiry" className="button">Ask about a visit</Link><a href={mapsDirectUrl} target="_blank" rel="noopener noreferrer" className="button outline">Get directions</a></div>
      </div>
      <figure><Image src="/images/teaching.jpg" alt="Dr. Baffour Jan teaching the community in a courtyard" width={1200} height={800} className="rounded-card w-full h-auto" priority /><figcaption className="caption mt-3">Teaching and time together at the Foundation.</figcaption></figure>
    </div></section>
    <section className="section bg-sand"><div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div><h2 className="text-3xl sm:text-4xl">Gatherings and practice</h2><div className="mt-6"><GatheringNotice /></div></div>
      <div><h2 className="text-3xl">A few things to confirm</h2><p className="mt-4 text-muted">Let the organiser know this is your first visit. Ask about the start and finish time, whether you need to book, any contribution or fee, and what to wear or bring.</p><p className="mt-4 text-muted">If you need seating or step-free access, are coming with children, or have a question about the language of a session, include that in your enquiry so the team can advise you.</p></div>
    </div></section>
    <section className="section"><div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-3xl">Begin with a teaching</h2><p className="mt-3 text-muted">Listen to Dr. Jan before your visit, or connect with a community nearer you.</p></div><div className="flex flex-wrap gap-4"><Link href="/teachings" className="button outline">Explore teachings</Link><Link href="/centres" className="text-link">Find a community</Link></div></div></section>
  </>;
}
