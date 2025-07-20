import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AcademicCareer from '@/components/AcademicCareer'
import Research from '@/components/Research'
import PublicationsDatabase from '@/components/PublicationsDatabase'
import MediaSection from '@/components/MediaSection'
import NewsSection from '@/components/NewsSection'
import ContactForm from '@/components/ContactForm'
import JsonLd from '@/components/JsonLd'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <AcademicCareer />
        <Research />
        <PublicationsDatabase />
        <MediaSection />
        <NewsSection />
        <ContactForm />
      </main>
    </>
  )
}