import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import JoinCentreForm from '@/components/forms/JoinCentreForm';
import { getCentreBySlug, getCentres } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const centre = await getCentreBySlug(slug);
  if (!centre) return { title: 'Centre Not Found' };
  return {
    title: `${centre.name} Centre`,
    description: centre.description,
  };
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
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: centre.location,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Address',
      value: centre.address,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      label: 'Members',
      value: `${centre.memberCount.toLocaleString()} active members`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
      label: 'Country',
      value: centre.country,
    },
  ];

  return (
    <>
      <PageHero
        title={centre.name}
        subtitle={`${centre.location} · ${centre.memberCount} members`}
      />

      {/* Main content */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Description + details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image placeholder */}
              <div
                className="w-full rounded-2xl overflow-hidden"
                style={{ paddingBottom: '45%', position: 'relative' }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#000B58] to-primary"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 40%, rgba(212,168,67,0.2) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(var(--color-primary-rgb),0.3) 0%, transparent 55%)',
                  }}
                />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-white/90 backdrop-blur-sm text-[#000B58] text-sm font-semibold px-4 py-1.5 rounded-full">
                    {centre.country}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <SectionHeader
                  label="About This Centre"
                  title={centre.name}
                  align="left"
                  className="mb-5"
                />
                <p className="text-base text-gray-600 leading-relaxed">
                  {centre.description}
                </p>
              </div>

              {/* Centre details grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ backgroundColor: '#F2EFE9' }}
                  >
                    <span className="shrink-0 mt-0.5 text-primary">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold text-[#000B58]/60 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-[#000B58]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar: Leader + Contact */}
            <div className="space-y-6">
              {/* Centre leader */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#F2EFE9' }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6c1a] mb-4">
                  Centre Leader
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[#D4A843] flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {centre.leader.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#000B58]">{centre.leader.name}</p>
                    <p className="text-sm text-gray-500">{centre.leader.title}</p>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{ backgroundColor: '#F2EFE9' }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6c1a]">
                  Contact
                </p>

                <a
                  href={`mailto:${centre.contactEmail}`}
                  className="flex items-center gap-3 text-sm text-[#000B58] hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="break-all">{centre.contactEmail}</span>
                </a>

                <a
                  href={`tel:${centre.contactPhone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-[#000B58] hover:text-primary transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span>{centre.contactPhone}</span>
                </a>
              </div>

              {/* Quick links */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#F2EFE9' }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6c1a] mb-4">
                  Get Involved
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/volunteer" className="text-primary font-medium hover:underline">
                      Volunteer with us
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="text-primary font-medium hover:underline">
                      Upcoming events
                    </Link>
                  </li>
                  <li>
                    <Link href="/donate" className="text-primary font-medium hover:underline">
                      Support our work
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Centre Form */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Join Us"
            title={`Become a Member of ${centre.name}`}
            subtitle="Fill in the form below and the centre leader will be in touch to welcome you."
            className="mb-10"
          />
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
            <JoinCentreForm centreName={centre.name} centreId={centre.id} />
          </div>
        </div>
      </section>
    </>
  );
}
