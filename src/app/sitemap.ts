import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/api';
import { getEvents } from '@/lib/api';
import { getCauses } from '@/lib/api';
import { getCentres } from '@/lib/api';

const SITE_URL = 'https://jancosmicfoundation.org';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about/mission-vision`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/teachings`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/events`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/gallery`,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/donate`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/centres`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/volunteer`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/programs`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/testimonials`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic pages — fetch in parallel
  const [posts, events, causes, centres] = await Promise.all([
    getBlogPosts(),
    getEvents(),
    getCauses(),
    getCentres(),
  ]);

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const eventPages: MetadataRoute.Sitemap = events.map((event) => ({
    url: `${SITE_URL}/events/${event.slug}`,
    lastModified: new Date(event.date),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const causePages: MetadataRoute.Sitemap = causes.map((cause) => ({
    url: `${SITE_URL}/donate/${cause.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const centrePages: MetadataRoute.Sitemap = centres.map((centre) => ({
    url: `${SITE_URL}/centres/${centre.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...eventPages, ...causePages, ...centrePages];
}
