import Link from 'next/link';
import Image from 'next/image';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import NewsletterForm from './NewsletterForm';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
];

const involvedLinks = [
  { label: 'Donate', href: '/donate' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Centres', href: '/centres' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/jancosmicfoundation',
    Icon: FaFacebookF,
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/jancosmicfoundation',
    Icon: FaXTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/jancosmicfoundation',
    Icon: FaInstagram,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/jancosmicfoundation',
    Icon: FaYoutube,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#000B58' }} className="text-white">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand & social */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="JCF Logo" width={36} height={36} className="rounded-full" />
              <span className="text-white text-sm font-normal uppercase tracking-[0.2em]">
                Jan Cosmic Foundation
              </span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(253,251,247,0.88)' }}
            >
              Guiding individuals toward self-realization, higher consciousness,
              and inner freedom — through the teachings of Dr. Baffour Jan.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <Icon
                    className="w-4 h-4 transition-colors duration-200 group-hover:text-white"
                    style={{ color: 'rgba(253,251,247,0.88)' }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#D4A843' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150 hover:text-[#FDFBF7]"
                    style={{ color: 'rgba(253,251,247,0.88)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get Involved */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#D4A843' }}
            >
              Get Involved
            </h3>
            <ul className="space-y-3">
              {involvedLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150 hover:text-[#FDFBF7]"
                    style={{ color: 'rgba(253,251,247,0.88)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: '#D4A843' }}
            >
              Stay Connected
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: 'rgba(253,251,247,0.88)' }}
            >
              Get updates on events, programs, and impact stories delivered to
              your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: 'rgba(253,251,247,0.75)' }}
        >
          <p>
            &copy; {currentYear} Jan Cosmic Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-[#FDFBF7] transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link
              href="/terms"
              className="hover:text-[#FDFBF7] transition-colors duration-150"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
