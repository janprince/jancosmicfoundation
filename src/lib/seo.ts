import type { Metadata } from 'next';
import { siteConfig } from './site-config';

export function metaDescription(value: string): string {
  const text = value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  if (text.length <= 160) return text;
  const sentence = text.match(/^.{50,159}?[.!?](?:\s|$)/)?.[0]?.trim();
  return sentence || `${text.slice(0, 157).replace(/\s+\S*$/, '').trimEnd()}…`;
}

/** Keep each page's search result and shared-link preview about that page. */
export function pageMetadata(path: string, metadata: Metadata): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : siteConfig.name;
  const description = metaDescription(metadata.description || 'Teachings, practice, community, and service at Jan Cosmic Foundation in Accra, Ghana.');
  const url = new URL(path, siteConfig.url).toString();
  const shareTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const images = metadata.openGraph?.images || [{ url: '/images/teaching.jpg', alt: 'Dr. Baffour Jan with the Jan Cosmic Foundation community' }];
  return {
    ...metadata,
    description,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: {
      type: 'website', siteName: siteConfig.name, locale: 'en_GH',
      title: shareTitle,
      ...metadata.openGraph,
      url, images,
      description: metaDescription(metadata.openGraph?.description || description),
    },
    twitter: {
      card: 'summary_large_image', title: shareTitle,
      ...metadata.twitter,
      images: metadata.twitter?.images || ['/images/teaching.jpg'],
      description: metaDescription(metadata.twitter?.description || description),
    },
  };
}
