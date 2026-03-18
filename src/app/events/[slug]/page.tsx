import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getEventBySlug } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };
  return {
    title: event.title,
    description: event.description,
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const startDate = formatDate(event.date);
  const endDate = event.endDate ? formatDate(event.endDate) : null;

  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero title={event.title} subtitle={event.description} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors hover:opacity-75"
          style={{ color: '#2D6A4F' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Category badge + past indicator */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="primary">{event.category}</Badge>
              {event.isPast && <Badge variant="accent">Past Event</Badge>}
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-6" style={{ color: '#000B58' }}>
              About This Event
            </h2>

            {/* Content rendered as HTML */}
            <div
              className="prose prose-sm sm:prose-base max-w-none space-y-4 leading-relaxed"
              style={{ color: '#1a1a1a' }}
              dangerouslySetInnerHTML={{ __html: event.content }}
            />
          </div>

          {/* Sidebar — event details */}
          <aside className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.1)', boxShadow: '0 4px 24px rgba(0,11,88,0.06)' }}
            >
              <h3 className="text-base font-semibold mb-5 pb-4" style={{ color: '#000B58', borderBottom: '1px solid rgba(0,11,88,0.08)' }}>
                Event Details
              </h3>

              <ul className="space-y-5">
                {/* Date */}
                <li className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2D6A4F" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#2D6A4F' }}>
                      Date
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#000B58' }}>{startDate}</p>
                    {endDate && (
                      <p className="text-sm mt-0.5" style={{ color: '#1a1a1abf' }}>
                        to {endDate}
                      </p>
                    )}
                  </div>
                </li>

                {/* Time */}
                <li className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2D6A4F" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#2D6A4F' }}>
                      Start Time
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#000B58' }}>{event.time}</p>
                  </div>
                </li>

                {/* Location */}
                <li className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: 'rgba(45,106,79,0.1)' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2D6A4F" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#2D6A4F' }}>
                      Location
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#000B58' }}>{event.location}</p>
                    {event.address && (
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: '#1a1a1abf' }}>
                        {event.address}
                      </p>
                    )}
                  </div>
                </li>
              </ul>

              {/* RSVP / Registration CTA */}
              <div className="mt-7 pt-6" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
                {!event.isPast && event.registrationUrl ? (
                  <Button href={event.registrationUrl} variant="primary" size="md" className="w-full justify-center">
                    Register / RSVP
                  </Button>
                ) : event.isPast ? (
                  <p className="text-center text-sm py-3 rounded-xl font-medium" style={{ backgroundColor: 'rgba(192,80,33,0.08)', color: '#C05021' }}>
                    This event has concluded
                  </p>
                ) : (
                  <Button href="/contact" variant="outline" size="md" className="w-full justify-center">
                    Enquire About This Event
                  </Button>
                )}
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom back link */}
        <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-75"
            style={{ color: '#2D6A4F' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            View all events
          </Link>
        </div>
      </div>
    </main>
  );
}
