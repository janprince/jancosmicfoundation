import type { Metadata } from 'next';
import PageHero from '@/components/layout/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How the Jan Cosmic Foundation handles your personal information and protects your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we handle your information"
      />

      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Your Privacy"
            title="Privacy Policy"
            subtitle="This policy outlines how the Jan Cosmic Foundation handles personal information collected through this website."
            className="mb-10"
          />

          <div className="prose prose-sm sm:prose-base max-w-none leading-relaxed" style={{ color: '#1a1a1a' }}>
            <p>
              Our formal privacy policy is currently being finalised. In the
              meantime, we want you to know the following:
            </p>

            <p>
              The Jan Cosmic Foundation does not sell, rent, or share your
              personal data with third parties for marketing purposes. Any
              information you provide — such as your name, email address, or
              donation details — is used solely to process your request and
              communicate with you about our programmes and activities.
            </p>

            <p>
              Donations are processed securely through Paystack. We do not
              store your payment card details on our servers.
            </p>

            <p>
              If you have any questions or concerns about how your information
              is handled, please contact us at{' '}
              <a
                href="mailto:info@jancosmicfoundation.org"
                className="font-medium"
                style={{ color: '#2D6A4F' }}
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
