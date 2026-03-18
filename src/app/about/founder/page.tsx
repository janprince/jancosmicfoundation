import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const milestones = [
  {
    year: '1953',
    title: 'Born in Dwenem, Ghana',
    description:
      'Dr. Baffour Jan was born on 10th December 1953 at St. Mary\'s Hospital in Dwenem (New Drobo), Jaman District, Bono Region, Ghana, to late Francis Kumi and late Madam Mary Donkor.',
  },
  {
    year: '1969',
    title: 'Early Education',
    description:
      'Completed studies at the Local Authority Middle School at Dunkwa with distinction, already showing deep spiritual interests from his school years.',
  },
  {
    year: '1974',
    title: 'Secondary Education',
    description:
      'Completed studies at Dormaa Secondary School, where his exploration of esoteric traditions began through Rosicrucianism.',
  },
  {
    year: '1975–80',
    title: 'Medical Sciences & Buddhist Study',
    description:
      'Undertook a three-year Medical Sciences course at Korle-Bu Teaching Hospital while simultaneously deepening his spiritual exploration through the Nichiren Shoshu sect of Buddhism.',
  },
  {
    year: '1980',
    title: 'ISKCON Initiation',
    description:
      'Initiated as Jiva Goswami within the International Society for Krishna Consciousness. Became the first Ghanaian ISKCON Temple President and first Regional Director for West Africa.',
  },
  {
    year: '1983',
    title: 'Studies in India',
    description:
      'Travelled to India for specialised training in Ayurvedic medicine, Pranic Healing, Psychotherapy, Hydrotherapy, and Reflexology — deepening both his healing abilities and spiritual understanding.',
  },
  {
    year: '1986',
    title: 'Spiritual Realisation',
    description:
      'After releasing all prior beliefs and practices, a spontaneous and profound spiritual realisation occurred in the presence of three teachers from the Brahma Kumaris World Spiritual University. This marked the beginning of his teaching mission.',
  },
  {
    year: '1996',
    title: 'Hermetic Sanctuary Founded',
    description:
      'Established the Hermetic Sanctuary in Ivory Coast — a sacred space dedicated to spiritual practice, inner retreat, and the transmission of higher knowledge.',
  },
  {
    year: '2012',
    title: 'San Bra Enlightenment Centre',
    description:
      'Founded the San Bra Enlightenment Centre in Adjen Kotoku, Ghana — a retreat centre designed for deep spiritual transformation and immersive practice.',
  },
  {
    year: '2021',
    title: 'Jan Cosmic Foundation',
    description:
      'Established the Jan Cosmic Foundation in Accra, Ghana, to formalise and expand his teaching mission, support community service, and bring the teachings to seekers worldwide.',
  },
];

const teachings = [
  {
    title: 'Self-Realisation',
    description:
      'The core of Dr. Jan\'s teaching is the direct realisation of the True Self — not through belief or intellectual study, but through the dismantling of the ego and the dissolution of conditioned identity.',
  },
  {
    title: 'Non-Dual Wisdom',
    description:
      'Drawing from traditions across Christianity, Buddhism, Hinduism, and mystical philosophy — without allegiance to any single doctrine — his teachings point to the one truth underlying all paths.',
  },
  {
    title: 'Inner Silence',
    description:
      'Dr. Jan teaches that genuine spiritual awakening happens not through accumulation of knowledge but through the silencing of the restless mind, revealing the peace that is always already present.',
  },
  {
    title: 'Service as Practice',
    description:
      'Selfless service is not treated as a supplement to the spiritual path, but as an essential expression of awakened consciousness — the proof of genuine inner transformation.',
  },
];

export const metadata: Metadata = {
  title: 'Dr. Baffour Jan — Founder & Spiritual Director',
  description:
    'Learn about Dr. Baffour Jan, the founder of the Jan Cosmic Foundation — a spiritual master and contemporary mystic with nearly four decades of teaching.',
};

export default function FounderPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Dr. Baffour Jan"
        subtitle="Spiritual Master, Mystic & Founder of the Jan Cosmic Foundation"
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
                style={{ backgroundColor: '#2D6A4F', opacity: 0.15 }}
              />
            </div>

            {/* Bio Text */}
            <div>
              <SectionHeader
                label="The Founder"
                title="A Contemporary Mystic"
                align="left"
              />
              <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: '#1a1a1acc' }}>
                <p>
                  Dr. Baffour Jan is a spiritual master and contemporary mystic whose teachings cut through centuries of accumulated spiritual complexity to reveal the simple, immediate truth of who you are.
                </p>
                <p>
                  Born on 10th December 1953 in Dwenem, Ghana, his spiritual journey has taken him through the depths of Christianity, Rosicrucianism, Buddhism, and Vedic philosophy — each tradition adding a dimension to his understanding before he ultimately transcended all doctrinal boundaries.
                </p>
                <p>
                  For nearly four decades, he has guided sincere seekers toward Self-Realisation and genuine inner peace — not through the accumulation of knowledge, but through shedding what obscures the natural state of consciousness.
                </p>
              </div>

              {/* Key stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { value: '38+', label: 'Years Teaching' },
                  { value: '30K+', label: 'Lives Touched' },
                  { value: '1K+', label: 'Active Students' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-semibold" style={{ color: '#2D6A4F' }}>
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm mt-1" style={{ color: '#1a1a1a99' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
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
          <p className="text-xl sm:text-2xl italic font-light leading-relaxed mb-4" style={{ color: '#000B58' }}>
            &ldquo;The greatest magic is revealing the God in You.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: '#2D6A4F' }}>
            — Dr. Baffour Jan
          </p>
        </div>
      </section>

      {/* Spiritual Journey Timeline */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The Journey"
            title="A Life Dedicated to Awakening"
            subtitle="From a young seeker in rural Ghana to a spiritual master guiding thousands — the milestones of an extraordinary inner journey."
          />

          <div className="mt-14 relative">
            {/* Vertical timeline line */}
            <div
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
              style={{ backgroundColor: 'rgba(45,106,79,0.2)' }}
            />

            <div className="space-y-10">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="relative pl-16 sm:pl-20">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full border-[3px]"
                    style={{
                      backgroundColor: '#FDFBF7',
                      borderColor: '#2D6A4F',
                    }}
                  />
                  {/* Year badge */}
                  <span
                    className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2"
                    style={{ backgroundColor: 'rgba(212,168,67,0.15)', color: '#8a6c1a' }}
                  >
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#000B58' }}>
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#1a1a1acc' }}>
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The Teachings"
            title="Philosophy & Approach"
            subtitle="Dr. Jan's teachings are rooted in the understanding that every human being carries within them the potential to awaken to higher states of consciousness."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teachings.map((teaching) => (
              <div
                key={teaching.title}
                className="bg-white rounded-2xl p-7 flex flex-col transition-all duration-300 hover:shadow-md"
                style={{ border: '1px solid rgba(0,11,88,0.08)' }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#000B58' }}>
                  {teaching.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1a1a1acc' }}>
                  {teaching.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions Founded */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Institutions"
            title="Spaces for Transformation"
            subtitle="Over the decades, Dr. Jan has established sacred spaces and organisations dedicated to spiritual practice and community service."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Hermetic Sanctuary',
                location: 'Ivory Coast',
                year: '1996',
                description:
                  'A sacred space dedicated to spiritual practice, inner retreat, and the transmission of higher knowledge to committed seekers.',
              },
              {
                name: 'San Bra Enlightenment Centre',
                location: 'Adjen Kotoku, Ghana',
                year: '2012',
                description:
                  'A retreat centre designed for deep spiritual transformation, immersive practice, and extended periods of contemplative study.',
              },
              {
                name: 'Jan Cosmic Foundation',
                location: 'Accra, Ghana',
                year: '2021',
                description:
                  'The formal embodiment of Dr. Jan\'s teaching mission, supporting spiritual education, community service, and global outreach.',
              },
            ].map((institution) => (
              <div
                key={institution.name}
                className="rounded-2xl p-7 flex flex-col"
                style={{
                  background:
                    'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
                }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full w-fit mb-4"
                  style={{ backgroundColor: 'rgba(212,168,67,0.2)', color: '#D4A843' }}
                >
                  Est. {institution.year}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {institution.name}
                </h3>
                <p className="text-xs font-medium mb-4" style={{ color: 'rgba(212,168,67,0.7)' }}>
                  {institution.location}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(253,251,247,0.75)' }}>
                  {institution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Offerings */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="His Work"
            title="Teaching & Offerings"
            subtitle="Dr. Jan reaches seekers through a wide range of formats, making the teachings accessible to all who are ready."
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { value: '50+', label: 'Recorded Talks' },
              { value: '20+', label: 'Guided Meditations' },
              { value: '20+', label: 'Countries Reached' },
              { value: '4', label: 'JCF Centres' },
              { value: '3', label: 'Institutions Founded' },
              { value: '1K+', label: 'Active Students' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-5 text-center transition-all duration-300 hover:shadow-sm"
                style={{ border: '1px solid rgba(0,11,88,0.06)' }}
              >
                <p className="text-2xl font-semibold" style={{ color: '#2D6A4F' }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: '#1a1a1a99' }}>
                  {stat.label}
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
            'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Experience the Teachings
          </h2>
          <p className="text-sm italic mb-6" style={{ color: 'rgba(212,168,67,0.75)' }}>
            &ldquo;The most worthy knowledge is that which helps to dismantle the Ego in order to reveal the True Self.&rdquo;
          </p>
          <p
            className="text-base sm:text-lg mb-10 leading-relaxed"
            style={{ color: 'rgba(253,251,247,0.75)' }}
          >
            Explore the foundation born from Dr. Jan&apos;s vision, or visit his personal site to engage directly with his teachings, talks, and guided practices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/programs" variant="secondary" size="lg">
              Explore Programmes
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
