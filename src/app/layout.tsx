import type { Metadata } from 'next'
import './globals.css'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'Dr. Ali Akbar Jalali - Professor of Electrical Engineering',
  description: 'Professor at Iran University of Science and Technology, known as the Father of Information Technology in Iran. Expert in IoT, Control Systems, and ICT.',
  keywords: 'Dr. Ali Akbar Jalali, Professor, Electrical Engineering, IoT, Information Technology, Iran University of Science and Technology, Control Systems',
  authors: [{ name: 'Dr. Ali Akbar Jalali' }],
  openGraph: {
    title: 'Dr. Ali Akbar Jalali',
    description: 'Professor and Father of Information Technology in Iran',
    url: 'https://drjalali.com',
    siteName: 'Dr. Ali Akbar Jalali',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}