'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CalendarBlank } from '@phosphor-icons/react';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import EventCard from '@/components/cards/EventCard';
import type { Event } from '@/types';

type Filter = 'all' | 'upcoming' | 'past';

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All Events', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Past', value: 'past' },
];

interface EventsPageContentProps {
  events: Event[];
}

export default function EventsPageContent({ events }: EventsPageContentProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('upcoming');

  const upcomingEvents = events.filter((e) => !e.isPast);
  const pastEvents = events.filter((e) => e.isPast).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  const visibleEvents =
    activeFilter === 'upcoming'
      ? upcomingEvents
      : activeFilter === 'past'
      ? pastEvents
      : events;

  const counts: Record<Filter, number> = {
    all: events.length,
    upcoming: upcomingEvents.length,
    past: pastEvents.length,
  };

  return (
    <div className="bg-cream">
      <PageHero
        title="Retreats &amp; Events"
        subtitle="Retreats, sittings, teachings, balanced practice, and service gatherings for seekers who want to practise with others."
      />

      <section className="section">
        <div className="wrap">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              label="Our Calendar"
              title={activeFilter === 'upcoming' ? 'Upcoming gatherings' : activeFilter === 'past' ? 'Past gatherings' : 'All gatherings'}
              align="left"
            />
            <div className="filter-pills shrink-0" role="group" aria-label="Filter events">
              {FILTERS.map((filter) => (
                <button key={filter.value} aria-pressed={activeFilter === filter.value} onClick={() => setActiveFilter(filter.value)}>
                  {filter.label}
                  <span className="count">{counts[filter.value]}</span>
                </button>
              ))}
            </div>
          </div>

          {visibleEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {visibleEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-card bg-sand px-6 py-16 text-center">
              <CalendarBlank size={48} weight="light" className="mb-5 text-gold-ink" aria-hidden="true" />
              <h3 className="mb-2 text-3xl">
                No {activeFilter === 'upcoming' ? 'upcoming' : activeFilter === 'past' ? 'past' : ''} events found
              </h3>
              <p className="max-w-sm text-muted">
                {activeFilter === 'upcoming'
                  ? 'Contact the Foundation to ask about the next gathering before making travel plans.'
                  : activeFilter === 'past'
                  ? 'Past events will appear here once they have concluded.'
                  : 'No events are currently available.'}
              </p>
              <Link href="/contact" className="button mt-7">Ask about the next gathering</Link>
              {activeFilter !== 'all' && (
                <button onClick={() => setActiveFilter('all')} className="text-link mt-5 cursor-pointer">
                  View all events
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-sand">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <h2 className="text-4xl">Hear about events first</h2>
          <p className="mt-4 text-lg text-muted">
            Join the community to hear when new retreats, sittings, and teaching dates are announced.
          </p>
          <div className="mt-8">
            <Button href="/community">Join the Community</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
