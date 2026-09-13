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
 * A dark quote moment — indigo night sky with faint stars, a single
 * serif line, and gold light. Used to let a teaching breathe between
 * sections. Reusable across pages.
 */
export default function QuoteBlock({
  quote,
  author = 'Dr. Baffour Jan',
  role = 'The Teacher, Jan Cosmic Foundation',
  image = '/images/drjan-thinking.jpg',
  className = '',
}: QuoteBlockProps) {
  return (
    <section className={`night stars section ${className}`}>
      <ScrollReveal animation="fade-in" duration={1.1} className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <span aria-hidden="true" className="block font-serif text-7xl leading-none text-gold">&ldquo;</span>
        <blockquote>
          <p className="mt-2 font-serif text-3xl leading-[1.3] text-white sm:text-4xl lg:text-[2.6rem]">
            {quote}
          </p>
          <footer className="mt-10 flex flex-col items-center gap-4">
            {image && (
              <span className="block h-14 w-14 overflow-hidden rounded-full ring-1 ring-gold/40">
                <Image src={image} alt={author} width={56} height={56} className="h-full w-full object-cover" />
              </span>
            )}
            <span>
              <cite className="block text-sm font-medium not-italic tracking-wide text-gold">{author}</cite>
              {role && <span className="mt-0.5 block text-xs text-white/55">{role}</span>}
            </span>
          </footer>
        </blockquote>
      </ScrollReveal>
    </section>
  );
}
