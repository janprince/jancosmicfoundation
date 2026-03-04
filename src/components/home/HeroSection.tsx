import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #000B58 0%, #001a80 50%, #000B58 100%)' }}
    >
      {/* Decorative blurred circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2D6A4F 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #D4A843 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full opacity-10 blur-2xl"
        style={{ background: 'radial-gradient(circle, #2D6A4F 0%, transparent 70%)' }}
      />

      {/* Gold top accent line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D4A843 40%, #D4A843 60%, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Eyebrow label */}
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A843]">
            Jan Cosmic Foundation
          </span>
          <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
        </div>

        {/* Main headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Transforming Lives Through{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(90deg, #D4A843, #f5c842)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Cosmic Service
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
          The Jan Cosmic Foundation is a global spiritual organisation dedicated
          to holistic healing, inner transformation, and community upliftment
          — guided by the teachings of Dr. Baffour Jan across 20+ countries.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#D4A843] bg-[#D4A843] px-8 py-3.5 text-base font-semibold text-[#000B58] transition-all duration-300 hover:bg-[#c49a38] hover:border-[#c49a38] hover:shadow-xl hover:shadow-[#D4A843]/25 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843] focus-visible:ring-offset-2 focus-visible:ring-offset-[#000B58]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Donate Now
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/70 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#000B58]"
          >
            Learn More
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

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10">
          {[
            { value: '38+', label: 'Years of Service' },
            { value: '20,000+', label: 'Lives Touched' },
            { value: '20+', label: 'Countries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-[#D4A843]">{stat.value}</p>
              <p className="text-xs text-white/55 uppercase tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <div
            className="h-2 w-1 animate-bounce rounded-full bg-white/50"
            style={{ animationDuration: '1.4s' }}
          />
        </div>
      </div>
    </section>
  );
}
