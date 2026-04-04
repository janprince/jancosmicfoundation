import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ProgressBar from '@/components/ui/ProgressBar';
import DonationCheckout from '@/components/forms/DonationCheckoutWrapper';
import { getCauseBySlug, getCauses } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cause = await getCauseBySlug(slug);
  if (!cause) return { title: 'Cause Not Found' };
  return {
    title: `Donate: ${cause.title}`,
    description: cause.description,
  };
}

export async function generateStaticParams() {
  const causes = await getCauses();
  return causes.map((cause) => ({ slug: cause.slug }));
}

export default async function CausePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cause = await getCauseBySlug(slug);

  if (!cause) {
    notFound();
  }

  const isSpecific = cause.type === 'specific';
  const percentage = isSpecific && cause.goalAmount > 0
    ? Math.min(Math.round((cause.raisedAmount / cause.goalAmount) * 100), 100)
    : 0;

  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={
          isSpecific
            ? `${cause.category} · ${cause.donorsCount} donors`
            : `${cause.category} · Ongoing initiative`
        }
      />

      {/* Main content */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left: Story / Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cause image */}
              <div className="w-full rounded-2xl overflow-hidden relative aspect-video">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-[#000B58] text-xs font-semibold px-3 py-1 rounded-full">
                    {cause.category}
                  </span>
                </div>
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  {isSpecific && cause.isActive ? (
                    <span className="flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse" />
                      Active
                    </span>
                  ) : !isSpecific ? (
                    <span className="flex items-center gap-1.5 bg-[#D4A843] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      Ongoing
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Mobile sidebar — shown above content on small screens */}
              <div className="lg:hidden rounded-2xl p-6 bg-white shadow-sm border border-gray-100">
                {isSpecific ? (
                  <>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="text-primary font-bold text-3xl">
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
                  </>
                ) : (
                  <>
                    {cause.impactStatement && (
                      <div className="mb-4 rounded-lg bg-[#F2EFE9] px-4 py-3">
                        <p className="text-sm leading-relaxed text-[#000B58]/80">
                          <span className="mr-1.5 inline-block text-[#D4A843]" aria-hidden="true">&#10047;</span>
                          {cause.impactStatement}
                        </p>
                      </div>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This is an ongoing initiative sustained by the continued generosity of our community.
                      Every contribution directly supports this work.
                    </p>
                    {cause.donorsCount > 0 && (
                      <p className="mt-3 text-sm text-gray-500">
                        <span className="font-semibold text-[#000B58]">
                          {cause.donorsCount}
                        </span>{' '}
                        supporter{cause.donorsCount !== 1 ? 's' : ''}
                      </p>
                    )}
                  </>
                )}
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

              {/* Gallery */}
              {cause.gallery && cause.gallery.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-[#000B58] mb-4">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {cause.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src={img}
                          alt={`${cause.title} gallery ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sticky donation sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Progress / Impact card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  {isSpecific ? (
                    <>
                      <div className="mb-1 flex items-end gap-2">
                        <span className="text-primary font-bold text-3xl">
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
                        <svg className="w-4 h-4 text-[#8a6c1a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span>
                          <span className="font-semibold text-[#000B58]">
                            {cause.donorsCount}
                          </span>{' '}
                          donor{cause.donorsCount !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="mb-4 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A843]/15">
                          <span className="text-[#D4A843] text-sm">&#10047;</span>
                        </span>
                        <span className="text-sm font-semibold text-[#000B58]">
                          Ongoing Initiative
                        </span>
                      </div>
                      {cause.impactStatement && (
                        <p className="text-sm leading-relaxed text-gray-600 mb-4">
                          {cause.impactStatement}
                        </p>
                      )}
                      <p className="text-xs leading-relaxed text-gray-500">
                        This work is sustained by the continued generosity of our community.
                        There is no fixed goal — every contribution directly supports and
                        strengthens this initiative.
                      </p>
                      {cause.donorsCount > 0 && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                          <svg className="w-4 h-4 text-[#8a6c1a]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span>
                            <span className="font-semibold text-[#000B58]">
                              {cause.donorsCount}
                            </span>{' '}
                            supporter{cause.donorsCount !== 1 ? 's' : ''}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Donation checkout */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6c1a] mb-4">
                    {isSpecific ? 'Make a Donation' : 'Support This Work'}
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
