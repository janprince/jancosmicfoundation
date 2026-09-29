import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import CauseCard from '@/components/cards/CauseCard';
import DonationCheckout from '@/components/forms/DonationCheckoutWrapper';
import { getCauses } from '@/lib/api';
import type { Cause } from '@/types';

export const metadata: Metadata = pageMetadata('/donate', {
  title: 'Give to the Foundation',
  description: 'Make a general donation to Jan Cosmic Foundation or support a specific initiative. Give securely through Paystack.',
});

export default async function DonatePage() {
  let causes: Cause[] | null;
  try { causes = await getCauses(); } catch { causes = null; }
  return <>
    <PageHero title="Help carry the teachings forward" subtitle="Give where support is needed most, or choose an initiative close to your heart. Every gift helps sustain the Foundation’s teaching, community, and service." />
    <section className="section" id="general-giving" aria-labelledby="general-giving-title">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <h2 id="general-giving-title" className="text-3xl sm:text-4xl">A gift for the whole Foundation</h2>
          <p className="mt-5 text-lg text-muted">You don’t need to choose a project. A general donation gives the Foundation the flexibility to direct your support where it is needed most.</p>
          <p className="mt-4 text-muted">Your gift supports the shared work of preserving and sharing teachings, caring for our centres, and putting service into practice.</p>
          <div className="mt-8 border-t border-line pt-6">
            <h3 className="text-2xl">Have a particular initiative in mind?</h3>
            <p className="mt-3 text-muted">You can choose the work you’d like your donation to support.</p>
            <a href="#initiatives" className="text-link mt-4">Explore initiatives</a>
          </div>
          <Link href="/about#stewardship" className="text-link mt-8">About our stewardship</Link>
        </div>
        <div className="order-1 rounded-card bg-white border border-line p-6 sm:p-8 lg:order-2">
          <h3 className="text-2xl">Make a general donation</h3>
          <p className="form-note mt-2 mb-6">For the Foundation’s work as a whole. No initiative selection needed.</p>
          <DonationCheckout causeTitle="the Foundation’s general fund" />
        </div>
      </div>
    </section>
    <section className="section bg-sand" id="initiatives" aria-labelledby="initiatives-title">
      <div className="wrap">
        <h2 id="initiatives-title" className="text-3xl sm:text-4xl">Give to a specific initiative</h2>
        <p className="mt-4 mb-8 text-muted">Gifts made on an initiative’s page support that work directly.</p>
        {causes === null ? <p className="text-muted">We couldn’t load the initiatives right now. You can still make a general donation above, or <Link href="/contact?subject=Giving#enquiry" className="underline">contact us about giving</Link>.</p> : causes.length ? <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{causes.map(cause => <CauseCard key={cause.id} cause={cause} />)}</div> : <p className="text-muted">There are no published giving initiatives at the moment. A general gift still supports the Foundation’s work.</p>}
      </div>
    </section>
  </>;
}
