import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = { title: 'InnerSpace — structured study', description: 'Explore InnerSpace, Dr. Baffour Jan’s structured study path, or begin with freely available public teachings.' };

export default function InnerSpacePage() {
  return <>
    <PageHero title="Study with InnerSpace" subtitle="A structured path for seekers ready to study consistently, enter more deeply into practice, and receive guidance." />
    <section className="section"><div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
      <figure><Image src="/images/studentinmeditation.jpg" alt="Foundation members seated in meditation" width={1200} height={900} className="rounded-card w-full h-auto" priority /></figure>
      <div><h2 className="text-3xl sm:text-4xl">A regular rhythm of study and practice</h2><p className="text-lg text-muted mt-5">Public talks give you a place to begin listening. InnerSpace is for those who want to work with the teaching more steadily: lessons that build on one another, guided meditations and exercises, and a rhythm of practice to return to.</p><p className="text-lg text-muted mt-5">The aim is to let knowledge become experience. Study and practice go together, giving you time to explore consciousness, the Self, and the balanced state in daily life.</p><h3 className="text-2xl mt-8">Before you join</h3><p className="text-muted mt-3">Visit the course page for current availability, the study format, enrolment details, and any fees or prerequisites. The course is hosted on drbaffourjan.com.</p><a href="https://www.drbaffourjan.com/inner-space" target="_blank" rel="noopener noreferrer" className="button mt-6">View InnerSpace course details ↗</a><p className="form-note mt-3">Opens Dr. Jan’s teaching website in a new tab.</p><div className="border-t border-line mt-8 pt-6"><h3 className="text-2xl">New to the teachings?</h3><p className="mt-3 text-muted">You can listen to public talks for as long as they are useful to you. Explore InnerSpace when you want a more sustained course of study.</p><Link href="/teachings" className="text-link mt-4">Explore public teachings</Link></div></div>
    </div></section>
  </>;
}
