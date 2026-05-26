import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photographs from Jan Cosmic Foundation teachings, retreats, sittings, service days, centres, and community life.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
