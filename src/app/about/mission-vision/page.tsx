import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const pillars = [
  {
    number: '01',
    title: 'Spiritual Education',
    description:
      'We provide accessible, high-quality instruction in meditation, contemplative philosophy, and conscious living — drawing from the depth of diverse wisdom traditions while remaining rooted in the JCF lineage as transmitted by Dr. Baffour Jan.',
    highlights: [
      'Annual Silent Retreats',
      'Teacher Training Programme',
      'Weekly Community Sittings',
      'Youth Mindfulness Curriculum',
    ],
  },
  {
    number: '02',
    title: 'Community Development',
    description:
      'We believe that genuine spiritual growth expresses itself as care for the communities around us. Through scholarships, medical outreach, community centre programmes, and collaborative partnerships, we invest in the material and social conditions that allow human potential to flourish.',
    highlights: [
      'Education Scholarship Fund',
      'Medical Outreach Programme',
      'Community Centre Services',
      'Vocational Training',
    ],
  },
  {
    number: '03',
    title: 'Youth Empowerment',
    description:
      'Young people are not the leaders of tomorrow — they are participants and contributors today. Our youth programmes combine inner-development tools with practical skills, mentorship, and community to equip the next generation with the resources they need to build purposeful lives.',
    highlights: [
      'Youth Empowerment Programme',
      'Mentorship Network',
      'Leadership Workshops',
      'Online Learning Hub',
    ],
  },
  {
    number: '04',
    title: 'Global Outreach',
    description:
      'The JCF community is not bounded by geography. Our diaspora centres in London, New York, and Toronto connect Ghanaians and international practitioners across the world, facilitating cultural exchange, cross-border fundraising, and the global spread of a wisdom tradition rooted in African spiritual heritage.',
    highlights: [
      '15+ Centres Worldwide',
      'Diaspora Community Programmes',
      'International Retreat Hosting',
      'Cross-Border Partnerships',
    ],
  },
];

export default function MissionVisionPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Mission &amp; Vision"
        subtitle="The foundational purpose that has guided the Jan Cosmic Foundation for over three decades — and the future we are collectively building."
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
                background: 'linear-gradient(135deg, #000B58 0%, #001485 60%, #2D6A4F 100%)',
              }}
            >
              {/* Gold accent bar */}
              <div
                className="w-16 h-1 rounded-full mx-auto mb-8"
                style={{ backgroundColor: '#D4A843' }}
              />

              <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed text-white">
                To awaken the highest potential in every individual and community we serve — through the transformative power of contemplative practice, compassionate service, and the living transmission of universal wisdom.
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
            label="Where We Are Going"
            title="Our Vision"
            subtitle="The future we are working to help create."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'A World of Conscious Communities',
                body: 'We envision a world in which communities at every scale — families, neighbourhoods, nations — are guided by the values of inner awareness, mutual care, and service to the whole.',
              },
              {
                title: 'Accessible Wisdom for All',
                body: 'We envision contemplative wisdom and inner-development tools freely available to every person, regardless of economic background, nationality, religious tradition, or formal education.',
              },
              {
                title: 'Africa as a Spiritual Wellspring',
                body: 'We envision Ghana and the African continent recognised globally as a living source of profound spiritual heritage — not a recipient of wisdom, but a generous contributor to the global conversation.',
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
                <h3 className="text-base font-bold mb-3" style={{ color: '#000B58' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a99' }}>
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
            label="How We Work"
            title="Our Four Strategic Pillars"
            subtitle="Every programme, initiative, and relationship we build falls under one or more of these four pillars — the structural framework through which we pursue our mission."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.08)' }}
              >
                <div className="flex items-start gap-5">
                  {/* Number badge */}
                  <div
                    className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold"
                    style={{ background: 'linear-gradient(135deg, #000B58, #2D6A4F)', color: '#D4A843' }}
                  >
                    {pillar.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#000B58' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#1a1a1a99' }}>
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#1a1a1a80' }}>
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
        style={{ background: 'linear-gradient(135deg, #000B58 0%, #2D6A4F 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Be Part of the Mission
          </h2>
          <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(253,251,247,0.75)' }}>
            There are many ways to participate — as a member, a volunteer, a donor, or simply a curious seeker finding their way to us for the first time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/about" variant="secondary" size="lg">
              Back to About
            </Button>
            <Button href="/events" variant="outline" size="lg">
              Explore Events
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
