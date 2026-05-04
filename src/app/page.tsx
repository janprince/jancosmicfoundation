import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import Pathways from '@/components/home/Pathways';
import WisdomQuote from '@/components/home/WisdomQuote';
import InnerSpaceSection from '@/components/home/InnerSpaceSection';
import FeaturedCauses from '@/components/home/FeaturedCauses';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import RecentBlog from '@/components/home/RecentBlog';
import CentresPreview from '@/components/home/CentresPreview';
import Newsletter from '@/components/ui/Newsletter';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  description:
    "Jan Cosmic Foundation is the formal home of nearly four decades of teaching by Dr. Baffour Jan. Headquartered in Accra, we run weekly sittings, annual retreats, and the InnerSpace course for sincere seekers.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSnippet />
      <Pathways />
      <WisdomQuote />
      <InnerSpaceSection />
      <FeaturedCauses />
      <UpcomingEvents />
      <RecentBlog />
      <CentresPreview />

      {/* Newsletter */}
      <section className="py-24 lg:py-32" style={{ background: '#000B58' }}>
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <ScrollReveal animation="fade-up">
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
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
