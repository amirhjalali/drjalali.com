'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AcademicCareer from '@/components/AcademicCareer'
import Research from '@/components/Research'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import JsonLd from '@/components/JsonLd'
import ScrollProgress from '@/components/ScrollProgress'

// Dynamically import non-critical components
const FloatingNav = dynamic(() => import('@/components/FloatingNav'), {
  ssr: false,
  loading: () => null
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
        <Publications />
        <Contact />
      </main>
    </>
  )
}