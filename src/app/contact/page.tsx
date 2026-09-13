import type { Metadata } from 'next';
import { Clock, EnvelopeSimple, FacebookLogo, InstagramLogo, MapPin, Phone, XLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/forms/ContactForm';
import { siteConfig, mapsEmbedUrl, mapsDirectUrl } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Jan Cosmic Foundation for teachings, centres, outreach, volunteering, giving, partnerships, or visiting the Foundation in Accra.',
};

const socialLinks = [
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookLogo },
  { label: 'Twitter / X', href: siteConfig.social.x, Icon: XLogo },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramLogo },
  { label: 'YouTube', href: siteConfig.social.youtube, Icon: YoutubeLogo },
];

const contactDetails = [
  {
    Icon: MapPin,
    label: 'Headquarters',
    lines: [
      siteConfig.address.streetAddress,
      `${siteConfig.address.locality}, Accra, ${siteConfig.address.countryName}`,
    ],
    href: null,
  },
  {
    Icon: EnvelopeSimple,
    label: 'Email',
    lines: [siteConfig.contact.email],
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    Icon: Phone,
    label: 'Phone',
    lines: [siteConfig.contact.phone],
    href: `tel:${siteConfig.contact.phoneE164}`,
  },
  {
    Icon: Clock,
    label: 'Office Hours',
    lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 1:00 PM'],
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions about teachings, centres, outreach, volunteering, giving, or visiting Accra — write to us."
      />

      <section className="section bg-cream">
        <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3">
            <SectionHeader label="Write to us" title="Send a message" align="left" className="mb-8" />
            <div className="rounded-card border border-line bg-white p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <SectionHeader label="Find Us" title="How to reach the Foundation" align="left" className="mb-8" />
            <div className="detail-list">
              {contactDetails.map(({ Icon, label, lines, href }) => {
                const body = (
                  <>
                    <Icon size={22} weight="light" aria-hidden="true" />
                    <div>
                      <p className="detail-label">{label}</p>
                      {lines.map((line) => (
                        <p key={line} className="detail-value">{line}</p>
                      ))}
                    </div>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="no-underline">{body}</a>
                ) : (
                  <div key={label}>{body}</div>
                );
              })}
            </div>

            <p className="detail-label mt-10 mb-4">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-navy/15 text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
                >
                  <Icon size={20} weight="light" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream pb-24">
        <div className="wrap">
          <div className="relative w-full overflow-hidden rounded-card" style={{ aspectRatio: '16 / 7', minHeight: '320px' }}>
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.name} headquarters — ${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, Accra, ${siteConfig.address.countryName}`}
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-sm">
            <p className="text-muted">
              {siteConfig.address.streetAddress}, {siteConfig.address.locality}, Accra, {siteConfig.address.countryName}
            </p>
            <a href={mapsDirectUrl} target="_blank" rel="noopener noreferrer" className="text-link">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
