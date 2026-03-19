import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Nemesis Bearings | Industrial Bearing Solutions",
    template: "%s | Nemesis Bearings",
  },
  description:
    "Industrial bearing solutions with cross-reference support for major brands. Ball bearings, roller bearings, mounted units, and accessories. Quality inspection, fast shipping, expert technical support.",
  keywords: [
    "bearings",
    "ball bearings",
    "roller bearings",
    "industrial bearings",
    "bearing supplier",
    "bearing cross reference",
    "bearing interchange",
    "SKF equivalent",
    "NSK equivalent",
    "FAG equivalent",
  ],
  openGraph: {
    type: "website",
    siteName: "Nemesis Bearings",
    title: "Nemesis Bearings | Industrial Bearing Solutions",
    description:
      "Cross-reference and interchange support for widely used bearing series. Quality-assured alternatives with full technical data.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nemesis Bearings",
  url: "https://nemesisbearings.com",
  telephone: "+1-915-401-0626",
  email: "sales@nemesisbearings.com",
  description: "Industrial bearing solutions with cross-reference support for major brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <UtilityBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
