'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import { GAMES, GameStatus } from '@/lib/data/games'
import NFFooter from '@/components/NFFooter'

type Filter = 'all' | GameStatus

export default function GamesPage() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? GAMES : GAMES.filter(g => g.status === filter)

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('games_filter_all') },
    { key: 'dev', label: t('games_filter_dev') },
    { key: 'soon', label: t('games_filter_soon') },
  ]

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4 py-12">
          <h1 className="font-barlow font-bold text-4xl text-white mb-2">{t('games_title')}</h1>
          <p className="text-muted mb-8">{GAMES.length} {lang === 'de' ? 'Titel' : lang === 'fr' ? 'titres' : lang === 'es' ? 'títulos' : 'titles'}</p>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-10 border-b border-nf-border pb-4">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded text-sm font-barlow font-bold transition-colors ${
                  filter === f.key
                    ? 'bg-white text-black'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-muted">{t('games_no_results')}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map(game => (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="nf-card overflow-hidden group hover:bg-nf-card-hover transition-colors"
                >
                  {/* Cover */}
                  <div className={`h-48 bg-gradient-to-b ${game.coverGradient} relative`}>
                    <div className="absolute inset-0 flex items-end p-4">
                      <span className={`text-xs font-barlow font-bold px-2 py-0.5 rounded ${
                        game.status === 'dev'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-white/10 text-white/60 border border-white/20'
                      }`}>
                        {game.status === 'dev' ? t('games_status_dev') : t('games_status_soon')}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-barlow font-bold text-white text-lg leading-tight mb-1 group-hover:text-white/90">
                      {game.title}
                    </h3>
                    <p className="text-muted text-sm mb-3">{game.subtitle[lang]}</p>
                    <div className="flex gap-2 text-xs text-white/40">
                      <span>{game.genre}</span>
                      <span>·</span>
                      <span>{game.engine}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <NFFooter />
    </>
  )
}
