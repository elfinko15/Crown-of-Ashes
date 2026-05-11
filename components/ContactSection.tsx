'use client'

import { useLang } from '@/lib/i18n/LanguageContext'
import ScrollReveal from './ScrollReveal'

export default function ContactSection() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-24 px-4 bg-black/30">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="section-title">{t('contact_title')}</h2>
          <p className="section-subtitle">{t('contact_subtitle')}</p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="glass-gold rounded-2xl p-8 mb-6 hover:border-gold/40 transition-colors">
            <p className="text-gold/70 text-xs font-mono uppercase tracking-widest mb-3">
              {t('contact_email_label')}
            </p>
            <a
              href="mailto:nordicforge.studios@gmx.de"
              className="font-cinzel text-xl md:text-2xl text-white hover:text-gold transition-colors break-all"
            >
              nordicforge.studios@gmx.de
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="glass rounded-2xl p-6">
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-4">
              {t('contact_social_label')}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Discord', 'Instagram', 'Twitter / X'].map(soc => (
                <div
                  key={soc}
                  className="glass px-5 py-2.5 rounded-xl text-white/30 text-sm flex items-center gap-2"
                >
                  <span>{soc}</span>
                  <span className="text-xs text-white/20">{t('contact_social_soon')}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
