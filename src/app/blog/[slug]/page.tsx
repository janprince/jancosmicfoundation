import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/layout/PageHero';
import Badge from '@/components/ui/Badge';
import BlogCard from '@/components/cards/BlogCard';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/api';
import ShareButtons from '@/components/blog/ShareButtons';
import { ArrowLeft, PlayCircle, YoutubeLogo } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/site-config';

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

const SITE_URL = siteConfig.url;

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
    <div className="bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero title={post.title} subtitle={post.excerpt} />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Article body */}
          <article className="lg:col-span-2">
            <div className="relative mb-8 aspect-video overflow-hidden rounded-card">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
              <Badge variant="secondary">{post.category}</Badge>
              <span>{formattedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            {videoId && (
              <div className="mb-10 flex items-start gap-4 rounded-card bg-sand p-5">
                <PlayCircle size={30} weight="light" className="shrink-0 text-gold-ink" aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Transcribed from video</p>
                  <p className="mt-0.5 text-sm text-muted">
                    This article was derived from a teaching on our YouTube channel. Watch the original video below.
                  </p>
                </div>
              </div>
            )}

            <div
              className="prose prose-sm max-w-none leading-relaxed text-ink sm:prose-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {videoId && (
              <div className="mt-12 border-t border-line pt-10">
                <div className="mb-5 flex items-center gap-3">
                  <YoutubeLogo size={26} weight="light" className="text-navy" aria-hidden="true" />
                  <h3 className="text-2xl">Watch the Teaching</h3>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-card">
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

            {post.tags.length > 0 && (
              <div className="mt-10 border-t border-line pt-8">
                <p className="detail-label mb-3">Tagged</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-navy/[0.06] px-3 py-1 text-xs font-medium text-navy">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 border-t border-line pt-8">
              <p className="detail-label mb-4">Share this article</p>
              <ShareButtons title={post.title} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-card border border-line bg-white p-7">
              <h3 className="mb-2 text-2xl">Article Info</h3>
              <dl className="detail-list">
                <div className="flex-col !gap-1">
                  <dt className="detail-label">Published</dt>
                  <dd className="detail-value">{formattedDate}</dd>
                </div>
                <div className="flex-col !gap-1">
                  <dt className="detail-label">Reading Time</dt>
                  <dd className="detail-value">{post.readTime}</dd>
                </div>
                <div className="flex-col !gap-2">
                  <dt className="detail-label">Category</dt>
                  <dd><Badge variant="secondary">{post.category}</Badge></dd>
                </div>
                {videoId && (
                  <div className="flex-col !gap-1">
                    <dt className="detail-label">Source</dt>
                    <dd>
                      <a
                        href={post.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-navy hover:text-violet"
                      >
                        <YoutubeLogo size={18} weight="light" aria-hidden="true" />
                        Watch on YouTube
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-24 border-t border-line pt-16">
            <h2 className="mb-10 text-4xl">Related Articles</h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}

        <div className="mt-16 border-t border-line pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-violet">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
