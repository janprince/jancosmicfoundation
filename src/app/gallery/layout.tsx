import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Moments of community, service, and spiritual life from across the Jan Cosmic Foundation — retreats, gatherings, and centre activities.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
