import Hero from '@/components/Hero'
import GamesSection from '@/components/GamesSection'
import AboutSection from '@/components/AboutSection'
import TeamSection from '@/components/TeamSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <GamesSection />
      <AboutSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
