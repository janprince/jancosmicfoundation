import { pageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';

export const metadata: Metadata = pageMetadata('/terms', {
  title: 'Terms of Use',
  description:
    'Terms and conditions for using the Jan Cosmic Foundation website.',
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Guidelines for using this website"
      />

      <section className="section bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reading-copy prose max-w-none leading-relaxed" style={{ color: '#1c1a26' }}>
            <p>
              Our full terms of use are coming soon. In the meantime, please
              note the following:
            </p>

            <p>
              All content on this website — including text, images, and media —
              is the copyright of the Jan Cosmic Foundation unless otherwise
              stated. You may share links to our content freely, but
              reproduction or redistribution of materials without written
              permission is not permitted.
            </p>

            <p>
              This website is provided for informational purposes. While we
              make every effort to keep content accurate and up to date, we do
              not guarantee that all information is complete or current at all
              times.
            </p>

            <p>
              For questions about these terms, please contact us at{' '}
              <a
                href="mailto:info@jancosmicfoundation.org"
                className="font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                info@jancosmicfoundation.org
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
