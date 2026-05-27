import Link from 'next/link';
import { getCentres } from '@/lib/api';
import CentreCard from '@/components/cards/CentreCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function CentresPreview() {
  const centres = (await getCentres()).slice(0, 4);

  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="mb-14 text-center">
          <p className="eyebrow mb-4 text-[#8a6c1a]">Centres &amp; community</p>
          <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            Where we sit together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1c1a26]/75 sm:text-lg">
            From the home centre in Accra to communities across Ghana and the
            diaspora. Visit, sit, ask sincere questions, and meet the work in
            person.
          </p>
        </ScrollReveal>

        <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centres.map((centre) => (
            <CentreCard key={centre.id} centre={centre} />
          ))}
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="mt-14 text-center">
            <Link
              href="/centres"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-3 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Find a centre near you
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
