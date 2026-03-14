import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative min-h-[90vh] overflow-hidden">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-5 pt-24 pb-20 sm:px-8">
          <div className="mx-auto w-full max-w-3xl text-center">
            {/* Eyebrow */}
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.25em] text-[#D4A843]/80">
              Jan Cosmic Foundation
            </p>

            {/* Main headline */}
            <h1 className="text-4xl font-light leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Awakening Humanity to{' '}
              <em className="font-normal italic text-[#D4A843]">
                Self-Realization
              </em>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg font-light">
              A spiritual organisation dedicated to guiding individuals toward
              higher consciousness, inner freedom, and self-realization —
              through the teachings of Dr. Baffour Jan.
            </p>

            {/* Quote */}
            <blockquote className="mx-auto mt-10 max-w-md border-t border-white/10 pt-8">
              <p className="text-sm italic leading-relaxed text-white/50 sm:text-base font-light">
                &ldquo;The Jan Cosmic Foundation is an expression of divine
                will.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-normal not-italic tracking-wide text-[#D4A843]/70">
                Dr. Baffour Jan
              </cite>
            </blockquote>

            {/* CTAs */}
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/about"
                className="rounded-sm border border-white/30 px-8 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Explore the Foundation
              </Link>
              <Link
                href="/donate"
                className="rounded-sm bg-[#D4A843] px-8 py-3 text-sm font-medium text-[#000B58] transition-colors duration-300 hover:bg-[#c49a38]"
              >
                Support Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
            <div
              className="h-1.5 w-1 animate-bounce rounded-full bg-white/40"
              style={{ animationDuration: '2s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
