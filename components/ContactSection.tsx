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
          <div className="glass-gold rounded-2xl p-8 mb-6 hover:border-gold/40 transition-colors">
            <p className="text-gold/70 text-xs font-mono uppercase tracking-widest mb-3">
              {t('contact_donate_label')}
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              {t('contact_donate_text')}
            </p>
            <a
              href="https://www.paypal.com/paypalme/nordicforgestudios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-gold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 6.243-8.558 6.243H9.824l-1.402 8.88h3.297c.459 0 .85-.334.922-.788l.038-.197.733-4.647.047-.256a.932.932 0 0 1 .92-.788h.58c3.753 0 6.693-1.525 7.547-5.932.36-1.847.173-3.386-.884-4.228z"/>
              </svg>
              {t('contact_donate_btn')}
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={350}>
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
