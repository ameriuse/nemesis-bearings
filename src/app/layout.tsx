import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const headingFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nemesis-bearings.vercel.app'),
  title: {
    default: 'Nemesis Bearings | Industrial Bearing Supply',
    template: '%s | Nemesis Bearings',
  },
  description:
    'Industrial bearing supply with cross-reference support, technical guidance, traceable inventory, and fast order response for maintenance, engineering, and procurement teams.',
  keywords: [
    'industrial bearings',
    'bearing supplier',
    'ball bearings',
    'roller bearings',
    'bearing interchange',
    'bearing cross reference',
    'mounted units',
    'bearing technical support',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Nemesis Bearings',
    url: 'https://nemesis-bearings.vercel.app',
    title: 'Nemesis Bearings | Industrial Bearing Supply',
    description:
      'Browse industrial bearings, request quotes fast, and get practical support for interchange, fit, lubrication, and application selection.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nemesis Bearings | Industrial Bearing Supply',
    description:
      'Industrial bearing supply with cross-reference support, traceable inventory, and expert technical guidance.',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nemesis Bearings',
  url: 'https://nemesis-bearings.vercel.app',
  telephone: '+1-915-401-0626',
  email: 'sales@nemesisbearings.com',
  description:
    'Industrial bearing supplier focused on cross-reference support, technical guidance, and fast order response.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <UtilityBar />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
