import Link from 'next/link';
import { getCauses } from '@/lib/api';
import CauseCard from '@/components/cards/CauseCard';

export default async function FeaturedCauses() {
  const causes = (await getCauses()).slice(0, 3);

  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            Support Our Work
          </p>
          <h2 className="text-3xl font-light leading-tight text-[#000B58] sm:text-4xl">
            Featured Causes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75">
            Your generosity sustains the programmes that awaken consciousness
            and uplift communities.
          </p>
        </div>

        {/* Causes grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#2D6A4F] px-8 py-3 text-sm font-medium text-[#2D6A4F] transition-all duration-300 hover:bg-[#2D6A4F] hover:text-white"
          >
            View All Causes
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
