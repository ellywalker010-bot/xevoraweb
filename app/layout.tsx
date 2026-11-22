import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { ScrollToTop } from '@/components/layout/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xevoratechnologies.com'),
  title: {
    default: 'XEVORA Technologies — Simplifying Business Solutions Through Technology',
    template: '%s · XEVORA Technologies',
  },
  description:
    'XEVORA Technologies designs intelligent software, digital platforms, and communication systems that simplify operations, connect people, and help businesses grow.',
  keywords: [
    'software development company',
    'business management systems',
    'custom software solutions',
    'business automation',
    'cloud and infrastructure solutions',
  ],
  openGraph: {
    type: 'website',
    siteName: 'XEVORA Technologies',
    title: 'XEVORA Technologies — Simplifying Business Solutions Through Technology',
    description:
      'Intelligent software, digital platforms, and communication systems for modern businesses.',
    url: 'https://xevoratechnologies.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XEVORA Technologies',
    description:
      'Intelligent software, digital platforms, and communication systems for modern businesses.',
  },
  robots: { index: true, follow: true },
  appleWebApp: {
    capable: true,
    title: 'XEVORA Technologies',
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        <ScrollToTop />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}