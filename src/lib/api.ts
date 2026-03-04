import type { Event, BlogPost, Cause, Centre, GalleryItem } from '@/types';
import {
  events as allEvents,
  blogPosts as allBlogPosts,
  causes as allCauses,
  centres as allCentres,
  galleryItems as allGalleryItems,
} from './mock-data';

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

/**
 * Returns all events, optionally filtered to upcoming or past events only.
 *
 * @param filter - 'upcoming' returns only future events; 'past' returns only
 *   past events; omit to return all events.
 */
export function getEvents(filter?: 'upcoming' | 'past'): Event[] {
  if (filter === 'upcoming') {
    return allEvents.filter((event) => !event.isPast);
  }
  if (filter === 'past') {
    return allEvents.filter((event) => event.isPast);
  }
  return allEvents;
}

/**
 * Returns a single event matched by slug, or undefined if not found.
 */
export function getEventBySlug(slug: string): Event | undefined {
  return allEvents.find((event) => event.slug === slug);
}

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

/**
 * Returns all blog posts, optionally filtered by category (case-insensitive).
 *
 * @param category - The category string to filter by. Omit to return all posts.
 */
export function getBlogPosts(category?: string): BlogPost[] {
  if (!category) {
    return allBlogPosts;
  }
  const normalised = category.toLowerCase();
  return allBlogPosts.filter(
    (post) => post.category.toLowerCase() === normalised,
  );
}

/**
 * Returns a single blog post matched by slug, or undefined if not found.
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}

// ---------------------------------------------------------------------------
// Causes
// ---------------------------------------------------------------------------

/**
 * Returns all donation causes.
 */
export function getCauses(): Cause[] {
  return allCauses;
}

/**
 * Returns a single cause matched by slug, or undefined if not found.
 */
export function getCauseBySlug(slug: string): Cause | undefined {
  return allCauses.find((cause) => cause.slug === slug);
}

// ---------------------------------------------------------------------------
// Centres
// ---------------------------------------------------------------------------

/**
 * Returns all JCF centres.
 */
export function getCentres(): Centre[] {
  return allCentres;
}

/**
 * Returns a single centre matched by slug, or undefined if not found.
 */
export function getCentreBySlug(slug: string): Centre | undefined {
  return allCentres.find((centre) => centre.slug === slug);
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

/**
 * Returns all gallery items, optionally filtered by category (case-insensitive).
 *
 * Known categories in the mock data: 'events', 'community', 'spiritual', 'centres'.
 *
 * @param category - The category string to filter by. Omit to return all items.
 */
export function getGalleryItems(category?: string): GalleryItem[] {
  if (!category) {
    return allGalleryItems;
  }
  const normalised = category.toLowerCase();
  return allGalleryItems.filter(
    (item) => item.category.toLowerCase() === normalised,
  );
}
