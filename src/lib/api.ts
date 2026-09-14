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
import { foundationPrograms } from '@/content/programmes';
import { eventHasEnded } from './event-status';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || 'https://admin.jancosmicfoundation.org/api').replace(/\/+$/, '');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

class APIError extends Error {
  constructor(public status: number) { super(`Content request failed (${status})`); }
}

async function fetchAPI<T>(path: string, options?: { revalidate?: number }): Promise<T> {
  const url = new URL(path.startsWith('http') ? path : `${API_URL}${path}`);
  const base = new URL(API_URL);
  if (url.origin !== base.origin || !url.pathname.startsWith(`${base.pathname}/`)) {
    throw new Error('Unexpected content pagination destination');
  }
  const res = await fetch(url.toString(), {
    next: { revalidate: options?.revalidate ?? 60 },
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new APIError(res.status);
  return res.json();
}

// Follow the complete published collection. Empty and unavailable are different states.
async function collection<T>(path: string): Promise<T[]> {
  const items: T[] = [];
  const seen = new Set<string>();
  let next: string | null = path;
  while (next) {
    if (seen.has(next) || seen.size >= 100) throw new Error('Invalid content pagination');
    seen.add(next);
    let page: T[] | PaginatedResponse<T>;
    try { page = await fetchAPI<T[] | PaginatedResponse<T>>(next); }
    catch (error) {
      // An optional collection that has not been installed has no published records.
      if (error instanceof APIError && error.status === 404 && items.length === 0) return [];
      throw error;
    }
    if (Array.isArray(page)) return [...items, ...page];
    items.push(...page.results);
    next = page.next ? new URL(page.next, next.startsWith('http') ? next : `${API_URL}${next}`).toString() : null;
  }
  return items;
}

async function detail<T>(path: string): Promise<T | undefined> {
  try { return await fetchAPI<T>(path); }
  catch (error) {
    if (error instanceof APIError && error.status === 404) return undefined;
    throw error;
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
    isPast: raw.is_past === true || eventHasEnded(raw.date, raw.end_date),
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
    date: raw.published_date ?? raw.date ?? '',
    category: raw.category_name ?? '',
    tags: raw.tags ?? [],
    readTime: raw.read_time ?? '',
    videoLink: raw.video_link ?? undefined,
  };
}

function transformCause(raw: any): Cause {
  const cause = {
    id: String(raw.id),
    slug: raw.slug,
    title: raw.title,
    description: raw.description,
    content: raw.content ?? '',
    image: raw.image_url ?? raw.image ?? '/images/students-sitting-down-on-grass.jpg',
    gallery: raw.gallery ?? [],
    type: raw.type ?? 'specific',
    goalAmount: Number(raw.goal_amount ?? 0),
    raisedAmount: Number(raw.raised_amount ?? 0),
    currency: raw.currency ?? 'GHS',
    donorsCount: raw.donors_count == null ? null : Number(raw.donors_count),
    category: raw.category_name ?? '',
    isActive: raw.is_active ?? true,
    impactStatement: raw.impact_statement,
  };

  return cause;
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
    memberCount: raw.member_count ?? null,
    leader: {
      name: raw.leader?.name ?? '',
      avatar: raw.leader?.avatar ?? '',
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
    url: raw.image_url || raw.image || '',
    thumbnail: raw.thumbnail_url || raw.thumbnail || raw.image_url || raw.image || '',
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
    avatar: raw.avatar_url ?? raw.avatar ?? '',
    quote: raw.quote,
  };
}

function transformTeamMember(raw: any): TeamMember {
  const member = {
    id: String(raw.id),
    name: raw.name,
    role: raw.role,
    bio: raw.bio,
    image: raw.image_url ?? raw.image ?? '',
  };

  return member;
}

function transformImpactStat(raw: any): ImpactStat {
  return {
    label: raw.label,
    value: raw.value,
    suffix: raw.suffix ?? undefined,
    prefix: raw.prefix ?? undefined,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

export async function getEvents(filter?: 'upcoming' | 'past'): Promise<Event[]> {
  // A temporarily unavailable calendar must never invent a bookable event.
  let rows: unknown[];
  try { rows = await collection<unknown>('/events/'); } catch { return []; }
  return rows.map(transformEvent)
    .filter(event => Number.isFinite(Date.parse(event.date)))
    .filter(event => !filter || (filter === 'past' ? event.isPast : !event.isPast))
    .sort((a, b) => filter === 'past' ? Date.parse(b.date) - Date.parse(a.date) : Date.parse(a.date) - Date.parse(b.date));
}

export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  const raw = await detail<unknown>(`/events/${encodeURIComponent(slug)}/`);
  return raw ? transformEvent(raw) : undefined;
}
export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
  const posts = (await collection<unknown>('/posts/')).map(transformBlogPost);
  return category ? posts.filter(post => post.category === category) : posts;
}
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const raw = await detail<unknown>(`/posts/${encodeURIComponent(slug)}/`);
  return raw ? transformBlogPost(raw) : undefined;
}
export async function getCauses(): Promise<Cause[]> {
  return (await collection<unknown>('/causes/')).map(transformCause).filter(cause => cause.isActive);
}
export async function getCauseBySlug(slug: string): Promise<Cause | undefined> {
  const raw = await detail<unknown>(`/causes/${encodeURIComponent(slug)}/`);
  const cause = raw ? transformCause(raw) : undefined;
  return cause?.isActive ? cause : undefined;
}
export async function getCentres(): Promise<Centre[]> {
  const centres = (await collection<unknown>('/centres/')).map(transformCentre);
  return centres.sort((a, b) => Number(b.slug === 'accra-ghana') - Number(a.slug === 'accra-ghana'));
}
export async function getCentreBySlug(slug: string): Promise<Centre | undefined> {
  const raw = await detail<unknown>(`/centres/${encodeURIComponent(slug)}/`);
  return raw ? transformCentre(raw) : undefined;
}
export async function getGalleryItems(category?: string): Promise<GalleryItem[]> {
  const items = (await collection<unknown>('/gallery/')).map(transformGalleryItem)
    .filter(item => item.type === 'image' && item.url);
  return category ? items.filter(item => item.category === category) : items;
}
export async function getVolunteerOpportunities(): Promise<VolunteerOpportunity[]> {
  return (await collection<unknown>('/volunteer-opportunities/')).map(transformVolunteerOpportunity);
}
export async function getTestimonials(): Promise<Testimonial[]> {
  return (await collection<unknown>('/testimonials/')).map(transformTestimonial);
}
export async function getTeamMembers(): Promise<TeamMember[]> {
  return (await collection<unknown>('/team/')).map(transformTeamMember);
}
export async function getImpactStats(): Promise<ImpactStat[]> {
  return (await collection<unknown>('/impact-stats/')).map(transformImpactStat);
}
// The public API has no programmes endpoint. This editorial collection is owned locally;
// it never overrides, merges with, or resurrects backend records.
export async function getPrograms(): Promise<Program[]> { return foundationPrograms; }
export async function getProgramBySlug(slug: string): Promise<Program | undefined> {
  return foundationPrograms.find(program => program.slug === slug);
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
      const messages = Object.entries(err).flatMap(([field, value]) => {
        const values = Array.isArray(value) ? value : [value];
        return values.filter((item): item is string => typeof item === 'string').map(message =>
          ['detail', 'non_field_errors'].includes(field) ? message : `${field.replaceAll('_', ' ')}: ${message}`);
      });
      return { ok: false, error: messages.join(' ') || 'We could not send your request. Please try again.' };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'We could not confirm receipt. Please try again or contact the Foundation by phone or email.' };
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
