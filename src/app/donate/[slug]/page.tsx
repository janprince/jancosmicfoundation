import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ProgressBar from '@/components/ui/ProgressBar';
import DonationCheckout from '@/components/forms/DonationCheckoutWrapper';
import { getCauseBySlug, getCauses } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);
  if (!cause) return { title: 'Cause Not Found' };
  return {
    title: `Donate: ${cause.title}`,
    description: cause.description,
  };
}

export function generateStaticParams() {
  const causes = getCauses();
  return causes.map((cause) => ({ slug: cause.slug }));
}

export default async function CausePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cause = getCauseBySlug(slug);

  if (!cause) {
    notFound();
  }

  const percentage = Math.min(
    Math.round((cause.raisedAmount / cause.goalAmount) * 100),
    100,
  );

  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={`${cause.category} · ${cause.donorsCount} donors`}
      />

      {/* Back link */}
      <div style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#2D6A4F] hover:text-[#245c43] transition-colors group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Causes
          </Link>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left: Story / Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cause image placeholder */}
              <div
                className="w-full rounded-2xl overflow-hidden relative"
                style={{ paddingBottom: '52%' }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F] to-[#D4A843]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 25% 35%, rgba(0,11,88,0.3) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(192,80,33,0.2) 0%, transparent 50%)',
                  }}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#000B58] text-xs font-semibold px-3 py-1 rounded-full">
                    {cause.category}
                  </span>
                </div>
                {/* Active badge */}
                {cause.isActive && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 bg-[#2D6A4F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
                      Active
                    </span>
                  </div>
                )}
              </div>

              {/* Progress — mobile only (shown above content on small screens) */}
              <div className="lg:hidden rounded-2xl p-6 bg-white shadow-sm border border-gray-100">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[#2D6A4F] font-bold text-3xl">
                    {percentage}%
                  </span>
                  <span className="text-gray-500 text-sm">funded</span>
                </div>
                <ProgressBar
                  current={cause.raisedAmount}
                  goal={cause.goalAmount}
                  currency={cause.currency}
                />
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-semibold text-[#000B58]">
                    {cause.donorsCount}
                  </span>{' '}
                  generous donor{cause.donorsCount !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Cause title and description */}
              <div>
                <SectionHeader
                  label={cause.category}
                  title={cause.title}
                  align="left"
                  className="mb-5"
                />
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {cause.description}
                </p>
              </div>

              {/* Rich content */}
              <div
                className="prose prose-green max-w-none text-gray-700 leading-relaxed
                  prose-headings:text-[#000B58] prose-headings:font-semibold
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-strong:text-[#000B58]"
                dangerouslySetInnerHTML={{ __html: cause.content }}
              />

              {/* Gallery placeholder (if available) */}
              {cause.gallery && cause.gallery.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-[#000B58] mb-4">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cause.gallery.map((_, idx) => (
                      <div
                        key={idx}
                        className="aspect-square rounded-xl bg-gradient-to-br from-[#2D6A4F]/40 to-[#D4A843]/40"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sticky donation sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Progress card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="mb-1 flex items-end gap-2">
                    <span className="text-[#2D6A4F] font-bold text-3xl">
                      {percentage}%
                    </span>
                    <span className="text-gray-500 text-sm mb-1">funded</span>
                  </div>
                  <ProgressBar
                    current={cause.raisedAmount}
                    goal={cause.goalAmount}
                    currency={cause.currency}
                  />
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-[#D4A843]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>
                      <span className="font-semibold text-[#000B58]">
                        {cause.donorsCount}
                      </span>{' '}
                      donor{cause.donorsCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Donation checkout */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D4A843] mb-4">
                    Make a Donation
                  </p>
                  <DonationCheckout
                    causeTitle={cause.title}
                    causeId={cause.id}
                  />
                </div>

                {/* Trust badge */}
                <div
                  className="rounded-2xl p-4 text-center"
                  style={{ backgroundColor: '#F2EFE9' }}
                >
                  <p className="text-xs text-gray-500 leading-relaxed">
                    The Jan Cosmic Foundation is a registered charitable
                    organisation. All donations are used transparently and
                    accountably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
