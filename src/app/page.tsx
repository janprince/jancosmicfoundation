import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import Pathways from '@/components/home/Pathways';
import LivingWork from '@/components/home/LivingWork';
import WisdomQuote from '@/components/home/WisdomQuote';
import InnerSpaceSection from '@/components/home/InnerSpaceSection';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import RecentBlog from '@/components/home/RecentBlog';
import ServiceSection from '@/components/home/ServiceSection';
import FeaturedCauses from '@/components/home/FeaturedCauses';
import CentresPreview from '@/components/home/CentresPreview';
import Newsletter from '@/components/ui/Newsletter';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  description:
    "Jan Cosmic Foundation teaches and inspires all to evolve rapidly toward self-realization through Dr. Baffour Jan's teachings, practice, service, and conscious living.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1 — Opening: a doorway inward */}
      <HeroSection />

      {/* 2 — Who this is */}
      <AboutSnippet />

      {/* 2.5 — Core framework */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
          <ScrollReveal animation="fade-up">
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[#1c1a26]/78 sm:text-lg">
              JCF supports the seeker&rsquo;s movement from external living into
              inner refinement, and from inner refinement into spiritual
              realization.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3 — For the first-time seeker */}
      <Pathways />

      {/* 4 — The living work: six doorways */}
      <LivingWork />

      {/* 5 — A quiet teaching moment */}
      <WisdomQuote />

      {/* 6 — The deeper path */}
      <InnerSpaceSection />

      {/* 7 — Retreats & gatherings */}
      <UpcomingEvents />

      {/* 8 — Writings */}
      <RecentBlog />

      {/* 9 — Service as spiritual practice */}
      <ServiceSection />

      {/* 10 — Support the work (with trust signals) */}
      <FeaturedCauses />

      {/* 11 — Centres & community */}
      <CentresPreview />

      {/* 12 — A quiet closing: letters for seekers */}
      <section className="grain-dark relative py-24 lg:py-32" style={{ background: '#000B58' }}>
        <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8">
          <ScrollReveal animation="fade-up">
            <div className="mb-8 text-center">
              <p className="eyebrow text-[#D4A843]/90">Letters from the Foundation</p>
            </div>
            <Newsletter
              dark
              heading="Letters for sincere seekers"
              description="Occasional teachings, retreat dates, service updates, and notes from the Foundation. Sent only when there is something worth sharing."
              placeholder="Your email"
              buttonLabel="Subscribe"
            />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
