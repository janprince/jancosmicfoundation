import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = pageMetadata('/events', {
  title: 'Events',
  description:
    'Retreats, sittings, teachings, balanced-state practice, service days, and gatherings hosted by Jan Cosmic Foundation.',
});

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
