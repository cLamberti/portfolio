import { createContext, useContext, type ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useLowEndDevice } from '../hooks/useLowEndDevice'

const ReduceAnimationsContext = createContext(false)

export function MotionProvider({ children }: { children: ReactNode }) {
  const systemReducedMotion = useReducedMotion()
  const lowEnd = useLowEndDevice()
  const reduce = systemReducedMotion || lowEnd

  return (
    <ReduceAnimationsContext.Provider value={reduce}>
      <MotionConfig reducedMotion={reduce ? 'always' : 'never'}>
        {children}
      </MotionConfig>
    </ReduceAnimationsContext.Provider>
  )
}

export const useReduceAnimations = () => useContext(ReduceAnimationsContext)
