import Link from 'next/link';
import { getCentres } from '@/lib/api';
import CentreCard from '@/components/cards/CentreCard';

export default function CentresPreview() {
  const centres = getCentres().slice(0, 4);

  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            Our Growing Presence
          </p>
          <h2 className="text-3xl font-light leading-tight text-[#000B58] sm:text-4xl">
            Find a Centre Near You
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/55 font-light">
            A community of seekers united in the pursuit of truth, conscious
            living, and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {centres.map((centre) => (
            <CentreCard key={centre.id} centre={centre} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/centres"
            className="text-sm font-medium text-[#2D6A4F] underline underline-offset-4 decoration-[#2D6A4F]/30 transition-colors duration-300 hover:decoration-[#2D6A4F]"
          >
            View all centres
          </Link>
        </div>
      </div>
    </section>
  );
}
