import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { getPrograms } from '@/lib/api';

const categoryLabels: Record<string, string> = {
  spiritual: 'Spiritual Growth',
  education: 'Education & Youth',
  community: 'Community & Outreach',
  humanitarian: 'Humanitarian',
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  spiritual: { bg: 'rgba(var(--color-primary-rgb),0.1)', text: 'var(--color-primary)' },
  education: { bg: 'rgba(212,168,67,0.12)', text: '#8a6c1a' },
  community: { bg: 'rgba(0,11,88,0.08)', text: '#000B58' },
  humanitarian: { bg: 'rgba(192,80,33,0.1)', text: '#C05021' },
};

const iconMap: Record<string, React.ReactNode> = {
  lotus: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 6.007 7.5 7.5 0 0 0 12 3Z" />
    </svg>
  ),
  meditation: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  children: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
  hands: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
    </svg>
  ),
  guidance: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  ),
  media: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
};

export const metadata: Metadata = {
  title: 'Our Programmes',
  description:
    'Explore the programmes and initiatives of the Jan Cosmic Foundation — from spiritual teachings and meditation retreats to community service and youth education.',
};

export default async function ProgramsPage() {
  const programs = await getPrograms();

  const spiritualPrograms = programs.filter((p) => p.category === 'spiritual');
  const otherPrograms = programs.filter((p) => p.category !== 'spiritual');

  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Our Programmes"
        subtitle="The work of the Jan Cosmic Foundation spans spiritual education, community service, youth development, and humanitarian outreach."
      />

      {/* Intro Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="What We Do"
            title="Programmes That Transform Lives"
            subtitle="Every programme of the Jan Cosmic Foundation is an expression of a single purpose: to help human beings awaken to their true nature and serve one another with love."
          />
          <p className="mt-6 text-base leading-relaxed" style={{ color: '#1a1a1abf' }}>
            Under the guidance of Dr. Baffour Jan, the foundation operates programmes across four pillars — spiritual growth, education, community service, and media outreach — each designed to serve seekers and communities at different stages of their journey.
          </p>
        </div>
      </section>

      {/* Spiritual Programmes */}
      {spiritualPrograms.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Spiritual Growth"
              title="The Inner Path"
              subtitle="Programmes dedicated to awakening consciousness, deepening meditation practice, and realising the True Self."
            />

            <div className="mt-12 space-y-8">
              {spiritualPrograms.map((program, index) => (
                <div
                  key={program.id}
                  className="rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.06)' }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative min-h-[280px] lg:min-h-[360px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className="text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: categoryColors[program.category]?.bg,
                            color: categoryColors[program.category]?.text,
                            backdropFilter: 'blur(8px)',
                          }}
                        >
                          {categoryLabels[program.category]}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: 'rgba(var(--color-primary-rgb),0.1)', color: 'var(--color-primary)' }}
                      >
                        {iconMap[program.icon] || iconMap.lotus}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4" style={{ color: '#000B58' }}>
                        {program.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-6" style={{ color: '#1a1a1acc' }}>
                        {program.content}
                      </p>
                      {program.isActive && (
                        <span
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
                          style={{ backgroundColor: 'rgba(var(--color-primary-rgb),0.1)', color: 'var(--color-primary)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          Active Programme
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Programmes */}
      {otherPrograms.length > 0 && (
        <section className="py-16 sm:py-24" style={{ backgroundColor: '#F2EFE9' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Service & Outreach"
              title="The Outer Expression"
              subtitle="Programmes that carry the spirit of the teachings into schools, communities, and homes — transforming lives through action."
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPrograms.map((program) => (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                  style={{ border: '1px solid rgba(0,11,88,0.06)' }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: categoryColors[program.category]?.bg,
                          color: categoryColors[program.category]?.text,
                        }}
                      >
                        {categoryLabels[program.category]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: 'rgba(var(--color-primary-rgb),0.1)', color: 'var(--color-primary)' }}
                    >
                      {iconMap[program.icon] || iconMap.lotus}
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#000B58' }}>
                      {program.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: '#1a1a1acc' }}>
                      {program.description}
                    </p>
                    {program.isActive && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 px-2.5 py-1 rounded-full w-fit"
                        style={{ backgroundColor: 'rgba(var(--color-primary-rgb),0.1)', color: 'var(--color-primary)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Active
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact Quote */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl italic font-light leading-relaxed mb-4" style={{ color: '#000B58' }}>
            &ldquo;The purpose of human life is to evolve — to grow beyond the limitations of the mind and awaken to the infinite consciousness that you truly are.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
            — Dr. Baffour Jan
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 sm:py-24"
        style={{
          background:
            'linear-gradient(135deg, #000B58 0%, #001485 50%, var(--color-primary) 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Get Involved
          </h2>
          <p
            className="text-base sm:text-lg mb-10 leading-relaxed"
            style={{ color: 'rgba(253,251,247,0.75)' }}
          >
            Whether you are drawn to the inner path of meditation or the outer path of service, there is a place for you in the Jan Cosmic Foundation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/donate" variant="secondary" size="lg">
              Support a Programme
            </Button>
            <Button href="/volunteer" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
