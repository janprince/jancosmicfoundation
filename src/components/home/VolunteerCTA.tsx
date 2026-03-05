import Link from 'next/link';

export default function VolunteerCTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Solid green gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #1a4d38 0%, #2D6A4F 40%, #245c43 100%)',
        }}
      />

      {/* Decorative blurred circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #52b788, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #000B58, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-2xl"
        style={{ background: 'radial-gradient(circle, #D4A843, transparent 70%)' }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-8 rounded-full bg-white/40" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
            Get Involved
          </span>
          <span className="h-px w-8 rounded-full bg-white/40" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
          Make a Difference —{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #D4A843, #f5c842)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Volunteer With Us
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Whether you have an hour or a lifetime to give, your time and talents
          can help heal communities, support our programmes, and carry the light
          of cosmic service to those who need it most.
        </p>

        {/* Feature pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {[
            'Flexible Commitment',
            'Global Opportunities',
            'Training Provided',
            'Meaningful Impact',
          ].map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-white px-8 py-4 text-base font-bold text-[#2D6A4F] transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-black/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D6A4F]"
          >
            Become a Volunteer
            <svg
              className="h-5 w-5"
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

        {/* Sub-note */}
        <p className="mt-4 text-xs text-white/45">
          Join thousands of volunteers making a difference around the world.
        </p>
      </div>
    </section>
  );
}
