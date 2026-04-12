import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import Badge from '@/components/ui/Badge';
import BlogCard from '@/components/cards/BlogCard';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api';
import ShareButtons from '@/components/blog/ShareButtons';

/**
 * Extract a YouTube video ID from short-links (youtu.be/ID)
 * or standard URLs (youtube.com/watch?v=ID).
 */
function getYouTubeId(url: string): string | null {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  const longMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  return longMatch?.[1] ?? null;
}

const SITE_URL = 'https://jancosmicfoundation.org';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const url = `${SITE_URL}/blog/${post.slug}`;
  const description = post.excerpt.length > 160
    ? post.excerpt.slice(0, 157) + '...'
    : post.excerpt;

  return {
    title: post.title,
    description,
    keywords: [post.category, ...post.tags],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description,
      url,
      type: 'article',
      publishedTime: post.date,
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [post.image],
    },
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

  const videoId = post.videoLink ? getYouTubeId(post.videoLink) : null;

  // Related posts: same category, excluding current post, max 3
  const relatedPosts = (await getBlogPosts(post.category))
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const absoluteImage = post.image.startsWith('http')
    ? post.image
    : `${SITE_URL}${post.image}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: absoluteImage,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Jan Cosmic Foundation',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    ...(videoId
      ? {
          video: {
            '@type': 'VideoObject',
            name: post.title,
            description: post.excerpt,
            thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
            uploadDate: post.date,
          },
        }
      : {}),
  };

  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero title={post.title} subtitle={post.excerpt} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Article body */}
          <article className="lg:col-span-2">
            {/* Post image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-sm" style={{ color: '#1a1a1abf' }}>{formattedDate}</span>
              <span className="w-1 h-1 rounded-full inline-block" style={{ backgroundColor: '#1a1a1a30' }} />
              <span className="text-sm" style={{ color: '#1a1a1abf' }}>{post.readTime}</span>
            </div>

            {/* Video transcription notice */}
            {videoId && (
              <div
                className="flex items-start gap-3 rounded-xl p-4 mb-8"
                style={{ backgroundColor: '#F2EFE9', border: '1px solid rgba(0,11,88,0.06)' }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: 'rgba(212,168,67,0.15)' }}
                >
                  <svg className="h-4 w-4 text-[#D4A843]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: '#000B58' }}>
                    Transcribed from video
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#1a1a1abf' }}>
                    This article was derived from a teaching on our YouTube channel. Watch the original video below.
                  </p>
                </div>
              </div>
            )}

            {/* Article content */}
            <div
              className="prose prose-sm sm:prose-base max-w-none leading-relaxed"
              style={{ color: '#1a1a1a' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Embedded YouTube video */}
            {videoId && (
              <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(0,11,88,0.08)' }}>
                <div className="mb-4 flex items-center gap-2">
                  <svg className="h-5 w-5 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                  </svg>
                  <h3 className="text-lg font-semibold" style={{ color: '#000B58' }}>
                    Watch the Teaching
                  </h3>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title={post.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

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
                {videoId && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-primary)' }}>Source</dt>
                    <dd>
                      <a
                        href={post.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75"
                        style={{ color: '#000B58' }}
                      >
                        <svg className="h-4 w-4 text-red-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                        </svg>
                        Watch on YouTube
                      </a>
                    </dd>
                  </div>
                )}
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
