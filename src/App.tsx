import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { Threads } from '@/components/ui/Threads'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { useReduceAnimations } from '@/context/MotionContext'

const AMPLITUDE = { mobile: 0.4, tablet: 1.0, desktop: 1.7 } as const

export default function App() {
  const breakpoint = useBreakpoint()
  const reduceAnimations = useReduceAnimations()
  const showThreads = !reduceAnimations && breakpoint !== 'mobile'

  return (
    <div className="min-h-screen relative">
      {/* Fixed Threads — full background (disabled on mobile and low-end devices) */}
      {showThreads && (
        <div className="fixed inset-0 w-full h-full z-0">
          <Threads
            amplitude={AMPLITUDE[breakpoint]}
            distance={0}
            enableMouseInteraction={breakpoint === 'desktop'}
          />
        </div>
      )}

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
