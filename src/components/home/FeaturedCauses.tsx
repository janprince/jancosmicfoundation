import Link from 'next/link';
import { getCauses } from '@/lib/api';
import CauseCard from '@/components/cards/CauseCard';

export default function FeaturedCauses() {
  const causes = getCauses().slice(0, 3);

  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            Support Our Work
          </p>
          <h2 className="text-3xl font-light leading-tight text-[#000B58] sm:text-4xl">
            Featured Causes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/55 font-light">
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
            className="text-sm font-medium text-[#2D6A4F] underline underline-offset-4 decoration-[#2D6A4F]/30 transition-colors duration-300 hover:decoration-[#2D6A4F]"
          >
            View all causes
          </Link>
        </div>
      </div>
    </section>
  );
}
