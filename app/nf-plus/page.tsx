'use client'

import { useState } from 'react'
import Link from 'next/link'
import NFFooter from '@/components/NFFooter'

const Check = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
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
        <section className="border-b border-white/10 py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold font-barlow uppercase tracking-widest mb-6">
              Mitgliedschaft
            </span>
            <h1 className="font-barlow font-extrabold text-6xl md:text-7xl text-white mb-4 uppercase tracking-tight leading-none">
              NF Studios+
            </h1>
            <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Unterstütze Nordic Forge Studios und erhalte exklusive Vorteile — direkt von einem leidenschaftlichen Indie-Team aus Deutschland.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Basic */}
            <div className="nf-card p-8 flex flex-col">
              <div className="mb-7">
                <p className="text-white/35 text-xs font-barlow font-bold uppercase tracking-widest mb-3">Basic</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="font-barlow font-bold text-5xl text-white leading-none">€2,99</span>
                  <span className="text-white/35 text-sm mb-1">/ Monat</span>
                </div>
                <p className="text-white/35 text-xs mt-2">Perfekter Einstieg für Community-Mitglieder</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {BASIC_FEATURES.map(f => (
                  <li key={f} className="flex items-start gap-3 text-white/60 text-sm">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button disabled className="btn-secondary w-full py-3 text-sm opacity-50 cursor-not-allowed">
                Bald verfügbar
              </button>
            </div>

            {/* Pro */}
            <div className="nf-card border-white/20 p-8 flex flex-col relative overflow-hidden">
              {/* Top white accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white" />

              <div className="absolute -top-px right-6">
                <span className="bg-white text-black text-[10px] font-bold font-barlow px-3 py-1 uppercase tracking-widest">
                  Am beliebtesten
                </span>
              </div>

              <div className="mb-7 mt-4">
                <p className="text-white/35 text-xs font-barlow font-bold uppercase tracking-widest mb-3">Pro</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="font-barlow font-bold text-5xl text-white leading-none">€6,99</span>
                  <span className="text-white/35 text-sm mb-1">/ Monat</span>
                </div>
                <p className="text-white/35 text-xs mt-2">Für echte Unterstützer mit maximalen Vorteilen</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {PRO_FEATURES.map((f, i) => (
                  <li key={f} className={`flex items-start gap-3 text-sm ${i === 0 ? 'text-white/80 font-medium' : 'text-white/60'}`}>
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button disabled className="btn-primary w-full py-3 text-sm opacity-50 cursor-not-allowed">
                Bald verfügbar
              </button>
            </div>
          </div>

          <p className="text-center text-white/20 text-xs mt-5">
            Zahlungsabwicklung via Stripe — kommt bald. Fragen: support@nordicforgestudios.de
          </p>
        </section>

        {/* What is NF Studios+ */}
        <section className="border-t border-white/8 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-barlow font-bold text-3xl text-white uppercase tracking-wide mb-4">
              Was ist NF Studios+?
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              Nordic Forge Studios ist ein kleines, leidenschaftliches Indie-Team aus Deutschland. Wir entwickeln Avadon: The Broken Sigils — ein episches Open World Fantasy RPG — mit Herzblut und ohne großes Publisher-Budget.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              NF Studios+ ist unsere Art, dir echte Vorteile für deine Unterstützung zu geben. Jeder Cent fließt direkt in die Entwicklung.
            </p>
            <Link href="/games/avadon" className="btn-secondary inline-block text-sm">
              Mehr über Avadon erfahren
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/8 py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-barlow font-bold text-3xl text-white uppercase tracking-wide text-center mb-10">
              Häufige Fragen
            </h2>
            <div className="divide-y divide-white/8">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-barlow font-bold text-white text-base pr-6">{faq.q}</span>
                    <span className="text-white/40 flex-shrink-0 text-xl leading-none">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5">
                      <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NFFooter />
    </>
  )
}
