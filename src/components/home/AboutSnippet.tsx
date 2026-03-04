import Link from 'next/link';

export default function AboutSnippet() {
  return (
    <section className="bg-[#FDFBF7] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image placeholder — left column on desktop */}
          <div className="w-full shrink-0 lg:w-[45%]">
            <div className="relative">
              {/* Main image block */}
              <div
                className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96 lg:h-[440px]"
                style={{
                  background:
                    'linear-gradient(145deg, #2D6A4F 0%, #000B58 60%, #1a2f6b 100%)',
                }}
                aria-hidden="true"
              >
                {/* Decorative inner pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 40%, #D4A843 0%, transparent 50%), radial-gradient(circle at 70% 70%, #2D6A4F 0%, transparent 50%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                  {/* Lotus / star SVG placeholder icon */}
                  <svg
                    className="h-16 w-16 text-[#D4A843]/60"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M32 4C32 4 28 16 16 20C16 20 26 22 32 32C38 22 48 20 48 20C36 16 32 4 32 4Z" opacity="0.9" />
                    <path d="M32 60C32 60 28 48 16 44C16 44 26 42 32 32C38 42 48 44 48 44C36 48 32 60 32 60Z" opacity="0.9" />
                    <path d="M4 32C4 32 16 28 20 16C20 16 22 26 32 32C22 38 20 48 20 48C16 36 4 32 4 32Z" opacity="0.9" />
                    <path d="M60 32C60 32 48 28 44 16C44 16 42 26 32 32C42 38 44 48 44 48C48 36 60 32 60 32Z" opacity="0.9" />
                    <circle cx="32" cy="32" r="6" opacity="0.8" />
                  </svg>
                  <p className="text-sm font-medium text-white/50 tracking-wide">
                    Jan Cosmic Foundation
                  </p>
                </div>
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
              The Jan Cosmic Foundation (JCF) is a global spiritual and humanitarian
              organisation founded by the visionary teacher <strong className="font-semibold text-[#000B58]">Dr. Baffour Jan</strong>.
              Over nearly four decades, JCF has been a beacon of hope — nurturing
              inner transformation, holistic health, and community empowerment across
              more than 20 countries.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#1a1a1a]/65">
              Through a network of 15+ active centres, regular retreats, healing
              programmes, and charitable initiatives, we walk alongside individuals
              on their journey toward wholeness — body, mind, and spirit.
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
