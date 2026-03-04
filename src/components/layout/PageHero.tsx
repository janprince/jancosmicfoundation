import Image from 'next/image';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'clamp(300px, 35vw, 400px)' }}
    >
      {/* Background layer */}
      {backgroundImage ? (
        <>
          {/* Image background */}
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Deep indigo overlay gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(0,11,88,0.85) 0%, rgba(0,11,88,0.65) 60%, rgba(45,106,79,0.50) 100%)',
            }}
          />
        </>
      ) : (
        /* Solid gradient when no image is provided */
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
          }}
        />
      )}

      {/* Decorative top edge stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: '#D4A843' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">

        {/* Decorative accent line above title */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span
            className="block h-px w-10 rounded-full"
            style={{ backgroundColor: 'rgba(212,168,67,0.5)' }}
          />
          <span
            className="block w-2 h-2 rounded-full"
            style={{ backgroundColor: '#D4A843' }}
          />
          <span
            className="block h-px w-10 rounded-full"
            style={{ backgroundColor: 'rgba(212,168,67,0.5)' }}
          />
        </div>

        {/* Page title */}
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.35)' }}
        >
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p
            className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(253,251,247,0.80)' }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative bottom line */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span
            className="block h-0.5 w-16 rounded-full"
            style={{ backgroundColor: '#D4A843' }}
          />
          <span
            className="block h-0.5 w-6 rounded-full"
            style={{ backgroundColor: 'rgba(212,168,67,0.45)' }}
          />
        </div>
      </div>

      {/* Subtle bottom fade to body background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(253,251,247,0.06))',
        }}
      />
    </section>
  );
}
