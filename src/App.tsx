import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Threads } from '@/components/ui/Threads'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function App() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen relative">
      {/* Fixed Threads — full background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Threads
          amplitude={isMobile ? 0.5 : 1.6}
          distance={0}
          enableMouseInteraction={!isMobile}
        />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
