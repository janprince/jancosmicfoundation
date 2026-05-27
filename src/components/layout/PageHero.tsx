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
      className="grain-dark relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'clamp(300px, 34vw, 420px)' }}
    >
      {/* Cosmic twilight background: deep indigo → violet */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(150deg, #000B58 0%, #1a1b6b 48%, var(--color-violet) 100%)',
        }}
      />
      {/* Faint radial light, like dawn over the horizon */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 120%, rgba(212,168,67,0.20) 0%, transparent 60%)',
        }}
      />

      {/* Gold top stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: '#D4A843' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center py-16 sm:py-20">
        {/* Decorative accent */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          <span className="block w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
          <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
        </div>

        <h1 className="display text-[2.1rem] sm:text-5xl lg:text-[3.25rem] text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/85">
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
