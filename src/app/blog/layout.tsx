import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights, stories, and practical wisdom from the Jan Cosmic Foundation — on meditation, service, wellbeing, and conscious living.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
