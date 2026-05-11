'use client'

import { useLang } from '@/lib/i18n/LanguageContext'
import ScrollReveal from './ScrollReveal'

const VALUES = [
  { icon: '🔥', titleKey: 'about_v1_title' as const, textKey: 'about_v1_text' as const },
  { icon: '⚒', titleKey: 'about_v2_title' as const, textKey: 'about_v2_text' as const },
  { icon: '🛡', titleKey: 'about_v3_title' as const, textKey: 'about_v3_text' as const },
]

export default function AboutSection() {
  const { t } = useLang()

  return (
    <section id="about" className="py-24 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="section-title text-center">{t('about_title')}</h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
            {t('about_text')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map((v, i) => (
            <ScrollReveal key={v.titleKey} delay={i * 120}>
              <div className="glass-gold rounded-2xl p-8 text-center hover:border-gold/40 transition-colors group">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-cinzel text-lg font-bold text-gold mb-3 group-hover:text-gold-light transition-colors">
                  {t(v.titleKey)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{t(v.textKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
