import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Eye, Globe, HandHeart, HeartStraight } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { getTeamMembers } from '@/lib/api';

const coreValues = [
  {
    Icon: HeartStraight,
    title: 'Compassion',
    description:
      'Dr. Jan teaches that concern, love, and compassion are not decoration. They are how inner realization begins to report itself in ordinary life.',
  },
  {
    Icon: Globe,
    title: 'Unity',
    description:
      'The logo points to a global village: many faces, one reality. Community is where that understanding is practised.',
  },
  {
    Icon: HandHeart,
    title: 'Service',
    description:
      'Service may be direct or indirect, full-time or part-time. What matters is that the inner work becomes useful to evolution.',
  },
  {
    Icon: Eye,
    title: 'Wisdom',
    description:
      'True wisdom is not information collected by the mind. It is lived knowledge that loosens ego and reveals the Self.',
  },
];

export const metadata: Metadata = {
  title: 'About the Foundation',
  description:
    'Learn about Jan Cosmic Foundation, a spiritual home for the teachings of Dr. Baffour Jan and the work of self-realization through practice and service.',
};

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();
  return (
    <div className="bg-cream">
      <PageHero
        title="About the Foundation"
        subtitle="A spiritual home for teachings, practice, and service that help sincere seekers move toward self-realization."
      />

      {/* Foundation story */}
      <section className="section">
        <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <SectionHeader label="Our Story" title="A living home for the teachings." align="left" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Jan Cosmic Foundation was established in 2021 to give a living home to the teachings of Dr. Baffour Jan. In the words carried through his teaching, its mission is to teach and inspire all to evolve rapidly toward self-realization.
              </p>
              <p>
                The work is not about adding another identity. It is about becoming free from false identity and waking to the Spirit within. Dr. Jan&rsquo;s teachings return to consciousness, the soul, God, the mind, the body, illusion, suffering, and the possibility of inner freedom.
              </p>
              <p>
                In practice this takes the form of teachings, retreats, sittings, InnerSpace study, outreach teachers, healing and counselling, media, organic farms, children&rsquo;s work, centres, and service. JCF is not only an organisation. It is a movement of awakening and service for people willing to study sincerely, practise honestly, and let understanding become life.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-in" delay={0.1}>
            <figure className="home-figure">
              <Image
                src="/images/doc-jcf.jpg"
                alt="Dr. Baffour Jan at JCF training programme"
                width={1120}
                height={630}
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* Spiritual framework */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label="How the path is understood"
            title="External, internal, spiritual"
            subtitle="Dr. Jan often frames the journey as a movement from external living, into inner refinement, and then into spiritual realization."
            light
          />
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            The external level concerns the body, comfort, pleasure, and public
            life. The internal level concerns the mind, feeling, happiness, and
            private refinement. The spiritual level concerns Spirit, bliss,
            awareness, and direct realization. JCF exists to support this
            movement with teaching, practice, service, and community.
          </p>
        </div>
      </section>

      {/* Connection to Dr. Jan */}
      <section className="section bg-sand">
        <div className="wrap grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal animation="fade-in">
            <figure className="home-figure">
              <Image
                src="/images/drjan-thinking.jpg"
                alt="Dr. Baffour Jan standing in reflection during a session"
                width={3420}
                height={2280}
                className="aspect-[4/3]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeader label="The Mystic" title="About Dr. Baffour Jan" align="left" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Dr. Baffour Jan is a mystic, spiritual master, and teacher. His work points beyond belief, ritual, and intellectual knowledge toward the direct recognition of who one is beneath the layers of mind and identity.
              </p>
              <p>
                His teaching is offered through the Foundation as public talks, sittings, retreats, structured study, and practical service. The aim is not to collect spiritual ideas, but to become still enough to see clearly and live from that seeing.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-snug text-navy">
              &ldquo;The most worthy knowledge is that which helps to dismantle the Ego in order to reveal the True Self.&rdquo;
            </blockquote>
            <div className="actions">
              <Button href="/about/founder">Read about Dr. Jan</Button>
              <a href="https://drbaffourjan.com" target="_blank" rel="noopener noreferrer" className="button outline">
                Visit drbaffourjan.com
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section">
        <div className="wrap">
          <SectionHeader
            label="What guides the work"
            title="Values that keep the work grounded"
            subtitle="Not slogans. These are the qualities the Foundation returns to as teachings become practice, community, and service."
          />
          <ScrollReveal staggerChildren={0.1} className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map(({ Icon, title, description }) => (
              <div key={title} className="border-t border-line pt-8">
                <Icon size={34} weight="light" className="icon-mark" aria-hidden="true" />
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      {teamMembers.length > 0 && (
        <section className="section bg-sand">
          <div className="wrap">
            <SectionHeader
              label="The People"
              title="Who runs the Foundation"
              subtitle="The people who help hold the day-to-day work: teachings, retreats, outreach, media, centres, farms, and service."
            />
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <article key={member.id} className="overflow-hidden rounded-card bg-white">
                  {member.name === 'Dr. Baffour Jan' ? (
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src="/images/doc-potrait.jpg"
                        alt="Dr. Baffour Jan"
                        fill
                        className="object-cover object-[50%_30%]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="grid h-56 place-items-center bg-cream" aria-hidden="true">
                      <span className="font-serif text-7xl text-navy/60">{member.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl">{member.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gold-ink">{member.role}</p>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">{member.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-4xl sm:text-5xl">Mission &amp; Vision</h2>
          <p className="mt-5 font-serif text-xl italic text-[#F0DCA6]">
            &ldquo;The greatest wealth is contentment, and one only becomes truly content through self-realisation.&rdquo;
          </p>
          <p className="mt-5 text-lg text-white/80">
            The purpose behind the Foundation, and the way that purpose becomes teaching, practice, and service.
          </p>
          <div className="mt-10">
            <Button href="/about/mission-vision" variant="secondary" size="lg">
              Read the mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
