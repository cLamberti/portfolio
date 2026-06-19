import { motion } from 'framer-motion'
import { ExternalLink, Github, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation('projects')

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative flex flex-col bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/10"
    >
      {/* Period badge */}
      <span className="text-[11px] font-medium text-blue-400 uppercase tracking-widest mb-3">
        {project.period}
      </span>

      {/* Name */}
      <h3 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-blue-200 transition-colors">
        {t(project.nameKey.replace('projects.', ''))}
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
    </motion.article>
  )
}
