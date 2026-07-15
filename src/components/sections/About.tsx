import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, FolderGit2 } from 'lucide-react'
import DecryptedText from '../ui/DecryptedText'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
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
          <DecryptedText text={t('title')} animateOn="view" sequential speed={100} encryptedClassName="opacity-20" />
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
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="rounded-xl bg-[#111118] border border-[#1e1e2e] p-5"
            >
              <FolderGit2 size={18} className="text-blue-400 mb-3" />
              <p className="text-2xl font-heading font-bold text-white">{t('stat_projects_value')}</p>
              <p className="text-xs text-[#94a3b8] mt-1">{t('stat_projects_label')}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="rounded-xl bg-[#111118] border border-[#1e1e2e] p-5"
            >
              <MapPin size={18} className="text-blue-400 mb-3" />
              <p className="text-sm font-semibold text-white leading-snug">{t('location')}</p>
              <p className="text-xs text-[#94a3b8] mt-1">{t('stat_location_label')}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="rounded-xl bg-[#111118] border border-[#1e1e2e] p-5"
            >
              <GraduationCap size={18} className="text-blue-400 mb-3" />
              <p className="text-sm font-semibold text-white leading-snug">{t('education')}</p>
              <p className="text-xs text-[#94a3b8] mt-1">{t('stat_education_label')}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="rounded-xl bg-[#111118] border border-blue-500/30 p-5"
            >
              <Briefcase size={18} className="text-blue-400 mb-3" />
              <p className="text-sm font-semibold text-blue-300 leading-snug">{t('availability')}</p>
              <p className="text-xs text-[#94a3b8] mt-1">{t('stat_availability_label')}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
