import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import WisdomQuote from '@/components/home/WisdomQuote';
import FeaturedCauses from '@/components/home/FeaturedCauses';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import RecentBlog from '@/components/home/RecentBlog';
import VolunteerCTA from '@/components/home/VolunteerCTA';
import CentresPreview from '@/components/home/CentresPreview';
import Newsletter from '@/components/ui/Newsletter';

export const metadata: Metadata = {
    title: "Jan Cosmic Foundation | Awakening Consciousness & Self-Realization",
    description:
        "Jan Cosmic Foundation (JCF) is a global spiritual organization founded by Dr. Baffour Jan, dedicated to guiding seekers toward higher consciousness, inner freedom, and self-realization through transformative teachings, retreats, counseling, and spiritual practices.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSnippet />
      <WisdomQuote />
      <FeaturedCauses />
      <UpcomingEvents />
      <RecentBlog />
      <VolunteerCTA />
      <CentresPreview />

      {/* Newsletter */}
      <section className="py-24 lg:py-32" style={{ background: '#000B58' }}>
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[#D4A843]/90">
              Stay Connected
            </p>
          </div>
          <Newsletter
            dark
            heading="Stay in the Loop"
            description="Receive inspiring stories, event announcements, and programme updates from the Jan Cosmic Foundation."
            placeholder="Enter your email address"
            buttonLabel="Subscribe"
          />
        </div>
      </section>
    </main>
  );
}
