import Link from 'next/link';
import { getEvents } from '@/lib/api';
import EventCard from '@/components/cards/EventCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default async function UpcomingEvents() {
  const upcomingEvents = (await getEvents('upcoming')).slice(0, 3);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <ScrollReveal animation="fade-up" className="mb-14 text-center">
          <p className="eyebrow mb-4 text-[#8a6c1a]">Retreats &amp; gatherings</p>
          <h2 className="display text-[2rem] leading-[1.12] text-[#000B58] sm:text-4xl lg:text-[2.7rem]">
            Come and sit with us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#1c1a26]/75 sm:text-lg">
            Retreats, sittings, and gatherings — most in Accra, some online.
            Open to new and returning seekers alike.
          </p>
        </ScrollReveal>

        {upcomingEvents.length > 0 ? (
          <>
            <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="mt-14 text-center">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-3 text-sm font-medium tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  See the full calendar
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          </>
        ) : (
          <ScrollReveal animation="fade-in">
            <div className="py-16 text-center">
              <p className="text-base text-[#000B58]">
                No upcoming events right now
              </p>
              <p className="mt-2 text-sm text-[#1a1a1a]/80">
                Check back soon — more events are on the way.
              </p>
              <Link
                href="/events"
                className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 decoration-[var(--color-primary)]/30 transition-colors duration-300 hover:decoration-[var(--color-primary)]"
              >
                Browse past events
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
