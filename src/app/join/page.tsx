import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import { getCentres } from '@/lib/api';
import {
  FaTelegram,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'Join Our Community',
  description:
    'Connect with the Jan Cosmic Foundation community. Join our Telegram channels, WhatsApp groups, and social platforms — or find a centre near you.',
};

const communityLinks = [
  {
    title: 'Telegram Channel',
    description:
      'Official announcements, teachings, and updates from the foundation.',
    href: 'https://t.me/jancosmicfoundation',
    icon: FaTelegram,
    color: '#229ED9',
  },
  {
    title: 'Telegram Group',
    description:
      'Connect with fellow seekers. Discuss teachings, share insights, and support one another.',
    href: 'https://t.me/jancosmicfoundationchat',
    icon: FaTelegram,
    color: '#229ED9',
  },
  {
    title: 'WhatsApp Channel',
    description:
      'Receive updates and announcements directly on WhatsApp.',
    href: 'https://whatsapp.com/channel/jancosmicfoundation',
    icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    title: 'WhatsApp Group',
    description:
      'For members of the foundation. A space for coordination, fellowship, and community.',
    href: 'https://chat.whatsapp.com/jancosmicfoundation',
    icon: FaWhatsapp,
    color: '#25D366',
    badge: 'Members Only',
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/jancosmicfoundation',
    icon: FaFacebookF,
    color: '#1877F2',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/jancosmicfoundation',
    icon: FaInstagram,
    color: '#E4405F',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/jancosmicfoundation',
    icon: FaYoutube,
    color: '#FF0000',
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/jancosmicfoundation',
    icon: FaXTwitter,
    color: '#000000',
  },
];

export default function JoinPage() {
  const centres = getCentres();

  return (
    <>
      <PageHero
        title="Join Our Community"
        subtitle="Connect with the Jan Cosmic Foundation — on the platforms you already use."
      />

      <main style={{ backgroundColor: '#FDFBF7' }}>
        {/* Community platforms */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            {/* Section label */}
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
                  Groups &amp; Channels
                </span>
                <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-semibold text-[#000B58] sm:text-4xl">
                Stay Connected
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
                Join our groups and channels to receive teachings, announcements,
                and connect with fellow seekers.
              </p>
            </div>

            {/* Link cards */}
            <div className="space-y-4">
              {communityLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-[#000B58]/6 transition-shadow duration-200 hover:shadow-md"
                >
                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: link.color }}
                  >
                    <link.icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-[#000B58]">
                        {link.title}
                      </h3>
                      {link.badge && (
                        <span className="rounded-full bg-[#D4A843]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#8a6c1a]">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#1a1a1a]/65">
                      {link.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="h-5 w-5 shrink-0 text-[#000B58]/25 transition-colors duration-200 group-hover:text-[#2D6A4F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Social media */}
        <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
                Social Media
              </span>
              <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-semibold text-[#000B58] sm:text-4xl">
              Follow Us
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#1a1a1a]/75">
              Follow the foundation on social media for teachings, event
              highlights, and community stories.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 shadow-sm border border-[#000B58]/6 transition-shadow duration-200 hover:shadow-md"
                >
                  <link.icon
                    className="h-5 w-5"
                    style={{ color: link.color }}
                  />
                  <span className="text-sm font-medium text-[#000B58]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Join a Centre */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="mb-10 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
                  In Person
                </span>
                <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-semibold text-[#000B58] sm:text-4xl">
                Join a Centre
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75 sm:text-lg">
                Connect with a local JCF community near you. Each centre offers
                regular meditation sessions, community programmes, and
                opportunities for service.
              </p>
            </div>

            {/* Centre list */}
            <div className="space-y-3">
              {centres.map((centre) => (
                <Link
                  key={centre.id}
                  href={`/centres/${centre.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-[#000B58]/6 transition-shadow duration-200 hover:shadow-md"
                >
                  {/* Location icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2D6A4F]/10 text-[#2D6A4F]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#000B58]">
                      {centre.name}
                    </h3>
                    <p className="text-sm text-[#1a1a1a]/60">
                      {centre.location} · {centre.memberCount} members
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="h-4 w-4 shrink-0 text-[#000B58]/25 transition-colors duration-200 group-hover:text-[#2D6A4F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/centres"
                className="text-sm font-medium text-[#2D6A4F] underline underline-offset-4 decoration-[#2D6A4F]/30 transition-colors duration-300 hover:decoration-[#2D6A4F]"
              >
                View all centres
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-16 sm:py-20"
          style={{
            background: 'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
          }}
        >
          <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
            <Image
              src="/images/logo.png"
              alt="JCF Logo"
              width={56}
              height={56}
              className="mx-auto mb-6 rounded-full"
            />
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Welcome to the Family
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
              Whether online or in person, you are always welcome. Join us in
              the pursuit of truth, conscious living, and service to humanity.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/volunteer"
                className="rounded-sm border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/donate"
                className="rounded-sm bg-[#D4A843] px-7 py-3 text-sm font-medium text-[#000B58] transition-colors duration-300 hover:bg-[#c49a38]"
              >
                Support the Foundation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
