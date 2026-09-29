import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import JoinFoundationForm from '@/components/forms/JoinFoundationForm';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('/join', {
  title: 'Join the Foundation',
  description: 'Join the Jan Cosmic Foundation community. Share a few details, then connect with fellow seekers in our Telegram group, wherever you are in the world.',
});

export default function JoinPage() {
  return <>
    <PageHero title="Join the Foundation" subtitle="A shared path of teaching, practice, and service. Whether you’re in Ghana or further afield, there is a place for you in our community." />
    <section className="section" aria-labelledby="join-form-title">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl">Begin wherever you are</h2>
          <p className="mt-5 text-lg text-muted">Connect with others drawn to Dr. Jan’s teachings and stay close to the life of the Foundation, from shared practice to gatherings and service.</p>
          <ol className="join-steps mt-7" aria-label="How to join">
            <li><span aria-hidden="true">1</span><div><h3 className="text-xl">Introduce yourself</h3><p className="form-note mt-1">Share your contact details and where you’re based.</p></div></li>
            <li><span aria-hidden="true">2</span><div><h3 className="text-xl">Join us on Telegram</h3><p className="form-note mt-1">After submitting, you’ll see a link to join the group immediately.</p></div></li>
          </ol>
          <figure className="mt-8">
            <Image src="/images/group-of-students2.jpg" alt="Foundation members listening together at a community gathering" width={6720} height={4480} sizes="(max-width: 1023px) 100vw, 45vw" className="aspect-[3/2] w-full rounded-card object-cover" />
            <figcaption className="caption mt-3">A community rooted in Ghana and open to the world.</figcaption>
          </figure>
          <p className="form-note mt-6">Prefer to meet in person? <Link href="/visit">Plan a visit</Link> or <Link href="/centres">find a centre near you</Link>.</p>
        </div>
        <div className="join-form-panel order-1 rounded-card border border-line bg-white p-6 sm:p-8 lg:order-2">
          <JoinFoundationForm />
        </div>
      </div>
    </section>
  </>;
}
