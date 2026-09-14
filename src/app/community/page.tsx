import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { getTestimonials } from '@/lib/api';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Community', description: 'Connect with the Jan Cosmic Foundation community through gatherings, teachings, service, and announcements.' };

export default async function CommunityPage() {
  const stories = await getTestimonials();
  return <>
    <PageHero title="Be part of the community" subtitle="Meet people through practice, teachings, and service—or stay connected from wherever you are." />
    <section className="section"><div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div><h2 className="text-3xl sm:text-4xl">Meet in person</h2><p className="mt-5 text-lg text-muted">Begin with a visit to the Foundation in Accra, or get in touch with a centre or community nearer you.</p><div className="section-jump"><Link href="/visit" className="button">Plan a visit</Link><Link href="/centres" className="text-link">Find a community</Link></div><h3 className="text-2xl mt-10">Offer your time</h3><p className="mt-3 text-muted">Tell the team about your interests, skills, and availability.</p><Link href="/volunteer" className="text-link mt-4">Explore volunteering</Link></div>
      <div><h2 className="text-3xl">Stay connected</h2><div className="divide-y divide-line mt-5">
        <a href={siteConfig.social.telegramChannel} target="_blank" rel="noopener noreferrer" className="block py-5"><h3 className="text-2xl">Telegram announcements ↗</h3><p className="text-muted mt-2">Teaching updates and notices from the Foundation.</p></a>
        <a href={siteConfig.social.telegramGroup} target="_blank" rel="noopener noreferrer" className="block py-5"><h3 className="text-2xl">Telegram community ↗</h3><p className="text-muted mt-2">Conversation and connection with fellow students.</p></a>
        <Link href="/contact?subject=Community+and+WhatsApp+groups#enquiry" className="block py-5"><h3 className="text-2xl">WhatsApp groups</h3><p className="text-muted mt-2">Ask the Foundation for the appropriate current invitation.</p></Link>
      </div></div>
    </div></section>
    <section id="stories" className="section bg-sand"><div className="wrap"><h2 className="text-3xl sm:text-4xl">Voices from the community</h2>{stories.length ? <div className="grid gap-8 mt-8 md:grid-cols-2">{stories.map(story => <figure key={story.id} className="border-t border-line pt-6"><blockquote className="font-serif text-2xl leading-relaxed text-navy">“{story.quote}”</blockquote><figcaption className="mt-5 text-sm text-muted"><span className="font-medium text-navy">{story.name}</span><br />{story.role}</figcaption></figure>)}</div> : <p className="mt-4 text-muted">Community reflections will appear here as they are published.</p>}</div></section>
  </>;
}
