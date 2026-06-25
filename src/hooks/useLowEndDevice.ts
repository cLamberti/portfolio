import { useMemo } from 'react'

export function useLowEndDevice(): boolean {
  return useMemo(() => {
    if (typeof window === 'undefined') return false
    const memory = (navigator as unknown as { deviceMemory?: number }).deviceMemory
    if (memory !== undefined) return memory <= 2
    // deviceMemory not available (Safari / Firefox) — fall back to core count
    return navigator.hardwareConcurrency <= 4
  }, [])
}
