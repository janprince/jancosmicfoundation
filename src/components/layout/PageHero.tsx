interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({
  title,
  subtitle,
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'clamp(280px, 32vw, 380px)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
