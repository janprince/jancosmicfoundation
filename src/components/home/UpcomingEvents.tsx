import Link from 'next/link';
import { getEvents } from '@/lib/api';
import EventCard from '@/components/cards/EventCard';

export default function UpcomingEvents() {
  const upcomingEvents = getEvents('upcoming').slice(0, 3);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A843]">
            What&apos;s Coming
          </p>
          <h2 className="text-3xl font-light leading-tight text-[#000B58] sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1a1a1a]/75">
            Join us for transformative gatherings, retreats, and community
            celebrations.
          </p>
        </div>

        {upcomingEvents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#2D6A4F] px-8 py-3 text-sm font-medium text-[#2D6A4F] transition-all duration-300 hover:bg-[#2D6A4F] hover:text-white"
              >
                View All Events
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-base text-[#000B58]">
              No upcoming events right now
            </p>
            <p className="mt-2 text-sm text-[#1a1a1a]/65">
              Check back soon — more events are on the way.
            </p>
            <Link
              href="/events"
              className="mt-6 inline-block text-sm font-medium text-[#2D6A4F] underline underline-offset-4 decoration-[#2D6A4F]/30 transition-colors duration-300 hover:decoration-[#2D6A4F]"
            >
              Browse past events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
