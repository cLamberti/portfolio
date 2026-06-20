import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import DecryptedText from '../ui/DecryptedText'

export function Projects() {
  const { t } = useTranslation('projects')

  return (
    <section id="projects" className="py-24">
      <div className="px-8 sm:px-12 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
            <DecryptedText text={t('title')} animateOn="view" sequential speed={100} encryptedClassName="opacity-20" />
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base max-w-md mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 [&>*]:h-full">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
