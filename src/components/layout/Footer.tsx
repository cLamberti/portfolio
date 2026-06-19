import { useTranslation } from 'react-i18next'
import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  const { t } = useTranslation('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1e1e2e] py-8">
      <div className="px-8 sm:px-12 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#94a3b8] text-sm">
          © {year} Christopher Lamberti — {t('rights')}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[#94a3b8] text-sm">{t('made')}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/cLamberti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/christopher-lamberti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
