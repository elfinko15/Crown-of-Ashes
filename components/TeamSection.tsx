'use client'

import { useLang } from '@/lib/i18n/LanguageContext'
import ScrollReveal from './ScrollReveal'

const MEMBERS = [
  { name: 'Jonah', roleKey: 'team_jonah_role' as const, color: '#c9a84c', initials: 'J' },
  { name: 'Andor', roleKey: 'team_andor_role' as const, color: '#7c6fa0', initials: 'A' },
  { name: 'Tobias', roleKey: 'team_tobias_role' as const, color: '#5a8f7b', initials: 'T' },
  { name: 'Moritz', roleKey: 'team_moritz_role' as const, color: '#c06060', initials: 'M' },
  { name: 'Adrian', roleKey: 'team_adrian_role' as const, color: '#4a7fb5', initials: 'A' },
  { name: 'Mia', roleKey: 'team_mia_role' as const, color: '#b07cc6', initials: 'Mi' },
]

export default function TeamSection() {
  const { t } = useLang()

  return (
    <section id="team" className="py-24 px-4 rune-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="section-title">{t('team_title')}</h2>
          <p className="section-subtitle">{t('team_subtitle')}</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {MEMBERS.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 80}>
              <div className="glass rounded-2xl p-5 flex flex-col items-center text-center hover:border-white/20 transition-colors group">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold font-cinzel mb-4 group-hover:scale-105 transition-transform"
                  style={{
                    background: `radial-gradient(circle at 40% 35%, ${m.color}55, ${m.color}22)`,
                    border: `2px solid ${m.color}60`,
                    color: m.color,
                    boxShadow: `0 0 20px ${m.color}25`,
                  }}
                >
                  {m.initials}
                </div>
                <h3 className="font-cinzel text-sm font-bold text-white mb-1">{m.name}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{t(m.roleKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
