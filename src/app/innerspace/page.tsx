import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import QuoteBlock from '@/components/ui/QuoteBlock';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
    <div className="bg-cream">
      <PageHero
        title="InnerSpace"
        subtitle="The deeper, structured path — for when you are ready to study and practise with rhythm and guidance."
      />

      {/* Bridge framing */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader label="The deeper work" title="Public teachings are the open door" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
            Anyone can begin with a public talk — freely, without commitment.
            For many, that is enough for a long time. But some seekers reach a
            point where they want more than to listen: a way to study seriously,
            practise consistently, enter the balanced state, and be guided as
            they go deeper.
          </p>
          <p className="mx-auto mt-5 font-serif text-2xl italic text-navy">
            That is what InnerSpace is for.
          </p>
        </div>
      </section>

      {/* Two doors */}
      <section className="section bg-sand">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-2">
          <ScrollReveal animation="fade-up" className="h-full">
            <div className="flex h-full flex-col rounded-card bg-white p-8 sm:p-10">
              <p className="eyebrow">Start here</p>
              <h3 className="mt-3 text-3xl">Public teachings</h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink/75">
                Free and open. Talks on consciousness, the Self, God, mind, and
                inner freedom — to watch whenever you wish, with nothing to join.
                The honest place for almost everyone to begin listening.
              </p>
              <Link href="/teachings" className="text-link mt-8">Browse public teachings</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.12} className="h-full">
            <div className="night stars flex h-full flex-col overflow-hidden rounded-card p-8 sm:p-10">
              <p className="eyebrow !text-gold">Go deeper</p>
              <h3 className="mt-3 text-3xl">InnerSpace</h3>
              <p className="mt-4 flex-1 leading-relaxed text-white/80">
                A structured path for committed students: lessons in sequence,
                guided practice, and a living rhythm through the inner work.
                Hosted on drbaffourjan.com.
              </p>
              <a href={INNERSPACE_URL} target="_blank" rel="noopener noreferrer" className="button gold mt-8 w-fit">
                Explore InnerSpace
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's inside */}
      <section className="section">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <ScrollReveal animation="fade-up" className="mb-12 max-w-2xl">
            <SectionHeader
              label="Inside InnerSpace"
              title="Study with a shape to it"
              subtitle="The aim is not to collect more spiritual information, but to practise steadily, honestly, and with support until knowledge begins to become experience."
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
            {inside.map((item) => (
              <div key={item.title} className="border-t border-line pt-7">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.line}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <QuoteBlock
        quote="Awakening is not produced by adding more knowledge. It is what becomes available when the mind grows quiet."
        author="Dr. Baffour Jan"
        role="The Teacher, Jan Cosmic Foundation"
        image="/images/masterseated2.jpg"
      />

      {/* Closing CTA */}
      <section className="section">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
            <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-card">
              <Image src="/images/studentinmeditation.jpg" alt="A student in meditation" fill className="object-cover" sizes="176px" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl">Begin when you are ready</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">
                There is no rush, and no wrong order. Watch a teaching today; step
                into InnerSpace when the pull to go deeper is honest.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={INNERSPACE_URL} target="_blank" rel="noopener noreferrer" className="button">
                  Explore InnerSpace
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <Link href="/teachings" className="button outline">Watch a teaching first</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
