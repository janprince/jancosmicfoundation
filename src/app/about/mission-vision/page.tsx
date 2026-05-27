import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/lib/site-config';

const pillars = [
  {
    number: '01',
    title: 'Teaching for self-realization',
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
    title: 'Service to evolution',
    description:
      'Inner work becomes real in how we serve. JCF holds direct and indirect service through outreach teachers, organisers, farms, media, children\'s work, and practical care.',
    highlights: [
      'Outreach teachers and organisers',
      'Healing, counselling, and teaching',
      'Organic farms and food work',
      'Media and digital outreach',
    ],
  },
  {
    number: '03',
    title: 'Children awakened early',
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
    title: 'Centres, farms, and community',
    description:
      'The work is rooted in Ghana and open to the world. Centres, farms, online platforms, and the JCF Village vision give seekers places to sit, recharge, study, and serve together.',
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
    'The mission and vision of Jan Cosmic Foundation: to teach and inspire all to evolve rapidly toward self-realization, true empowerment, peace, bliss, love, and wellness.',
};

export default function MissionVisionPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Mission &amp; Vision"
        subtitle="Why the Foundation exists, what it serves, and how awakening becomes life."
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
                background: 'linear-gradient(135deg, #000B58 0%, #1a1b6b 55%, var(--color-violet, #5B4B9E) 100%)',
              }}
            >
              {/* Gold accent bar */}
              <div
                className="w-16 h-1 rounded-full mx-auto mb-8"
                style={{ backgroundColor: '#D4A843' }}
              />

              <p className="display text-2xl sm:text-3xl lg:text-4xl leading-[1.32] text-white">
                To teach and inspire all to evolve rapidly toward self-realization.
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

      {/* Framework */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center">
            <SectionHeader
              label="The movement"
              title="From pleasure, to happiness, to bliss"
              subtitle="The mission is practical because the journey is practical: the seeker is helped to move from external dependence into inner balance, then toward direct spiritual realization."
              align="left"
            />
            <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: '#F2EFE9', border: '1px solid rgba(0,11,88,0.08)' }}>
              <p className="text-base leading-relaxed" style={{ color: '#1c1a26cc' }}>
                In this framework, pleasure is external and short-lived.
                Happiness is internal and deeper, but still changes. Bliss
                belongs to Spirit. JCF&rsquo;s teachings, retreats, counselling,
                healing, organic food work, centres, and service are different
                supports for the same movement toward awareness and
                self-realization.
              </p>
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
            subtitle="To awaken the whole world through self-realization, ensuring true empowerment, peace, bliss, love, and wellness."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Freedom',
                body: 'Freedom from false identity and from the external bondage that keeps the soul asleep.',
              },
              {
                title: 'Awake and aware',
                body: 'Awakening in the internal life, then growing into full awareness of the Spirit within.',
              },
              {
                title: 'Unity lived',
                body: 'The understanding of one Consciousness made visible in how we relate, serve, heal, teach, farm, organise, and care.',
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
            subtitle="Teaching, service, children, and community. Different forms, one intention: awakening expressed through life."
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
        style={{ background: 'linear-gradient(135deg, #000B58 0%, var(--color-violet, #5B4B9E) 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display text-3xl sm:text-4xl text-white mb-4">
            Choose your service sincerely
          </h2>
          <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(253,251,247,0.9)' }}>
            Dr. Jan gives a practical measure: choose work you love, work you can become good at, work the world needs, and work that can sustain the life around you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/about" variant="secondary" size="lg">
              Back to About
            </Button>
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 px-8 py-4 text-lg font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
            >
              See upcoming events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
