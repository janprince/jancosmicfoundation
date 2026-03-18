import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms and conditions for using the Jan Cosmic Foundation website.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        subtitle="Guidelines for using this website"
      />

      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Legal"
            title="Terms of Use"
            subtitle="These terms govern your use of the Jan Cosmic Foundation website."
            className="mb-10"
          />

          <div className="prose prose-sm sm:prose-base max-w-none leading-relaxed" style={{ color: '#1a1a1a' }}>
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
