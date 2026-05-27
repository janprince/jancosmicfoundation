import Link from 'next/link';
import { HiOutlineSparkles, HiOutlineAcademicCap } from 'react-icons/hi2';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InnerSpaceSection() {
  return (
    <section className="bg-[#FDFBF7] py-24 lg:py-32">
      <ScrollReveal animation="fade-up" className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        {/* Kicker */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-4 py-1.5">
          <HiOutlineSparkles className="h-4 w-4 text-[#8a6c1a]" aria-hidden="true" />
          <span className="eyebrow text-[#8a6c1a]">The Deeper Work</span>
        </div>

        <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-5xl">
          When you are ready, go deeper
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1c1a26]/85 sm:text-lg">
          <strong className="font-semibold text-[#000B58]">InnerSpace</strong> is
          Dr. Baffour Jan&rsquo;s online study path for sincere seekers who want
          to explore consciousness, the Self, and inner freedom with guidance.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1c1a26]/65">
          Public teachings are an open door. InnerSpace gives the study a
          rhythm, a sequence, and a community of students walking inward.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/innerspace"
            className="inline-flex items-center gap-2 rounded-lg bg-[#000B58] px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#1a1b6b]"
          >
            <HiOutlineAcademicCap className="h-5 w-5" aria-hidden="true" />
            Explore InnerSpace
          </Link>
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
