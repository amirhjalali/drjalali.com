import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AcademicCareer from '@/components/AcademicCareer'
import Research from '@/components/Research'
import PublicationsDatabase from '@/components/PublicationsDatabase'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingNav from '@/components/FloatingNav'
import StickyActions from '@/components/StickyActions'

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <FloatingNav />
      <StickyActions />
      <Navigation />
      <main>
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