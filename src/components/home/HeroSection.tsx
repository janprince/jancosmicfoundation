import Image from 'next/image';
import Link from 'next/link';

const featureCards = [
  {
    label: 'Mission',
    title: 'Elevating Consciousness',
    description: 'Guiding individuals towards their highest spiritual potential.',
    href: '/about/mission-vision',
    image: '/images/studentinmeditation.jpg',
  },
  {
    label: 'Service',
    title: 'Community Upliftment',
    description: 'Humanitarian projects transforming lives across 20+ countries.',
    href: '/donate',
    image: '/images/exercise.jpg',
  },
  {
    label: 'Centres',
    title: 'Global Presence',
    description: 'A network of 15+ centres fostering unity and spiritual growth.',
    href: '/centres',
    image: '/images/group-of-students.jpg',
  },
];

export default function HeroSection() {
  return (
    <section className="relative">
      {/* ── Main hero area ── */}
      <div className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">
        {/* Background image — clean, image-dominant */}
        <Image
          src="/images/teaching.jpg"
          alt="Dr. Baffour Jan teaching students"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay — heavier for centered text readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,11,88,0.70) 0%, rgba(0,11,88,0.55) 50%, rgba(0,11,88,0.75) 100%)',
          }}
        />

        {/* Centered hero content */}
        <div className="relative z-10 flex min-h-[85vh] md:min-h-[90vh] items-center justify-center">
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12 text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#D4A843]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A843]">
                Jan Cosmic Foundation
              </span>
              <span className="h-px w-8 bg-[#D4A843]" aria-hidden="true" />
            </div>

            {/* Main headline */}
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Transforming Lives Through{' '}
              <span className="text-[#D4A843]">Cosmic Service</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              A global spiritual organisation dedicated to inner transformation,
              holistic healing, and community upliftment — guided by the teachings
              of Dr. Baffour Jan across 20+ countries.
            </p>

            {/* Quote */}
            <div className="mx-auto mt-6 max-w-lg">
              <p className="text-sm italic leading-relaxed text-white/55 sm:text-base">
                &ldquo;The Jan Cosmic Foundation is an expression of divine will.&rdquo;
              </p>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-[#D4A843]/80">
                — Dr. Baffour Jan
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-lg bg-[#D4A843] px-8 py-3.5 text-sm font-bold text-[#000B58] transition-all duration-300 hover:bg-[#c49a38] hover:shadow-lg hover:shadow-[#D4A843]/30 active:scale-[0.97]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Donate Now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 active:scale-[0.97]"
              >
                Learn More
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {[
                { value: '38+', label: 'Years of Service' },
                { value: '20,000+', label: 'Lives Touched' },
                { value: '20+', label: 'Countries' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && (
                    <span className="h-8 w-px bg-white/15" aria-hidden="true" />
                  )}
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#D4A843]">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/25 p-1">
            <div
              className="h-2 w-1 animate-bounce rounded-full bg-white/50"
              style={{ animationDuration: '1.4s' }}
            />
          </div>
        </div>

        {/* Diagonal bottom clip */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: '80px',
            background: '#FDFBF7',
            clipPath: 'polygon(0 100%, 100% 40%, 100% 100%)',
          }}
        />
      </div>

      {/* ── Feature cards overlapping hero ── */}
      <div className="relative z-20 -mt-16 md:-mt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-5">
            {featureCards.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Card image */}
                <div className="relative h-56 sm:h-48 md:h-56">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,11,88,0.85) 0%, rgba(0,11,88,0.30) 50%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Card content — positioned at bottom over image */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-1.5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A843]">
                    {card.label}
                  </span>
                  <h3 className="text-lg font-bold leading-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/65">
                    {card.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#D4A843] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
