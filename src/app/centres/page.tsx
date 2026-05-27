import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CentreCard from '@/components/cards/CentreCard';
import { getCentres } from '@/lib/api';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Our Centres',
  description:
    'Jan Cosmic Foundation centres and communities offer sittings, study, outreach, healing and counselling support, service, and contact points for sincere seekers.',
};

export default async function CentresPage() {
  const centres = await getCentres();

  const stats = [
    { value: siteConfig.stats.centres, label: 'Centres & Communities' },
    { value: siteConfig.stats.countries, label: 'Countries' },
    { value: siteConfig.stats.lives, label: 'Lives' },
    { value: siteConfig.stats.yearsTeaching, label: 'Years of Service' },
  ];

  return (
    <>
      <PageHero
        title="Our Centres"
        subtitle="Places to sit, study, ask sincere questions, recharge, organise, and serve."
      />

      {/* Intro section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Where we sit"
              title="Active centres and communities"
              subtitle="Each centre or community is a local doorway into the teachings, gatherings, outreach, healing support, and service of the Foundation."
            />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl p-6"
                style={{ backgroundColor: '#F2EFE9' }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[#000B58]/70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Centres grid */}
          <SectionHeader
            label="Locations"
            title="Find a centre near you"
            subtitle="Choose a centre to read more, see contact details, or ask about joining a sitting or service activity."
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre) => (
              <CentreCard key={centre.id} centre={centre} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #000B58 0%, #1a1b6b 50%, var(--color-violet, #5B4B9E) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A843]" />
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          </div>

          <h2 className="display text-3xl sm:text-4xl text-white leading-tight">
            Visit a centre, or ask about helping one grow
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/90">
            If there is no centre near you and you feel called to host sincere
            seekers, organise locally, or support outreach in your city, write
            to us. We will listen and guide the next step carefully.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/community"
              variant="secondary"
              size="lg"
            >
              Join the Community
            </Button>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/35 px-8 py-4 text-lg font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
            >
              Start a Centre
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
