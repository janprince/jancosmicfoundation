import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { getTestimonials } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Testimonials — Stories of Transformation',
  description:
    'Hear from seekers, volunteers, and community members whose lives have been transformed through the teachings and programmes of the Jan Cosmic Foundation.',
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Stories of Transformation"
        subtitle="Hear from the seekers, volunteers, and community members whose lives have been touched by the Jan Cosmic Foundation."
      />

      {/* Featured Testimonial */}
      {testimonials.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="relative rounded-3xl p-8 sm:p-12"
              style={{
                background:
                  'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
              }}
            >
              {/* Large quote mark */}
              <svg
                className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 opacity-15"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="relative z-10">
                <blockquote className="text-lg sm:text-xl leading-relaxed text-white/90 italic mb-8">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                    style={{
                      backgroundColor: 'rgba(212,168,67,0.25)',
                      color: '#D4A843',
                      border: '2px solid rgba(212,168,67,0.5)',
                    }}
                  >
                    {testimonials[0].name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {testimonials[0].name}
                    </p>
                    <p className="text-sm" style={{ color: 'rgba(212,168,67,0.8)' }}>
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Testimonials Grid */}
      <section className="pb-16 sm:pb-24" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="In Their Words"
            title="What Our Community Says"
            subtitle="Every testimony is a reminder that the path of awakening is real, accessible, and transformative."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5"
                style={{ border: '1px solid rgba(0,11,88,0.06)' }}
              >
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 shrink-0"
                  style={{ color: 'rgba(212,168,67,0.4)' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote text */}
                <blockquote className="text-sm sm:text-base leading-relaxed italic flex-1" style={{ color: '#1a1a1acc' }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0 bg-gradient-to-br from-[#2D6A4F] to-[#D4A843] text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#000B58' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-xs" style={{ color: '#1a1a1a99' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl italic font-light leading-relaxed mb-4" style={{ color: '#000B58' }}>
            &ldquo;The proof of our spiritual journey is the genuine love that is revealed in us and among one another.&rdquo;
          </p>
          <p className="text-sm font-semibold" style={{ color: '#2D6A4F' }}>
            — Dr. Baffour Jan
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 sm:py-24"
        style={{
          background:
            'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Begin Your Own Journey
          </h2>
          <p
            className="text-base sm:text-lg mb-10 leading-relaxed"
            style={{ color: 'rgba(253,251,247,0.75)' }}
          >
            Every story of transformation began with a single step. Whether through our centres, retreats, or volunteer programmes — there is a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/join" variant="secondary" size="lg">
              Join a Centre
            </Button>
            <Button href="/volunteer" variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
