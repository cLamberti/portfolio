import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import DecryptedText from '../ui/DecryptedText'
import BorderGlow from '../ui/BorderGlow'

const skillData = {
  frontend: ['React', 'Next.js', 'Vue 3', 'Nuxt 4 (SSR)', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'Pinia', 'PWA', 'Responsive Design'],
  backend: ['Node.js', 'REST APIs', 'GraphQL', 'JWT', 'Zod', 'Nodemailer', 'Nitro'],
  database: ['PostgreSQL', 'Supabase', 'Drizzle ORM', 'Prisma ORM v7', 'Neon (serverless)'],
  tools: ['Git / GitHub', 'Azure DevOps', 'Vercel', 'Netlify', 'Vitest', 'i18n'],
  methodologies: ['Scrum', 'Component Architecture', 'SPA Routing', 'SSR', 'Lazy Loading', 'SEO'],
  soft: ['soft_teamwork', 'soft_communication', 'soft_problemsolving', 'soft_adaptability', 'soft_proactivity'],
  languages: ['lang_spanish', 'lang_english'],
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' as const },
  }),
}

export function Skills() {
  const { t } = useTranslation('skills')

  const categories = [
    { key: 'frontend', labelKey: 'frontend', translate: false },
    { key: 'backend', labelKey: 'backend', translate: false },
    { key: 'database', labelKey: 'database', translate: false },
    { key: 'tools', labelKey: 'tools', translate: false },
    { key: 'methodologies', labelKey: 'methodologies', translate: false },
    { key: 'soft', labelKey: 'soft', translate: true },
    { key: 'languages', labelKey: 'languages', translate: true },
  ] as const

  return (
    <section id="skills" className="py-24">
      <div className="px-8 sm:px-12 md:px-16 max-w-3xl mx-auto">
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
          <p className="text-[#94a3b8] text-sm sm:text-base">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.key}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={ci}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">
                {t(cat.labelKey)}
              </p>
              <div className="flex flex-wrap gap-2">
                {skillData[cat.key].map((skill) => (
                  <BorderGlow
                    key={skill}
                    backgroundColor="#111118"
                    borderRadius={10}
                    colors={['#1e3a8a', '#3b82f6', '#818cf8']}
                    glowColor="217 91 60"
                    glowIntensity={1.3}
                    glowRadius={10}
                    edgeSensitivity={8}
                    fillOpacity={0.08}
                  >
                    <span className="text-sm px-4 py-2 text-[#94a3b8] font-medium cursor-default hover:text-white transition-colors duration-200 block">
                      {cat.translate ? t(skill) : skill}
                    </span>
                  </BorderGlow>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
