'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Images, MagnifyingGlassPlus, X } from '@phosphor-icons/react';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import type { GalleryItem } from '@/types';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Events', value: 'events' },
  { label: 'Community', value: 'community' },
  { label: 'Spiritual', value: 'spiritual' },
  { label: 'Centres', value: 'centres' },
];

interface GalleryPageContentProps {
  items: GalleryItem[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function GalleryPageContent({ items }: GalleryPageContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category.toLowerCase() === activeCategory);

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Photographs from teachings, sittings, retreats, outreach, service, and life in community."
      />

      <section className="section bg-cream">
        <div className="wrap">
          <SectionHeader
            label="Photographs"
            title="The work in lived moments"
            subtitle="A small archive from retreats, teachings, outreach, community days, and ordinary days at the centres."
            className="mb-10"
          />

          <div className="filter-pills mb-6 justify-center" role="group" aria-label="Filter photographs">
            {CATEGORIES.map((cat) => (
              <button key={cat.value} aria-pressed={activeCategory === cat.value} onClick={() => setActiveCategory(cat.value)}>
                {cat.label}
              </button>
            ))}
          </div>

          <p className="mb-10 text-center text-sm text-muted">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'photograph' : 'photographs'}
          </p>

          {filteredItems.length > 0 ? (
            <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="group mb-8 block w-full break-inside-avoid text-left"
                  onClick={() => setSelectedItem(item)}
                  aria-label={`Open ${item.title}`}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-card bg-sand"
                    style={{ paddingBottom: item.id.charCodeAt(item.id.length - 1) % 2 === 0 ? '120%' : '75%' }}
                  >
                    <Image
                      src={item.thumbnail || item.url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
                      {item.category}
                    </span>
                    <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-navy/55 p-3 text-white backdrop-blur-sm">
                        <MagnifyingGlassPlus size={24} weight="light" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                  <span className="block pt-4">
                    <span className="block font-serif text-xl leading-snug text-navy">{item.title}</span>
                    {item.description && (
                      <span className="mt-1 block text-sm leading-relaxed text-muted line-clamp-2">{item.description}</span>
                    )}
                    <span className="mt-2 block text-xs text-muted">{formatDate(item.date)}</span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <Images size={48} weight="light" className="mx-auto mb-4 block text-gold-ink" aria-hidden="true" />
              <h3 className="mb-2 text-3xl">Nothing here yet</h3>
              <p className="mb-6 text-muted">Photographs from this category haven&rsquo;t been added yet.</p>
              {activeCategory !== 'all' && (
                <button onClick={() => setActiveCategory('all')} className="text-link cursor-pointer">
                  View all photos
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(0, 11, 88, 0.92)' }}
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute right-4 top-4 z-10 text-white/80 transition-colors hover:text-white sm:right-6 sm:top-6"
            aria-label="Close lightbox"
          >
            <X size={32} weight="light" aria-hidden="true" />
          </button>

          <div className="relative w-full max-w-2xl overflow-hidden rounded-card bg-cream" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ paddingBottom: '62%' }}>
              <Image src={selectedItem.url} alt={selectedItem.title} fill className="object-cover" sizes="(max-width: 672px) 100vw, 672px" />
            </div>
            <div className="p-7">
              <p className="eyebrow">{selectedItem.category}</p>
              <h2 className="mt-2 text-3xl">{selectedItem.title}</h2>
              {selectedItem.description && <p className="mt-3 leading-relaxed text-muted">{selectedItem.description}</p>}
              <p className="mt-3 text-xs text-muted">{formatDate(selectedItem.date)}</p>
              <button onClick={() => setSelectedItem(null)} className="text-link mt-5 cursor-pointer">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
