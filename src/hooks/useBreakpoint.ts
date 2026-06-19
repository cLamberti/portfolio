import { useEffect, useState } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop'

function getBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop'
  const w = window.innerWidth
  if (w < 768) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint)

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 767px)')
    const mqTablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')

    const handler = () => setBreakpoint(getBreakpoint())

    mqMobile.addEventListener('change', handler)
    mqTablet.addEventListener('change', handler)
    return () => {
      mqMobile.removeEventListener('change', handler)
      mqTablet.removeEventListener('change', handler)
    }
  }, [])

  return breakpoint
}
