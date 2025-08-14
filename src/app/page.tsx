'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AcademicCareer from '@/components/AcademicCareer'
import Research from '@/components/Research'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import ScrollProgress from '@/components/ScrollProgress'

// Dynamically import non-critical components
const FloatingNav = dynamic(() => import('@/components/FloatingNav'), {
  ssr: false,
  loading: () => null
})

const PublicationsDatabase = dynamic(() => import('@/components/PublicationsDatabase'), {
  loading: () => (
    <div className="py-24 md:py-28 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 dark:bg-neutral-800 rounded w-1/3 mx-auto mb-8"></div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-200 dark:bg-neutral-800 rounded"></div>
            <div className="h-32 bg-gray-200 dark:bg-neutral-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress showPercentage={false} />
      <FloatingNav />
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <AcademicCareer />
        <Research />
        <PublicationsDatabase />
        <ContactForm />
      </main>
    </>
  )
}