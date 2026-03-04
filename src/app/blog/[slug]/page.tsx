import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import Badge from '@/components/ui/Badge';
import BlogCard from '@/components/cards/BlogCard';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Related posts: same category, excluding current post, max 3
  const relatedPosts = getBlogPosts(post.category)
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
          style={{ color: '#2D6A4F' }}
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
              <span className="text-sm" style={{ color: '#1a1a1a60' }}>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: '#1a1a1a30' }} />
              <span className="text-sm" style={{ color: '#1a1a1a60' }}>{post.readTime}</span>
            </div>

            {/* Author info */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-8"
              style={{ backgroundColor: '#F2EFE9' }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                style={{ backgroundColor: 'rgba(45,106,79,0.15)', color: '#2D6A4F', border: '2px solid rgba(45,106,79,0.25)' }}
              >
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#000B58' }}>
                  {post.author.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#1a1a1a70' }}>
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
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#1a1a1a60' }}>
                  Tagged
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ backgroundColor: 'rgba(45,106,79,0.08)', color: '#2D6A4F' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share buttons (visual only) */}
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#1a1a1a60' }}>
                Share this article
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  {
                    label: 'Share on X',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                    bg: '#000000',
                  },
                  {
                    label: 'Share on Facebook',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                    bg: '#1877F2',
                  },
                  {
                    label: 'Share on WhatsApp',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.003-1.366l-.36-.213-3.732.975.999-3.645-.235-.375A9.818 9.818 0 0 1 2.182 12c0-5.426 4.392-9.818 9.818-9.818 5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
                      </svg>
                    ),
                    bg: '#25D366',
                  },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    aria-label={btn.label}
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:opacity-85 cursor-pointer"
                    style={{ backgroundColor: btn.bg }}
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-24"
              style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,11,88,0.08)', boxShadow: '0 4px 24px rgba(0,11,88,0.05)' }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5 pb-4" style={{ color: '#000B58', borderBottom: '1px solid rgba(0,11,88,0.08)' }}>
                Article Info
              </h3>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#2D6A4F' }}>Author</dt>
                  <dd style={{ color: '#000B58' }} className="font-medium">{post.author.name}</dd>
                  <dd style={{ color: '#1a1a1a70' }} className="text-xs mt-0.5">{post.author.role}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#2D6A4F' }}>Published</dt>
                  <dd style={{ color: '#000B58' }}>{formattedDate}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#2D6A4F' }}>Reading Time</dt>
                  <dd style={{ color: '#000B58' }}>{post.readTime}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#2D6A4F' }}>Category</dt>
                  <dd><Badge variant="secondary">{post.category}</Badge></dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-14" style={{ borderTop: '2px solid rgba(0,11,88,0.07)' }}>
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#000B58' }}>
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
            style={{ color: '#2D6A4F' }}
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
