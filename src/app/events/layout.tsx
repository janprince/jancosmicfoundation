import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Join us for retreats, workshops, community service days, and spiritual gatherings hosted by the Jan Cosmic Foundation.',
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
