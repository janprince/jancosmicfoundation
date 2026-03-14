import Image from 'next/image';
import Link from 'next/link';

export default function AboutSnippet() {
  return (
    <section className="bg-[#FDFBF7] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Image */}
          <div className="w-full shrink-0 lg:w-[42%]">
            <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-[420px]">
              <Image
                src="/images/doc-potrait.jpg"
                alt="Dr. Baffour Jan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-[58%]">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
              Who We Are
            </p>

            <h2 className="text-3xl font-light leading-tight text-[#000B58] sm:text-4xl">
              Awakening the{' '}
              <span className="text-[#2D6A4F]">Divine Potential Within</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#1a1a1a]/60 font-light">
              Dr. Baffour Jan is a spiritual master, mystic, and teacher
              dedicated to guiding seekers toward deeper awareness of the self
              and the nature of consciousness. His teachings focus on awakening
              the divine potential within every human being and transcending the
              limiting identities of the mind.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]/60 font-light">
              Through the Jan Cosmic Foundation, he offers teachings, courses,
              retreats, and spiritual guidance designed to help individuals
              discover truth, silence the restless mind, and experience the
              deeper reality of spirit.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-medium text-[#2D6A4F] underline underline-offset-4 decoration-[#2D6A4F]/30 transition-colors duration-300 hover:decoration-[#2D6A4F]"
            >
              Learn more about the Foundation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
