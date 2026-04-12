import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/studentinmeditation.jpg', alt: 'Student in meditation' },
  { src: '/images/teaching.jpg', alt: 'Teaching session' },
  { src: '/images/group-of-students.jpg', alt: 'Community of seekers' },
  { src: '/images/masterseated.jpg', alt: 'Dr. Baffour Jan' },
  { src: '/images/students-sitting-down-on-grass.jpg', alt: 'Students outdoors' },
];

function HeartIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative min-h-screen overflow-hidden lg:min-h-0 lg:h-auto">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #000B58 0%, #001485 50%, var(--color-primary) 100%)',
          }}
        />

        {/* ── Desktop layout: text left, photo mosaic right ── */}
        <div className="relative z-10 mx-auto hidden max-w-7xl lg:flex lg:items-center lg:gap-12 lg:px-12 lg:py-36 xl:gap-16 xl:py-40">
          {/* Text column */}
          <div className="w-1/2 shrink-0">
            <p className="hero-animate hero-animate-1 mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#D4A843]">
              Jan Cosmic Foundation
            </p>

            <h1 className="hero-animate hero-animate-2 text-5xl font-semibold leading-[1.12] text-white xl:text-6xl">
              Revealing the{' '}
              <span className="text-[#D4A843]">God in You</span>
            </h1>

            <p className="hero-animate hero-animate-3 mt-7 max-w-lg text-lg leading-relaxed text-white/90">
              A global movement guiding individuals beyond the limits of
              identity, into direct self-realization, inner peace, and true
              freedom — through the teachings of Dr. Baffour Jan.
            </p>

            {/* <h1 className="text-5xl font-semibold leading-[1.12] text-white xl:text-6xl">
              Awakening Humanity to{' '}
              <span className="text-[#D4A843]">Self-Realization</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/90">
              A spiritual organisation dedicated to guiding individuals toward
              higher consciousness, inner freedom, and self-realization —
              through the teachings of Dr. Baffour Jan.
            </p> */}

            <blockquote className="hero-animate hero-animate-4 mt-8 border-l-2 border-[#D4A843]/30 pl-5">
              <p className="text-base italic leading-relaxed text-white/80">
                &ldquo;The Jan Cosmic Foundation is an expression of divine
                will.&rdquo;
              </p>
              <cite className="mt-2 block text-xs font-normal not-italic tracking-wide text-[#D4A843]/90">
                Dr. Baffour Jan
              </cite>
            </blockquote>

            <div className="hero-animate hero-animate-5 mt-10 flex items-center gap-4">
              <Link
                href="/about"
                className="rounded-sm border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Explore the Foundation
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-sm bg-[#D4A843] px-7 py-3 text-sm font-medium text-[#000B58] transition-colors duration-300 hover:bg-[#c49a38]"
              >
                <HeartIcon />
                Donate
              </Link>
            </div>
          </div>

          {/* Photo mosaic — 2-column asymmetric grid */}
          <div className="hero-mosaic-animate w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {/* Left column — 2 images stacked */}
              <div className="flex flex-col gap-3">
                <div className="relative h-52 overflow-hidden rounded-xl xl:h-60">
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    priority
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-xl xl:h-72">
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    priority
                  />
                </div>
              </div>

              {/* Right column — offset, 3 images */}
              <div className="flex flex-col gap-3 pt-8">
                <div className="relative h-48 overflow-hidden rounded-xl xl:h-56">
                  <Image
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    priority
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-xl xl:h-48">
                  <Image
                    src={galleryImages[3].src}
                    alt={galleryImages[3].alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                    priority
                  />
                </div>
                <div className="relative h-36 overflow-hidden rounded-xl xl:h-40">
                  <Image
                    src={galleryImages[4].src}
                    alt={galleryImages[4].alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile / Tablet layout ── */}
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-5 pt-24 pb-12 sm:px-8 lg:hidden">
          {/* Text content */}
          <div className="mx-auto w-full max-w-xl text-center">
            <p className="hero-animate hero-animate-1 mb-6 text-xs font-medium uppercase tracking-[0.25em] text-[#D4A843]">
              Jan Cosmic Foundation
            </p>

            <h1 className="hero-animate hero-animate-2 text-4xl font-semibold leading-[1.15] text-white sm:text-5xl">
              Revealing the{' '}
              <span className="text-[#D4A843]">God in You</span>
            </h1>

            <p className="hero-animate hero-animate-3 mx-auto mt-6 max-w-md text-base leading-relaxed text-white/90">
              A global movement guiding individuals beyond the limits of
              identity, into direct self-realization, inner peace, and true
              freedom — through the teachings of Dr. Baffour Jan.
            </p>

            {/* <h1 className="text-4xl font-semibold leading-[1.15] text-white sm:text-5xl">
              Awakening Humanity to{' '}
              <span className="text-[#D4A843]">Self-Realization</span>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/90">
              A spiritual organisation dedicated to guiding individuals toward
              higher consciousness, inner freedom, and self-realization —
              through the teachings of Dr. Baffour Jan.
            </p> */}

            <blockquote className="hero-animate hero-animate-4 mx-auto mt-8 max-w-sm border-t border-white/10 pt-6">
              <p className="text-sm italic leading-relaxed text-white/80">
                &ldquo;The Jan Cosmic Foundation is an expression of divine
                will.&rdquo;
              </p>
              <cite className="mt-2 block text-xs font-normal not-italic tracking-wide text-[#D4A843]/90">
                Dr. Baffour Jan
              </cite>
            </blockquote>

            <div className="hero-animate hero-animate-5 mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/about"
                className="rounded-sm border border-white/30 px-7 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
              >
                Explore the Foundation
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-sm bg-[#D4A843] px-7 py-3 text-sm font-medium text-[#000B58] transition-colors duration-300 hover:bg-[#c49a38]"
              >
                <HeartIcon />
                Donate
              </Link>
            </div>
          </div>

          {/* Mobile photo strip — horizontal row of rounded thumbnails */}
          <div className="mx-auto mt-10 flex w-full max-w-md items-end justify-center gap-2.5 sm:gap-3">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-lg"
                style={{
                  width: '23%',
                  height: i === 1 || i === 2 ? '88px' : '72px',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
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
