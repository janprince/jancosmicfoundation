export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  address?: string;
  image: string;
  category: string;
  isPast: boolean;
  registrationUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface Cause {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  gallery?: string[];
  goalAmount: number;
  raisedAmount: number;
  currency: string;
  donorsCount: number;
  category: string;
  isActive: boolean;
}

export interface Centre {
  id: string;
  slug: string;
  name: string;
  location: string;
  address: string;
  country: string;
  image: string;
  description: string;
  memberCount: number;
  leader: {
    name: string;
    avatar: string;
    title: string;
  };
  contactEmail: string;
  contactPhone: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  thumbnail: string;
  type: 'image' | 'video';
  category: string;
  date: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  location: string;
  commitment: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  icon: string;
  category: 'spiritual' | 'education' | 'community' | 'humanitarian';
  isActive: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  centrePreference: string;
  skills: string;
  availability: string;
  message?: string;
}

export interface JoinCentreFormData {
  name: string;
  email: string;
  phone: string;
  centreId: string;
  message?: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
