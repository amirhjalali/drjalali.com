import type { Metadata } from 'next'
import './globals.css'
import Analytics from '@/components/Analytics'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'Dr. Ali Akbar Jalali - Professor of Electrical Engineering',
  description: 'Professor at Iran University of Science and Technology, known as the Father of Information Technology in Iran. Expert in IoT, Control Systems, and ICT.',
  keywords: 'Dr. Ali Akbar Jalali, Professor, Electrical Engineering, IoT, Information Technology, Iran University of Science and Technology, Control Systems',
  authors: [{ name: 'Dr. Ali Akbar Jalali' }],
  metadataBase: new URL('https://drjalali.com'),
  alternates: {
    canonical: 'https://drjalali.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dr. Ali Akbar Jalali',
    description: 'Professor and Father of Information Technology in Iran',
    url: 'https://drjalali.com',
    siteName: 'Dr. Ali Akbar Jalali',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/dr-jalali-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Ali Akbar Jalali - Professor of Electrical Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ali Akbar Jalali',
    description: 'Professor and Father of Information Technology in Iran',
    images: ['/images/dr-jalali-profile.jpg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}