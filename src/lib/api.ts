import type {
  Event,
  BlogPost,
  Cause,
  Centre,
  GalleryItem,
  VolunteerOpportunity,
  Testimonial,
  TeamMember,
  ImpactStat,
  Program,
  ContactFormData,
  VolunteerFormData,
  JoinCentreFormData,
  NewsletterFormData,
} from '@/types';
import * as mock from './mock-data';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.jancosmicfoundation.org/api';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

async function fetchAPI<T>(
  path: string,
  options?: { revalidate?: number },
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate: options?.revalidate ?? 60 },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

/**
 * Wraps fetchAPI with a fallback value so server components don't throw
 * (and trigger an infinite re-render loop) when the API is unreachable.
 */
async function fetchWithFallback<T>(
  path: string,
  fallback: T,
  options?: { revalidate?: number },
): Promise<T> {
  try {
    return await fetchAPI<T>(path, options);
  } catch {
    console.warn(`[api] ${API_URL}${path} unreachable — using fallback data`);
    return fallback;
  }
}

// ---------------------------------------------------------------------------
// Transform helpers — map backend snake_case to frontend camelCase
// ---------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-explicit-any */
function transformEvent(raw: any): Event {
  return {
    id: String(raw.id),
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    content: raw.content,
    date: raw.date,
    endDate: raw.end_date ?? undefined,
    time: raw.formatted_time ?? raw.time,
    location: raw.location,
    address: raw.address ?? undefined,
    image: raw.image_url ?? raw.image ?? '/images/student-in-yoga-posture.jpg',
    category: raw.category_name ?? '',
    isPast: raw.is_past ?? false,
    registrationUrl: raw.registration_url ?? undefined,
  };
}

function transformBlogPost(raw: any): BlogPost {
  return {
    id: String(raw.id),
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt ?? '',
    content: raw.content ?? '',
    image: raw.image_url ?? raw.image ?? '/images/masterseated.jpg',
    author: {
      name: raw.author?.name ?? '',
      avatar: raw.author?.avatar_url ?? raw.author?.avatar ?? '/images/doc-jcf.jpg',
      role: raw.author?.role ?? '',
    },
    date: raw.published_date ?? raw.date ?? '',
    category: raw.category_name ?? '',
    tags: raw.tags ?? [],
    readTime: raw.read_time ?? '',
  };
}

function transformCause(raw: any): Cause {
  return {
    id: String(raw.id),
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    content: raw.content ?? '',
    image: raw.image_url ?? raw.image ?? '/images/students-sitting-down-on-grass.jpg',
    gallery: raw.gallery ?? [],
    goalAmount: Number(raw.goal_amount),
    raisedAmount: Number(raw.raised_amount ?? 0),
    currency: raw.currency ?? 'GHS',
    donorsCount: Number(raw.donors_count ?? 0),
    category: raw.category_name ?? '',
    isActive: raw.is_active ?? true,
  };
}

function transformCentre(raw: any): Centre {
  return {
    id: String(raw.id),
    slug: raw.slug,
    name: raw.name,
    location: raw.location,
    address: raw.address ?? '',
    country: raw.country ?? '',
    image: raw.image_url ?? raw.image ?? '/images/group-of-students.jpg',
    description: raw.description ?? '',
    memberCount: raw.member_count ?? 0,
    leader: {
      name: raw.leader?.name ?? '',
      avatar: raw.leader?.avatar ?? '/images/doc-jcf.jpg',
      title: raw.leader?.title ?? '',
    },
    contactEmail: raw.contact_email ?? '',
    contactPhone: raw.contact_phone ?? '',
    coordinates:
      raw.coordinates ?? undefined,
  };
}

function transformGalleryItem(raw: any): GalleryItem {
  return {
    id: String(raw.id),
    title: raw.title,
    description: raw.description ?? undefined,
    url: raw.image_url ?? raw.image ?? '/images/studentslistening.jpg',
    thumbnail: raw.thumbnail_url ?? raw.thumbnail ?? '/images/studentslistening.jpg',
    type: raw.type,
    category: raw.category,
    date: raw.date,
  };
}

function transformVolunteerOpportunity(raw: any): VolunteerOpportunity {
  return {
    id: String(raw.id),
    title: raw.title,
    description: raw.description,
    location: raw.location,
    commitment: raw.commitment,
    skills: raw.skills ?? [],
  };
}

function transformTestimonial(raw: any): Testimonial {
  return {
    id: String(raw.id),
    name: raw.name,
    role: raw.role,
    avatar: raw.avatar_url ?? raw.avatar ?? '/images/doc-jcf.jpg',
    quote: raw.quote,
  };
}

function transformTeamMember(raw: any): TeamMember {
  return {
    id: String(raw.id),
    name: raw.name,
    role: raw.role,
    bio: raw.bio,
    image: raw.image_url ?? raw.image ?? '/images/doc-potrait.jpg',
  };
}

function transformImpactStat(raw: any): ImpactStat {
  return {
    label: raw.label,
    value: raw.value,
    suffix: raw.suffix ?? undefined,
    prefix: raw.prefix ?? undefined,
  };
}
function transformProgram(raw: any): Program {
  return {
    id: String(raw.id),
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    content: raw.content ?? '',
    image: raw.image_url ?? raw.image ?? '/images/teaching.jpg',
    icon: raw.icon ?? 'lotus',
    category: raw.category ?? 'spiritual',
    isActive: raw.is_active ?? true,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

export async function getEvents(filter?: 'upcoming' | 'past'): Promise<Event[]> {
  const query = filter ? `?filter=${filter}` : '';
  const fallback: PaginatedResponse<unknown> = { count: 0, next: null, previous: null, results: [] };
  const data = await fetchWithFallback<PaginatedResponse<unknown>>(`/events/${query}`, fallback);
  if (data.results.length === 0 && mock.events.length > 0) return mock.events;
  return data.results.map(transformEvent);
}

export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  try {
    const raw = await fetchAPI<unknown>(`/events/${slug}/`);
    return transformEvent(raw);
  } catch {
    return mock.events.find((e) => e.slug === slug);
  }
}

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  const fallback: PaginatedResponse<unknown> = { count: 0, next: null, previous: null, results: [] };
  const data = await fetchWithFallback<PaginatedResponse<unknown>>(`/posts/${query}`, fallback);
  if (data.results.length === 0 && mock.blogPosts.length > 0) return mock.blogPosts;
  return data.results.map(transformBlogPost);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const raw = await fetchAPI<unknown>(`/posts/${slug}/`);
    return transformBlogPost(raw);
  } catch {
    return mock.blogPosts.find((p) => p.slug === slug);
  }
}

// ---------------------------------------------------------------------------
// Causes
// ---------------------------------------------------------------------------

export async function getCauses(): Promise<Cause[]> {
  const fallback: PaginatedResponse<unknown> = { count: 0, next: null, previous: null, results: [] };
  const data = await fetchWithFallback<PaginatedResponse<unknown>>('/causes/', fallback);
  if (data.results.length === 0 && mock.causes.length > 0) return mock.causes;
  return data.results.map(transformCause);
}

export async function getCauseBySlug(slug: string): Promise<Cause | undefined> {
  try {
    const raw = await fetchAPI<unknown>(`/causes/${slug}/`);
    return transformCause(raw);
  } catch {
    return mock.causes.find((c) => c.slug === slug);
  }
}

// ---------------------------------------------------------------------------
// Centres
// ---------------------------------------------------------------------------

export async function getCentres(): Promise<Centre[]> {
  const fallback: PaginatedResponse<unknown> = { count: 0, next: null, previous: null, results: [] };
  const data = await fetchWithFallback<PaginatedResponse<unknown>>('/centres/', fallback);
  if (data.results.length === 0 && mock.centres.length > 0) return mock.centres;
  return data.results.map(transformCentre);
}

export async function getCentreBySlug(slug: string): Promise<Centre | undefined> {
  try {
    const raw = await fetchAPI<unknown>(`/centres/${slug}/`);
    return transformCentre(raw);
  } catch {
    return mock.centres.find((c) => c.slug === slug);
  }
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export async function getGalleryItems(category?: string): Promise<GalleryItem[]> {
  const query = category ? `?category=${encodeURIComponent(category)}` : '';
  const fallback: PaginatedResponse<unknown> = { count: 0, next: null, previous: null, results: [] };
  const data = await fetchWithFallback<PaginatedResponse<unknown>>(`/gallery/${query}`, fallback);
  if (data.results.length === 0 && mock.galleryItems.length > 0) return mock.galleryItems;
  return data.results.map(transformGalleryItem);
}

// ---------------------------------------------------------------------------
// Website content (no pagination)
// ---------------------------------------------------------------------------

export async function getVolunteerOpportunities(): Promise<VolunteerOpportunity[]> {
  const data = await fetchWithFallback<unknown[]>('/volunteer-opportunities/', []);
  if (data.length === 0 && mock.volunteerOpportunities.length > 0) return mock.volunteerOpportunities;
  return data.map(transformVolunteerOpportunity);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchWithFallback<unknown[]>('/testimonials/', []);
  if (data.length === 0 && mock.testimonials.length > 0) return mock.testimonials;
  return data.map(transformTestimonial);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await fetchWithFallback<unknown[]>('/team/', []);
  if (data.length === 0 && mock.teamMembers.length > 0) return mock.teamMembers;
  return data.map(transformTeamMember);
}

export async function getImpactStats(): Promise<ImpactStat[]> {
  const data = await fetchWithFallback<unknown[]>('/impact-stats/', []);
  if (data.length === 0 && mock.impactStats.length > 0) return mock.impactStats;
  return data.map(transformImpactStat);
}

// ---------------------------------------------------------------------------
// Programs
// ---------------------------------------------------------------------------

export async function getPrograms(): Promise<Program[]> {
  const data = await fetchWithFallback<unknown[]>('/programs/', []);
  if (data.length === 0 && mock.programs.length > 0) return mock.programs;
  return data.map(transformProgram);
}

export async function getProgramBySlug(slug: string): Promise<Program | undefined> {
  try {
    const raw = await fetchAPI<unknown>(`/programs/${slug}/`);
    return transformProgram(raw);
  } catch {
    return mock.programs.find((p) => p.slug === slug);
  }
}

// ---------------------------------------------------------------------------
// Form submissions (POST)
// ---------------------------------------------------------------------------

async function postAPI<T>(path: string, body: T): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      return { ok: false, error: JSON.stringify(err) };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error' };
  }
}

export async function submitContactForm(data: ContactFormData) {
  return postAPI('/contact/', data);
}

export async function submitVolunteerApplication(data: VolunteerFormData) {
  return postAPI('/volunteer-apply/', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    centre_preference: data.centrePreference,
    skills: data.skills,
    availability: data.availability,
    message: data.message ?? '',
  });
}

export async function submitJoinCentreRequest(data: JoinCentreFormData) {
  return postAPI('/join-centre/', {
    name: data.name,
    email: data.email,
    phone: data.phone,
    centre: data.centreId,
    message: data.message ?? '',
  });
}

export async function submitNewsletter(data: NewsletterFormData) {
  return postAPI('/newsletter/', data);
}

export async function verifyDonation(data: {
  reference: string;
  cause_id: string;
}): Promise<{ ok: boolean; error?: string }> {
  return postAPI('/donations/verify/', data);
}
