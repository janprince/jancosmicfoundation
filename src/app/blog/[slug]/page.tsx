import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Badge from '@/components/ui/Badge';
import BlogCard from '@/components/cards/BlogCard';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api';
import ShareButtons from '@/components/blog/ShareButtons';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Related posts: same category, excluding current post, max 3
  const relatedPosts = (await getBlogPosts(post.category))
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <PageHero title={post.title} subtitle={post.excerpt} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-opacity hover:opacity-75"
          style={{ color: 'var(--color-primary)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Article body */}
          <article className="lg:col-span-2">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm" style={{ color: '#1a1a1abf' }}>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: '#1a1a1a30' }} />
              <span className="text-sm" style={{ color: '#1a1a1abf' }}>{post.readTime}</span>
            </div>

            {/* Author info */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-8"
              style={{ backgroundColor: '#F2EFE9' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                style={{ backgroundColor: 'rgba(var(--color-primary-rgb),0.15)', color: 'var(--color-primary)', border: '2px solid rgba(var(--color-primary-rgb),0.25)' }}
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#000B58' }}>
                  {post.author.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#1a1a1abf' }}>
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Article content */}
            <div
              className="prose prose-sm sm:prose-base max-w-none leading-relaxed"
              style={{ color: '#1a1a1a' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#1a1a1abf' }}>
                  Tagged
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: 'rgba(var(--color-primary-rgb),0.08)', color: 'var(--color-primary)' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share buttons (visual only) */}
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#1a1a1abf' }}>
                Share this article
              </p>
              <ShareButtons title={post.title} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.08)', boxShadow: '0 4px 24px rgba(0,11,88,0.05)' }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-5 pb-4" style={{ color: '#000B58', borderBottom: '1px solid rgba(0,11,88,0.08)' }}>
                Article Info
              </h3>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>Author</dt>
                  <dd style={{ color: '#000B58' }} className="font-medium">{post.author.name}</dd>
                  <dd style={{ color: '#1a1a1abf' }} className="text-xs mt-0.5">{post.author.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>Published</dt>
                  <dd style={{ color: '#000B58' }}>{formattedDate}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>Reading Time</dt>
                  <dd style={{ color: '#000B58' }}>{post.readTime}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>Category</dt>
                  <dd><Badge variant="secondary">{post.category}</Badge></dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-14" style={{ borderTop: '2px solid rgba(0,11,88,0.07)' }}>
            <h2 className="text-2xl font-semibold mb-8" style={{ color: '#000B58' }}>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}

        {/* Bottom back link */}
        <div className="mt-14 pt-8" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-75"
            style={{ color: 'var(--color-primary)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
