import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/studentinmeditation.jpg', alt: 'Student in meditation' },
  { src: '/images/teaching.jpg', alt: 'Teaching session' },
  { src: '/images/group-of-students.jpg', alt: 'Community of seekers' },
  { src: '/images/masterseated.jpg', alt: 'Dr. Baffour Jan' },
  { src: '/images/students-sitting-down-on-grass.jpg', alt: 'Students outdoors' },
];

function HeroCtas({ centered = false }: { centered?: boolean }) {
  return (
    <div
      className={[
        'hero-animate hero-animate-5 flex flex-col gap-4',
        centered ? 'items-center' : 'items-start',
      ].join(' ')}
    >
      <div className={['flex flex-col gap-3 sm:flex-row', centered ? 'sm:justify-center' : ''].join(' ')}>
        <Link
          href="#begin"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A843] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#000B58] transition-all duration-300 hover:bg-[#c49a38] hover:shadow-lg hover:shadow-[#D4A843]/30"
        >
          Begin Here
        </Link>
        <Link
          href="/teachings"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white/10"
        >
          Watch Teachings
        </Link>
      </div>
      <Link
        href="/donate"
        className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
      >
        or support the work
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="grain-dark relative min-h-screen overflow-hidden lg:min-h-0 lg:h-auto">
        {/* Cosmic twilight background */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(150deg, #000B58 0%, #1a1b6b 50%, var(--color-violet, #5B4B9E) 100%)',
          }}
        />
        {/* Dawn light rising from the horizon */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(110% 70% at 50% 118%, rgba(212,168,67,0.22) 0%, transparent 55%)',
          }}
        />

        {/* ── Desktop layout: text left, photo mosaic right ── */}
        <div className="relative z-10 mx-auto hidden max-w-7xl lg:flex lg:items-center lg:gap-12 lg:px-12 lg:py-36 xl:gap-16 xl:py-40">
          {/* Text column */}
          <div className="w-1/2 shrink-0">
            <p className="hero-animate hero-animate-1 eyebrow mb-6 text-[#D4A843]">
              Jan Cosmic Foundation
            </p>

            <h1 className="hero-animate hero-animate-2 display text-5xl text-white xl:text-6xl">
              A Path of{' '}
              <span className="italic text-[#D4A843]">Freedom and Awareness</span>
            </h1>

            <p className="hero-animate hero-animate-3 mt-7 max-w-lg text-lg leading-relaxed text-white/85">
                A living spiritual foundation guiding sincere seekers
                toward inner freedom, self-realization, and conscious living
                through the teachings of Dr. Baffour Jan.
            </p>

            <blockquote className="hero-animate hero-animate-4 mt-8 border-l border-[#D4A843]/40 pl-5">
              <p className="font-serif text-base italic leading-relaxed text-white/80">
                &ldquo;Freedom. Awake and aware.&rdquo;
              </p>
              <cite className="mt-2 block text-xs not-italic tracking-wide text-[#D4A843]/90">
                Dr. Baffour Jan
              </cite>
            </blockquote>

            <div className="mt-10">
              <HeroCtas />
            </div>
          </div>

          {/* Photo mosaic — 2-column asymmetric grid */}
          <div className="hero-mosaic-animate w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {/* Left column — 2 images stacked */}
              <div className="flex flex-col gap-3">
                <div className="hero-mosaic-item relative h-52 overflow-hidden rounded-xl xl:h-60">
                  <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill className="object-cover" sizes="25vw" priority />
                </div>
                <div className="hero-mosaic-item relative h-64 overflow-hidden rounded-xl xl:h-72">
                  <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill className="object-cover" sizes="25vw" priority />
                </div>
              </div>

              {/* Right column — offset, 3 images */}
              <div className="flex flex-col gap-3 pt-8">
                <div className="hero-mosaic-item relative h-48 overflow-hidden rounded-xl xl:h-56">
                  <Image src={galleryImages[2].src} alt={galleryImages[2].alt} fill className="object-cover" sizes="25vw" priority />
                </div>
                <div className="hero-mosaic-item relative h-40 overflow-hidden rounded-xl xl:h-48">
                  <Image src={galleryImages[3].src} alt={galleryImages[3].alt} fill className="object-cover" sizes="25vw" priority />
                </div>
                <div className="hero-mosaic-item relative h-36 overflow-hidden rounded-xl xl:h-40">
                  <Image src={galleryImages[4].src} alt={galleryImages[4].alt} fill className="object-cover" sizes="25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile / Tablet layout ── */}
        <div className="relative z-10 flex min-h-screen flex-col justify-center px-5 pt-24 pb-12 sm:px-8 lg:hidden">
          <div className="mx-auto w-full max-w-xl text-center">
            <p className="hero-animate hero-animate-1 eyebrow mb-6 text-[#D4A843]">
              Jan Cosmic Foundation
            </p>

            <h1 className="hero-animate hero-animate-2 display text-[2.6rem] text-white sm:text-5xl">
              A Path of{' '}
              <span className="italic text-[#D4A843]">Freedom and Awareness</span>
            </h1>

            <p className="hero-animate hero-animate-3 mx-auto mt-6 max-w-md text-base leading-relaxed text-white/85">
              Teachings, practice, and service for sincere seekers ready to turn
              inward, become awake and aware, and let self-realization shape
              everyday life.
            </p>

            <blockquote className="hero-animate hero-animate-4 mx-auto mt-8 max-w-sm border-t border-white/10 pt-6">
              <p className="font-serif text-sm italic leading-relaxed text-white/80">
                &ldquo;Freedom. Awake and aware.&rdquo;
              </p>
              <cite className="mt-2 block text-xs not-italic tracking-wide text-[#D4A843]/90">
                Dr. Baffour Jan
              </cite>
            </blockquote>

            <div className="mt-8">
              <HeroCtas centered />
            </div>
          </div>

          {/* Mobile photo strip */}
          <div className="mx-auto mt-10 grid w-full max-w-md grid-cols-4 items-end gap-2.5 sm:gap-3">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-lg"
                style={{ height: i === 1 || i === 2 ? '88px' : '72px' }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-white/40" style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
