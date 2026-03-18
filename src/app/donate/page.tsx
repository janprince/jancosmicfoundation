import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import CauseCard from '@/components/cards/CauseCard';
import { getCauses } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support the Jan Cosmic Foundation. Your generosity sustains programmes in spiritual education, community outreach, and humanitarian development.',
};

export default async function DonatePage() {
  const causes = await getCauses();

  const impactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Spiritual Village',
      description: 'Building a 500-acre sanctuary in Kwahu for retreats, meditation, organic farming, and community living.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      title: 'Media & Outreach',
      description: 'Spreading the teachings of Dr. Baffour Jan to a wider audience through professional media production.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Guide the Children',
      description: 'Introducing children to conscious living through mentorship, awareness practices, and wisdom-based education.',
    },
  ];

  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Your generosity sustains the programmes that awaken consciousness and transform lives."
      />

      {/* Intro */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <SectionHeader
              label="Make a Difference"
              title="Support Our Work"
              subtitle="The Jan Cosmic Foundation is sustained by the generosity of people who believe that awakening consciousness and serving others go hand in hand. Every donation — large or small — directly funds programmes in spiritual education, community outreach, and human development."
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
          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A843]" />
            <span className="block h-px w-10 rounded-full bg-[#D4A843]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
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
              { amount: 'GH₵50', impact: 'Provides educational materials for one child in the Guide the Children programme' },
              { amount: 'GH₵200', impact: 'Funds a month of organic inputs for the JCF Kwahu farming project' },
              { amount: 'GH₵500', impact: 'Supports production of one teaching session for the Media & Digital Outreach programme' },
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
