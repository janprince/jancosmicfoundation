import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import { WhatsappLogo, TelegramLogo, YoutubeLogo, InstagramLogo, FacebookLogo, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import { getTestimonials } from '@/lib/api';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = pageMetadata('/community', {
  title: 'Community & social links',
  description: 'Join Jan Cosmic Foundation on WhatsApp and Telegram. Find our official social platforms for teachings, gathering announcements, and community updates.',
});

const groups = [
  { name: 'WhatsApp community', Icon: WhatsappLogo, url: siteConfig.social.whatsappCommunity, description: 'Stay close to the community with teachings, gathering notices, and updates.', action: 'Join on WhatsApp' },
  { name: 'Telegram community', Icon: TelegramLogo, url: siteConfig.social.telegramGroup, description: 'Connect with fellow seekers and keep up with the Foundation’s teachings and activities.', action: 'Join on Telegram' },
];
const profiles = [
  { name: 'YouTube', Icon: YoutubeLogo, url: siteConfig.social.youtube, description: 'Watch teachings and recordings' },
  { name: 'Instagram', Icon: InstagramLogo, url: siteConfig.social.instagram, description: 'Moments from Foundation life' },
  { name: 'Facebook', Icon: FacebookLogo, url: siteConfig.social.facebook, description: 'News, reflections, and gatherings' },
];

export default async function CommunityPage() {
  const stories = await getTestimonials();
  return <>
    <PageHero title="Stay connected" subtitle="Find the Jan Cosmic Foundation community online. Receive teachings, hear about gatherings, and stay close to the work wherever you are." />
    <section id="online" className="section" aria-labelledby="community-links-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="community-links-title" className="section-title">A place to stay in touch</h2>
          <p>Choose the platform you use most. These invitations take you directly to our communities on WhatsApp and Telegram.</p>
        </div>
        <div className="community-invitations">
          {groups.map(({ name, Icon, url, description, action }) => <a key={name} href={url} className="community-invitation">
            <Icon size={36} weight="light" aria-hidden="true" />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{action}<ArrowUpRight size={20} aria-hidden="true" /></span>
          </a>)}
        </div>
        <div className="community-profiles">
          <h3>Follow the Foundation</h3>
          <div>{profiles.map(({ name, Icon, url, description }) => <a href={url} key={name}>
            <Icon size={27} aria-hidden="true" />
            <span><strong>{name}</strong><small>{description}</small></span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>)}</div>
        </div>
        <p className="caption mt-6">You’ll continue to the platform you choose. You may need its app or an account to join.</p>
      </div>
    </section>
    <section className="section bg-sand"><div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div><h2 className="text-3xl sm:text-4xl">Meet in person</h2><p className="mt-5 text-lg text-muted">A centre is a place to sit with others, study, ask sincere questions, and take part in service. Begin with a visit to the Foundation in Accra, or contact a community nearer you about its gatherings.</p><div className="section-jump"><Link href="/visit" className="button">Plan a visit</Link><Link href="/centres" className="text-link">Find a community</Link></div></div>
      <div><h2 className="text-3xl sm:text-4xl">Offer your time</h2><p className="mt-5 text-lg text-muted">Help organise a gathering, record a teaching, support outreach, or offer another skill. Let the team know what you can contribute and how much time you have.</p><Link href="/volunteer" className="text-link mt-5">Explore volunteering</Link></div>
    </div></section>
    <section id="stories" className="section"><div className="wrap"><h2 className="text-3xl sm:text-4xl">Voices from the community</h2>{stories.length ? <div className="grid gap-8 mt-8 md:grid-cols-2">{stories.map(story => <figure key={story.id} className="border-t border-line pt-6"><blockquote className="font-serif text-2xl leading-relaxed text-navy">“{story.quote}”</blockquote><figcaption className="mt-5 text-sm text-muted"><span className="font-medium text-navy">{story.name}</span><br />{story.role}</figcaption></figure>)}</div> : <p className="mt-4 text-muted">Community reflections will appear here as they are published.</p>}</div></section>
  </>;
}
