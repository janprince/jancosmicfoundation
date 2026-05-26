import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig, socialUrlsForSchema } from "@/lib/site-config";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jancosmicfoundation.org"),
  title: {
    default: "Jan Cosmic Foundation — Self-Realization & Conscious Living",
    template: "%s | Jan Cosmic Foundation",
  },
  description:
    "Jan Cosmic Foundation is a spiritual foundation founded by Dr. Baffour Jan, guiding sincere seekers toward self-realization, higher consciousness, inner freedom, and conscious living.",
  keywords: [
    "Jan Cosmic Foundation",
    "Dr. Baffour Jan",
    "self-realization",
    "spiritual awakening",
    "spiritual teachings",
    "spiritual master Ghana",
    "mystic teacher",
    "InnerSpace course",
    "spiritual retreat Ghana",
    "consciousness",
    "conscious living",
    "inner transformation",
    "soul",
    "mystic",
  ],
  openGraph: {
    title: "Jan Cosmic Foundation — Self-Realization & Conscious Living",
    description:
      "A spiritual foundation founded by Dr. Baffour Jan, offering teachings, retreats, courses, gatherings, and service for sincere seekers.",
    url: "https://jancosmicfoundation.org",
    siteName: "Jan Cosmic Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Cosmic Foundation — Self-Realization & Conscious Living",
    description:
      "Teachings, retreats, courses, gatherings, and service for seekers drawn to self-realization, consciousness, and inner freedom.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo.png`,
  founder: {
    "@type": "Person",
    name: "Dr. Baffour Jan",
    url: "https://drbaffourjan.com",
  },
  foundingDate: siteConfig.founded,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    contactType: "general",
  },
  sameAs: socialUrlsForSchema,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans antialiased bg-[#FDFBF7] text-[#1a1a1a]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
