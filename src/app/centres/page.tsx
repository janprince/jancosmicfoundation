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
    'JCF centres run regular sittings, host visiting teachers, and organise local service work. From our home in Accra to communities across Ghana and beyond.',
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
        subtitle="From our home in Accra to centres across Ghana and beyond. Visit, sit, ask questions."
      />

      {/* Intro section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Where We Are"
              title="Active centres &amp; communities"
              subtitle="Each centre runs regular sittings, hosts visiting teachers, and organises local service work. Find the one nearest you below."
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
            label="Find a Centre"
            title="Locations"
            subtitle="Tap any centre to read more, see contact details, or join."
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
          background: 'linear-gradient(135deg, #000B58 0%, #001485 50%, var(--color-primary) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A843]" />
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Visit a centre, or start one.
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/90">
            If there&rsquo;s no centre near you and you&rsquo;d like to host
            sittings in your city, write to us. We&rsquo;ve done it more than
            once and we&rsquo;ll help.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/community"
              variant="secondary"
              size="lg"
            >
              Join the Community
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#000B58]"
            >
              Start a Centre
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
