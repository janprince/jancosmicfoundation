import Link from 'next/link';
import { HiOutlineUserGroup } from 'react-icons/hi2';

const highlights = [
  'Flexible Commitment',
  'Volunteer Opportunities',
  'Training Provided',
  'Meaningful Impact',
];

export default function VolunteerCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: '#2D6A4F' }}
    >
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

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
          Get Involved
        </p>

        <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
          Volunteer With Us
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
          Whether you have an hour or a lifetime to give, your time and talents
          can help heal communities, support our programmes, and carry the light
          of cosmic service to those who need it most.
        </p>

        {/* Highlight tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/25 px-5 py-2 text-xs font-medium tracking-wide text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/volunteer"
          className="mt-10 inline-block rounded-sm border border-white/40 bg-white px-8 py-3.5 text-sm font-medium text-[#2D6A4F] transition-colors duration-300 hover:bg-white/90"
        >
          Become a Volunteer
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
