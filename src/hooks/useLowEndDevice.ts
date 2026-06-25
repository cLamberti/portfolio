import { useMemo } from 'react'

export function useLowEndDevice(): boolean {
  return useMemo(() => {
    if (typeof window === 'undefined') return false
    const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory
    // Only flag truly low-end: Chrome/Android with <=1 GB RAM.
    // Safari/Firefox don't expose deviceMemory — assume capable.
    // Avoid hardwareConcurrency fallback: it's unreliable on desktop (i3/i5 have 4 cores).
    return memory !== undefined && memory <= 1
  }, [])
}
