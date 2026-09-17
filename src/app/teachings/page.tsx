import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import VideoSection from '@/components/teachings/VideoSection';

export const metadata: Metadata = {
  title: 'Teachings',
  description:
    'Public teachings by Dr. Baffour Jan on consciousness, self-realization, God, the soul, the mind, balanced practice, and inner freedom, with InnerSpace for deeper structured study.',
};

export default function TeachingsPage() {
  return (
    <div className="bg-cream">
      <PageHero
        title="Teachings"
        subtitle="Public talks on consciousness, self-realization, God, the soul, the mind, and inner freedom. Listen to Dr. Baffour Jan’s teaching and explore its meaning through your own practice."
      />

      <div id="video-player-top" className="scroll-mt-20" />
      <VideoSection />

      {/* InnerSpace CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="eyebrow !text-gold">Structured study</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Continue with InnerSpace
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            For a regular course of study, <strong className="font-semibold text-white">InnerSpace</strong> brings
            lessons into a sequence, with guided practices and support for
            sustained inner work.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/65">
            Find the current course details on Dr. Jan’s teaching website, drbaffourjan.com.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://www.drbaffourjan.com/inner-space" target="_blank" rel="noopener noreferrer" className="button gold button-lg">
              Explore InnerSpace
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link href="/community" className="button ghost button-lg">Join the Community</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
