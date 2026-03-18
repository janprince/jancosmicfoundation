import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import VolunteerForm from '@/components/forms/VolunteerForm';
import { getVolunteerOpportunities, getTestimonials } from '@/lib/api';

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Meaningful Impact',
    description:
      'Your time and skills contribute directly to programmes that transform lives — in education, healthcare, and community development across Ghana.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Community & Connection',
    description:
      'Join a warm, values-driven community of practitioners and service-givers who become genuine friends and support networks for life.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Personal Growth',
    description:
      'Service as a spiritual practice deepens self-awareness, cultivates patience and compassion, and accelerates your own inner development.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Mentorship & Training',
    description:
      'Receive structured training, ongoing mentorship from senior JCF teachers, and opportunities to develop skills that extend far beyond your volunteer role.',
  },
];

export const metadata: Metadata = {
  title: 'Volunteer With Us',
  description:
    'Give your time, talents, and energy to something meaningful. Discover volunteer opportunities at the Jan Cosmic Foundation.',
};

export default async function VolunteerPage() {
  const volunteerOpportunities = await getVolunteerOpportunities();
  const testimonials = await getTestimonials();
  return (
    <>
      <PageHero
        title="Volunteer With Us"
        subtitle="Give your time, talents, and energy to something that truly matters. Service is the highest form of practice."
      />

      {/* Why Volunteer section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Volunteer"
            title="The Gift of Service"
            subtitle="At the Jan Cosmic Foundation, we believe that serving others is one of the most powerful paths to inner growth. Volunteering with JCF is not just about giving, it is about becoming."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: '#F2EFE9' }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#000B58] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Open Roles"
            title="Current Opportunities"
            subtitle="We welcome volunteers of all backgrounds and skill sets. Here are our current openings — if you do not see the right fit, we still want to hear from you."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[#000B58] leading-snug">
                    {opportunity.title}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Open
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {opportunity.description}
                </p>

                {/* Meta info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{opportunity.commitment}</span>
                  </div>
                </div>

                {/* Skills badges */}
                {opportunity.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {opportunity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: 'rgba(212,168,67,0.12)',
                          color: '#8a6c1a',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Volunteer Stories"
            title="What Our Volunteers Say"
            subtitle="Hear from the people who give their time and talents to the Jan Cosmic Foundation — and what they have received in return."
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
              >
                {/* Quote mark */}
                <svg
                  className="w-8 h-8 text-[#D4A843]/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote text */}
                <blockquote className="text-sm text-gray-600 leading-relaxed italic flex-1">
                  {testimonial.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[#D4A843] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#000B58]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form section */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Apply Now"
            title="Submit Your Application"
            subtitle="Ready to volunteer? Fill in the form below and our volunteer coordinator will be in touch within a few days."
            className="mb-10"
          />
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
