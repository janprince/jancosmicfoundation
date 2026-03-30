'use client';

import { useState } from 'react';
import Image from 'next/image';
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

export default function GalleryPageContent({ items }: GalleryPageContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter(
          (item) => item.category.toLowerCase() === activeCategory,
        );

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
                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                    : 'bg-white text-[#000B58] border-primary/20 hover:border-primary hover:text-primary',
                ].join(' ')}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Item count */}
          <p className="text-center text-sm text-gray-500 mb-8">
            Showing{' '}
            <span className="font-semibold text-primary">
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
                    {/* Gallery image */}
                    <div
                      className="w-full relative overflow-hidden"
                      style={{
                        paddingBottom: item.id.charCodeAt(item.id.length - 1) % 2 === 0 ? '75%' : '60%',
                      }}
                    >
                      <Image
                        src={item.thumbnail || item.url}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-[#000B58] text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                          {item.category}
                        </span>
                      </div>
                      {/* Click to expand hint */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
                      <h3 className="text-sm font-semibold text-[#000B58] group-hover:text-primary transition-colors leading-snug">
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">No photos in this category</h3>
              <p className="text-sm text-gray-500 mb-6">Check back soon for updates.</p>
              {activeCategory !== 'all' && (
                <button
                  onClick={() => setActiveCategory('all')}
                  className="text-sm font-semibold underline underline-offset-2 cursor-pointer"
                  style={{ color: 'var(--color-primary)' }}
                >
                  View all photos
                </button>
              )}
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
            {/* Full-size image */}
            <div className="w-full relative" style={{ paddingBottom: '62%' }}>
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 672px) 100vw, 672px"
              />
              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
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
                className="mt-4 text-sm text-primary font-medium hover:underline"
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
