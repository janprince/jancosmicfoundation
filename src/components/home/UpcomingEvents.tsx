import Link from 'next/link';
import { getEvents } from '@/lib/api';
import SectionHeader from '@/components/ui/SectionHeader';
import EventCard from '@/components/cards/EventCard';

export default function UpcomingEvents() {
  const upcomingEvents = getEvents('upcoming').slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          label="What's Coming"
          title="Upcoming Events"
          subtitle="Join us for transformative gatherings, retreats, and community celebrations."
          className="mb-12"
        />

        {upcomingEvents.length > 0 ? (
          <>
            {/* Events grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* View all link */}
            <div className="mt-12 flex justify-center">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#2D6A4F] px-7 py-3 text-sm font-semibold text-[#2D6A4F] transition-all duration-300 hover:bg-[#2D6A4F] hover:text-white hover:shadow-lg hover:shadow-[#2D6A4F]/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
              >
                View All Events
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#2D6A4F]/25 bg-[#FDFBF7] py-20 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2D6A4F]/10">
              <svg
                className="h-7 w-7 text-[#2D6A4F]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <p className="text-base font-semibold text-[#000B58]">No upcoming events right now</p>
            <p className="mt-1 text-sm text-[#1a1a1a]/50">Check back soon — more events are on the way.</p>
            <Link
              href="/events"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2D6A4F] underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Browse past events
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
