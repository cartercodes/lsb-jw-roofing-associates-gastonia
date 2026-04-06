import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interHeading = Inter({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const interBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'JW Roofing & Associates | Gastonia, NC',
  description:
    'JW Roofing & Associates is a trusted roofing contractor in Gastonia, NC. Expert roof repair, replacement, installation, storm damage restoration, and residential roofing services. Licensed, insured, and backed by warranty. Call for a free roof inspection.',
  keywords:
    'roofing contractor, roof repair, roof replacement, roof installation, storm damage, residential roofing, Gastonia, NC, JW Roofing & Associates',
  openGraph: {
    title: 'JW Roofing & Associates | Roofing Contractor in Gastonia, NC',
    description:
      'Professional roofing services in Gastonia, NC. Roof repair, replacement, storm damage restoration, and new installations. Free inspections available.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interHeading.variable} ${interBody.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}