import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

const pillars = [
  {
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
    title: 'Centres, farms, and community',
    description:
      'The work is rooted in Ghana and open to the world. Centres, farms, online platforms, and the JCF Village vision give seekers places to sit, recharge, study, and serve together.',
    highlights: [
      // No headline number here: counts must come from real centre data.
      'Centres and communities',
      'In-person sittings and study',
      'Retreat hosting',
      'Hosts in new cities, by request',
    ],
  },
];

const vision = [
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
];

export const metadata: Metadata = {
  title: 'Mission & Vision',
  description:
    'The mission and vision of Jan Cosmic Foundation: to teach and inspire all to evolve rapidly toward self-realization, true empowerment, peace, bliss, love, and wellness.',
};

export default function MissionVisionPage() {
  return (
    <div className="bg-cream">
      <PageHero
        title="Mission &amp; Vision"
        subtitle="Why the Foundation exists, what it serves, and how awakening becomes life."
      />

      {/* Mission */}
      <section className="section">
        <div className="wrap">
          <SectionHeader label="Why We Exist" title="Our Mission" />
          <ScrollReveal animation="fade-in" className="night stars mt-12 overflow-hidden rounded-card px-8 py-16 text-center sm:px-16 sm:py-24">
            <span aria-hidden="true" className="mx-auto mb-8 block h-px w-14 bg-gold" />
            <p className="mx-auto max-w-3xl font-serif text-3xl leading-[1.25] text-white sm:text-4xl lg:text-5xl">
              To teach and inspire all to evolve rapidly toward self-realization.
            </p>
            <span aria-hidden="true" className="mx-auto mt-8 block h-px w-14 bg-gold/50" />
          </ScrollReveal>
        </div>
      </section>

      {/* Framework */}
      <section className="section bg-sand">
        <div className="wrap grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeader
            label="The movement"
            title="From pleasure, to happiness, to bliss"
            subtitle="The mission is practical because the journey is practical: the seeker is helped to move from external dependence into inner balance, then toward direct spiritual realization."
            align="left"
          />
          <p className="rounded-card bg-white p-8 text-lg leading-relaxed text-ink/80 sm:p-10">
            In this framework, pleasure is external and short-lived.
            Happiness is internal and deeper, but still changes. Bliss
            belongs to Spirit. JCF&rsquo;s teachings, retreats, counselling,
            healing, organic food work, centres, and service are different
            supports for the same movement toward awareness and
            self-realization.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="wrap">
          <SectionHeader
            label="Where the work is heading"
            title="Our Vision"
            subtitle="To awaken the whole world through self-realization, ensuring true empowerment, peace, bliss, love, and wellness."
          />
          <ScrollReveal staggerChildren={0.1} className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {vision.map((item) => (
              <div key={item.title} className="border-t border-gold pt-8">
                <h3 className="text-3xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Areas of work */}
      <section className="section bg-sand">
        <div className="wrap">
          <SectionHeader
            label="How the work breaks down"
            title="Four areas of work"
            subtitle="Teaching, service, children, and community. Different forms, one intention: awakening expressed through life."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-card bg-white p-8 sm:p-10">
                <h3 className="text-3xl leading-snug">{pillar.title}</h3>
                <p className="mt-4 leading-relaxed text-ink/75">{pillar.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                  {pillar.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink/80">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-4xl sm:text-5xl">Choose your service sincerely</h2>
          <p className="mt-5 text-lg text-white/80">
            Dr. Jan gives a practical measure: choose work you love, work you can become good at, work the world needs, and work that can sustain the life around you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/about" variant="secondary" size="lg">Back to About</Button>
            <Link href="/events" className="button ghost button-lg">See upcoming events</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
