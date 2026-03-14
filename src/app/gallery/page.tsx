'use client';

import { useState } from 'react';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import { getGalleryItems } from '@/lib/api';
import type { GalleryItem } from '@/types';

const CATEGORIES = [
  { label: 'All', value: 'all' },
  { label: 'Events', value: 'events' },
  { label: 'Community', value: 'community' },
  { label: 'Spiritual', value: 'spiritual' },
  { label: 'Centres', value: 'centres' },
];

export default function GalleryPage() {
  const allItems = getGalleryItems();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter(
          (item) => item.category.toLowerCase() === activeCategory,
        );

  const gradients: Record<string, string> = {
    events: 'from-[#000B58] to-[#2D6A4F]',
    community: 'from-[#2D6A4F] to-[#D4A843]',
    spiritual: 'from-[#000B58] to-[#C05021]',
    centres: 'from-[#D4A843] to-[#C05021]',
  };

  const getGradient = (category: string) =>
    gradients[category.toLowerCase()] ?? 'from-[#000B58] to-[#2D6A4F]';

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments of community, service, and spiritual life from across the Jan Cosmic Foundation."
      />

      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <SectionHeader
            label="Our Gallery"
            title="Life at JCF"
            subtitle="Browse photographs from retreats, community days, spiritual gatherings, and centre activities."
            className="mb-10"
          />

          {/* Category filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={[
                  'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border-2',
                  activeCategory === cat.value
                    ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] shadow-md shadow-[#2D6A4F]/20'
                    : 'bg-white text-[#000B58] border-[#2D6A4F]/20 hover:border-[#2D6A4F] hover:text-[#2D6A4F]',
                ].join(' ')}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Item count */}
          <p className="text-center text-sm text-gray-500 mb-8">
            Showing{' '}
            <span className="font-semibold text-[#2D6A4F]">
              {filteredItems.length}
            </span>{' '}
            {filteredItems.length === 1 ? 'item' : 'items'}
          </p>

          {/* Masonry grid */}
          {filteredItems.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="break-inside-avoid mb-5 group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image placeholder with gradient */}
                    <div
                      className={[
                        'w-full bg-gradient-to-br relative overflow-hidden',
                        getGradient(item.category),
                      ].join(' ')}
                      style={{
                        paddingBottom: item.id.charCodeAt(item.id.length - 1) % 2 === 0 ? '75%' : '60%',
                      }}
                    >
                      {/* Decorative overlay pattern */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 40%)',
                        }}
                      />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-[#000B58] text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                          {item.category}
                        </span>
                      </div>
                      {/* Click to expand hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/40 backdrop-blur-sm rounded-full p-3">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#000B58] group-hover:text-[#2D6A4F] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="mt-1 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      <p className="mt-2 text-xs text-gray-400">
                        {new Date(item.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox overlay */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: 'rgba(0, 11, 88, 0.92)' }}
          onClick={() => setSelectedItem(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Lightbox card — stop propagation so clicking card doesn't close */}
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full-size image placeholder */}
            <div
              className={[
                'w-full bg-gradient-to-br relative',
                getGradient(selectedItem.category),
              ].join(' ')}
              style={{ paddingBottom: '62%' }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.25) 0%, transparent 45%)',
                }}
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-[#000B58] text-xs font-semibold px-3 py-1 rounded-full capitalize">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#000B58]">
                {selectedItem.title}
              </h2>
              {selectedItem.description && (
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              )}
              <p className="mt-3 text-xs text-gray-400">
                {new Date(selectedItem.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-4 text-sm text-[#2D6A4F] font-medium hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
