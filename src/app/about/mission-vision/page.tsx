import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

const pillars = [
  {
    number: '01',
    title: 'The teachings',
    description:
      'Public talks, sittings, retreats, and structured study shaped by Dr. Baffour Jan\'s direct teaching on consciousness, the Self, God, mind, illusion, and inner freedom.',
    highlights: [
      'Weekly sittings in Accra',
      'Annual retreat',
      'The InnerSpace course for committed students',
      'Free public talks on YouTube',
    ],
  },
  {
    number: '02',
    title: 'Service that keeps the path grounded',
    description:
      'Inner work becomes real in how we serve. JCF supports community programmes, youth mentorship, media work, and practical outreach as expressions of the same spiritual life.',
    highlights: [
      'Medical outreach',
      'Educational support for young people',
      'Community service days',
      'Local partnerships',
    ],
  },
  {
    number: '03',
    title: 'Seeds of awareness in young people',
    description:
      'The Guide the Children work introduces young people to presence, self-awareness, responsibility, and conscious living through mentorship and simple practices.',
    highlights: [
      'Guide the Children Initiative',
      'Mentorship circle',
      'School visits and workshops',
      'Youth retreats',
    ],
  },
  {
    number: '04',
    title: 'A community of sincere seekers',
    description:
      'The work is rooted in Ghana and open to the world. Centres and online platforms give seekers a place to sit, ask questions, study, and serve together.',
    highlights: [
      `${siteConfig.stats.centres} centres and communities`,
      'In-person sittings and study',
      'Retreat hosting',
      'Hosts in new cities, by request',
    ],
  },
];

export const metadata: Metadata = {
  title: 'Mission & Vision',
  description:
    'The mission and vision of Jan Cosmic Foundation: self-realization, higher consciousness, inner freedom, conscious living, and service through the teachings of Dr. Baffour Jan.',
};

export default function MissionVisionPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Mission &amp; Vision"
        subtitle="Why the Foundation exists, what it serves, and how the inner path becomes life."
      />

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionHeader
              label="Why We Exist"
              title="Our Mission"
            />
          </div>

          {/* Quote block */}
          <div className="relative">
            {/* Large decorative quote mark */}
            <div
              className="absolute -top-6 -left-4 text-8xl sm:text-9xl font-serif leading-none select-none pointer-events-none"
              style={{ color: 'rgba(212,168,67,0.18)' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div
              className="relative rounded-3xl p-8 sm:p-12 lg:p-16 text-center"
              style={{
                background: 'linear-gradient(135deg, #000B58 0%, #1a1b6b 55%, var(--color-violet) 100%)',
              }}
            >
              {/* Gold accent bar */}
              <div
                className="w-16 h-1 rounded-full mx-auto mb-8"
                style={{ backgroundColor: '#D4A843' }}
              />

              <p className="display text-2xl sm:text-3xl lg:text-4xl leading-[1.32] text-white">
                To guide sincere seekers toward self-realization, higher consciousness, inner freedom, and conscious living through the teachings of Dr. Baffour Jan, and to let that inner work express itself through service.
              </p>

              <div
                className="w-16 h-1 rounded-full mx-auto mt-8"
                style={{ backgroundColor: 'rgba(212,168,67,0.5)' }}
              />
            </div>

            {/* Closing quote */}
            <div
              className="absolute -bottom-6 -right-4 text-8xl sm:text-9xl font-serif leading-none select-none pointer-events-none"
              style={{ color: 'rgba(212,168,67,0.18)' }}
              aria-hidden="true"
            >
              &rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Where the work is heading"
            title="Our Vision"
            subtitle="Three intentions that shape the way we teach, gather, serve, and grow."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Awakened human beings',
                body: 'That more people come to know themselves beyond the noise of the mind, and live with the clarity, humility, and love that such seeing brings.',
              },
              {
                title: 'Teachings kept reachable',
                body: 'That the teachings of Dr. Jan remain available to sincere seekers through public media, live gatherings, structured courses, centres, and personal practice.',
              },
              {
                title: 'Unity lived, not only spoken',
                body: 'That the understanding of one Consciousness becomes visible in how we relate to ourselves, to one another, to nature, and to the communities we serve.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.08)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212,168,67,0.15)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#D4A843" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="display text-xl mb-3" style={{ color: '#000B58' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1c1a26cc' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals / Pillars */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="How the work breaks down"
            title="Four areas of work"
            subtitle="Teachings, service, youth mentorship, and community. Different forms, one intention: awakening expressed through life."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.08)' }}
              >
                <div className="flex items-start gap-5">
                  {/* Number badge */}
                  <div
                    className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold"
                    style={{ background: 'linear-gradient(135deg, #000B58, var(--color-primary))', color: '#D4A843' }}
                  >
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="display text-2xl mb-3" style={{ color: '#000B58' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#1c1a26cc' }}>
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#1c1a26bf' }}>
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: '#D4A843' }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #000B58 0%, var(--color-violet) 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display text-3xl sm:text-4xl text-white mb-4">
            Begin sincerely
          </h2>
          <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(253,251,247,0.9)' }}>
            Come as a student, a volunteer, a supporter, or simply as someone who wants to understand life more deeply. The right door is the one you can enter honestly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/about" variant="secondary" size="lg">
              Back to About
            </Button>
            <a
              href="/events"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 px-8 py-4 text-lg font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
            >
              See upcoming events
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
