import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import VideoSection from '@/components/teachings/VideoSection';
import SectionHeader from '@/components/ui/SectionHeader';

const radioPlayerUrl = 'https://zeno.fm/player/jan-cosmic-foundation';

export const metadata: Metadata = pageMetadata('/teachings', {
  title: 'Teachings',
  description:
    'Public teachings by Dr. Baffour Jan on consciousness, self-realization, God, the soul, the mind, balanced practice, and inner freedom, with Inner Space for deeper structured study.',
});

export default function TeachingsPage() {
  return (
    <div className="bg-cream">
      <PageHero
        title="Teachings"
        subtitle="Public talks on consciousness, self-realization, God, the soul, the mind, and inner freedom. Listen to Dr. Baffour Jan’s teaching and explore its meaning through your own practice."
      />

      <section id="live-radio" className="section border-b border-line bg-sand" aria-label="Live radio">
        <div className="wrap grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
          <div>
            <SectionHeader
              title="Jan Cosmic Foundation Radio"
              subtitle="Tune in to the Foundation’s live radio stream."
              align="left"
            />
            <a
              className="text-link mt-5"
              href="https://zeno.fm/radio/jan-cosmic-foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen on Zeno.FM
            </a>
          </div>

          <div className="w-full max-w-[768px]">
            <iframe
              src={radioPlayerUrl}
              title="Jan Cosmic Foundation live radio player"
              width={768}
              height={300}
              loading="lazy"
              className="block w-full rounded-card border-0"
            />
            <a
              className="mt-2 inline-block text-sm text-muted underline underline-offset-4"
              href="https://zeno.fm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Zeno.FM Station
            </a>
          </div>
        </div>
      </section>

      <div id="video-player-top" className="scroll-mt-20" />
      <VideoSection />

      {/* Inner Space CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="eyebrow !text-gold">Structured study</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Continue with Inner Space
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            For a regular course of study, <strong className="font-semibold text-white">Inner Space</strong> brings
            courses, recorded teachings, and monthly live guidance with Dr. Jan
            together in one place.
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/65">
            Explore the programme and current enrolment details on Dr. Jan’s teaching website, drbaffourjan.com.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://www.drbaffourjan.com/inner-space" className="button gold button-lg">
              Explore Inner Space
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <Link href="/community" className="button ghost button-lg">Join the Community</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
