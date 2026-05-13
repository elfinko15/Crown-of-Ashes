'use client'

import { useState } from 'react'
import Link from 'next/link'
import NFFooter from '@/components/NFFooter'

const Check = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

const BASIC_FEATURES = [
  'Zugang zu exklusiven Entwickler-Updates',
  'Früher Zugang zu Spielankündigungen',
  'Digitales Mitgliedschaftsabzeichen',
  'Monatlicher Newsletter mit Hinter-den-Kulissen-Einblicken',
  'Community-Forum Zugang (Members Only)',
  'Exklusive Profilrahmen im NFS-Portal',
]

const PRO_FEATURES = [
  'Alle Basic-Vorteile',
  'Beta-Zugang zu Avadon: The Broken Sigils',
  'Exklusiver Discord-Kanal mit Entwicklerteam',
  'Früher Zugang zu Spielupdates (48h vor Release)',
  'Digitale Artbooks & Soundtrack-Downloads',
  'Namentliche Erwähnung im Abspann',
  'Priorisierter Support',
  'Monatliche Q&A-Sessions mit dem Studio',
]

const FAQS = [
  {
    q: 'Kann ich jederzeit kündigen?',
    a: 'Ja. Du kannst dein Abonnement jederzeit in deinen Kontoeinstellungen kündigen. Du behältst deine Vorteile bis zum Ende des aktuellen Abrechnungszeitraums.',
  },
  {
    q: 'Wie kann ich von Basic auf Pro upgraden?',
    a: 'Du kannst jederzeit in deinen Kontoeinstellungen unter "Mitgliedschaft" auf Pro upgraden. Die Differenz wird anteilig berechnet.',
  },
  {
    q: 'Wann wird Stripe-Zahlung verfügbar sein?',
    a: 'Wir arbeiten aktuell an der Integration von Stripe. In der Zwischenzeit kontaktiere uns unter support@nordicforgestudios.de für manuelle Aktivierung.',
  },
  {
    q: 'Gibt es eine kostenlose Testphase?',
    a: 'Aktuell bieten wir keine kostenlose Testphase an. Als kleines Indie-Studio sind wir auf die Unterstützung unserer Community angewiesen.',
  },
  {
    q: 'Was ist der Beta-Zugang bei Pro?',
    a: 'Pro-Mitglieder erhalten als Erste Zugang zu spielbaren Versionen von Avadon: The Broken Sigils, noch bevor die Beta öffentlich wird.',
  },
]

export default function NFPlusPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <main className="min-h-screen bg-nf-bg">
        {/* Hero */}
        <section className="relative py-28 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)' }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              Mitgliedschaft
            </span>
            <h1 className="font-cinzel font-bold text-5xl md:text-6xl text-white mb-5 leading-tight">
              NF Studios<span className="text-gold">+</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
              Unterstütze Nordic Forge Studios und erhalte exklusive Vorteile — direkt von einem leidenschaftlichen Indie-Team aus Deutschland.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-5xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Basic */}
            <div className="glass p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Basic</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-cinzel font-bold text-5xl text-white">2,99</span>
                  <span className="text-white/40 text-sm mb-2">€ / Monat</span>
                </div>
                <p className="text-white/40 text-sm">Perfekter Einstieg für Community-Mitglieder</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {BASIC_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white/70 text-sm">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="w-full py-3 rounded-lg border border-white/20 text-white/50 text-sm font-semibold cursor-not-allowed"
              >
                Bald verfügbar
              </button>
            </div>

            {/* Pro */}
            <div className="relative glass p-8 flex flex-col border-gold/30" style={{ borderColor: 'rgba(201,168,76,0.3)' }}>
              {/* Beliebtesten badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full bg-gold text-black text-xs font-bold font-barlow uppercase tracking-wider">
                  Am beliebtesten
                </span>
              </div>

              <div className="mb-6">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Pro</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-cinzel font-bold text-5xl text-white">6,99</span>
                  <span className="text-white/40 text-sm mb-2">€ / Monat</span>
                </div>
                <p className="text-white/40 text-sm">Für echte Unterstützer mit maximalen Vorteilen</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {PRO_FEATURES.map((f, i) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${i === 0 ? 'text-gold/80' : 'text-white/70'}`}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="w-full py-3 rounded-lg bg-gold/90 text-black text-sm font-bold cursor-not-allowed opacity-60"
              >
                Bald verfügbar
              </button>
            </div>
          </div>

          {/* Stripe note */}
          <p className="text-center text-white/25 text-xs mt-6">
            Zahlungsabwicklung via Stripe — kommt bald. Bei Fragen: support@nordicforgestudios.de
          </p>
        </section>

        {/* What is NF Studios+ */}
        <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
          <h2 className="font-cinzel font-bold text-3xl text-white mb-4">
            Was ist <span className="text-gold">NF Studios+</span>?
          </h2>
          <p className="text-white/55 leading-relaxed mb-8">
            Nordic Forge Studios ist ein kleines, leidenschaftliches Indie-Team aus Deutschland. Wir entwickeln Avadon: The Broken Sigils — ein episches Open World Fantasy RPG — mit Herzblut und ohne großes Publisher-Budget. NF Studios+ ist unsere Art, dir echte Vorteile für deine Unterstützung zu geben. Jeder Cent fließt direkt in die Entwicklung.
          </p>
          <Link href="/games/avadon" className="btn-secondary inline-block">
            Mehr über Avadon erfahren
          </Link>
        </section>

        {/* FAQ */}
        <section className="max-w-2xl mx-auto px-4 pb-24">
          <h2 className="font-cinzel font-bold text-3xl text-white text-center mb-10">
            Häufige Fragen
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-white text-sm font-medium pr-4">{faq.q}</span>
                  <svg
                    className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-white/55 text-sm leading-relaxed border-t border-white/8">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <NFFooter />
    </>
  )
}
