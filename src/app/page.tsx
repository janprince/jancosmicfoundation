import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import ImpactStats from '@/components/home/ImpactStats';
import FeaturedCauses from '@/components/home/FeaturedCauses';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import VolunteerCTA from '@/components/home/VolunteerCTA';
import RecentBlog from '@/components/home/RecentBlog';
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
      {/* 1. Hero — Full viewport deep indigo gradient with headline & CTAs */}
      <HeroSection />

      {/* 2. About snippet — Two-column intro on cream background */}
      <AboutSnippet />

      {/* 3. Impact stats — Animated counters on deep indigo */}
      <ImpactStats />

      {/* 4. Featured causes — 3 cause cards on beige */}
      <FeaturedCauses />

      {/* 5. Upcoming events — Next 3 events on white */}
      <UpcomingEvents />

      {/* 6. Volunteer CTA — Full-width green gradient call-to-action */}
      <VolunteerCTA />

      {/* 7. Recent blog — 3 latest posts on cream */}
      <RecentBlog />

      {/* 8. Centres preview — Global centre cards on beige */}
      <CentresPreview />

      {/* 9. Newsletter — Deep indigo section with Newsletter component */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: '#000B58' }}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2D6A4F, transparent 70%)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #D4A843, transparent 70%)' }}
        />

        {/* Top accent line */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #D4A843 30%, #D4A843 70%, transparent 100%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4A843]">
              Stay Connected
            </span>
            <span className="h-px w-8 rounded-full bg-[#D4A843]" aria-hidden="true" />
          </div>

          <Newsletter
            dark
            heading="Stay in the Loop"
            description="Receive inspiring stories, event announcements, and programme updates from the Jan Cosmic Foundation — straight to your inbox."
            placeholder="Enter your email address"
            buttonLabel="Subscribe"
          />
        </div>
      </section>
    </main>
  );
}
