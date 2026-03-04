import Link from 'next/link';
import { getBlogPosts } from '@/lib/api';
import SectionHeader from '@/components/ui/SectionHeader';
import BlogCard from '@/components/cards/BlogCard';

export default function RecentBlog() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className="bg-[#FDFBF7] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          label="From Our Blog"
          title="Latest Stories"
          subtitle="Insights, testimonials, and reflections from our global community of healers, volunteers, and seekers."
          className="mb-12"
        />

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#2D6A4F] px-7 py-3 text-sm font-semibold text-[#2D6A4F] transition-all duration-300 hover:bg-[#2D6A4F] hover:text-white hover:shadow-lg hover:shadow-[#2D6A4F]/20 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2"
          >
            Read More Stories
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
      </div>
    </section>
  );
}
