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
            'linear-gradient(135deg, #000B58 0%, #001485 50%, var(--color-primary) 100%)',
        }}
      />

      {/* Gold top stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: '#D4A843' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-16 sm:py-20">
        {/* Decorative accent */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          <span className="block w-2 h-2 rounded-full bg-[#D4A843]" />
          <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}

        {/* Decorative bottom line */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <span className="block h-0.5 w-16 rounded-full bg-[#D4A843]" />
          <span className="block h-0.5 w-6 rounded-full bg-[#D4A843]/45" />
        </div>
      </div>
    </section>
  );
}
