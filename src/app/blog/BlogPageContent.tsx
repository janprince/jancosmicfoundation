'use client';

import { useState, useMemo } from 'react';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import BlogCard from '@/components/cards/BlogCard';
import type { BlogPost } from '@/types';

const ALL_LABEL = 'All';

interface BlogPageContentProps {
  posts: BlogPost[];
}

export default function BlogPageContent({ posts }: BlogPageContentProps) {
  // Extract unique categories, preserving insertion order
  const categories = useMemo(() => {
    const seen = new Set<string>();
    const cats: string[] = [ALL_LABEL];
    for (const post of posts) {
      if (!seen.has(post.category)) {
        seen.add(post.category);
        cats.push(post.category);
      }
    }
    return cats;
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);

  const visiblePosts =
    activeCategory === ALL_LABEL
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero
        title="Blog"
        subtitle="Insights, stories, and practical wisdom from the Jan Cosmic Foundation community — on meditation, service, wellbeing, and conscious living."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + category filters */}
          <div className="flex flex-col gap-8 mb-12">
            <SectionHeader
              label="From the Community"
              title="Latest Articles"
              subtitle="Explore our growing library of writing from teachers, volunteers, and community members."
            />

            {/* Category filter tabs */}
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Filter posts by category"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === ALL_LABEL
                    ? posts.length
                    : posts.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer"
                    style={
                      isActive
                        ? {
                            backgroundColor: '#2D6A4F',
                            color: '#FDFBF7',
                            boxShadow: '0 2px 8px rgba(45,106,79,0.3)',
                          }
                        : {
                            backgroundColor: '#F2EFE9',
                            color: '#1a1a1abf',
                          }
                    }
                  >
                    {cat}
                    <span
                      className="rounded-full px-1.5 py-0.5 text-xs font-semibold leading-none"
                      style={
                        isActive
                          ? { backgroundColor: 'rgba(212,168,67,0.3)', color: '#D4A843' }
                          : { backgroundColor: 'rgba(0,0,0,0.07)', color: '#1a1a1abf' }
                      }
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts grid */}
          {visiblePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visiblePosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Pagination placeholder */}
              <div className="mt-14 flex items-center justify-center gap-2" aria-label="Pagination">
                <span
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: '#2D6A4F', color: '#FDFBF7' }}
                >
                  1
                </span>
                <span
                  className="px-3 py-2 rounded-lg text-sm"
                  style={{ color: '#1a1a1a40' }}
                >
                  — Showing all {visiblePosts.length} {activeCategory !== ALL_LABEL ? `"${activeCategory}" ` : ''}posts
                </span>
              </div>
            </>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(45,106,79,0.08)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2D6A4F" className="w-9 h-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#000B58' }}>
                No posts in this category
              </h3>
              <p className="text-base max-w-sm mb-6" style={{ color: '#1a1a1abf' }}>
                We have not published any posts under &ldquo;{activeCategory}&rdquo; yet. Check back soon or browse all articles.
              </p>
              <button
                onClick={() => setActiveCategory(ALL_LABEL)}
                className="text-sm font-semibold underline underline-offset-2 cursor-pointer"
                style={{ color: '#2D6A4F' }}
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
