import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | Frontend Developer',
  description: 'Portfolio website showcasing my projects and skills as a frontend developer',
  keywords: ['frontend', 'developer', 'portfolio', 'react', 'next.js', 'three.js'],
  authors: [{ name: 'John Doe' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe-portfolio.com',
    siteName: 'John Doe Portfolio',
    title: 'John Doe | Frontend Developer',
    description: 'Portfolio website showcasing my projects and skills as a frontend developer',
    images: [
      {
        url: 'https://johndoe-portfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Frontend Developer',
    description: 'Portfolio website showcasing my projects and skills as a frontend developer',
    creator: '@johndoe',
    images: ['https://johndoe-portfolio.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}