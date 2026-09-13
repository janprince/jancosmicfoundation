import type { Metadata } from 'next';
import { FilmSlate, HandHeart, Plant, Student } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import CauseCard from '@/components/cards/CauseCard';
import { getCauses } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Jan Cosmic Foundation. Donations help sustain teachings, outreach, media, organic farms, children\'s work, centres, and the developing JCF Village.',
};

const impactItems = [
  {
    Icon: Plant,
    title: 'JCF Village & organic farms',
    description: 'A peaceful place for retreat, organic food, herbal gardens, practice, and community life.',
  },
  {
    Icon: FilmSlate,
    title: 'Media and outreach',
    description: 'Filming, interviewing, editing, and publishing Dr. Jan\'s talks so seekers can meet the teachings wherever they are.',
  },
  {
    Icon: Student,
    title: 'Guide the Children',
    description: 'Mentorship and simple awareness practices that help young people grow with presence, responsibility, and inner clarity.',
  },
];

const tiers = [
  { amount: 'GH₵50', impact: 'Provides educational materials for one child in the Guide the Children programme' },
  { amount: 'GH₵200', impact: 'Funds organic inputs for JCF farm work' },
  { amount: 'GH₵500', impact: 'Supports production of one teaching session for the Media & Digital Outreach programme' },
];

export default async function DonatePage() {
  const causes = await getCauses();

  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Support the teachings, outreach, media, farms, children's work, centres, and long-term home of the Foundation."
      />

      {/* Where it goes */}
      <section className="section bg-cream">
        <div className="wrap">
          <SectionHeader
            label="Where it goes"
            title="What your contribution funds"
            subtitle="Your support helps keep the teachings reachable, the programmes active, and the work grounded in service."
          />
          <ScrollReveal staggerChildren={0.1} className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {impactItems.map(({ Icon, title, description }) => (
              <div key={title} className="border-t border-line pt-8">
                <Icon size={34} weight="light" className="icon-mark" aria-hidden="true" />
                <h3 className="text-2xl leading-snug">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Causes */}
      <section className="section bg-sand">
        <div className="wrap">
          <SectionHeader
            label="Active causes"
            title="Choose where to give"
            subtitle="Support a specific cause, or give to the Foundation directly so resources can go where the work needs them most."
            className="mb-12"
          />
          {causes.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {causes.map((cause) => (
                <CauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <HandHeart size={48} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
              <h3 className="mb-2 text-3xl">No active causes yet</h3>
              <p className="text-muted">Check back soon for new causes to support.</p>
            </div>
          )}
        </div>
      </section>

      {/* Give to the whole work */}
      <section className="night stars section">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-4xl leading-tight sm:text-5xl">Or give to the whole work</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            If you would rather not choose a specific cause, give to the
            Foundation directly. Your contribution will support the area of the
            work that needs it most: teaching, outreach, farms, media, centres,
            or care for children.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.amount} className="rounded-card border border-white/15 bg-white/[0.05] p-6">
                <p className="font-serif text-4xl text-gold">{tier.amount}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{tier.impact}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-white/65">
            Payments are processed securely via Paystack. A receipt is sent to your email.
          </p>
        </div>
      </section>
    </>
  );
}
