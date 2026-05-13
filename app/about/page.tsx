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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Leidenschaft vor Profit',
    text: 'Wir entwickeln Spiele, weil wir sie lieben — nicht wegen Investoren oder Quartalszahlen. Jede Entscheidung, vom Design bis zur Story, wird aus Liebe zum Medium getroffen.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Community zuerst',
    text: 'Unsere Spieler sind keine Kunden — sie sind Teil der Reise. Ihr Feedback, ihre Begeisterung und ihre Unterstützung formen das Spiel, das wir gemeinsam erschaffen.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Qualität über Quantität',
    text: 'Wir veröffentlichen lieber ein außergewöhnliches Spiel als viele mittelmäßige. Avadon: The Broken Sigils soll ein Erlebnis sein, das man nicht vergisst.',
  },
]

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-nf-bg">
        {/* Hero */}
        <section className="relative py-32 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)' }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 text-white/40 text-xs font-semibold tracking-widest uppercase mb-6">
              Das Studio
            </span>
            <h1 className="font-cinzel font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
              Über Nordic Forge<br /><span className="text-gold">Studios</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto">
              Wir sind ein kleines, leidenschaftliches Indie-Spielestudio aus Deutschland — gegründet aus dem tiefen Wunsch heraus, Spiele zu erschaffen, die Welten öffnen und Geschichten erzählen, die berühren.
            </p>
          </div>
        </section>

        {/* Studio Vision */}
        <section className="max-w-4xl mx-auto px-4 pb-24">
          <div className="glass p-10 md:p-14 text-center">
            <h2 className="font-cinzel font-bold text-3xl text-white mb-6">
              Unsere <span className="text-gold">Vision</span>
            </h2>
            <p className="text-white/65 text-base leading-loose mb-6 max-w-2xl mx-auto">
              Nordic Forge Studios wurde mit einer einfachen Überzeugung gegründet: Gute Spiele brauchen kein Millionenbudget — sie brauchen Seele. Wir glauben an handgefertigte Welten, tiefe Erzählungen und Spielerlebnisse, die lange nach dem Abspann im Gedächtnis bleiben.
            </p>
            <p className="text-white/65 text-base leading-loose max-w-2xl mx-auto">
              Unser erstes Projekt, <span className="text-gold font-medium">Avadon: The Broken Sigils</span>, ist mehr als ein Spiel — es ist das Herzstück dessen, was Nordic Forge Studios sein soll: mutig, atmosphärisch und kompromisslos in seinem Anspruch an Qualität.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-5xl mx-auto px-4 pb-24">
          <h2 className="font-cinzel font-bold text-3xl text-white text-center mb-12">
            Das <span className="text-gold">Team</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {TEAM.map(member => (
              <div key={member.name} className="glass p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple/40 to-gold/20 border border-gold/20 flex items-center justify-center mb-4">
                  <span className="font-cinzel font-bold text-xl text-gold">{member.initial}</span>
                </div>
                <p className="font-barlow font-bold text-white text-base mb-1">{member.name}</p>
                <p className="text-white/40 text-xs leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="max-w-5xl mx-auto px-4 pb-24">
          <h2 className="font-cinzel font-bold text-3xl text-white text-center mb-12">
            Unsere <span className="text-gold">Werte</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="glass p-8">
                <div className="text-gold mb-5">{v.icon}</div>
                <h3 className="font-cinzel font-bold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-2xl mx-auto px-4 pb-28 text-center">
          <div className="glass p-10">
            <h2 className="font-cinzel font-bold text-2xl text-white mb-4">
              Kontakt
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Fragen, Presseanfragen oder einfach Hallo sagen? Wir freuen uns von der Community zu hören.
            </p>
            <div className="space-y-3 mb-8">
              <a
                href="mailto:support@nordicforgestudios.de"
                className="flex items-center justify-center gap-2 text-gold hover:text-gold/80 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                support@nordicforgestudios.de
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/games/avadon" className="btn-secondary text-sm">
                Avadon entdecken
              </Link>
              <Link href="/nf-plus" className="btn-primary text-sm">
                NF Studios+ beitreten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <NFFooter />
    </>
  )
}
