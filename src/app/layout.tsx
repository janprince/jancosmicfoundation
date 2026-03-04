import type { Metadata } from "next";
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
  title: {
    default: "Jan Cosmic Foundation — Transforming Lives Through Service",
    template: "%s | Jan Cosmic Foundation",
  },
  description:
    "The Jan Cosmic Foundation is the charitable arm of Dr. Baffour Jan, dedicated to community service, spiritual education, and humanitarian projects across 20+ countries.",
  keywords: [
    "Jan Cosmic Foundation",
    "Dr. Baffour Jan",
    "charity",
    "spiritual education",
    "community service",
    "humanitarian",
    "meditation",
    "volunteering",
  ],
  openGraph: {
    title: "Jan Cosmic Foundation",
    description:
      "Transforming lives through service, spiritual education, and humanitarian projects.",
    url: "https://jancosmicfoundation.org",
    siteName: "Jan Cosmic Foundation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="font-sans antialiased bg-[#FDFBF7] text-[#1a1a1a]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
