import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';

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
    <div className="bg-cream">
      <PageHero
        title="Dr. Baffour Jan"
        subtitle="The Mystic and Teacher whose work points seekers toward direct inner realization."
      />

      {/* Introduction */}
      <section className="section">
        <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal animation="fade-in">
            <figure className="home-figure">
              <Image
                src="/images/doc-potrait.jpg"
                alt="Dr. Baffour Jan"
                width={4480}
                height={4480}
                className="aspect-[4/5] object-[50%_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeader label="The Mystic" title="A teacher of direct inner realization" align="left" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
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
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="night stars section">
        <ScrollReveal animation="fade-in" className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span aria-hidden="true" className="block font-serif text-7xl leading-none text-gold">&ldquo;</span>
          <p className="mt-2 font-serif text-3xl italic leading-snug text-white sm:text-4xl">
            The greatest magic is revealing the God in You.
          </p>
          <p className="eyebrow mt-6 !text-gold">Dr. Baffour Jan</p>
        </ScrollReveal>
      </section>

      {/* Teaching philosophy */}
      <section className="section bg-sand">
        <div className="wrap">
          <SectionHeader
            label="The Teachings"
            title="Four threads that run through the work"
            subtitle="These threads recur across the talks, retreats, public teachings, and InnerSpace study path."
          />
          <ScrollReveal staggerChildren={0.1} className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 sm:grid-cols-2">
            {teachings.map((teaching) => (
              <div key={teaching.title} className="border-t border-navy/15 pt-8">
                <h3 className="text-3xl">{teaching.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink/75">{teaching.description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-4xl sm:text-5xl">Sit with the teaching</h2>
          <p className="mt-5 font-serif text-xl italic text-[#F0DCA6]">
            &ldquo;The most useful knowledge is that which helps to dismantle the ego, in order to reveal the True Self.&rdquo;
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Explore the Foundation&rsquo;s programmes, or visit Dr. Jan&rsquo;s personal site for public talks, writing, and the InnerSpace course.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/programs" variant="secondary" size="lg">See the programmes</Button>
            <a href="https://drbaffourjan.com" target="_blank" rel="noopener noreferrer" className="button ghost button-lg">
              Visit drbaffourjan.com
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
