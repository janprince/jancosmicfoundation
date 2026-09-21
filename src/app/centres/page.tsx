import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import CentreCard from '@/components/cards/CentreCard';
import { getCentres } from '@/lib/api';

export const metadata: Metadata = pageMetadata('/centres', {
  title: 'Our Centres',
  description:
    'Jan Cosmic Foundation centres and communities offer sittings, study, outreach, healing and counselling support, service, and contact points for sincere seekers.',
});

export default async function CentresPage() {
  const centres = await getCentres();

  // Counts come from the centres actually listed, never from hard-coded headline numbers.
  const countryCount = new Set(centres.map((centre) => centre.country)).size;
  const stats = [
    { value: centres.length, label: centres.length === 1 ? 'Centre or community' : 'Centres & communities' },
    { value: countryCount, label: countryCount === 1 ? 'Country' : 'Countries' },
  ];

  return (
    <>
      <PageHero
        title="Our Centres"
        subtitle="Places to sit, study, ask sincere questions, recharge, organise, and serve."
      />

      <section className="section bg-cream">
        <div className="wrap">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <SectionHeader
              label="Where we sit"
              title="Active centres and communities"
              subtitle="Each centre or community is a local doorway into the teachings, gatherings, outreach, healing support, and service of the Foundation."
              align="left"
            />
            {centres.length > 0 && (
              <dl className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t border-gold pt-5">
                    <dd className="font-serif text-6xl leading-none text-navy">{stat.value}</dd>
                    <dt className="mt-3 text-sm text-muted">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="mt-20">
            <SectionHeader
              label="Locations"
              title="Find a centre near you"
              subtitle="Choose a centre to read more, see contact details, or ask about joining a sitting or service activity."
              className="mb-12"
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {centres.map((centre) => (
                <CentreCard key={centre.id} centre={centre} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-4xl leading-tight sm:text-5xl">Visit a centre, or ask about helping one grow</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            If there is no centre near you and you feel called to host sincere
            seekers, organise locally, or support outreach in your city, write
            to us. We will listen and guide the next step carefully.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/community" variant="secondary" size="lg">Join the Community</Button>
            <Link href="/contact" className="button ghost button-lg">Start a Centre</Link>
          </div>
        </div>
      </section>
    </>
  );
}
