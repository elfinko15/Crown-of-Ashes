'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import ScrollReveal from './ScrollReveal'

export default function GamesSection() {
  const { t } = useLang()

  return (
    <section id="games" className="py-24 px-4 rune-bg">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title">{t('games_title')}</h2>
          <p className="section-subtitle">{t('games_subtitle')}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avadon card */}
          <ScrollReveal delay={0} className="md:col-span-1">
            <div className="glass rounded-2xl overflow-hidden h-full group hover:border-gold/30 transition-colors duration-300">
              {/* Game art placeholder */}
              <div className="h-56 bg-gradient-to-br from-gold/10 via-black/40 to-black/80 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'radial-gradient(ellipse at 30% 40%, rgba(201,168,76,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(100,50,0,0.4) 0%, transparent 60%)',
                  }}
                />
                <svg className="w-24 h-24 text-gold/30" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth={1}>
                  <polygon points="50,10 90,80 10,80" />
                  <line x1="50" y1="10" x2="50" y2="80" />
                  <line x1="30" y1="55" x2="70" y2="55" />
                </svg>
                <div className="absolute top-3 left-3">
                  <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-mono px-2 py-1 rounded-full">
                    {t('games_status_dev')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  Avadon: The Broken Sigils
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{t('games_avadon_desc')}</p>
                <Link href="/games/avadon" className="btn-gold inline-block text-sm">
                  {t('games_cta')} →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Coming Soon 1 */}
          <ScrollReveal delay={150}>
            <div className="glass rounded-2xl overflow-hidden h-full opacity-60 hover:opacity-80 transition-opacity">
              <div className="h-56 bg-gradient-to-br from-white/5 to-black/60 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚒</div>
                  <span className="text-white/30 text-xs font-mono tracking-widest uppercase">{t('games_status_soon')}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-bold text-white/40 mb-2">???</h3>
                <p className="text-white/30 text-sm leading-relaxed">{t('games_coming_soon')}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Coming Soon 2 */}
          <ScrollReveal delay={300}>
            <div className="glass rounded-2xl overflow-hidden h-full opacity-60 hover:opacity-80 transition-opacity">
              <div className="h-56 bg-gradient-to-br from-white/5 to-black/60 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔮</div>
                  <span className="text-white/30 text-xs font-mono tracking-widest uppercase">{t('games_status_soon')}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-bold text-white/40 mb-2">???</h3>
                <p className="text-white/30 text-sm leading-relaxed">{t('games_coming_soon')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
