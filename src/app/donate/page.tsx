import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CauseCard from '@/components/cards/CauseCard';
import { getCauses } from '@/lib/api';

export default function DonatePage() {
  const causes = getCauses();

  const impactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Scholarships',
      description: 'Your gift funds education for bright young Ghanaians who would otherwise be unable to afford it.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Healthcare',
      description: 'Free medical outreach brings essential health services to underserved communities across Ghana.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Youth Empowerment',
      description: 'Twelve-week programmes equipping young people with mindfulness, entrepreneurship, and leadership skills.',
    },
  ];

  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Your generosity sustains the programmes that transform lives — in Ghana and around the world."
        backgroundImage="/images/studentslistening.jpg"
      />

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Make a Difference"
              title="Support Our Work"
              subtitle="The Jan Cosmic Foundation is sustained by the generosity of people who believe that inner transformation and outer service go hand in hand. Every donation — large or small — directly funds life-changing programmes in education, healthcare, and community development."
            />
          </div>

          {/* Impact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {impactItems.map((item) => (
              <div
                key={item.title}
                className="text-center rounded-2xl p-6"
                style={{ backgroundColor: '#F2EFE9' }}
              >
                <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mx-auto mb-4 text-[#2D6A4F]">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-[#000B58] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Causes grid */}
          <SectionHeader
            label="Active Causes"
            title="Choose a Cause"
            subtitle="Select a cause below to learn more and make your donation. All funds are managed with full transparency and accountability."
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
        </div>
      </section>

      {/* General donation section */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #000B58 0%, #001485 50%, #2D6A4F 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A843]" />
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Every Contribution Counts
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-white/75">
            Not sure which cause to choose? Any donation to the Jan Cosmic
            Foundation goes directly into the programmes and communities that
            need it most. We are grateful for every act of generosity, however
            it is expressed.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { amount: 'GH₵50', impact: 'Feeds a family at a community service day' },
              { amount: 'GH₵200', impact: 'Provides a month of free tutoring for two students' },
              { amount: 'GH₵500', impact: 'Supports a youth participant for one programme cycle' },
            ].map((tier) => (
              <div
                key={tier.amount}
                className="rounded-2xl p-5 text-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(212,168,67,0.25)' }}
              >
                <p className="text-2xl font-bold text-[#D4A843]">{tier.amount}</p>
                <p className="mt-2 text-xs text-white/70 leading-relaxed">{tier.impact}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/50">
            Payments processed securely via Paystack. Donations are tax-deductible where applicable.
          </p>
        </div>
      </section>
    </>
  );
}
