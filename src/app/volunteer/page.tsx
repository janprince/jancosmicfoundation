import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import VolunteerForm from '@/components/forms/VolunteerForm';
import { getCentres, getVolunteerOpportunities } from '@/lib/api';

export const metadata: Metadata = { title: 'Volunteer', description: 'Offer your time and skills to Jan Cosmic Foundation. Explore current opportunities and contact the volunteer team.' };

export default async function VolunteerPage({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
  const { role: selectedRole } = await searchParams;
  const [centres, opportunities] = await Promise.all([getCentres(), getVolunteerOpportunities()]);
  return <>
    <PageHero title="Offer your time and skills" subtitle="Help with teachings, community activities, media, or practical service. Tell us what you can offer and the team will discuss a suitable way to take part." />
    <section className="section"><div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div><h2 className="text-3xl sm:text-4xl">Volunteering with JCF</h2><p className="mt-5 text-muted">You can express an interest in a current role or tell us about another way you would like to help. Include your availability and whether you can join a local community or contribute remotely.</p><a href="#volunteer-form" className="button mt-6 lg:hidden">Send a volunteer enquiry</a>
        {opportunities.length > 0 && <div className="mt-10"><h3 className="text-2xl">Current opportunities</h3>{opportunities.map(role => <article key={role.id} className="border-t border-line pt-6 mt-6"><h4 className="text-2xl">{role.title}</h4><p className="mt-3 text-muted">{role.description}</p><dl className="mt-4 text-sm"><div className="flex gap-3"><dt className="font-medium">Location</dt><dd>{role.location}</dd></div><div className="flex gap-3 mt-2"><dt className="font-medium">Time</dt><dd>{role.commitment}</dd></div></dl><Link href={`/volunteer?role=${encodeURIComponent(role.title)}#volunteer-form`} className="text-link mt-5">Enquire about this role</Link></article>)}</div>}
        <div className="mt-10 border-t border-line pt-6"><h3 className="text-2xl">What happens next?</h3><p className="mt-3 text-muted">The team will review your enquiry and contact you to discuss availability and the work involved. Sending this form does not commit you to a role.</p><Link href="/programs" className="text-link mt-5">Explore our work</Link></div>
      </div>
      <div id="volunteer-form"><h2 className="text-3xl mb-6">Tell us about yourself</h2><div className="rounded-card bg-white border border-line p-6 sm:p-8"><VolunteerForm key={selectedRole || "general"} centres={centres} opportunities={opportunities} initialRole={opportunities.some(role => role.title === selectedRole) ? selectedRole : ""} /></div></div>
    </div></section>
  </>;
}
