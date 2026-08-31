import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aestheticventurebd.com'),
  title: 'Aesthetic Venture',
  description:
    'Commit to Serve',
  keywords: [
    'Aesthetic Venture',
    'Commit to Serve',
    'Dhaka',
    'Bangladesh',
  ],
  authors: [{ name: 'Aesthetic Venture' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/files/logo2.jpeg',
    apple: '/files/logo2.jpeg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Aesthetic Venture',
    title: 'Aesthetic Venture',
    description:
      'Commit to Serve',
    images: [
      {
        url: '/files/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Aesthetic Venture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Venture',
    description:
      'Commit to Serve',
    images: ['/files/logo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
