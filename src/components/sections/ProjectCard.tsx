import { motion } from 'framer-motion'
import { ExternalLink, Github, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Project } from '@/data/projects'
import BorderGlow from '../ui/BorderGlow'
import DecryptedText from '../ui/DecryptedText'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation('projects')

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="group h-full"
    >
      <BorderGlow
        backgroundColor="#111118"
        borderRadius={12}
        colors={['#1e3a8a', '#3b82f6', '#818cf8']}
        glowColor="217 91 60"
        glowIntensity={1.4}
        glowRadius={20}
        edgeSensitivity={15}
        fillOpacity={0.1}
        className="h-full"
      >
      <article className="relative flex flex-col p-6 h-full">
      {/* Period badge */}
      <span className="text-[11px] font-medium text-blue-400 uppercase tracking-widest mb-3">
        {project.period}
      </span>

      {/* Name */}
      <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">
        <DecryptedText
          text={t(project.nameKey.replace('projects.', ''))}
          animateOn="view"
          sequential
          speed={80}
          encryptedClassName="opacity-20"
        />
      </h3>

      {/* Description */}
      <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1">
        {t(project.descriptionKey.replace('projects.', ''))}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-1 rounded-md bg-blue-950/40 border border-blue-800/30 text-blue-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors min-h-[44px] pr-2"
            aria-label={`${t(project.nameKey.replace('projects.', ''))} — ${t('live')}`}
          >
            <ExternalLink size={13} />
            {t('live')}
          </a>
        )}
        {project.docsUrl && (
          <a
            href={project.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors min-h-[44px] pr-2"
            aria-label={`${t(project.nameKey.replace('projects.', ''))} — ${t('docs')}`}
          >
            <BookOpen size={13} />
            {t('docs')}
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#94a3b8] hover:text-white transition-colors min-h-[44px] pr-2"
            aria-label={`${t(project.nameKey.replace('projects.', ''))} — ${t('code')}`}
          >
            <Github size={13} />
            {t('code')}
          </a>
        )}
      </div>
      </article>
      </BorderGlow>
    </motion.div>
  )
}
