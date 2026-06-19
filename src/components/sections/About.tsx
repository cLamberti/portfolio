import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

const skillGroups = {
  Frontend: ['React', 'Next.js', 'Vue 3', 'Nuxt 4', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'REST APIs', 'Nitro', 'JWT', 'Zod'],
  Database: ['PostgreSQL', 'Drizzle ORM', 'Prisma ORM', 'Neon'],
  Tools: ['Git', 'GitHub', 'Azure DevOps', 'Vercel', 'Netlify'],
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export function About() {
  const { t } = useTranslation('about')

  return (
    <section id="about" >
      <div className="px-8 sm:px-12 md:px-16 max-w-3xl mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
        >
          {t('title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text column */}
          <div className="space-y-5">
            {[t('p1'), t('p2'), t('p3')].map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="text-[#94a3b8] leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="flex flex-col gap-3 pt-2"
            >
              <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span>{t('location')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <GraduationCap size={16} className="text-blue-400 shrink-0" />
                <span>{t('education')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-300 font-medium">
                <Briefcase size={16} className="text-blue-400 shrink-0" />
                <span>{t('availability')}</span>
              </div>
            </motion.div>
          </div>

          {/* Skills grid */}
          <div className="space-y-5">
            {Object.entries(skillGroups).map(([group, skills], gi) => (
              <motion.div
                key={group}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={gi + 1}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#111118] border border-[#1e1e2e] text-[#94a3b8] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
