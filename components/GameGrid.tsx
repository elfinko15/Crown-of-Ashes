'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import { GAMES, GameStatus } from '@/lib/data/games'
import { useState } from 'react'
import { Lang } from '@/lib/i18n/translations'

interface Props {
  limit?: number
  showFilters?: boolean
}

export default function GameGrid({ limit, showFilters = false }: Props) {
  const { lang, t } = useLang()
  const [filter, setFilter] = useState<GameStatus | 'all'>('all')

  const filtered = GAMES
    .filter(g => filter === 'all' || g.status === filter)
    .slice(0, limit)

  return (
    <section className="py-14 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-barlow font-bold text-2xl text-white">{t('home_games_title')}</h2>
          {showFilters && (
            <div className="flex gap-2">
              {(['all', 'dev', 'soon'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
                    filter === f ? 'bg-white text-black' : 'bg-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {f === 'all' ? t('games_filter_all') : f === 'dev' ? t('games_filter_dev') : t('games_filter_soon')}
                </button>
              ))}
            </div>
          )}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted py-12 text-center">{t('games_no_results')}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map(game => (
            <Link
              key={game.slug}
              href={game.slug.startsWith('coming') ? '/games' : `/games/${game.slug}`}
              className="nf-card group overflow-hidden block"
            >
              {/* Cover */}
              <div className={`aspect-[3/4] bg-gradient-to-br ${game.coverGradient} relative flex items-end`}>
                {game.status === 'soon' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-barlow font-bold text-6xl">?</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 text-xs font-bold font-barlow uppercase rounded ${
                    game.status === 'dev' ? 'bg-white/20 text-white border border-white/30' : 'bg-white/10 text-white/50'
                  }`}>
                    {game.status === 'dev' ? t('games_status_dev') : t('games_status_soon')}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-barlow font-bold text-white text-base leading-tight mb-1 group-hover:text-white/80 transition-colors">
                  {game.title}
                </h3>
                {game.descriptionShort ? (
                  <p className="text-white/55 text-xs leading-relaxed line-clamp-3">
                    {game.descriptionShort[lang as Lang] ?? game.descriptionShort.de}
                  </p>
                ) : (
                  <p className="text-muted text-xs">{game.subtitle[lang as Lang] ?? game.subtitle.de}</p>
                )}
                {!game.slug.startsWith('coming') && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {game.genre.split(' | ').map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-white/8 text-white/50 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
