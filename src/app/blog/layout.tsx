import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, stories, and practical wisdom from the Jan Cosmic Foundation — on meditation, service, wellbeing, and conscious living.',
  alternates: {
    canonical: 'https://jancosmicfoundation.org/blog',
  },
  openGraph: {
    title: 'Blog | Jan Cosmic Foundation',
    description:
      'Insights, stories, and practical wisdom from the Jan Cosmic Foundation — on meditation, service, wellbeing, and conscious living.',
    url: 'https://jancosmicfoundation.org/blog',
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
