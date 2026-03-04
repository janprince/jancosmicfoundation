import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { teamMembers } from '@/lib/mock-data';

const coreValues = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: 'Compassion',
    description:
      'We approach every individual and community with an open heart — listening deeply, responding with care, and seeing the humanity in all people regardless of background or circumstance.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Unity',
    description:
      'We recognise that individual flourishing and collective wellbeing are inseparable. Our community is built on the understanding that we rise together — across nationalities, traditions, and generations.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
      </svg>
    ),
    title: 'Service',
    description:
      'Service is not a supplement to our spiritual path — it is the path itself. We believe that genuine inner growth is measured by its fruits in the lives of those around us.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: 'Wisdom',
    description:
      'We honour the great contemplative traditions while remaining grounded in the practical realities of contemporary life. Wisdom, for us, is knowledge lived, not merely learned.',
  },
];

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="About the Foundation"
        subtitle="Over three decades of transforming lives through inner practice, community service, and the living wisdom of Dr. Baffour Jan."
      />

      {/* Foundation History */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionHeader
                label="Our Story"
                title="A Foundation Born from Vision"
                align="left"
              />
              <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed" style={{ color: '#1a1a1a99' }}>
                <p>
                  The Jan Cosmic Foundation was established in Accra, Ghana in 1988 by Dr. Baffour Jan — a scholar, meditation teacher, and humanitarian who had spent two decades immersed in contemplative traditions across West Africa, India, and Southeast Asia.
                </p>
                <p>
                  What began as a small circle of meditators gathering in Airport Residential Area has grown into an international community spanning five countries, touching over 20,000 lives through spiritual teaching, education, healthcare, and community service.
                </p>
                <p>
                  The foundation's guiding conviction — that inner transformation and outer service are one integrated path — shapes every programme, every gathering, and every relationship within the JCF community. We do not separate the life of contemplation from the life of contribution.
                </p>
                <p>
                  Today, JCF operates 15+ active centres across Ghana, the United Kingdom, the United States, and Canada, supported by a global network of teachers, volunteers, and donors committed to the vision of a more conscious, compassionate world.
                </p>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative">
              <div
                className="rounded-3xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #000B58 0%, #2D6A4F 100%)', minHeight: '420px' }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(212,168,67,0.2)', border: '2px solid rgba(212,168,67,0.5)' }}
                  >
                    <span className="text-4xl font-bold" style={{ color: '#D4A843' }}>38</span>
                  </div>
                  <p className="text-white text-xl font-semibold mb-2">Years of Service</p>
                  <p style={{ color: 'rgba(253,251,247,0.7)' }} className="text-base">
                    Founded 1988 in Accra, Ghana
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-6 w-full max-w-xs">
                    {[
                      { value: '20,000+', label: 'Lives Touched' },
                      { value: '15+', label: 'Active Centres' },
                      { value: '20+', label: 'Countries' },
                      { value: '340+', label: 'Scholars Funded' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold" style={{ color: '#D4A843' }}>{stat.value}</div>
                        <div className="text-xs mt-1" style={{ color: 'rgba(253,251,247,0.65)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Accent corner */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10"
                style={{ backgroundColor: '#D4A843', opacity: 0.25 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Dr. Jan */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
            style={{ backgroundColor: '#D4A843', color: '#000B58' }}
          >
            The Founder
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#000B58' }}>
            Our Connection to Dr. Baffour Jan
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: '#1a1a1a99' }}>
            Dr. Baffour Jan is the spiritual heart of everything the Jan Cosmic Foundation stands for. A teacher, author, and servant-leader, he has dedicated over four decades to demonstrating that genuine awakening is not a private achievement — it is a way of living that radiates outward into every dimension of community life.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#1a1a1a99' }}>
            His teachings draw on the deepest wells of contemplative wisdom while remaining grounded in the everyday realities of contemporary Ghanaian and global life. To understand the JCF is to understand the man whose vision called it into being.
          </p>
          <a
            href="https://drbaffourjan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: '#2D6A4F', color: '#FDFBF7' }}
          >
            Visit drbaffourjan.com
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Stand For"
            title="Our Core Values"
            subtitle="Four principles guide every decision we make, every programme we run, and every relationship we build."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.08)' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(45,106,79,0.1)', color: '#2D6A4F' }}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#000B58' }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#1a1a1a99' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="The People"
            title="Leadership & Team"
            subtitle="The dedicated individuals who bring the Jan Cosmic Foundation's mission to life every day."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.07)' }}
              >
                {/* Avatar placeholder */}
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #000B58 0%, #2D6A4F 100%)' }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold"
                    style={{ backgroundColor: 'rgba(212,168,67,0.25)', color: '#D4A843', border: '2px solid rgba(212,168,67,0.5)' }}
                  >
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold" style={{ color: '#000B58' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold mt-0.5 mb-3" style={{ color: '#2D6A4F' }}>
                    {member.role}
                  </p>
                  <p className="text-xs leading-relaxed line-clamp-4" style={{ color: '#1a1a1a80' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore Our Purpose
          </h2>
          <p className="text-base sm:text-lg mb-10" style={{ color: 'rgba(253,251,247,0.75)' }}>
            Discover the mission, vision, and strategic goals that drive the Jan Cosmic Foundation forward in service to communities across the world.
          </p>
          <Button href="/about/mission-vision" variant="secondary" size="lg">
            View Mission &amp; Vision
          </Button>
        </div>
      </section>
    </main>
  );
}
