import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import ProgressBar from '@/components/ui/ProgressBar';
import DonationCheckout from '@/components/forms/DonationCheckoutWrapper';
import { UsersThree } from '@phosphor-icons/react/dist/ssr';
import { getCauseBySlug, getCauses } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cause = await getCauseBySlug(slug);
  if (!cause) return { robots: { index: false, follow: true }, title: 'Cause Not Found' };
  return pageMetadata(`/donate/${cause.slug}`, {
    title: `Donate: ${cause.title}`,
    description: cause.description,
    twitter: { card: 'summary_large_image', images: cause.image ? [cause.image] : undefined },
    openGraph: { title: cause.title, description: cause.description, images: [{ url: cause.image, alt: cause.title }] },
  });
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

  const supporters = (label: string) => cause.donorsCount == null ? null : (
    <p className="mt-4 flex items-center gap-2 text-sm text-muted">
      <UsersThree size={18} weight="light" className="text-gold-ink" aria-hidden="true" />
      <span>
        <span className="font-semibold text-navy">{cause.donorsCount}</span>{' '}
        {label}{cause.donorsCount !== 1 ? 's' : ''}
      </span>
    </p>
  );

  const ongoingMarker = (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
      <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
      Ongoing Initiative
    </span>
  );

  return (
    <>
      <PageHero
        title={cause.title}
        subtitle={
          isSpecific
            ? cause.category
            : `${cause.category} · Ongoing initiative`
        }
      />

      <section className="section bg-cream">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Story */}
          <div className="space-y-8 lg:col-span-2">
            <a href="#donation-form" className="button lg:hidden">Give to this work</a>
            <div className="relative aspect-video w-full overflow-hidden rounded-card">
              <Image src={cause.image} alt={cause.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
              <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-navy">
                {cause.category}
              </span>
              {(isSpecific ? cause.isActive : true) && (
                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {isSpecific ? 'Active' : 'Ongoing'}
                </span>
              )}
            </div>

            {/* Summary on small screens */}
            <div className="rounded-card border border-line bg-white p-6 lg:hidden">
              {isSpecific ? (
                <>
                  <p className="mb-4 flex items-baseline gap-2">
                    <span className="font-serif text-4xl text-navy">{percentage}%</span>
                    <span className="text-sm text-muted">funded</span>
                  </p>
                  <ProgressBar current={cause.raisedAmount} goal={cause.goalAmount} currency={cause.currency} />
                  {supporters('donor')}
                </>
              ) : (
                <>
                  {ongoingMarker}
                  {cause.impactStatement && <p className="mt-3 leading-relaxed text-ink/80">{cause.impactStatement}</p>}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    An ongoing initiative sustained by students, volunteers, and supporters. Every contribution helps keep it moving.
                  </p>
                  {(cause.donorsCount ?? 0) > 0 && supporters('supporter')}
                </>
              )}
            </div>

            <div>
              <SectionHeader label={cause.category} title={cause.title} align="left" className="mb-5" />
              <p className="text-lg leading-relaxed text-ink/80">{cause.description}</p>
            </div>

            <div
              className="reading-copy prose max-w-none leading-relaxed text-ink/80 prose-headings:text-navy prose-p:leading-relaxed prose-strong:text-navy"
              dangerouslySetInnerHTML={{ __html: cause.content }}
            />

            {cause.gallery && cause.gallery.length > 0 && (
              <div>
                <h3 className="mb-5 text-2xl">Gallery</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {cause.gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-square overflow-hidden rounded-xl">
                      <Image src={img} alt={`${cause.title} gallery ${idx + 1}`} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Donation sidebar */}
          <div id="donation-form" className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="hidden rounded-card border border-line bg-white p-7 lg:block">
                {isSpecific ? (
                  <>
                    <p className="mb-2 flex items-baseline gap-2">
                      <span className="font-serif text-4xl text-navy">{percentage}%</span>
                      <span className="text-sm text-muted">funded</span>
                    </p>
                    <ProgressBar current={cause.raisedAmount} goal={cause.goalAmount} currency={cause.currency} />
                    {supporters('donor')}
                  </>
                ) : (
                  <>
                    {ongoingMarker}
                    {cause.impactStatement && <p className="mt-4 text-sm leading-relaxed text-ink/80">{cause.impactStatement}</p>}
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      This ongoing work has no fixed goal. Every contribution helps sustain it with care.
                    </p>
                    {(cause.donorsCount ?? 0) > 0 && supporters('supporter')}
                  </>
                )}
              </div>

              <div className="rounded-card border border-line bg-white p-7">
                <p className="detail-label mb-5">{isSpecific ? 'Make a Donation' : 'Support This Work'}</p>
                <DonationCheckout causeTitle={cause.title} causeId={cause.id} />
              </div>

              <p className="rounded-card bg-sand p-5 text-center text-xs leading-relaxed text-muted">
                Donations support the work named on this page. For questions about giving or stewardship, write to the Foundation.
              </p>
              <p className="form-note text-center">Prefer to support the whole Foundation? <Link href="/donate#general-giving">Make a general donation</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
