import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Ali Akbar Jalali - Professor of Electrical Engineering',
  description: 'Dr. Ali Akbar Jalali - Distinguished Professor at Iran University of Science and Technology, pioneering researcher in IoT and Control Systems, recognized as the Father of Information Technology in Iran with over four decades of academic excellence.',
  keywords: 'Dr. Ali Akbar Jalali, Professor, Electrical Engineering, IoT, Information Technology, Iran University of Science and Technology, Control Systems',
  authors: [{ name: 'Dr. Ali Akbar Jalali' }],
  metadataBase: new URL('https://drjalali.com'),
  alternates: {
    canonical: 'https://drjalali.com',
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
        url: '/images/professional/dr-jalali-professional.png',
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
    images: ['/images/professional/dr-jalali-professional.png'],
  },
  // Add Google verification when available
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  // },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-neutral-100 antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}