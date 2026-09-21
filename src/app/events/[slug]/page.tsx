import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CalendarBlank, Clock, MapPin } from '@phosphor-icons/react/dist/ssr';
import PageHero from '@/components/layout/PageHero';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getEventBySlug } from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { robots: { index: false, follow: true }, title: 'Event Not Found' };
  return pageMetadata(`/events/${event.slug}`, {
    title: event.title,
    description: event.description,
    twitter: { card: 'summary_large_image', images: event.image ? [event.image] : undefined },
    openGraph: { title: event.title, description: event.description, images: [{ url: event.image, alt: event.title }] },
  });
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
    <div className="bg-cream">
      <PageHero title={event.title} subtitle={event.description} />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Event details */}
          <aside className="lg:col-span-1 lg:order-2">
            <div className="sticky top-28 rounded-card border border-line bg-white p-7">
              <h2 className="mb-3 text-2xl">Event details</h2>

              <ul className="detail-list">
                <li>
                  <CalendarBlank size={22} weight="light" aria-hidden="true" />
                  <div>
                    <p className="detail-label">Date</p>
                    <p className="detail-value">{startDate}</p>
                    {endDate && <p className="mt-0.5 text-sm text-muted">to {endDate}</p>}
                  </div>
                </li>
                <li>
                  <Clock size={22} weight="light" aria-hidden="true" />
                  <div>
                    <p className="detail-label">Start Time</p>
                    <p className="detail-value">{event.time}</p>
                  </div>
                </li>
                <li>
                  <MapPin size={22} weight="light" aria-hidden="true" />
                  <div>
                    <p className="detail-label">Location</p>
                    <p className="detail-value">{event.location}</p>
                    {event.address && <p className="mt-1 text-sm leading-relaxed text-muted">{event.address}</p>}
                  </div>
                </li>
              </ul>

              <div className="mt-7">
                {!event.isPast && event.registrationUrl ? (
                  <Button href={event.registrationUrl} variant="primary" className="w-full">
                    Register / RSVP
                  </Button>
                ) : event.isPast ? (
                  <p className="rounded-xl bg-accent/10 py-3 text-center text-sm font-medium text-accent">
                    This event has concluded
                  </p>
                ) : (
                  <Button href={`/contact?subject=${encodeURIComponent(`Enquiry: ${event.title}`)}#enquiry`} variant="outline" className="w-full">
                    Enquire about this event
                  </Button>
                )}
              </div>
            </div>
          </aside>
          {/* Main content */}
          <div className="lg:col-span-2 lg:order-1">
            <div className="relative mb-8 aspect-video overflow-hidden rounded-card">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge variant="primary">{event.category}</Badge>
              {event.isPast && <Badge variant="accent">Past Event</Badge>}
            </div>

            <h2 className="mb-6 text-4xl">{event.isPast ? 'Original event description' : 'About this event'}</h2>

            <div
              className="reading-copy prose text-ink"
              dangerouslySetInnerHTML={{ __html: event.content }}
            />
          </div>


        </div>

        <div className="mt-16 border-t border-line pt-8">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-violet">
            <ArrowLeft size={16} aria-hidden="true" />
            View all events
          </Link>
        </div>
      </div>
    </div>
  );
}
