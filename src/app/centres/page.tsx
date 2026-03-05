import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CentreCard from '@/components/cards/CentreCard';
import { getCentres } from '@/lib/api';

export default function CentresPage() {
  const centres = getCentres();

  const stats = [
    { value: '15+', label: 'Active Centres' },
    { value: '5', label: 'Countries' },
    { value: '1,400+', label: 'Members Worldwide' },
    { value: '38+', label: 'Years of Service' },
  ];

  return (
    <>
      <PageHero
        title="Our Centres"
        subtitle="A growing global network of communities dedicated to spiritual practice, conscious living, and service to humanity."
        backgroundImage="/images/group-of-students2.jpg"
      />

      {/* Intro section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Global Presence"
              title="Where We Are"
              subtitle="From our founding home in Accra to diaspora communities in London, New York, and Toronto, the Jan Cosmic Foundation has established centres of practice and service on four continents. Each centre is a living expression of the JCF mission — a place where inner work and outer service meet."
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
          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A843]" />
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
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
