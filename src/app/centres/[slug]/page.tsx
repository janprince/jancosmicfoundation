import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { EnvelopeSimple, Flag, House, MapPin, Phone, UsersThree } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import JoinCentreForm from '@/components/forms/JoinCentreForm';
import { getCentreBySlug, getCentres } from '@/lib/api';
import { centreMembership, centreMembershipDetail } from '@/lib/centres';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const centre = await getCentreBySlug(slug);
  if (!centre) return { robots: { index: false, follow: true }, title: 'Centre Not Found' };
  return pageMetadata(`/centres/${centre.slug}`, {
    title: `${centre.name} Centre`,
    description: centre.description,
    twitter: { card: 'summary_large_image', images: centre.image ? [centre.image] : undefined },
    openGraph: { title: centre.name, description: centre.description, images: centre.image ? [{ url: centre.image, alt: centre.name }] : undefined },
  });
}

export async function generateStaticParams() {
  const centres = await getCentres();
  return centres.map((centre) => ({ slug: centre.slug }));
}

export default async function CentrePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const centre = await getCentreBySlug(slug);

  if (!centre) {
    notFound();
  }

  const infoItems = [
    { Icon: MapPin, label: 'Location', value: centre.location },
    { Icon: House, label: 'Address', value: centre.address },
    { Icon: UsersThree, label: 'Members', value: centreMembershipDetail(centre.memberCount) },
    { Icon: Flag, label: 'Country', value: centre.country },
  ];

  return (
    <>
      <PageHero
        title={centre.name}
        subtitle={`${centre.location} · ${centreMembership(centre.memberCount)}`}
      />

      <section className="section bg-cream">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Description + details */}
          <div className="space-y-10 lg:col-span-2">
            <a href="#centre-enquiry" className="button outline">Enquire about this community</a>
            {centre.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-card">
                <Image
                  src={centre.image}
                  alt={centre.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <span className="absolute bottom-5 left-5 rounded-full bg-cream/95 px-4 py-1.5 text-sm font-medium text-navy">
                  {centre.country}
                </span>
              </div>
            )}

            <div>
              <SectionHeader label="About This Centre" title={centre.name} align="left" className="mb-5" />
              <p className="text-lg leading-relaxed text-ink/80">{centre.description}</p>
            </div>

            <div className="detail-list">
              {infoItems.map(({ Icon, label, value }) => (
                <div key={label}>
                  <Icon size={22} weight="light" aria-hidden="true" />
                  <div>
                    <p className="detail-label">{label}</p>
                    <p className="detail-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-card border border-line bg-white p-7">
              <p className="detail-label mb-4">Centre Leader</p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium text-navy">{centre.leader.name}</p>
                  <p className="text-sm text-muted">{centre.leader.title}</p>
                </div>
              </div>
            </div>

            <div className="rounded-card border border-line bg-white p-7">
              <p className="detail-label mb-2">Contact</p>
              <div className="detail-list">
                <a href={`mailto:${centre.contactEmail}`} className="no-underline">
                  <EnvelopeSimple size={20} weight="light" aria-hidden="true" />
                  <span className="detail-value break-all">{centre.contactEmail}</span>
                </a>
                <a href={`tel:${centre.contactPhone.replace(/\s/g, '')}`} className="no-underline">
                  <Phone size={20} weight="light" aria-hidden="true" />
                  <span className="detail-value">{centre.contactPhone}</span>
                </a>
              </div>
            </div>

            <div className="rounded-card border border-line bg-white p-7">
              <p className="detail-label mb-5">Get Involved</p>
              <ul className="space-y-4">
                <li><Link href="/volunteer" className="text-link">Volunteer with us</Link></li>
                <li><Link href="/events" className="text-link">Upcoming events</Link></li>
                <li><Link href="/donate" className="text-link">Support our work</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Join form */}
      <section className="section bg-sand" id="centre-enquiry">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader
            label="Join Us"
            title={`Connect with ${centre.name}`}
            subtitle="Fill in the form below and the centre leader will be in touch about sittings, teachings, and service opportunities."
            className="mb-10"
          />
          <div className="rounded-card bg-white p-6 sm:p-10">
            <JoinCentreForm centreName={centre.name} centreId={centre.id} />
          </div>
        </div>
      </section>
    </>
  );
}
