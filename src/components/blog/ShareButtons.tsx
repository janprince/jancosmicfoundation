'use client';

import { usePathname } from 'next/navigation';
import { FacebookLogo, LinkedinLogo, WhatsappLogo, XLogo } from '@phosphor-icons/react';
import { siteConfig } from '@/lib/site-config';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const url = `${siteConfig.url}${usePathname()}`;

  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    { name: 'X', href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`, Icon: XLogo },
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`, Icon: FacebookLogo },
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`, Icon: LinkedinLogo },
    { name: 'WhatsApp', href: `https://wa.me/?text=${encodedTitle}%20${encoded}`, Icon: WhatsappLogo },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${name}`}
          className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2.5 text-sm font-medium text-navy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white"
        >
          <Icon size={18} weight="light" aria-hidden="true" />
          {name}
        </a>
      ))}
    </div>
  );
}
