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
            <p className="eyebrow mb-4 text-[#8a6c1a]">About the Foundation</p>

            <h2 className="display text-[2rem] leading-[1.14] text-[#000B58] sm:text-4xl lg:text-[2.6rem]">
              A living movement of{' '}
              <span className="italic text-primary">awakening and service</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#1c1a26]/80 sm:text-lg">
              Jan Cosmic Foundation carries the teachings of Dr. Baffour Jan,
              a Ghanaian mystic and spiritual teacher whose work points seekers
              beyond belief, ritual, and accumulated knowledge into direct inner
              realization. Its stated mission is to teach and inspire all to
              evolve rapidly toward self-realization.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#1c1a26]/75">
              Based in Ghana and open to the world, the work takes shape through
              teachings, sittings, outreach teachers, healing and counselling,
              media, organic farms, children&rsquo;s work, and practical service.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary underline decoration-primary/30 underline-offset-4 transition-colors duration-300 hover:decoration-primary"
            >
              Read the fuller story
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
