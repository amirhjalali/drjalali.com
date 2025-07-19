import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AcademicCareer from '@/components/AcademicCareer'
import Research from '@/components/Research'
import MediaSection from '@/components/MediaSection'
import NewsSection from '@/components/NewsSection'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <AcademicCareer />
        <Research />
        <MediaSection />
        <NewsSection />
        <Contact />
      </main>
    </>
  )
}