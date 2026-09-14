'use client';

import { useState, useMemo } from 'react';
import { Notebook } from '@phosphor-icons/react';
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
    <div className="bg-cream">
      <PageHero
        title="Writings"
        subtitle="Teachings, reflections, retreat notes, service insights, and writing from the Foundation."
      />

      <section className="section">
        <div className="wrap">
          <div className="mb-14 flex flex-col items-center gap-8">
            <SectionHeader
              label="From the Foundation"
              title="Recent writing"
              subtitle="Some pieces begin as talks, some as questions, some as quiet notes from practice and service. Read what meets you where you are."
            />
            {categories.length > 2 && <div className="filter-pills justify-center" role="group" aria-label="Filter writings by category">
              {categories.map((cat) => {
                const count = cat === ALL_LABEL ? posts.length : posts.filter((p) => p.category === cat).length;
                return (
                  <button key={cat} aria-pressed={activeCategory === cat} onClick={() => setActiveCategory(cat)}>
                    {cat}
                    <span className="count">{count}</span>
                  </button>
                );
              })}
            </div>}
          </div>

          {visiblePosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {visiblePosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              <p className="mt-10 text-sm text-muted" role="status">
                Showing all {visiblePosts.length} {activeCategory !== ALL_LABEL ? `“${activeCategory}” ` : ''}posts
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Notebook size={48} weight="light" className="mb-5 text-gold-ink" aria-hidden="true" />
              <h3 className="mb-2 text-3xl">Nothing here yet</h3>
              <p className="mb-6 max-w-sm text-muted">
                We haven&rsquo;t written anything under &ldquo;{activeCategory}&rdquo; yet. Browse the rest of the writing in the meantime.
              </p>
              <button onClick={() => setActiveCategory(ALL_LABEL)} className="text-link cursor-pointer">
                View all posts
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
