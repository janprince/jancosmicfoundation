import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  /** Square portrait shown beneath the quote. */
  image?: string;
  className?: string;
}

/**
 * A dark, cinematic quote moment — indigo night-sky ground, a single
 * serif line, and gold light. Used to let a teaching breathe between
 * sections. Reusable across pages.
 */
export default function QuoteBlock({
  quote,
  author = 'Dr. Baffour Jan',
  role = 'Founder, Jan Cosmic Foundation',
  image = '/images/drjan-thinking.jpg',
  className = '',
}: QuoteBlockProps) {
  return (
    <section
      className={`grain-dark relative overflow-hidden py-24 lg:py-32 ${className}`}
      style={{ backgroundColor: '#000B58' }}
    >
      {/* Faint twilight light, low and centred */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(90% 70% at 50% 0%, rgba(91,75,158,0.45) 0%, transparent 60%)',
        }}
      />

      <ScrollReveal
        animation="fade-in"
        duration={1.1}
        className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8"
      >
        <span
          className="mx-auto mb-8 block h-px w-12 bg-[#D4A843]/60"
          aria-hidden="true"
        />

        <blockquote>
          <p className="display text-2xl leading-[1.32] text-white sm:text-3xl lg:text-[2.5rem] lg:leading-[1.3]">
            &ldquo;{quote}&rdquo;
          </p>

          <footer className="mt-10 flex flex-col items-center gap-4">
            {image && (
              <span className="block h-14 w-14 overflow-hidden rounded-full ring-1 ring-[#D4A843]/40">
                <Image
                  src={image}
                  alt={author}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </span>
            )}
            <span>
              <cite className="block text-sm font-medium not-italic tracking-wide text-[#D4A843]">
                {author}
              </cite>
              {role && (
                <span className="mt-0.5 block text-xs text-white/55">{role}</span>
              )}
            </span>
          </footer>
        </blockquote>
      </ScrollReveal>
    </section>
  );
}
