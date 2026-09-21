import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import CauseCard from '@/components/cards/CauseCard';
import DonationCheckout from '@/components/forms/DonationCheckoutWrapper';
import { getCauses } from '@/lib/api';

export const metadata: Metadata = pageMetadata('/donate', { title: 'Give to the Foundation', description: 'Support the teachings and work of Jan Cosmic Foundation. Explore current initiatives or enquire about an unrestricted contribution.' });

export default async function DonatePage() {
  const causes = await getCauses();
  // Configure an existing published backend cause; never invent a fund ID.
  const general = causes.find(cause => cause.id === process.env.NEXT_PUBLIC_GENERAL_DONATION_CAUSE_ID);
  const initiatives = causes.filter(cause => cause.id !== general?.id);
  return <>
    <PageHero title="Help carry the teachings forward" subtitle="Support the teaching, outreach, media, organic farming, children’s work, and centres that give the Foundation’s purpose practical form." />
    <section className="section" id="general-giving"><div className="wrap grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
      <div><h2 className="text-3xl sm:text-4xl">Give to the Foundation</h2><p className="mt-5 text-lg text-muted">A gift can help preserve a recorded teaching, support work with children, or contribute to the Foundation’s land and community projects. Choose an initiative below to read about its purpose, or arrange an unrestricted gift so the team can direct support where it is needed.</p><Link href="/about#stewardship" className="text-link mt-6">About the Foundation & stewardship</Link><a href="#initiatives" className="text-link mt-5 block">Explore specific initiatives</a></div>
      <div className="rounded-card bg-white border border-line p-6 sm:p-8">{general ? <DonationCheckout causeId={general.id} causeTitle={general.title} /> : <><h3 className="text-2xl">Arrange an unrestricted gift</h3><p className="mt-4 text-muted">Contact the Foundation to arrange a general contribution and confirm the payment details.</p><Link href="/contact?subject=General+donation#enquiry" className="button mt-6">Enquire about a general gift</Link><p className="form-note mt-4">You can also give online to one of the published initiatives below.</p></>}</div>
    </div></section>
    <section className="section bg-sand" id="initiatives"><div className="wrap"><h2 className="text-3xl sm:text-4xl mb-8">Choose an initiative</h2>{initiatives.length ? <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{initiatives.map(cause => <CauseCard key={cause.id} cause={cause} />)}</div> : <p className="text-muted">There are no published giving initiatives at the moment. Contact the Foundation about supporting the work.</p>}</div></section>
  </>;
}
