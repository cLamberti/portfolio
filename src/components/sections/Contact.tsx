import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Github, Linkedin, Mail, Phone } from 'lucide-react'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation('contact')
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = t('required')
    if (!form.email.trim()) errs.email = t('required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t('invalid_email')
    if (!form.message.trim()) errs.message = t('required')
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl bg-[#0c0c14] border text-[#f1f5f9] text-sm placeholder:text-[#94a3b8]/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/40 min-h-[44px] ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400'
        : 'border-[#1e1e2e] focus:border-blue-500/50'
    }`

  return (
    <section id="contact" className="py-24">
      <div className="px-8 sm:px-12 md:px-16 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-3">
            {t('title')}
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="font-heading text-xl font-semibold text-white">
                  {t('success_title')}
                </h3>
                <p className="text-[#94a3b8]">{t('success_text')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#94a3b8] mb-2">
                    {t('name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t('name_placeholder')}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass('name')}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#94a3b8] mb-2">
                    {t('email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder={t('email_placeholder')}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass('email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#94a3b8] mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t('message_placeholder')}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass('message')} resize-none min-h-[120px]`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-950/30 border border-red-500/30" role="alert">
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-red-300">{t('error_title')}</p>
                      <p className="text-xs text-red-400/80 mt-1">{t('error_text')}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 text-white font-semibold text-sm hover:from-blue-600 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-blue-900/30 min-h-[44px] cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      {t('submit')}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="space-y-4 pt-2"
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'lamberti.christopher@gmail.com',
                href: 'mailto:lamberti.christopher@gmail.com',
              },
              {
                icon: Phone,
                label: 'WhatsApp',
                value: '+506 7024-1641',
                href: 'https://wa.me/50670241641',
              },
              {
                icon: Github,
                label: 'GitHub',
                value: 'github.com/cLamberti',
                href: 'https://github.com/cLamberti',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                value: 'christopher-lamberti',
                href: 'https://linkedin.com/in/christopher-lamberti',
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#111118] border border-[#1e1e2e] hover:border-blue-500/40 transition-all duration-200 group min-h-[64px]"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/40 border border-blue-800/30 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-400 mb-0.5">{label}</p>
                  <p className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
