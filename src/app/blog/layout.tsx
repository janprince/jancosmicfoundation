import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Teachings, reflections, retreat notes, and practical wisdom from Jan Cosmic Foundation on consciousness, self-realization, service, healing, and conscious living.',
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: 'Blog | Jan Cosmic Foundation',
    description:
      'Teachings, reflections, retreat notes, and practical wisdom from Jan Cosmic Foundation on consciousness, self-realization, service, healing, and conscious living.',
    url: `${siteConfig.url}/blog`,
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
