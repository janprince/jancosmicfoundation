import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { getTestimonials } from '@/lib/api';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = { title: 'Community', description: 'Connect with the Jan Cosmic Foundation community through gatherings, teachings, service, and announcements.' };

export default async function CommunityPage() {
  const stories = await getTestimonials();
  return <>
    <PageHero title="Be part of the community" subtitle="Stay close to the teachings, gatherings, service, and people walking the path." />
    <section className="section"><div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div><h2 className="text-3xl sm:text-4xl">Meet in person</h2><p className="mt-5 text-lg text-muted">A centre is a place to sit with others, study, ask sincere questions, and take part in service. Begin with a visit to the Foundation in Accra, or contact a community nearer you about its gatherings.</p><div className="section-jump"><Link href="/visit" className="button">Plan a visit</Link><Link href="/centres" className="text-link">Find a community</Link></div><h3 className="text-2xl mt-10">Offer your time</h3><p className="mt-3 text-muted">Help organise a gathering, record a teaching, support outreach, or offer another skill. Let the team know what you can contribute and how much time you have.</p><Link href="/volunteer" className="text-link mt-4">Explore volunteering</Link></div>
      <div><h2 className="text-3xl">Channels and conversation</h2><p className="mt-4 text-muted">Follow a channel for announcements, or join a group to discuss teachings, ask questions, and coordinate with fellow seekers.</p><div className="divide-y divide-line mt-5">
        <a href={siteConfig.social.telegramChannel} target="_blank" rel="noopener noreferrer" className="block py-5"><h3 className="text-2xl">Telegram announcements ↗</h3><p className="text-muted mt-2">Official teachings, gathering notices, and Foundation updates.</p></a>
        <a href={siteConfig.social.telegramGroup} target="_blank" rel="noopener noreferrer" className="block py-5"><h3 className="text-2xl">Telegram community ↗</h3><p className="text-muted mt-2">Discuss the teachings, ask sincere questions, and support one another in practice.</p></a>
        <Link href="/contact?subject=Community+and+WhatsApp+groups#enquiry" className="block py-5"><h3 className="text-2xl">WhatsApp groups</h3><p className="text-muted mt-2">Ask the Foundation for the appropriate current invitation.</p></Link>
      </div></div>
    </div></section>
    <section id="stories" className="section bg-sand"><div className="wrap"><h2 className="text-3xl sm:text-4xl">Voices from the community</h2>{stories.length ? <div className="grid gap-8 mt-8 md:grid-cols-2">{stories.map(story => <figure key={story.id} className="border-t border-line pt-6"><blockquote className="font-serif text-2xl leading-relaxed text-navy">“{story.quote}”</blockquote><figcaption className="mt-5 text-sm text-muted"><span className="font-medium text-navy">{story.name}</span><br />{story.role}</figcaption></figure>)}</div> : <p className="mt-4 text-muted">Community reflections will appear here as they are published.</p>}</div></section>
  </>;
}
