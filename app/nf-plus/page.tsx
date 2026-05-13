'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

const Check = ({ dark = false }: { dark?: boolean }) => (
  <svg className={`w-5 h-5 flex-shrink-0 ${dark ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

const Dash = () => (
  <svg className="w-5 h-5 flex-shrink-0 text-white/20" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/>
  </svg>
)

interface Feature { label: string; desc: string }

export default function NFPlusPage() {
  const { t, lang } = useLang()

  const BASIC_FEATURES: Feature[] = [
    {
      label: t('nfplus_feature_demos'),
      desc: lang === 'de' ? 'Zugang zu spielbaren Demos noch vor dem offiziellen Release'
          : lang === 'fr' ? 'Accès aux démos jouables avant la sortie officielle'
          : lang === 'es' ? 'Acceso a demos jugables antes del lanzamiento oficial'
          : 'Access to playable demos before the official release',
    },
    {
      label: t('nfplus_feature_updates'),
      desc: lang === 'de' ? 'Monatliche Behind-the-Scenes Einblicke direkt vom Entwicklerteam'
          : lang === 'fr' ? 'Aperçus mensuels des coulisses directement de l\'équipe de développement'
          : lang === 'es' ? 'Actualizaciones mensuales del equipo de desarrollo'
          : 'Monthly behind-the-scenes insights directly from the dev team',
    },
    {
      label: t('nfplus_feature_discord'),
      desc: lang === 'de' ? 'Exklusiver NF Studios+ Discord-Kanal mit direktem Zugang zum Team'
          : lang === 'fr' ? 'Canal Discord exclusif NF Studios+ avec accès direct à l\'équipe'
          : lang === 'es' ? 'Canal exclusivo de Discord con acceso directo al equipo'
          : 'Exclusive NF Studios+ Discord channel with direct access to the team',
    },
    {
      label: t('nfplus_feature_wallpapers'),
      desc: lang === 'de' ? 'Hochauflösende Wallpapers, Concept Art und digitale Artworks zum Download'
          : lang === 'fr' ? 'Fonds d\'écran HD, concept art et œuvres numériques à télécharger'
          : lang === 'es' ? 'Fondos HD, concept art y obras digitales para descargar'
          : 'High-res wallpapers, concept art and digital artworks to download',
    },
    {
      label: lang === 'de' ? 'Supporter-Badge' : lang === 'fr' ? 'Badge Supporter' : lang === 'es' ? 'Insignia Supporter' : 'Supporter Badge',
      desc: lang === 'de' ? 'Exklusives NF Studios+ Abzeichen im Discord und auf deinem Profil'
          : lang === 'fr' ? 'Badge exclusif NF Studios+ sur Discord et votre profil'
          : lang === 'es' ? 'Insignia exclusiva NF Studios+ en Discord y tu perfil'
          : 'Exclusive NF Studios+ badge on Discord and your profile',
    },
    {
      label: lang === 'de' ? 'Exklusiver Newsletter' : lang === 'fr' ? 'Newsletter exclusif' : lang === 'es' ? 'Newsletter exclusivo' : 'Exclusive Newsletter',
      desc: lang === 'de' ? 'Monatlicher Members-only Newsletter mit Infos, die nirgendwo sonst erscheinen'
          : lang === 'fr' ? 'Newsletter mensuel réservé aux membres avec des informations exclusives'
          : lang === 'es' ? 'Newsletter mensual exclusivo para miembros con información única'
          : 'Monthly members-only newsletter with info published nowhere else',
    },
  ]

  const PRO_ONLY: Feature[] = [
    {
      label: t('nfplus_feature_beta'),
      desc: lang === 'de' ? 'Als Erster neue Spielbereiche und Features in der Beta testen'
          : lang === 'fr' ? 'Soyez le premier à tester les nouvelles zones et fonctionnalités en bêta'
          : lang === 'es' ? 'Sé el primero en probar nuevas áreas y funciones en beta'
          : 'Be the first to test new game areas and features in beta',
    },
    {
      label: t('nfplus_feature_credits'),
      desc: lang === 'de' ? 'Dein Name erscheint in den Abspännen aller unserer Spiele'
          : lang === 'fr' ? 'Votre nom apparaît dans les génériques de tous nos jeux'
          : lang === 'es' ? 'Tu nombre aparece en los créditos de todos nuestros juegos'
          : 'Your name appears in the credits of all our games',
    },
    {
      label: t('nfplus_feature_merch'),
      desc: lang === 'de' ? '10% Rabatt auf zukünftige Nordic Forge Studios Merchandise-Artikel'
          : lang === 'fr' ? '10% de réduction sur la future marchandise Nordic Forge Studios'
          : lang === 'es' ? '10% de descuento en futura mercancía de Nordic Forge Studios'
          : '10% discount on future Nordic Forge Studios merchandise',
    },
    {
      label: t('nfplus_feature_priority'),
      desc: lang === 'de' ? 'Priorisierter Support mit garantierter Antwort innerhalb von 24 Stunden'
          : lang === 'fr' ? 'Support prioritaire avec réponse garantie sous 24 heures'
          : lang === 'es' ? 'Soporte prioritario con respuesta garantizada en 24 horas'
          : 'Priority support with guaranteed response within 24 hours',
    },
    {
      label: lang === 'de' ? 'Director\'s Cut Updates' : lang === 'fr' ? 'Mises à jour Director\'s Cut' : lang === 'es' ? 'Actualizaciones Director\'s Cut' : 'Director\'s Cut Updates',
      desc: lang === 'de' ? 'Exklusive Video-Updates direkt vom Game Director — unzensiert und ungeschnitten'
          : lang === 'fr' ? 'Mises à jour vidéo exclusives directement du directeur du jeu'
          : lang === 'es' ? 'Actualizaciones de video exclusivas directamente del director del juego'
          : 'Exclusive video updates directly from the game director — uncut',
    },
    {
      label: lang === 'de' ? 'Community-Voting' : 'Community Voting',
      desc: lang === 'de' ? 'Stimme über Game-Features, Namen und Design-Entscheidungen ab'
          : lang === 'fr' ? 'Votez sur les fonctionnalités, les noms et les décisions de design du jeu'
          : lang === 'es' ? 'Vota sobre características, nombres y decisiones de diseño del juego'
          : 'Vote on game features, names and design decisions',
    },
  ]

  const ALL_FEATURES = [...BASIC_FEATURES, ...PRO_ONLY]

  const donateTitle = lang === 'de' ? 'Einfach spenden' : lang === 'fr' ? 'Faire un don' : lang === 'es' ? 'Solo donar' : 'Just donate'
  const donateText = lang === 'de' ? 'Kein Abo nötig — unterstütze uns einmalig oder regelmäßig per PayPal.' : lang === 'fr' ? 'Pas d\'abonnement nécessaire — soutenez-nous ponctuellement ou régulièrement via PayPal.' : lang === 'es' ? 'Sin suscripción — apóyanos una vez o regularmente por PayPal.' : 'No subscription needed — support us once or regularly via PayPal.'
  const donateBtn = lang === 'de' ? 'Per PayPal spenden' : lang === 'fr' ? 'Faire un don via PayPal' : lang === 'es' ? 'Donar por PayPal' : 'Donate via PayPal'

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-white text-black py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-barlow font-bold text-sm tracking-widest uppercase mb-3 text-black/50">Membership</p>
            <h1 className="font-barlow font-bold text-6xl md:text-8xl mb-4">NF Studios+</h1>
            <p className="text-black/60 text-lg max-w-xl mx-auto mb-8">{t('nfplus_subtitle')}</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/account/redeem" className="px-6 py-3 bg-black text-white font-bold font-barlow rounded hover:bg-zinc-800 transition-colors text-sm">
                {t('nfplus_redeem')}
              </Link>
              <a href="#pricing" className="px-6 py-3 border border-black text-black font-bold font-barlow rounded hover:bg-black/5 transition-colors text-sm">
                {t('nfplus_compare')}
              </a>
            </div>
          </div>
        </section>

        {/* Features strip */}
        <section className="bg-nf-elevated border-b border-nf-border py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {BASIC_FEATURES.map(f => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2">
                <Check />
                <span className="text-white/70 text-xs">{f.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-barlow font-bold text-3xl text-white text-center mb-10">{t('nfplus_compare')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Basic */}
              <div className="nf-card p-8 flex flex-col">
                <div className="mb-6">
                  <p className="text-white/50 text-xs font-barlow font-bold uppercase tracking-widest mb-2">NF Studios+</p>
                  <h3 className="font-barlow font-bold text-3xl text-white mb-4">{t('nfplus_basic')}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-barlow font-bold text-5xl text-white">€{t('nfplus_basic_price')}</span>
                    <span className="text-white/40 text-base mb-2">{t('nfplus_month')}</span>
                  </div>
                  <p className="text-white/40 text-sm">€{t('nfplus_basic_year_price')}{t('nfplus_year')} · {t('nfplus_cancel')}</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {BASIC_FEATURES.map(f => (
                    <li key={f.label} className="flex items-start gap-3">
                      <span className="mt-0.5"><Check /></span>
                      <div>
                        <p className="text-white text-sm font-medium">{f.label}</p>
                        <p className="text-white/40 text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                  {PRO_ONLY.map(f => (
                    <li key={f.label} className="flex items-start gap-3 opacity-30">
                      <span className="mt-0.5"><Dash /></span>
                      <p className="text-white/40 text-sm">{f.label}</p>
                    </li>
                  ))}
                </ul>
                <Link href="/account/redeem" className="btn-secondary text-center block font-barlow font-bold">
                  {t('nfplus_redeem')}
                </Link>
              </div>

              {/* Pro */}
              <div className="relative bg-white rounded-lg p-8 flex flex-col overflow-hidden">
                <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded font-barlow tracking-wider">
                  PRO
                </div>
                <div className="mb-6">
                  <p className="text-black/40 text-xs font-barlow font-bold uppercase tracking-widest mb-2">NF Studios+</p>
                  <h3 className="font-barlow font-bold text-3xl text-black mb-4">{t('nfplus_pro')}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-barlow font-bold text-5xl text-black">€{t('nfplus_pro_price')}</span>
                    <span className="text-black/40 text-base mb-2">{t('nfplus_month')}</span>
                  </div>
                  <p className="text-black/40 text-sm">€{t('nfplus_pro_year_price')}{t('nfplus_year')} · {t('nfplus_cancel')}</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {ALL_FEATURES.map(f => (
                    <li key={f.label} className="flex items-start gap-3">
                      <span className="mt-0.5"><Check dark /></span>
                      <div>
                        <p className="text-black text-sm font-medium">{f.label}</p>
                        <p className="text-black/40 text-xs mt-0.5">{f.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/account/redeem" className="block text-center px-6 py-3 bg-black text-white font-bold font-barlow rounded hover:bg-zinc-800 transition-colors text-sm">
                  {t('nfplus_redeem')}
                </Link>
              </div>
            </div>

            {/* Comparison table */}
            <div className="nf-card overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-nf-border">
                    <th className="text-left p-4 text-white/50 text-sm font-normal">Feature</th>
                    <th className="p-4 text-center text-white text-sm font-barlow font-bold">Basic</th>
                    <th className="p-4 text-center text-white text-sm font-barlow font-bold">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {BASIC_FEATURES.map((f, i) => (
                    <tr key={f.label} className={i < BASIC_FEATURES.length - 1 ? 'border-b border-nf-border' : ''}>
                      <td className="p-4 text-white/60 text-sm">{f.label}</td>
                      <td className="p-4 text-center text-green-400">✓</td>
                      <td className="p-4 text-center text-green-400">✓</td>
                    </tr>
                  ))}
                  {PRO_ONLY.map((f, i) => (
                    <tr key={f.label} className={i < PRO_ONLY.length - 1 ? 'border-b border-nf-border' : ''}>
                      <td className="p-4 text-white/60 text-sm">{f.label}</td>
                      <td className="p-4 text-center text-white/20">—</td>
                      <td className="p-4 text-center text-green-400">✓</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PayPal donation */}
        <section className="py-12 px-4 bg-nf-elevated border-y border-nf-border">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-barlow font-bold text-2xl text-white mb-1">{donateTitle}</h2>
              <p className="text-muted text-sm max-w-md">{donateText}</p>
            </div>
            <a
              href="https://www.paypal.me/nordicforgestudios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-[#003087] text-white font-bold font-barlow rounded hover:bg-[#002070] transition-colors text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.477z"/>
              </svg>
              {donateBtn}
            </a>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-barlow font-bold text-3xl text-white mb-3">{t('nfplus_trial')}</h2>
            <p className="text-muted mb-6">{t('nfplus_cancel')}</p>
            <Link href="/account/redeem" className="btn-primary px-8 py-3 font-barlow font-bold">
              {t('nfplus_redeem')}
            </Link>
          </div>
        </section>
      </main>
      <NFFooter />
    </>
  )
}
