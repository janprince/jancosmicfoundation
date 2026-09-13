import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getPrograms } from '@/lib/api';

const categoryLabels: Record<string, string> = {
  spiritual: 'Spiritual Growth',
  education: 'Education & Youth',
  community: 'Community & Outreach',
  humanitarian: 'Humanitarian',
};

// A real sequence (external → internal → spiritual), so the numbering carries meaning.
const frameworkLevels = [
  {
    name: 'External',
    focus: 'Body, comfort, society, public life, and the pleasures that pass quickly.',
  },
  {
    name: 'Internal',
    focus: 'Mind, feeling, attention, private life, and the happiness that comes through inner refinement.',
  },
  {
    name: 'Spiritual',
    focus: 'Spirit, bliss, direct realization, pure awareness, and true freedom.',
  },
];

export const metadata: Metadata = {
  title: 'Our Programmes',
  description:
    'Programmes of Jan Cosmic Foundation: teachings, retreats, InnerSpace study, outreach teachers, healing and counselling, organic farms, children\'s work, media, and community.',
};

function ActiveMarker({ label }: { label: string }) {
  return (
    <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy">
      <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
      {label}
    </p>
  );
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  const spiritualPrograms = programs.filter((p) => p.category === 'spiritual');
  const otherPrograms = programs.filter((p) => p.category !== 'spiritual');

  return (
    <div className="bg-cream">
      <PageHero
        title="Programmes"
        subtitle="Different forms of one work: awakening, practice, and service."
      />

      {/* Framework */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-3xl">
            <SectionHeader
              label="The movement"
              title="External, internal, spiritual"
              subtitle="Dr. Jan often frames the path as a movement from pleasure, to happiness, to bliss. The programmes support that movement in practical ways."
              align="left"
            />
          </div>

          <ScrollReveal staggerChildren={0.12} className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {frameworkLevels.map((level, index) => (
              <div key={level.name} className={`border-t pt-8 ${index === 2 ? 'border-gold' : 'border-line'}`}>
                <p className="font-serif text-lg italic text-gold-ink">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-3xl">{level.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{level.focus}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Spiritual programmes */}
      {spiritualPrograms.length > 0 && (
        <section className="section bg-sand">
          <div className="wrap">
            <SectionHeader
              label="Inner work"
              title="Sittings, retreats, and structured study"
              subtitle="The core of the Foundation: study, stillness, inquiry, balanced-state practice, and direct experience."
            />

            <div className="mt-16 space-y-20 lg:space-y-28">
              {spiritualPrograms.map((program, index) => (
                <ScrollReveal key={program.id} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-card ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <p className="eyebrow">{categoryLabels[program.category]}</p>
                    <h3 className="mt-3 text-3xl leading-tight sm:text-4xl">{program.title}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-ink/75">{program.content}</p>
                    {program.isActive && <ActiveMarker label="Active programme" />}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service and outreach programmes */}
      {otherPrograms.length > 0 && (
        <section className="section">
          <div className="wrap">
            <SectionHeader
              label="Service and outreach"
              title="Where the teaching meets the world"
              subtitle="Outreach teachers, organisers, media, farms, children's work, and practical support. The same inner work expressed outwardly."
            />

            <ScrollReveal staggerChildren={0.08} className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {otherPrograms.map((program) => (
                <article key={program.id} className="group flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="eyebrow mt-6">{categoryLabels[program.category]}</p>
                  <h3 className="mt-2 text-2xl leading-snug">{program.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">{program.description}</p>
                  {program.isActive && <ActiveMarker label="Active" />}
                </article>
              ))}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-4xl sm:text-5xl">Take part in the work</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Support a programme, give your time, or join a centre. Choose the service that is sincere, useful, and sustainable.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/donate" variant="secondary" size="lg">
              Support a programme
            </Button>
            <Link href="/volunteer" className="button ghost button-lg">
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
