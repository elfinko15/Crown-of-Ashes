'use client'

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLang } from '@/lib/i18n/LanguageContext'
import { GAMES } from '@/lib/data/games'
import NFFooter from '@/components/NFFooter'

export default function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { t, lang } = useLang()

  const game = GAMES.find(g => g.slug === slug)
  if (!game) notFound()

  const isSoon = game.status === 'soon'

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className={`relative h-[60vh] min-h-[400px] bg-gradient-to-b ${game.coverGradient} flex items-end`}>
          <div className="hero-overlay" />
          <div className="hero-overlay-bottom" />
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 pb-10 w-full">
            <span className={`inline-block text-xs font-barlow font-bold px-3 py-1 rounded mb-4 ${
              game.status === 'dev'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                : 'bg-white/10 text-white/60 border border-white/20'
            }`}>
              {game.status === 'dev' ? t('games_status_dev') : t('games_status_soon')}
            </span>
            <h1 className="font-barlow font-bold text-5xl md:text-7xl text-white mb-3">{game.title}</h1>
            <p className="text-white/60 text-lg">{game.subtitle[lang]}</p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-4 py-10">
          <div className="mb-6">
            <Link href="/games" className="text-muted hover:text-white text-sm transition-colors">{t('game_detail_back')}</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="nf-card p-6">
                <h2 className="font-barlow font-bold text-xl text-white mb-4">{t('game_detail_about')}</h2>
                <p className="text-white/70 leading-relaxed">
                  {isSoon ? t('game_detail_placeholder') : game.description[lang]}
                </p>
              </div>

              {/* Features */}
              {!isSoon && game.features[lang].length > 0 && (
                <div className="nf-card p-6">
                  <h2 className="font-barlow font-bold text-xl text-white mb-4">{t('game_detail_features')}</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {game.features[lang].map(f => (
                      <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                        <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Media placeholder */}
              <div className="nf-card p-6">
                <h2 className="font-barlow font-bold text-xl text-white mb-4">{t('game_detail_media')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-28 rounded bg-gradient-to-b ${game.coverGradient} opacity-60`} />
                  ))}
                </div>
                <p className="text-white/30 text-xs mt-3">{t('game_detail_placeholder')}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="nf-card p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-faint text-xs mb-1">{t('game_detail_status')}</p>
                    <p className="text-white text-sm">{game.status === 'dev' ? t('games_status_dev') : t('games_status_soon')}</p>
                  </div>
                  <div>
                    <p className="text-faint text-xs mb-1">{t('game_detail_genre')}</p>
                    <p className="text-white text-sm">{game.genre === '?' ? '—' : game.genre}</p>
                  </div>
                  <div>
                    <p className="text-faint text-xs mb-1">{t('game_detail_engine')}</p>
                    <p className="text-white text-sm">{game.engine}</p>
                  </div>
                </div>
              </div>

              <div className="nf-card p-6">
                <p className="text-white/60 text-sm mb-3">{t('nfplus_subtitle')}</p>
                <Link href="/nf-plus" className="btn-primary w-full text-center block text-sm">
                  NF Studios+
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
