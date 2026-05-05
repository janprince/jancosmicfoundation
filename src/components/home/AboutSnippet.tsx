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
              A teaching home, made{' '}
              <span className="text-primary">formal in 2021.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#1a1a1a]/80">
              The Foundation is the formal home of nearly four decades of
              teaching by Dr. Baffour Jan. Headquartered in Kwabenya, Accra, we
              run weekly sittings, annual retreats at the San Bra Enlightenment
              Centre, the InnerSpace course for committed students, and a small
              set of community programmes — youth education, medical outreach,
              and the developing Spiritual Village in Kwahu.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]/80">
              The work is the same work Dr. Jan has been doing for a long time.
              The Foundation is what makes it sustainable.
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
