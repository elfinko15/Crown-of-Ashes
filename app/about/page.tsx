'use client'

import Link from 'next/link'
import NFFooter from '@/components/NFFooter'

const TEAM = [
  { initial: 'J', name: 'Jonah', role: 'Gründer & Game Director' },
  { initial: 'A', name: 'Andor', role: 'Lead Developer' },
  { initial: 'T', name: 'Tobias', role: 'Art Director' },
  { initial: 'M', name: 'Moritz', role: 'Narrative Designer' },
  { initial: 'Ad', name: 'Adrian', role: 'Sound Designer' },
  { initial: 'Mi', name: 'Mia', role: 'UI/UX Designer' },
  { initial: 'F', name: 'Fynn', role: 'Level Designer' },
]

const VALUES = [
  {
    title: 'Leidenschaft vor Profit',
    text: 'Wir entwickeln Spiele, weil wir sie lieben — nicht wegen Investoren oder Quartalszahlen. Jede Entscheidung wird aus Liebe zum Medium getroffen.',
  },
  {
    title: 'Community zuerst',
    text: 'Unsere Spieler sind keine Kunden — sie sind Teil der Reise. Ihr Feedback und ihre Begeisterung formen das Spiel, das wir gemeinsam erschaffen.',
  },
  {
    title: 'Qualität über Quantität',
    text: 'Wir veröffentlichen lieber ein außergewöhnliches Spiel als viele mittelmäßige. Avadon soll ein Erlebnis sein, das man nicht vergisst.',
  },
]

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-nf-bg">
        {/* Hero */}
        <section className="border-b border-white/10 py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <span className="inline-block px-3 py-1 bg-white text-black text-xs font-bold font-barlow uppercase tracking-widest mb-6">
              Das Studio
            </span>
            <h1 className="font-barlow font-extrabold text-6xl md:text-8xl text-white uppercase tracking-tight leading-none mb-6">
              Nordic Forge<br />Studios
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              Wir sind ein kleines, leidenschaftliches Indie-Spielestudio aus Deutschland — gegründet aus dem tiefen Wunsch heraus, Spiele zu erschaffen, die Welten öffnen und Geschichten erzählen, die berühren.
            </p>
          </div>
        </section>

        {/* Studio Vision */}
        <section className="border-b border-white/8 py-16 px-4">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/35 text-xs font-barlow font-bold uppercase tracking-widest mb-4">Unsere Vision</p>
              <h2 className="font-barlow font-bold text-4xl text-white uppercase tracking-wide mb-6 leading-tight">
                Seele statt Budget
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-white/55 leading-relaxed">
                Nordic Forge Studios wurde mit einer einfachen Überzeugung gegründet: Gute Spiele brauchen kein Millionenbudget — sie brauchen Seele. Wir glauben an handgefertigte Welten, tiefe Erzählungen und Spielerlebnisse, die lange nach dem Abspann im Gedächtnis bleiben.
              </p>
              <p className="text-white/55 leading-relaxed">
                Unser erstes Projekt, <span className="text-white font-medium">Avadon: The Broken Sigils</span>, ist mehr als ein Spiel — es ist das Herzstück dessen, was Nordic Forge Studios sein soll: mutig, atmosphärisch und kompromisslos in seinem Anspruch an Qualität.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="border-b border-white/8 py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-white/35 text-xs font-barlow font-bold uppercase tracking-widest mb-4">Das Team</p>
            <h2 className="font-barlow font-bold text-4xl text-white uppercase tracking-wide mb-10 leading-tight">
              7 Personen. 1 Ziel.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {TEAM.map(member => (
                <div key={member.name} className="nf-card p-5 flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center mb-3 font-barlow font-bold text-xl">
                    {member.initial}
                  </div>
                  <p className="font-barlow font-bold text-white text-sm mb-1">{member.name}</p>
                  <p className="text-white/35 text-xs leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-white/8 py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-white/35 text-xs font-barlow font-bold uppercase tracking-widest mb-4">Werte</p>
            <h2 className="font-barlow font-bold text-4xl text-white uppercase tracking-wide mb-10 leading-tight">
              Wofür wir stehen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {VALUES.map((v, i) => (
                <div key={v.title} className="nf-card p-7">
                  <p className="text-white/20 font-barlow font-bold text-5xl mb-4 leading-none">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="font-barlow font-bold text-white text-lg uppercase tracking-wide mb-3">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="nf-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-white/35 text-xs font-barlow font-bold uppercase tracking-widest mb-2">Kontakt</p>
                <h3 className="font-barlow font-bold text-2xl text-white mb-1">Meld dich bei uns</h3>
                <p className="text-white/40 text-sm">support@nordicforgestudios.de</p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Link href="/games/avadon" className="btn-secondary text-sm">Avadon entdecken</Link>
                <Link href="/nf-plus" className="btn-primary text-sm">NF Studios+ beitreten</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <NFFooter />
    </>
  )
}
