import Image from 'next/image';
import Link from 'next/link';

export default function AboutSnippet() {
  return (
    <section className="bg-[#FDFBF7] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image — left column on desktop */}
          <div className="w-full shrink-0 lg:w-[45%]">
            <div className="relative">
              {/* Main image block */}
              <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96 lg:h-[440px]">
                <Image
                  src="/images/doc-potrait.jpg"
                  alt="Dr. Baffour Jan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-[#D4A843] px-5 py-4 shadow-xl shadow-[#D4A843]/25 sm:-bottom-6 sm:-right-6">
                <p className="text-2xl font-extrabold text-[#000B58] leading-none">38+</p>
                <p className="mt-0.5 text-xs font-semibold text-[#000B58]/70 uppercase tracking-wider">
                  Years of Service
                </p>
              </div>

              {/* Subtle decorative ring */}
              <div
                className="pointer-events-none absolute -top-3 -left-3 h-24 w-24 rounded-full border-2 border-[#2D6A4F]/20"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Text content — right column on desktop */}
          <div className="w-full lg:w-[55%]">
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 rounded-full bg-[#D4A843]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A843]">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#000B58] sm:text-4xl lg:text-5xl">
              A Foundation Built on{' '}
              <span className="text-[#2D6A4F]">Love, Healing &amp; Purpose</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#1a1a1a]/65 sm:text-lg">
              Dr. Baffour Jan is a spiritual master, mystic and a teacher with a profound understanding of spirituality and the mysteries of the world. Through his wisdom and rare insights, he guides and counsels individuals on their spiritual journeys, imparting deep knowledge that transcends boundaries of different religions.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]/65">
              As the visionary founder of the Jan Cosmic Foundation (JCF), Dr. Baffour Jan has dedicated himself to promoting awareness of our true nature as spiritual beings. His foundation&apos;s mission is to guide individuals towards elevating their consciousness to its highest potential, fostering unity and oneness among all beings.
            </p>

            {/* Feature list */}
            <ul className="mt-8 space-y-3">
              {[
                'Holistic healing and spiritual education programmes',
                'Community outreach and humanitarian aid',
                'Global network of centres and dedicated volunteers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F]/15"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-3 w-3 text-[#2D6A4F]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-[#1a1a1a]/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA link */}
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#2D6A4F] bg-[#2D6A4F] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#245c43] hover:shadow-lg hover:shadow-[#2D6A4F]/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
              >
                Learn More About JCF
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
        </div>
      </div>
    </section>
  );
}
