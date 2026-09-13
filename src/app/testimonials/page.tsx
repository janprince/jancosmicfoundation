import type { Metadata } from 'next';
import Link from 'next/link';
import { ChatCircleText } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { getTestimonials } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Voices from the Community',
  description:
    'Reflections from Jan Cosmic Foundation students, volunteers, and community members on the teachings, service, centres, and inner path.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="bg-cream">
      <PageHero
        title="Voices from the Community"
        subtitle="Reflections from students, volunteers, centre members, and people serving with the Foundation."
      />

      {testimonials.length === 0 && (
        <section className="section">
          <div className="wrap py-10 text-center">
            <ChatCircleText size={48} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
            <h3 className="mb-2 text-3xl">No testimonies yet</h3>
            <p className="text-muted">We&rsquo;ll add reflections from students and volunteers as they come in.</p>
          </div>
        </section>
      )}

      {/* Featured */}
      {testimonials.length > 0 && (
        <section className="section">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <figure className="night stars overflow-hidden rounded-card p-8 sm:p-14">
              <span aria-hidden="true" className="block font-serif text-7xl leading-[0.6] text-gold">&ldquo;</span>
              <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed text-white sm:text-3xl">
                {testimonials[0].quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/50 font-serif text-2xl text-gold" aria-hidden="true">
                  {testimonials[0].name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-white">{testimonials[0].name}</span>
                  <span className="block text-sm text-[#F0DCA6]">{testimonials[0].role}</span>
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* All reflections */}
      {testimonials.length > 1 && (
        <section className="bg-cream pb-24">
          <div className="wrap">
            <SectionHeader
              label="In their words"
              title="Reflections from the community"
              subtitle="No reflection can replace direct experience. Still, another seeker's words can sometimes help us take the next honest step."
            />
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {testimonials.slice(1).map((testimonial) => (
                <figure key={testimonial.id} className="flex flex-col gap-5 rounded-card bg-white p-8">
                  <span aria-hidden="true" className="font-serif text-6xl leading-[0.6] text-gold">&ldquo;</span>
                  <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-ink/80">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-line pt-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sand font-serif text-lg text-navy" aria-hidden="true">
                      {testimonial.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy">{testimonial.name}</span>
                      <span className="block text-xs text-muted">{testimonial.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote */}
      <section className="section bg-sand">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="font-serif text-3xl italic leading-snug text-navy sm:text-4xl">
            &ldquo;The proof of our spiritual journey is the genuine love that is revealed in us and among one another.&rdquo;
          </p>
          <p className="eyebrow mt-6">Dr. Baffour Jan</p>
        </div>
      </section>

      {/* CTA */}
      <section className="night stars section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-4xl sm:text-5xl">Come and see for yourself</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            If these reflections speak to something in you, begin simply: join a gathering, visit a centre, or write to the Foundation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/community" variant="secondary" size="lg">Join the Community</Button>
            <Link href="/volunteer" className="button ghost button-lg">Volunteer With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
