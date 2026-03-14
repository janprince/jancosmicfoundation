import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CentreCard from '@/components/cards/CentreCard';
import { getCentres } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Our Centres',
  description:
    'A growing network of Jan Cosmic Foundation centres dedicated to spiritual practice, conscious living, and service to humanity across Ghana and beyond.',
};

export default function CentresPage() {
  const centres = getCentres();

  const stats = [
    { value: '7+', label: 'Active Centres' },
    { value: '3+', label: 'Countries' },
    { value: '1,400+', label: 'Members Worldwide' },
    { value: '38+', label: 'Years of Service' },
  ];

  return (
    <>
      <PageHero
        title="Our Centres"
        subtitle="A growing network of communities dedicated to spiritual practice, conscious living, and service to humanity."
      />

      {/* Intro section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Our Growing Presence"
              title="Where We Are"
              subtitle="From our founding home in Accra, the Jan Cosmic Foundation is steadily expanding its reach — establishing centres of practice and service where inner work and outer service meet."
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
                <p className="text-3xl sm:text-4xl font-bold text-[#2D6A4F]">
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
            title="Our Locations"
            subtitle="Each JCF centre offers regular meditation sessions, community programmes, and opportunities for service. Find the one nearest to you."
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
          background: 'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            Ready to Connect?
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/75">
            Join an existing centre near you, or reach out if you are interested
            in establishing a JCF presence in your community. We welcome all
            sincere seekers.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/centres#find-a-centre"
              variant="secondary"
              size="lg"
            >
              Join a Centre
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
