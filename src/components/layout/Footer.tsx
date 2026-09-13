import Image from 'next/image';
import Link from 'next/link';
import { FacebookLogo, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/site-config';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return <footer className="foundation-footer stars">
    <div className="wrap footer-grid">
      <div>
        <Link className="footer-brand" href="/"><Image src="/images/logo.png" alt="" width={48} height={48} /><span>Jan Cosmic<br />Foundation</span></Link>
        <p>A spiritual foundation in Accra, Ghana, carrying the teachings of Dr. Baffour Jan.</p>
        <div className="footer-social">
          <a href={siteConfig.social.youtube} aria-label="YouTube"><YoutubeLogo size={20} weight="light" /></a>
          <a href={siteConfig.social.facebook} aria-label="Facebook"><FacebookLogo size={20} weight="light" /></a>
        </div>
      </div>
      <div><h3>The Foundation</h3><Link href="/about">About the Foundation</Link><Link href="/about/founder">Dr. Baffour Jan</Link><Link href="/about/mission-vision">Mission &amp; vision</Link><Link href="/gallery">Life at the Foundation</Link><Link href="/testimonials">Community stories</Link><Link href="/contact">Contact &amp; directions</Link></div>
      <div><h3>Take part</h3><Link href="/teachings">Teachings</Link><Link href="/blog">Writings</Link><Link href="/innerspace">InnerSpace</Link><Link href="/events">Retreats &amp; events</Link><Link href="/centres">Centres</Link><Link href="/community">Community</Link><Link href="/volunteer">Volunteer</Link><Link href="/donate">Give</Link></div>
      <div><h3>Stay connected</h3><p>Occasional teachings, gatherings and news from the Foundation.</p><NewsletterForm /><div className="footer-contact"><a href={`tel:${siteConfig.contact.phoneE164}`}>{siteConfig.contact.phone}</a><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div></div>
    </div>
    <div className="wrap footer-base"><span>© {new Date().getFullYear()} {siteConfig.name}</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
  </footer>;
}
