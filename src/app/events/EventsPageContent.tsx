'use client';

import { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
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
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const upcomingEvents = events.filter((e) => !e.isPast);
  const pastEvents = events.filter((e) => e.isPast);

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
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Events"
        subtitle="Join us for retreats, workshops, community service days, and gatherings that nourish both the inner life and the world around us."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + filter tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionHeader
              label="Our Calendar"
              title="All Events"
              align="left"
            />

            {/* Tab filters */}
            <div
              className="flex items-center gap-1 rounded-xl p-1 self-start sm:self-auto shrink-0"
              style={{ backgroundColor: '#F2EFE9' }}
              role="tablist"
              aria-label="Filter events"
            >
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter.value)}
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                    style={
                      isActive
                        ? { backgroundColor: '#2D6A4F', color: '#FDFBF7', boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }
                        : { color: '#1a1a1a80' }
                    }
                  >
                    {filter.label}
                    <span
                      className="rounded-full px-1.5 py-0.5 text-xs font-semibold leading-none"
                      style={
                        isActive
                          ? { backgroundColor: 'rgba(212,168,67,0.3)', color: '#D4A843' }
                          : { backgroundColor: 'rgba(0,0,0,0.08)', color: '#1a1a1a60' }
                      }
                    >
                      {counts[filter.value]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Events grid */}
          {visibleEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(45,106,79,0.08)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2D6A4F" className="w-9 h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#000B58' }}>
                No {activeFilter === 'upcoming' ? 'upcoming' : activeFilter === 'past' ? 'past' : ''} events found
              </h3>
              <p className="text-base max-w-sm" style={{ color: '#1a1a1abf' }}>
                {activeFilter === 'upcoming'
                  ? 'Check back soon — new events are added regularly.'
                  : activeFilter === 'past'
                  ? 'Past events will appear here once they have concluded.'
                  : 'No events are currently available.'}
              </p>
              {activeFilter !== 'all' && (
                <button
                  onClick={() => setActiveFilter('all')}
                  className="mt-6 text-sm font-semibold underline underline-offset-2 cursor-pointer"
                  style={{ color: '#2D6A4F' }}
                >
                  View all events
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#000B58' }}>
            Never Miss an Event
          </h2>
          <p className="text-sm sm:text-base mb-6" style={{ color: '#1a1a1abf' }}>
            Subscribe to our newsletter and be the first to know about upcoming retreats, workshops, and community gatherings.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:shadow-lg"
            style={{ backgroundColor: '#2D6A4F', color: '#FDFBF7' }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
