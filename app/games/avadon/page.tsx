'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'

const REGIONS = [
  { de: 'Ashenveil', en: 'Ashenveil', fr: 'Ashenveil', icon: '🌑', desc: { de: 'Verfallenes Waldland, in Asche gehüllt', en: 'Decayed woodland shrouded in ash', fr: 'Forêt désolée enveloppée de cendres' } },
  { de: 'Stonehallow', en: 'Stonehallow', fr: 'Stonehallow', icon: '⛰', desc: { de: 'Verwitterte Berge und uralte Ruinen', en: 'Weathered mountains and ancient ruins', fr: 'Montagnes érodées et ruines anciennes' } },
  { de: 'Mirewaters', en: 'Mirewaters', fr: 'Mirewaters', icon: '🌊', desc: { de: 'Verseuchte Sümpfe voller Geheimnisse', en: 'Poisoned swamps full of secrets', fr: 'Marécages empoisonnés pleins de secrets' } },
  { de: 'Emberholt', en: 'Emberholt', fr: 'Emberholt', icon: '🔥', desc: { de: 'Brennende Ebenen, einst fruchtbar', en: 'Burning plains, once fertile', fr: 'Plaines brûlantes, jadis fertiles' } },
  { de: 'Mondwiese', en: 'Moonmeadow', fr: 'Prairie Lunaire', icon: '🌙', desc: { de: 'Silberne Wiesen unter ewigem Mondlicht', en: 'Silver meadows under eternal moonlight', fr: 'Prairies argentées sous la lumière éternelle de la lune' } },
]

const CLASSES = [
  { name: 'Ritter', en: 'Knight', fr: 'Chevalier', icon: '⚔️', color: '#c9a84c', desc: { de: 'Meister der Klinge und des Schildes', en: 'Master of blade and shield', fr: 'Maître de la lame et du bouclier' } },
  { name: 'Barbar', en: 'Barbarian', fr: 'Barbare', icon: '🪓', color: '#c06060', desc: { de: 'Ungezähmte Kraft und Ausdauer', en: 'Untamed strength and endurance', fr: 'Force et endurance indomptables' } },
  { name: 'Magier', en: 'Mage', fr: 'Mage', icon: '🔮', color: '#7c6fa0', desc: { de: 'Meister der uralten Arkanmagie', en: 'Master of ancient arcane magic', fr: 'Maître de la magie arcanique ancienne' } },
  { name: 'Jäger', en: 'Hunter', fr: 'Chasseur', icon: '🏹', color: '#5a8f7b', desc: { de: 'Präzision aus dem Schatten', en: 'Precision from the shadows', fr: 'Précision depuis l\'ombre' } },
]

export default function AvadonPage() {
  const { t, lang } = useLang()

  return (
    <>
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden rune-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(100,50,0,0.4) 0%, transparent 50%)',
            }}
          />

          <div className="relative max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-gold/70 hover:text-gold transition-colors text-sm mb-8 gap-1">
              {t('avadon_back')}
            </Link>

            <div className="mb-4">
              <span className="text-gold/60 text-xs font-mono tracking-widest uppercase border border-gold/30 px-3 py-1 rounded-full">
                {t('avadon_tag')}
              </span>
            </div>

            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold gold-gradient mb-4">
              {t('avadon_title')}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gold/15 border border-gold/30 text-gold text-xs font-mono px-3 py-1 rounded-full animate-glow-pulse">
                {t('avadon_status')}
              </span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              {t('avadon_desc')}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="section-title">{t('avadon_story_title')}</h2>
              <div className="glass rounded-2xl p-8">
                <p className="text-white/70 text-base leading-relaxed italic">{t('avadon_story')}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="section-title">{t('avadon_features_title')}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {(['avadon_f1', 'avadon_f2', 'avadon_f3', 'avadon_f4', 'avadon_f5'] as const).map((key, i) => (
                <ScrollReveal key={key} delay={i * 80}>
                  <div className="glass-gold rounded-xl p-4 flex items-center gap-3">
                    <span className="text-gold text-lg">✦</span>
                    <span className="text-white/80 text-sm">{t(key)}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-20 px-4 bg-black/30 rune-bg">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="section-title">{t('avadon_regions_title')}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {REGIONS.map((r, i) => (
                <ScrollReveal key={r.en} delay={i * 80}>
                  <div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors">
                    <div className="text-3xl mb-3">{r.icon}</div>
                    <h3 className="font-cinzel text-lg font-bold text-white mb-2">
                      {lang === 'fr' ? r.fr : lang === 'en' ? r.en : r.de}
                    </h3>
                    <p className="text-white/50 text-sm">{r.desc[lang as keyof typeof r.desc] ?? r.desc.de}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Classes */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="section-title">{t('avadon_classes_title')}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {CLASSES.map((c, i) => (
                <ScrollReveal key={c.en} delay={i * 100}>
                  <div className="glass rounded-2xl p-6 text-center hover:border-white/20 transition-colors group">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform"
                      style={{
                        background: `radial-gradient(circle, ${c.color}30, transparent)`,
                        border: `1px solid ${c.color}50`,
                        boxShadow: `0 0 20px ${c.color}20`,
                      }}
                    >
                      {c.icon}
                    </div>
                    <h3 className="font-cinzel text-sm font-bold text-white mb-2">
                      {lang === 'fr' ? c.fr : lang === 'en' ? c.en : c.name}
                    </h3>
                    <p className="text-white/45 text-xs leading-relaxed">
                      {c.desc[lang as keyof typeof c.desc] ?? c.desc.de}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshot placeholders */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="section-title">{t('avadon_screenshots_title')}</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map(n => (
                <ScrollReveal key={n} delay={n * 100}>
                  <div className="glass rounded-2xl aspect-video flex items-center justify-center opacity-40">
                    <span className="text-white/30 font-mono text-sm">Screenshot {n}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
