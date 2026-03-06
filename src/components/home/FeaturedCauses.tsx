import Link from 'next/link';
import { getCauses } from '@/lib/api';
import SectionHeader from '@/components/ui/SectionHeader';
import CauseCard from '@/components/cards/CauseCard';

export default function FeaturedCauses() {
  const causes = getCauses().slice(0, 3);

  return (
    <section className="bg-[#F2EFE9] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          label="Support Our Work"
          title="Featured Causes"
          subtitle="Your generosity sustains the programmes that awaken consciousness and uplift communities. Choose a cause close to your heart."
          className="mb-12"
        />

        {/* Causes grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#2D6A4F] px-7 py-3 text-sm font-semibold text-[#2D6A4F] transition-all duration-300 hover:bg-[#2D6A4F] hover:text-white hover:shadow-lg hover:shadow-[#2D6A4F]/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
          >
            View All Causes
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
