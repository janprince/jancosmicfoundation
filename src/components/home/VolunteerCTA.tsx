import Link from 'next/link';

export default function VolunteerCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: '#2D6A4F' }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Get Involved
        </p>

        <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
          Volunteer With Us
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 font-light">
          Whether you have an hour or a lifetime to give, your time and talents
          can help heal communities, support our programmes, and carry the light
          of cosmic service to those who need it most.
        </p>

        <Link
          href="/volunteer"
          className="mt-10 inline-block rounded-sm border border-white/40 bg-white px-8 py-3.5 text-sm font-medium text-[#2D6A4F] transition-colors duration-300 hover:bg-white/90"
        >
          Become a Volunteer
        </Link>
      </div>
    </section>
  );
}
