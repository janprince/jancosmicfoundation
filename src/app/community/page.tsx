import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  TelegramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { getCentres } from '@/lib/api';
import { centreMembership } from '@/lib/centres';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Join the Jan Cosmic Foundation community through centres, Telegram, WhatsApp, social media, public teachings, and service.',
};

const communityLinks = [
  {
    title: 'Telegram Channel',
    description: 'Official announcements, teachings, and updates from the Foundation.',
    href: siteConfig.social.telegramChannel,
    Icon: TelegramLogo,
    external: true,
  },
  {
    title: 'Telegram Group',
    description: 'Connect with fellow seekers. Discuss teachings, ask sincere questions, and support one another.',
    href: siteConfig.social.telegramGroup,
    Icon: TelegramLogo,
    external: true,
  },
  {
    title: 'Ask for the WhatsApp channel',
    description: 'Contact the Foundation for the current invitation link to receive teachings and notices.',
    href: '/contact',
    Icon: WhatsappLogo,
    external: false,
  },
  {
    title: 'Ask about the WhatsApp group',
    description: 'Contact the Foundation about joining the members’ WhatsApp group.',
    href: '/contact',
    Icon: WhatsappLogo,
    external: false,
    badge: 'Members Only',
  },
];

const socialLinks = [
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookLogo },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramLogo },
  { label: 'YouTube', href: siteConfig.social.youtube, Icon: YoutubeLogo },
  { label: 'X (Twitter)', href: siteConfig.social.x, Icon: XLogo },
];

const rowClass =
  'group flex items-center gap-5 rounded-card border border-line bg-white p-5 transition-colors duration-300 hover:border-navy/30 sm:p-6';

export default async function JoinPage() {
  const centres = await getCentres();

  return (
    <>
      <PageHero
        title="Join Our Community"
        subtitle="Stay close to the teachings, centres, gatherings, service, and people walking the path."
      />

      <div className="bg-cream">
        {/* Channels & groups */}
        <section className="section">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionHeader
              label="Groups & Channels"
              title="Channels & groups"
              subtitle="Channels for teachings and announcements; groups for sincere conversation, questions, coordination, and community."
              className="mb-12"
            />
            <div className="space-y-3">
              {communityLinks.map(({ title, description, href, Icon, external, badge }) => {
                const body = (
                  <>
                    <Icon size={30} weight="light" className="shrink-0 text-navy" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl">{title}</h3>
                        {badge && (
                          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-ink">
                            {badge}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
                    </div>
                    {external ? (
                      <ArrowUpRight size={20} className="shrink-0 text-navy/30 transition-colors group-hover:text-navy" aria-hidden="true" />
                    ) : (
                      <CaretRight size={18} className="shrink-0 text-navy/30 transition-colors group-hover:text-navy" aria-hidden="true" />
                    )}
                  </>
                );
                return external ? (
                  <a key={title} href={href} target="_blank" rel="noopener noreferrer" className={rowClass}>{body}</a>
                ) : (
                  <Link key={title} href={href} className={rowClass}>{body}</Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social media */}
        <section className="section bg-sand">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <SectionHeader
              label="Social Media"
              title="Follow us"
              subtitle="Short teachings, event moments, photographs, service updates, and Foundation news. Follow where you already spend time."
            />
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="button outline">
                  <Icon size={18} weight="light" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Centres */}
        <section className="section">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionHeader
              label="In Person"
              title="Or visit a centre"
              subtitle="Sittings, study, healing and counselling support, and service happen most deeply in person. Find a centre and begin with a visit."
              className="mb-12"
            />
            <div className="space-y-3">
              {centres.map((centre) => (
                <Link key={centre.id} href={`/centres/${centre.slug}`} className={rowClass}>
                  <MapPin size={26} weight="light" className="shrink-0 text-gold-ink" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl">{centre.name}</h3>
                    <p className="text-sm text-muted">
                      {centre.location} · {centreMembership(centre.memberCount)}
                    </p>
                  </div>
                  <CaretRight size={18} className="shrink-0 text-navy/30 transition-colors group-hover:text-navy" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/centres" className="text-link">View all centres</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="night stars section">
          <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <Image src="/images/logo.png" alt="" width={56} height={56} className="mx-auto mb-6 rounded-full" />
            <h2 className="text-4xl sm:text-5xl">Begin with one step</h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/80">
              Join a channel, visit a centre, volunteer, or support the work.
              Let the first step be simple, sincere, and steady.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/volunteer" className="button ghost">Volunteer With Us</Link>
              <Link href="/donate" className="button gold">Support the Foundation</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
