import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSnippet() {
  return (
    <section className="bg-[#FDFBF7] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image */}
          <ScrollReveal animation="fade-right" className="w-full shrink-0 lg:w-[42%]">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-[420px]">
              <Image
                src="/images/masterseated4.jpg"
                alt="Dr. Baffour Jan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal animation="fade-left" delay={0.15} className="w-full lg:w-[58%]">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8a6c1a]">
              About the Foundation
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#000B58] sm:text-4xl">
              A living movement of{' '}
              <span className="text-primary">awakening and service.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#1a1a1a]/80">
              Jan Cosmic Foundation carries the teachings of Dr. Baffour Jan,
              a Ghanaian mystic and spiritual teacher whose work points seekers
              beyond belief, ritual, and accumulated knowledge into direct inner
              realization. Based in Ghana, the Foundation welcomes sincere
              seekers from every background.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]/80">
              Through teachings, retreats, courses, gatherings, media, and
              service, JCF supports the inner evolution of people who feel called
              to understand life more deeply and live from the truth of who they
              are.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              Read more
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
