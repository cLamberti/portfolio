import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Threads } from '../ui/Threads'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Hero() {
  const { t } = useTranslation('hero')
  const reducedMotion = useReducedMotion()

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden">
      {!reducedMotion && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Threads
            color={[0.11, 0.31, 0.85]}
            amplitude={2.3}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
      )}

      {/* Gradient overlay on top of Threads for depth; also fallback bg when reducedMotion */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 px-8 sm:px-12 md:px-16 pt-20 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-[#94a3b8] text-sm sm:text-base font-medium mb-3 tracking-widest uppercase"
        >
          {t('greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Christopher{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Lamberti
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14, ease: 'easeOut' }}
          className="font-heading text-xl sm:text-2xl font-semibold text-blue-300 mb-6"
        >
          {t('role')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="text-[#94a3b8] text-base sm:text-lg mb-10 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold text-sm hover:from-blue-600 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-blue-900/30 min-h-[44px] min-w-[160px]"
          >
            {t('cta_projects')}
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#1e1e2e] text-[#f1f5f9] font-semibold text-sm hover:border-blue-500/50 hover:text-white transition-all duration-200 min-h-[44px] min-w-[160px]"
          >
            {t('cta_contact')}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <ArrowDown size={20} className="text-[#94a3b8] animate-bounce" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  )
}
