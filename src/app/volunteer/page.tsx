import type { Metadata } from 'next';
import { Clock, Compass, HandHeart, MapPin, Plant, UsersThree } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import VolunteerForm from '@/components/forms/VolunteerForm';
import { getVolunteerOpportunities, getTestimonials } from '@/lib/api';

const benefits = [
  {
    Icon: Plant,
    title: 'Real, hands-on work',
    description:
      'Your time supports the visible work: teachings, outreach, centres, farms, media, children\'s work, and practical care.',
  },
  {
    Icon: UsersThree,
    title: 'A community to work alongside',
    description:
      'Volunteering places you beside students and supporters learning to let inner work become useful in daily life.',
  },
  {
    Icon: HandHeart,
    title: 'Service as practice',
    description:
      'Dr. Jan teaches service as part of evolution. It asks for attention, humility, patience, and love in practical form.',
  },
  {
    Icon: Compass,
    title: 'Guidance, where it helps',
    description:
      'You will be guided toward service that fits your love, ability, capacity, and season of life.',
  },
];

export const metadata: Metadata = {
  title: 'Volunteer With Us',
  description:
    'Volunteer with Jan Cosmic Foundation through outreach, centres, media, children\'s work, organic farms, retreats, and practical service.',
};

export default async function VolunteerPage() {
  const volunteerOpportunities = await getVolunteerOpportunities();
  const testimonials = await getTestimonials();
  return (
    <>
      <PageHero
        title="Volunteer With Us"
        subtitle="Offer your time, skills, and presence in service of evolution."
      />

      {/* Why volunteer */}
      <section className="section bg-cream">
        <div className="wrap">
          <SectionHeader
            label="Why Volunteer"
            title="What you'd be helping with"
            subtitle="Outreach teachers, centres, media, children's work, farms, writing, logistics, care, and community service. A little time, offered sincerely, matters."
          />
          <ScrollReveal staggerChildren={0.1} className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ Icon, title, description }) => (
              <div key={title} className="border-t border-line pt-8">
                <Icon size={34} weight="light" className="icon-mark" aria-hidden="true" />
                <h3 className="text-2xl leading-snug">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Opportunities */}
      {volunteerOpportunities.length > 0 && (
        <section className="section bg-sand">
          <div className="wrap">
            <SectionHeader
              label="Open Roles"
              title="Current openings"
              subtitle="If none of these fit, write anyway. Some service is direct, some indirect, and there is often a quieter need that has not made the page yet."
              className="mb-12"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {volunteerOpportunities.map((opportunity) => (
                <article key={opportunity.id} className="flex flex-col gap-4 rounded-card bg-white p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl leading-snug">{opportunity.title}</h3>
                    <span className="shrink-0 rounded-full bg-navy/[0.06] px-3 py-1 text-xs font-medium text-navy">Open</span>
                  </div>
                  <p className="flex-1 text-[15px] leading-relaxed text-muted">{opportunity.description}</p>
                  <div className="space-y-2 text-sm text-ink/80">
                    <p className="flex items-center gap-2.5">
                      <MapPin size={18} weight="light" className="shrink-0 text-gold-ink" aria-hidden="true" />
                      {opportunity.location}
                    </p>
                    <p className="flex items-center gap-2.5">
                      <Clock size={18} weight="light" className="shrink-0 text-gold-ink" aria-hidden="true" />
                      {opportunity.commitment}
                    </p>
                  </div>
                  {opportunity.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {opportunity.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-navy">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Volunteer stories */}
      {testimonials.length > 0 && (
        <section className="section bg-cream">
          <div className="wrap">
            <SectionHeader
              label="Volunteer Stories"
              title="From people already doing this"
              subtitle="A few words from current and former volunteers."
              className="mb-12"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.id} className="flex flex-col gap-4 rounded-card bg-white p-8">
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

      {/* Form */}
      <section className="section bg-sand">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader
            label="Apply"
            title="Tell us about yourself"
            subtitle="Fill the form below. Our volunteer coordinator will reply within a few days."
            className="mb-10"
          />
          <div className="rounded-card bg-white p-6 sm:p-10">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
