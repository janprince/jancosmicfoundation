import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/layout/PageHero';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = { title: 'About the Foundation', description: 'Meet Jan Cosmic Foundation, founded by Dr. Baffour Jan in Accra, Ghana, and learn about its mission, community, and work.' };

export default function AboutPage() {
  return <>
    <PageHero title="A spiritual home in Accra" subtitle="The story and purpose behind a movement of awakening and service." />
    <section className="section"><div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div><h2 className="text-3xl sm:text-4xl">The Foundation</h2><p className="mt-5 text-lg text-muted">Established in {siteConfig.founded}, Jan Cosmic Foundation gives a home to the teaching work of Dr. Baffour Jan, a spiritual master and mystic based in Ghana.</p><p className="mt-5 text-lg text-muted">His teaching explores consciousness, the soul, God, the mind, illusion, and human suffering. It asks how we can become free from false identity and recognise the Spirit within.</p><p className="mt-5 text-lg text-muted">The Foundation makes room for that inquiry through public talks, retreats, sittings, InnerSpace study, and service. Outreach, counselling, media, organic farms, and children’s work are ways of bringing inner understanding into relationship with the world.</p><div className="section-jump"><Link href="/about/founder" className="button">Meet Dr. Baffour Jan</Link><Link href="/visit" className="text-link">Plan a visit</Link></div></div>
      <figure><Image src="/images/doc-jcf.jpg" alt="Dr. Baffour Jan seated during a Foundation training programme" width={1120} height={630} className="rounded-card w-full h-auto" priority /></figure>
    </div></section>
    <section className="section"><div className="wrap grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><h2 className="text-3xl sm:text-4xl">External, internal, spiritual</h2><p className="mt-5 text-lg text-muted">Dr. Jan describes the path as a movement from external living into inner refinement and spiritual realization. The external concerns the body and public life; the internal concerns mind and feeling; the spiritual concerns awareness and direct realization. Teaching, practice, and service support this movement.</p></div></section>
    <section id="mission" className="section bg-sand"><div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div><h2 className="text-3xl">Our mission</h2><p className="font-serif text-3xl leading-snug mt-5 text-navy">To teach and inspire all to evolve rapidly toward self-realization.</p></div>
      <div><h2 className="text-3xl">Our vision</h2><p className="text-lg text-muted mt-5">To awaken the whole world through self-realization, ensuring true empowerment, peace, bliss, love, and wellness.</p><p className="text-muted mt-4">Compassion, unity, service, and wisdom guide how the Foundation puts this purpose into practice.</p><Link href="/programs" className="text-link mt-5">Explore the work</Link></div>
    </div></section>
    <section id="stewardship" className="section bg-sand"><div className="wrap grid gap-8 lg:grid-cols-2 lg:gap-16"><div><h2 className="text-3xl sm:text-4xl">Supporting the Foundation</h2><p className="mt-5 text-lg text-muted">Giving and volunteering support the Foundation’s teaching and community work. Each published initiative explains the work a contribution is intended to support.</p></div><div><h3 className="text-2xl">Questions about a contribution?</h3><p className="mt-4 text-muted">Contact the Foundation for information about a programme, how a gift will be used, or a donation you have already made. Include your payment reference when asking about an existing gift.</p><div className="section-jump"><Link href="/contact?subject=Giving+and+stewardship#enquiry" className="button outline">Ask about stewardship</Link><Link href="/donate" className="text-link">Ways to give</Link></div></div></div></section>
  </>;
}
