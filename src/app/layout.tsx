import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Raleway, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteProgress from "@/components/layout/RouteProgress";
import { siteConfig, socialUrlsForSchema } from "@/lib/site-config";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Editorial serif for display headings & quote moments —
// the "spiritual journal" voice. Optical sizing handled by the variable font.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jancosmicfoundation.org"),
  title: {
    default: "Jan Cosmic Foundation — Self-Realization & Conscious Living",
    template: "%s | Jan Cosmic Foundation",
  },
  description:
    "Jan Cosmic Foundation teaches and inspires sincere seekers to evolve rapidly toward self-realization through Dr. Baffour Jan's teachings, practice, service, and conscious living.",
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
    "awake and aware",
    "organic farming",
    "spiritual service",
    "inner transformation",
    "soul",
    "mystic",
  ],
  openGraph: {
    title: "Jan Cosmic Foundation — Self-Realization & Conscious Living",
    description:
      "A spiritual foundation founded by Dr. Baffour Jan, offering teachings, retreats, centres, media, organic farming, and service for sincere seekers.",
    url: "https://jancosmicfoundation.org",
    siteName: "Jan Cosmic Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Cosmic Foundation — Self-Realization & Conscious Living",
    description:
      "Teachings, practice, centres, media, and service for seekers drawn to self-realization, consciousness, and inner freedom.",
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
    <html lang="en" className={`${raleway.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-[#FDFBF7] text-[#1c1a26]">
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
        <RouteProgress />
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
