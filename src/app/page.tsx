import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from '@phosphor-icons/react/dist/ssr';
import { siteConfig } from '@/lib/site-config';
import GatheringNotice from '@/components/home/GatheringNotice';
import LifeGallery from '@/components/home/LifeGallery';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = pageMetadata('/', { title: 'Jan Cosmic Foundation — Self-Realization & Conscious Living', description: 'Jan Cosmic Foundation is a spiritual foundation in Accra, Ghana, founded by Dr. Baffour Jan. Explore teachings, practice, retreats, community and service.' });

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
        <h1 id="hero-title" className="hero-animate-2">A path of freedom <em>and awareness.</em></h1>
        <p className="hero-lede hero-animate-3">A living spiritual foundation guiding sincere seekers toward inner freedom, self-realization, and conscious living through the teachings of Dr. Baffour Jan.</p>
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
            <Image src="/images/group-of-students2.jpg" alt="Members of the Jan Cosmic Foundation listening together during a gathering" width={6720} height={4480} sizes="(max-width: 900px) 100vw, 50vw" />
            <figcaption>A shared life of teaching, practice, and service.</figcaption>
          </figure>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 id="intro-title" className="eyebrow">Welcome to the Foundation</h2>
          <figure className="foundation-purpose">
            <blockquote><p>“The Jan Cosmic Foundation is an expression of the divine will.”</p></blockquote>
            <figcaption>Dr. Jan</figcaption>
          </figure>
          <p className="lede">Based in Ghana and open to the world, the Foundation gives Dr. Jan’s teaching a home through public talks, sittings, retreats, and practical service. Together, we explore a path toward self-realization and conscious living.</p>
          <Link className="text-link" href="/about">Discover the Foundation</Link>
        </ScrollReveal>
      </div>
    </section>

    <section id="teachings" className="teachings section" aria-labelledby="teaching-title">
      <div className="wrap">
        <ScrollReveal className="section-head">
          <div><p className="eyebrow">Teachings</p><h2 id="teaching-title" className="section-title">Begin with a teaching</h2></div>
          <p>Explore consciousness, the Self, God, the soul, and the mind through Dr. Jan’s public talks. Watch freely, then take time to sit with what you hear.</p>
        </ScrollReveal>
        <div className="teachings-grid">
          <ScrollReveal className="feature-teaching">
            <a className="teaching-photo" href={featuredTeaching.url} aria-label={`Watch ${featuredTeaching.title} on YouTube`}>
              <Image src="https://img.youtube.com/vi/lO75YxDm20Y/maxresdefault.jpg" alt="Video thumbnail for The Power of Unity and Love by Dr. Baffour Jan" width={1280} height={720} sizes="(max-width: 900px) 100vw, 60vw" />
              <span className="play" aria-hidden="true"><Play size={24} weight="fill" /></span>
            </a>
            <p className="media-type">Watch freely on YouTube</p>
            <h3><a href={featuredTeaching.url}>{featuredTeaching.title}</a></h3>
          </ScrollReveal>
          <ScrollReveal className="reading-list" delay={0.1}>
            <h3>From the writings</h3>
            <article><p className="media-type">Reflection</p><h4><Link href="/blog/what-is-our-purpose-here-on-earth">What Is Our Purpose Here on Earth?</Link></h4></article>
            <article><p className="media-type">Reflection</p><h4><Link href="/blog/the-law-of-attraction">The Law of Attraction</Link></h4></article>
            <Link className="text-link" href="/blog">All writings</Link>
          </ScrollReveal>
        </div>
        <div className="teachings-more flex flex-wrap items-center gap-4 sm:gap-6">
          <Link className="button outline" href="/teachings">Browse all teachings</Link>
          <Link className="text-link" href="/teachings#live-radio">Listen live</Link>
        </div>
        <aside className="study-bridge" aria-labelledby="study-title">
          <div>
            <h3 id="study-title">When you’re ready to go deeper</h3>
            <p>Inner Space brings together courses, recorded teachings, and monthly live guidance with Dr. Jan for those drawn to a sustained practice.</p>
          </div>
          <div className="study-bridge-action">
            <a className="text-link" href="https://www.drbaffourjan.com/inner-space">Explore Inner Space</a>
            <p className="caption">On Dr. Jan’s teaching website</p>
          </div>
        </aside>
      </div>
    </section>

    <section id="life" className="life section" aria-labelledby="life-title">
      <ScrollReveal className="wrap section-head">
        <div><p className="eyebrow">Community</p><h2 id="life-title" className="section-title">Life at the Foundation</h2></div>
        <p>Listening, sitting in silence, asking questions, and working alongside one another. These photographs offer a glimpse of the people and shared practice behind the Foundation.</p>
      </ScrollReveal>
      <LifeGallery />
    </section>

    <section id="visit" className="visit stars section" aria-labelledby="visit-title">
      <span id="practice" className="section-anchor" aria-hidden="true" />
      <div className="wrap visit-grid">
        <ScrollReveal>
          <p className="eyebrow">Practice &amp; community</p>
          <h2 id="visit-title" className="section-title">Come and sit with us</h2>
          <p className="lede">Meet the teaching in person at our home in Kwabenya, Accra. Sittings and retreats bring together silence, meditation, and shared practice, with time to listen and ask questions.</p>
          <address>{siteConfig.address.streetAddress}, {siteConfig.address.locality}<br />Accra, {siteConfig.address.countryName}</address>
          <div className="actions"><Link className="button light" href="/visit">Plan your visit</Link><Link className="text-link" href="/centres">Find a centre</Link></div>
        </ScrollReveal>
        <ScrollReveal className="visit-details" delay={0.1}>
          <GatheringNotice />
          <div className="questions">
          <h3>Your first visit</h3>
          <details><summary>Where should I begin?</summary><p>You can start with a <Link href="/teachings">public teaching</Link>. If you would prefer to meet the community, <Link href="/contact">contact the Foundation</Link> about visiting.</p></details>
          <details><summary>When can I attend a gathering?</summary><p>See the <Link href="/events">events calendar</Link> for published details, or call <a href={`tel:${siteConfig.contact.phoneE164}`}>{siteConfig.contact.phone}</a> to confirm arrangements before travelling.</p></details>
          <details><summary>What should I bring?</summary><p>Ask the organiser about clothing, seating, accessibility, fees and anything to bring for the gathering you plan to attend.</p></details>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section id="service" className="service section" aria-labelledby="service-title">
      <div className="wrap service-grid">
        <ScrollReveal>
          <p className="eyebrow">Service</p>
          <h2 id="service-title" className="section-title">Inner work becomes real in how we serve</h2>
          <p className="lede">Dr. Jan presents service as part of spiritual evolution. Outreach teachers, organisers, media workers, farmers, and volunteers each help carry the work forward.</p>
          <p className="lede">Guide the Children introduces young people to awareness and responsibility. Media preserves and shares the teachings. Organic farming connects care for the land with daily living.</p>
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
