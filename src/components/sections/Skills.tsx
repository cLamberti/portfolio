import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import DecryptedText from '../ui/DecryptedText'
import SkillBadge from '../ui/SkillBadge'

const skillData = {
  frontend: ['JavaScript', 'TypeScript', 'HTML & CSS', 'React', 'Next.js', 'Vue 3', 'Nuxt 4 (SSR)', 'Angular', 'Astro', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Pinia', 'PWA', 'Responsive Design'],
  backend: ['Node.js', 'Express', 'NestJS', 'Spring Boot', 'Jakarta EE', 'REST APIs', 'GraphQL', 'WebSocket', 'JWT', 'OAuth', 'PayPal API', 'JPA / Hibernate', 'Zod', 'Nodemailer', 'Nitro'],
  database: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle DB', 'SQL', 'MongoDB', 'SQLite', 'Firebase', 'Supabase', 'Drizzle ORM', 'Prisma ORM v7', 'Neon (serverless)'],
  tools: ['Git / GitHub', 'GitHub Actions', 'CI/CD', 'Azure DevOps', 'Azure', 'Vercel', 'Netlify', 'Figma', 'Postman', 'Vite', 'Vitest', 'Jest', 'JUnit', 'Pytest', 'React Testing Library', 'Lighthouse', 'Android Studio', 'Google Play Console', 'Google Maps API', 'Trello', 'WordPress', 'Bash', 'PowerShell', 'i18n'],
  mobile: ['React Native', 'Expo', 'Kotlin', 'Android', 'iOS'],
  other: ['Python', 'Java', 'Go', 'PHP', 'C++', 'Arduino', 'ESP32'],
  methodologies: ['Scrum', 'SOLID Principles', 'UI/UX', 'Performance Optimization', 'Component Architecture', 'SPA Routing', 'SSR', 'Lazy Loading', 'SEO'],
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
    { key: 'mobile', labelKey: 'mobile', translate: false },
    { key: 'other', labelKey: 'other', translate: false },
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
                  <SkillBadge key={skill}>
                    {cat.translate ? t(skill) : skill}
                  </SkillBadge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
