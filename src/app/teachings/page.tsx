import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import VideoSection from '@/components/teachings/VideoSection';
import { HiOutlineAcademicCap, HiOutlineSparkles } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: 'Teachings | Jan Cosmic Foundation',
  description:
    'Explore the public teachings of Dr. Baffour Jan on consciousness, meditation, and self-realization. Access free YouTube teachings or join InnerSpace for deeper mystical studies.',
};

export default function TeachingsPage() {
  return (
    <main>
      <PageHero
        title="Teachings"
        subtitle="Timeless wisdom on consciousness, meditation, and the path to self-realization."
      />

      {/* Intro */}
      <section className="bg-[#FDFBF7] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 rounded-full bg-[#D4A843]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#8a6c1a]">
              Public Teachings
            </span>
            <span className="h-px w-8 rounded-full bg-[#D4A843]" />
          </div>
          <h2 className="text-3xl font-semibold leading-tight text-[#000B58] sm:text-4xl">
            Freely Shared Wisdom
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1a1a1a]/80 sm:text-lg">
            Dr. Baffour Jan has made a selection of his teachings freely available
            on YouTube — covering topics from consciousness and meditation to the
            nature of the self and the deeper dimensions of spiritual life. These
            public teachings are an open invitation to all seekers of truth.
          </p>
        </div>
      </section>

      {/* Video section with player + carousel */}
      <div id="video-player-top" className="scroll-mt-20" />
      <VideoSection />

      {/* InnerSpace CTA */}
      <section
        className="relative overflow-hidden py-24 lg:py-32"
        style={{
          background:
            'linear-gradient(135deg, #000B58 0%, #001485 60%, #2D6A4F 100%)',
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-[#D4A843]/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(212,168,67,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(45,106,79,0.3) 0%, transparent 50%)',
          }}
        />

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-4 py-1.5">
            <HiOutlineSparkles className="h-4 w-4 text-[#D4A843]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
              For Sincere Seekers
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Go Deeper with{' '}
            <span className="text-[#D4A843]">InnerSpace</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            The public teachings are just the beginning. For members of the
            foundation who are truly willing to go deeper into mystical studies
            and an understanding of themselves, Dr. Baffour Jan has created{' '}
            <strong className="font-semibold text-white">InnerSpace</strong> — a
            dedicated course for sincere and serious seekers of truth.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            InnerSpace offers structured lessons, guided practices, and profound
            insights into the nature of consciousness, the self, and the path to
            inner freedom.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.drbaffourjan.com/inner-space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D4A843] px-8 py-3.5 text-sm font-semibold text-[#000B58] transition-all duration-300 hover:bg-[#e0b84f] hover:shadow-lg hover:shadow-[#D4A843]/20"
            >
              <HiOutlineAcademicCap className="h-5 w-5" />
              Explore InnerSpace
            </a>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
