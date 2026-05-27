import Link from 'next/link';
import { getCauses } from '@/lib/api';
import CauseCard from '@/components/cards/CauseCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TrustSignals from '@/components/ui/TrustSignals';

export default async function FeaturedCauses() {
  const causes = (await getCauses()).slice(0, 3);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="mb-14 text-center">
          <p className="eyebrow mb-4 text-[#8a6c1a]">Support the work</p>
          <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            Help carry the teachings forward
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1c1a26]/75 sm:text-lg">
            The Foundation is sustained by people who believe this work matters.
            Here is some of what your support makes possible right now.
          </p>
        </ScrollReveal>

        {/* Causes grid */}
        <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#1f1f57] hover:shadow-lg hover:shadow-primary/25"
            >
              See all the ways to give
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Quiet reassurance at the moment of giving */}
        <ScrollReveal animation="fade-up" delay={0.15} className="mt-16">
          <div className="mx-auto max-w-4xl border-t border-black/8 pt-10">
            <TrustSignals />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
