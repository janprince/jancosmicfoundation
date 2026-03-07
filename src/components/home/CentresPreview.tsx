import Link from 'next/link';
import { getCentres } from '@/lib/api';
import SectionHeader from '@/components/ui/SectionHeader';
import CentreCard from '@/components/cards/CentreCard';

export default function CentresPreview() {
  const centres = getCentres().slice(0, 4);

  return (
    <section className="bg-[#F2EFE9] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          label="Our Growing Presence"
          title="Find a Centre Near You"
          subtitle="A community of seekers who share a common intention: to explore truth, awaken consciousness, and live meaningful lives grounded in wisdom and compassion."
          className="mb-12"
        />

        {/* Centres grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centres.map((centre) => (
            <CentreCard key={centre.id} centre={centre} />
          ))}
        </div>

        {/* Summary bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-2xl border border-[#2D6A4F]/15 bg-white/70 px-8 py-6 backdrop-blur-sm">
          {[
            { value: '5+', label: 'Active Centres' },
            { value: '3+', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#000B58]">{stat.value}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-[#1a1a1a]/50 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}

          <div className="hidden sm:block h-8 w-px bg-[#2D6A4F]/20" aria-hidden="true" />

          <Link
            href="/centres"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#2D6A4F] px-6 py-2.5 text-sm font-semibold text-[#2D6A4F] transition-all duration-300 hover:bg-[#2D6A4F] hover:text-white hover:shadow-lg hover:shadow-[#2D6A4F]/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
          >
            View All Centres
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
