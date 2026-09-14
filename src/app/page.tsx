import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/site-config';
import GatheringNotice from '@/components/home/GatheringNotice';
import LifeStrip from '@/components/home/LifeStrip';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = { description: 'Jan Cosmic Foundation is a spiritual foundation in Accra, Ghana, founded by Dr. Baffour Jan. Explore teachings, practice, retreats, community and service.' };

const featuredTeaching = {
  title: 'Beloved Brothers and Sisters: The Power of Unity and Love',
  url: 'https://www.youtube.com/watch?v=lO75YxDm20Y',
};

export default function HomePage() {
  return <div className="foundation-home">

    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image src="/images/teaching.jpg" alt="Dr. Baffour Jan teaching members of the Foundation in an open courtyard" fill priority sizes="100vw" />
      </div>
      <div className="wrap hero-copy">
        <p className="hero-kicker hero-animate-1">Accra, Ghana</p>
        <h1 id="hero-title" className="hero-animate-2">A life of awareness, <em>rooted in practice.</em></h1>
        <p className="hero-lede hero-animate-3">A spiritual foundation founded by spiritual master and mystic Dr. Baffour Jan, devoted to self-realization.</p>
        <div className="actions hero-animate-4">
          <Link className="button gold" href="/teachings">Explore the teachings</Link>
          <a className="button ghost" href="/visit">Plan a first visit</a>
        </div>
      </div>
      <p className="hero-caption">Dr. Baffour Jan with members of the community</p>
    </section>

    <section className="intro section" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <ScrollReveal animation="fade-in">
          <figure className="home-figure">
            <Image src="/images/doc-potrait.jpg" alt="Dr. Baffour Jan smiling outdoors" width={4480} height={4480} sizes="(max-width: 900px) 90vw, 42vw" />
            <figcaption>Dr. Baffour Jan, founder and spiritual teacher</figcaption>
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="eyebrow">Welcome</p>
          <h2 id="intro-title" className="section-title">A spiritual home in Accra, open to the world.</h2>
          <p className="lede">Jan Cosmic Foundation carries the teachings of Dr. Baffour Jan, a spiritual master and mystic devoted to self-realization.</p>
          <p className="lede">Explore the teachings, spend time in practice, and meet a community bringing spiritual understanding into everyday life.</p>
          <Link className="text-link" href="/about/founder">Meet Dr. Baffour Jan</Link>
        </ScrollReveal>
      </div>
    </section>

    <section id="teachings" className="teachings section" aria-labelledby="teaching-title">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <div><p className="eyebrow">Teachings</p><h2 id="teaching-title" className="section-title">Begin with a teaching</h2></div>
          <p>Listen to Dr. Jan in his own words. Public talks are freely available, with nothing to join before you begin.</p>
        </ScrollReveal>
        <div className="teachings-grid">
          <ScrollReveal className="feature-teaching">
            <a className="teaching-photo" href={featuredTeaching.url} aria-label={`Watch ${featuredTeaching.title} on YouTube`}>
              <Image src="/images/doc-holding-mic.jpg" alt="Dr. Baffour Jan speaking at a gathering" width={6525} height={4350} sizes="(max-width: 900px) 100vw, 60vw" />
              <span className="play" aria-hidden="true"><Play size={24} weight="fill" /></span>
            </a>
            <p className="media-type">Video teaching</p>
            <h3><a href={featuredTeaching.url}>{featuredTeaching.title}</a></h3>
          </ScrollReveal>
          <ScrollReveal className="reading-list" delay={0.1}>
            <h3>From the writings</h3>
            <article><p className="media-type">Reflection</p><h4><Link href="/blog/what-is-our-purpose-here-on-earth">What Is Our Purpose Here on Earth?</Link></h4></article>
            <article><p className="media-type">Reflection</p><h4><Link href="/blog/the-law-of-attraction">The Law of Attraction</Link></h4></article>
            <Link className="text-link" href="/blog">All writings</Link>
          </ScrollReveal>
        </div>
        <div className="teachings-more"><Link className="button outline" href="/teachings">Browse all teachings</Link></div>
      </div>
    </section>

    <section className="life section" aria-labelledby="life-title">
      <ScrollReveal className="wrap section-head">
        <div><p className="eyebrow">Community</p><h2 id="life-title" className="section-title">Life at the Foundation</h2></div>
        <p>Practice, teaching and time together with the community in Accra.</p>
      </ScrollReveal>
      <LifeStrip />
    </section>

    <section id="practice" className="practice section" aria-labelledby="practice-title">
      <div className="wrap practice-grid">
        <ScrollReveal animation="fade-in">
          <figure className="home-figure">
            <Image src="/images/studentinmeditation.jpg" alt="Members of the Foundation kneeling in meditation on the lawn" width={5472} height={3648} sizes="(max-width: 900px) 100vw, 50vw" />
            <figcaption>Time for practice, in the company of others.</figcaption>
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="eyebrow">Practice &amp; retreats</p>
          <h2 id="practice-title" className="section-title">Make time for the inner life</h2>
          <p className="lede">Retreats and gatherings offer time to step away from daily routines and practise with the community.</p>
          <GatheringNotice />
          <div className="innerspace">
            <h3>Study with InnerSpace</h3>
            <p>Explore Dr. Jan’s structured study path, with lessons and guided practice.</p>
            <Link className="text-link" href="/innerspace">About InnerSpace</Link>
            <p className="caption">The course is hosted on drbaffourjan.com.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section id="visit" className="visit stars section" aria-labelledby="visit-title">
      <div className="wrap visit-grid">
        <ScrollReveal>
          <p className="eyebrow">Visit</p>
          <h2 id="visit-title" className="section-title">Come and meet the community</h2>
          <p className="lede">Our home is in Accra. If you would like to visit, contact the Foundation to ask about the next gathering and what to expect.</p>
          <address>{siteConfig.address.streetAddress}, {siteConfig.address.locality}<br />Accra, {siteConfig.address.countryName}</address>
          <div className="actions"><Link className="button light" href="/visit">Plan your visit</Link><Link className="text-link" href="/centres">Find a centre</Link></div>
        </ScrollReveal>
        <ScrollReveal className="questions" delay={0.1}>
          <h3>Your first visit</h3>
          <details><summary>Where should I begin?</summary><p>You can start with a <Link href="/teachings">public teaching</Link>. If you would prefer to meet the community, <Link href="/contact">contact the Foundation</Link> about visiting.</p></details>
          <details><summary>When can I attend a gathering?</summary><p>See the <Link href="/events">events calendar</Link> for published details, or call <a href={`tel:${siteConfig.contact.phoneE164}`}>{siteConfig.contact.phone}</a> to confirm arrangements before travelling.</p></details>
          <details><summary>What should I bring?</summary><p>Ask the organiser about clothing, seating, accessibility, fees and anything to bring for the gathering you plan to attend.</p></details>
        </ScrollReveal>
      </div>
    </section>

    <section id="service" className="service section" aria-labelledby="service-title">
      <div className="wrap service-grid">
        <ScrollReveal>
          <p className="eyebrow">Service</p>
          <h2 id="service-title" className="section-title">Spiritual life, expressed in service</h2>
          <p className="lede">The Foundation’s work extends into teaching, community initiatives and care. Discover the work and the ways you can take part.</p>
          <div className="actions"><Link className="button" href="/programs">Our initiatives</Link><Link className="button outline" href="/volunteer">Volunteer</Link><Link className="text-link" href="/donate">Support the work</Link></div>
        </ScrollReveal>
        <ScrollReveal animation="fade-in" delay={0.1}>
          <figure className="home-figure">
            <Image src="/images/group-of-students.jpg" alt="The Jan Cosmic Foundation community gathered together" width={5472} height={3648} sizes="(max-width: 900px) 100vw, 55vw" />
            <figcaption>Members of the Jan Cosmic Foundation community.</figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>

  </div>;
}
