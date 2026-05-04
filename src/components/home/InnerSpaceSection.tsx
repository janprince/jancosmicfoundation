import Link from 'next/link';
import { HiOutlineSparkles, HiOutlineAcademicCap } from 'react-icons/hi2';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InnerSpaceSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <ScrollReveal animation="fade-up" className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        {/* Kicker */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-4 py-1.5">
          <HiOutlineSparkles className="h-4 w-4 text-[#8a6c1a]" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8a6c1a]">
            The Deeper Work
          </span>
        </div>

        <h2 className="text-3xl font-semibold leading-tight text-[#000B58] sm:text-4xl lg:text-5xl">
          For those ready to go further
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1a1a1a]/85 sm:text-lg">
          <strong className="font-semibold text-[#000B58]">InnerSpace</strong> is a
          structured course Dr. Baffour Jan created for sincere seekers who want
          to study the nature of consciousness, the self, and the path to inner
          freedom — in depth, in cohorts, with guidance.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/65">
          The public teachings on YouTube are an open door. InnerSpace is the
          room you walk into next.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://www.drbaffourjan.com/inner-space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#000B58] px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#001485]"
          >
            <HiOutlineAcademicCap className="h-5 w-5" aria-hidden="true" />
            Explore InnerSpace
            <span aria-hidden="true" className="text-white/60">↗</span>
          </a>
          <Link
            href="/teachings"
            className="inline-flex items-center gap-2 rounded-sm border border-[#000B58]/20 px-7 py-3 text-sm font-medium text-[#000B58] transition-colors duration-300 hover:bg-[#000B58]/5"
          >
            Browse public teachings
          </Link>
        </div>

        {/* Quiet bottom rule */}
        <div className="mx-auto mt-14 h-px w-12 bg-[#D4A843]/40" aria-hidden="true" />
      </ScrollReveal>
    </section>
  );
}
