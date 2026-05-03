import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jancosmicfoundation.org"),
  title: {
    default: "Jan Cosmic Foundation - Awakening Humanity to Self-Realization",
    template: "%s | Jan Cosmic Foundation",
  },
  description:
    "A spiritual organisation founded by Dr. Baffour Jan, dedicated to guiding individuals toward higher consciousness, inner freedom, and self-realization through teachings, retreats, and community service.",
  keywords: [
    "Jan Cosmic Foundation",
    "Dr. Baffour Jan",
    "self-realization",
    "spiritual education",
    "higher consciousness",
    "meditation",
    "spiritual retreats",
    "community service",
    "inner freedom",
    "conscious living",
  ],
  openGraph: {
    title: "Jan Cosmic Foundation — Awakening Humanity to Self-Realization",
    description:
      "A spiritual organisation guiding individuals toward higher consciousness, inner freedom, and self-realization through the teachings of Dr. Baffour Jan.",
    url: "https://jancosmicfoundation.org",
    siteName: "Jan Cosmic Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Cosmic Foundation — Awakening Humanity to Self-Realization",
    description:
      "A spiritual organisation founded by Dr. Baffour Jan, dedicated to guiding individuals toward higher consciousness, inner freedom, and self-realization.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://jancosmicfoundation.org/#organization",
  name: "Jan Cosmic Foundation",
  legalName: "Jan Cosmic Foundation",
  url: "https://jancosmicfoundation.org",
  logo: "https://jancosmicfoundation.org/images/logo.png",
  founder: {
    "@type": "Person",
    name: "Dr. Baffour Jan",
    url: "https://drbaffourjan.com",
  },
  foundingDate: "2021",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Franko Estate",
    addressLocality: "Kwabenya",
    addressRegion: "Greater Accra",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+233-55-059-0054",
    email: "info@jancosmicfoundation.org",
    contactType: "general",
  },
  sameAs: [
    "https://facebook.com/jancosmicfoundation",
    "https://instagram.com/jancosmicfoundation",
    "https://youtube.com/jancosmicfoundation",
    "https://twitter.com/jancosmicfoundation",
  ],
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
