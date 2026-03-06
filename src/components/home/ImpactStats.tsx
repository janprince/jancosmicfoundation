'use client';

import Counter from '@/components/ui/Counter';

const stats = [
  {
    end: 38,
    suffix: '+',
    label: 'Years of Spiritual Teaching',
    description: 'Decades of guiding seekers toward self-realization',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    end: 20000,
    suffix: '+',
    label: 'Lives Transformed',
    description: 'Individuals awakened to higher consciousness and inner peace',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    end: 20,
    suffix: '+',
    label: 'Countries Reached',
    description: 'Communities learning to speak the cosmic language',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    end: 15,
    suffix: '+',
    label: 'Active Centres',
    description: 'Dedicated centres serving local communities worldwide',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

export default function ImpactStats() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: '#000B58' }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #2D6A4F, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #D4A843, transparent 70%)' }}
      />

      {/* Gold top decorative line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #D4A843 30%, #D4A843 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A843]">
              Our Impact
            </span>
            <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Decades of Inner Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 sm:text-lg">
            Every number represents a life awakened, a consciousness elevated,
            and a step closer to the unity of all beings.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#D4A843]/40 hover:bg-white/8"
            >
              {/* Gold corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-12 w-12 overflow-hidden rounded-tr-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div
                  className="absolute -top-6 -right-6 h-12 w-12 rotate-45 bg-[#D4A843]/20"
                />
              </div>

              {/* Icon */}
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A843]/10 text-[#D4A843] transition-all duration-300 group-hover:bg-[#D4A843]/20">
                {stat.icon}
              </div>

              {/* Animated counter */}
              <p className="text-4xl font-extrabold leading-none text-white sm:text-5xl">
                <Counter
                  end={stat.end}
                  suffix={stat.suffix}
                  duration={2200}
                  format={true}
                />
              </p>

              {/* Label */}
              <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-[#D4A843]">
                {stat.label}
              </p>

              {/* Description */}
              <p className="mt-2 text-xs leading-relaxed text-white/45">
                {stat.description}
              </p>

              {/* Bottom accent line */}
              <div
                aria-hidden="true"
                className="mx-auto mt-6 h-px w-12 rounded-full bg-[#D4A843]/30 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D4A843]/60"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gold bottom decorative line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #D4A843 30%, #D4A843 70%, transparent 100%)',
        }}
      />
    </section>
  );
}
