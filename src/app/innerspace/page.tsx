import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import QuoteBlock from '@/components/ui/QuoteBlock';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { HiOutlineAcademicCap } from 'react-icons/hi2';

const INNERSPACE_URL = 'https://www.drbaffourjan.com/inner-space';

export const metadata: Metadata = {
  title: 'InnerSpace — Structured Study',
  description:
    'InnerSpace is Dr. Baffour Jan’s structured study path for sincere seekers — lessons, guided practice, and a living sequence through the inner work. Public teachings are the open door; InnerSpace is for going deeper.',
};

const inside = [
  {
    title: 'Lessons in a living sequence',
    line: 'Not scattered clips, but a path that builds — each step preparing the next.',
  },
  {
    title: 'Guided practices',
    line: 'Meditations and exercises to take the teaching off the screen and into daily life.',
  },
  {
    title: 'A rhythm to return to',
    line: 'Somewhere to come back to when life gets noisy and the practice slips.',
  },
  {
    title: 'Guidance for committed study',
    line: 'For seekers ready to move from spiritual curiosity into honest, sustained inner work.',
  },
];

export default function InnerSpacePage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="InnerSpace"
        subtitle="The deeper, structured path — for when you are ready to study and practise with rhythm and guidance."
      />

      {/* Bridge framing */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12 text-center">
          <p className="eyebrow mb-4 text-[#8a6c1a]">The deeper work</p>
          <h2 className="display text-[2rem] leading-[1.14] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            Public teachings are the open door
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1c1a26]/80 sm:text-lg">
            Anyone can begin with a public talk — freely, without commitment.
            For many, that is enough for a long time. But some seekers reach a
            point where they want more than to listen: a way to study seriously,
            practise consistently, enter the balanced state, and be guided as
            they go deeper.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1c1a26]/70">
            That is what InnerSpace is for.
          </p>
        </div>
      </section>

      {/* Two doors */}
      <section className="bg-[#F2EFE9] py-20 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
          {/* Open door */}
          <ScrollReveal animation="fade-up" className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-black/[0.08] bg-white p-8 sm:p-10">
              <p className="eyebrow text-[#8a6c1a]">Start here</p>
              <h3 className="display mt-3 text-2xl text-[#000B58]">Public teachings</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#1c1a26]/75 sm:text-base">
                Free and open. Talks on consciousness, the Self, God, mind, and
                inner freedom — to watch whenever you wish, with nothing to join.
                The honest place for almost everyone to begin listening.
              </p>
              <Link
                href="/teachings"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium tracking-wide text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
              >
                Browse public teachings
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* InnerSpace door */}
          <ScrollReveal animation="fade-up" delay={0.12} className="h-full">
            <div
              className="grain-dark relative flex h-full flex-col overflow-hidden rounded-xl p-8 sm:p-10"
              style={{
                background:
                  'linear-gradient(150deg, #000B58 0%, #1a1b6b 55%, var(--color-violet, #5B4B9E) 100%)',
              }}
            >
              <p className="eyebrow relative z-10 text-[#D4A843]">Go deeper</p>
              <h3 className="display relative z-10 mt-3 text-2xl text-white">InnerSpace</h3>
              <p className="relative z-10 mt-4 flex-1 text-sm leading-relaxed text-white/80 sm:text-base">
                A structured path for committed students: lessons in sequence,
                guided practice, and a living rhythm through the inner work.
                Hosted on drbaffourjan.com.
              </p>
              <a
                href={INNERSPACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#D4A843] px-6 py-3 text-sm font-semibold tracking-wide text-[#000B58] transition-all duration-300 hover:bg-[#c49a38] hover:shadow-lg hover:shadow-[#D4A843]/25"
              >
                <HiOutlineAcademicCap className="h-5 w-5" aria-hidden="true" />
                Explore InnerSpace
                <span aria-hidden="true" className="text-[#000B58]/50">↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up" className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4 text-[#8a6c1a]">Inside InnerSpace</p>
            <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl">
              Study with a shape to it
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1c1a26]/75 sm:text-lg">
              The aim is not to collect more spiritual information, but to
              practise steadily, honestly, and with support until knowledge
              begins to become experience.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid gap-px overflow-hidden rounded-xl border border-black/[0.08] bg-black/[0.06] sm:grid-cols-2">
            {inside.map((item) => (
              <div key={item.title} className="bg-[#FDFBF7] p-7 sm:p-8">
                <h3 className="display text-xl text-[#000B58]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1c1a26]/70">{item.line}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Quote moment */}
      <QuoteBlock
        quote="Awakening is not produced by adding more knowledge. It is what becomes available when the mind grows quiet."
        author="Dr. Baffour Jan"
        role="The Teacher, Jan Cosmic Foundation"
        image="/images/masterseated2.jpg"
      />

      {/* Closing CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/images/studentinmeditation.jpg"
                alt="A student in meditation"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="display text-2xl text-[#000B58] sm:text-3xl">
                Begin when you are ready
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#1c1a26]/75">
                There is no rush, and no wrong order. Watch a teaching today; step
                into InnerSpace when the pull to go deeper is honest.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={INNERSPACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#1f1f57] hover:shadow-lg hover:shadow-primary/25"
                >
                  Explore InnerSpace
                  <span aria-hidden="true" className="text-white/50">↗</span>
                </a>
                <Link
                  href="/teachings"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  Watch a teaching first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
