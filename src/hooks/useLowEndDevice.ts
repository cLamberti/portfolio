import { useEffect, useState } from 'react'

export function useLowEndDevice(): boolean {
  // Starts false so SSR and the first client render match; the real value lands in the effect.
  const [lowEnd, setLowEnd] = useState(false)
  useEffect(() => {
    const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory
    // Only flag truly low-end: Chrome/Android with <=1 GB RAM.
    // Safari/Firefox don't expose deviceMemory — assume capable.
    // Avoid hardwareConcurrency fallback: it's unreliable on desktop (i3/i5 have 4 cores).
    setLowEnd(memory !== undefined && memory <= 1)
  }, [])
  return lowEnd
}
