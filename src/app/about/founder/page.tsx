import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const teachings = [
  {
    title: 'Self-realization',
    description:
      'The aim is not to acquire a new identity, but to recognise the one that was never created — the Self beneath the layers of body, mind, and conditioning.',
  },
  {
    title: 'Non-dual wisdom',
    description:
      'Drawing from Christianity, Buddhism, Hinduism, and the mystical traditions — without claiming allegiance to any single one — Dr. Jan points to what they each, in their own language, are pointing at.',
  },
  {
    title: 'Inner silence',
    description:
      'Awakening is not produced by adding more spiritual knowledge. It is what becomes available when the mind grows quiet enough to stop talking over it.',
  },
  {
    title: 'Service as practice',
    description:
      'If something has truly opened inwardly, it shows up in how a person treats others. Service is not a duty bolted onto the path. It is one of the ways evolution expresses itself.',
  },
];

export const metadata: Metadata = {
  title: 'Dr. Baffour Jan — The Mystic & Teacher',
  description:
    'Dr. Baffour Jan is a mystic, spiritual master, and teacher. His teachings explore self-realization, consciousness, God, the soul, mind, truth, service, and inner freedom.',
};

export default function FounderPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Dr. Baffour Jan"
        subtitle="The Mystic and Teacher whose work points seekers toward direct inner realization."
      />

      {/* Introduction */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ minHeight: '480px', position: 'relative' }}
              >
                <Image
                  src="/images/doc-potrait.jpg"
                  alt="Dr. Baffour Jan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Accent elements */}
              <div
                className="absolute -bottom-4 -right-4 w-28 h-28 rounded-2xl -z-10"
                style={{ backgroundColor: '#D4A843', opacity: 0.2 }}
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl -z-10"
                style={{ backgroundColor: 'var(--color-primary)', opacity: 0.15 }}
              />
            </div>

            {/* Bio Text */}
            <div>
              <SectionHeader
                label="The Mystic"
                title="A teacher of direct inner realization"
                align="left"
              />
              <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: '#1c1a26cc' }}>
                <p>
                  Dr. Baffour Jan is a mystic, spiritual master, and teacher whose work points beyond doctrine and ritual to the direct recognition of who one already is. His teachings explore God, the soul, consciousness, illusion, the mind, the body, truth, human suffering, and inner awakening.
                </p>
                <p>
                  Public materials around his work describe a path shaped by wide study and direct realization. He does not ask seekers to collect beliefs. He points them back to direct experience: the knowing that becomes possible when the mind becomes quiet.
                </p>
                <p>
                  Through Jan Cosmic Foundation, Dr. Jan&rsquo;s teachings are shared through public talks, retreats, courses, gatherings, media, outreach, farms, centres, and service. The invitation is simple and demanding: to know the Self, and to let that knowing transform how one lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg
            className="w-12 h-12 mx-auto mb-6 opacity-20"
            style={{ color: '#D4A843' }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="display text-2xl sm:text-3xl italic leading-relaxed mb-4" style={{ color: '#000B58' }}>
            &ldquo;The greatest magic is revealing the God in You.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
            — Dr. Baffour Jan
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The Teachings"
            title="Four threads that run through the work"
            subtitle="These threads recur across the talks, retreats, public teachings, and InnerSpace study path."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teachings.map((teaching) => (
              <div
                key={teaching.title}
                className="bg-white rounded-2xl p-7 flex flex-col transition-all duration-300 hover:shadow-md"
                style={{ border: '1px solid rgba(0,11,88,0.08)' }}
              >
                <h3 className="display text-xl mb-3" style={{ color: '#000B58' }}>
                  {teaching.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1c1a26cc' }}>
                  {teaching.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 sm:py-24"
        style={{
          background:
            'linear-gradient(135deg, #000B58 0%, #1a1b6b 50%, var(--color-violet, #5B4B9E) 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="display text-3xl sm:text-4xl text-white mb-4">
            Sit with the teaching
          </h2>
          <p className="text-sm italic mb-6" style={{ color: 'rgba(212,168,67,0.9)' }}>
            &ldquo;The most useful knowledge is that which helps to dismantle the ego, in order to reveal the True Self.&rdquo;
          </p>
          <p
            className="text-base sm:text-lg mb-10 leading-relaxed"
            style={{ color: 'rgba(253,251,247,0.9)' }}
          >
            Explore the Foundation&rsquo;s programmes, or visit Dr. Jan&rsquo;s personal site for public talks, writing, and the InnerSpace course.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/programs" variant="secondary" size="lg">
              See the programmes
            </Button>
            <a
              href="https://drbaffourjan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-lg font-medium transition-all duration-300 hover:shadow-lg border-2"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff' }}
            >
              Visit drbaffourjan.com
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
