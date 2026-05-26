import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Retreats, sittings, teachings, service days, and spiritual gatherings hosted by Jan Cosmic Foundation.',
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
