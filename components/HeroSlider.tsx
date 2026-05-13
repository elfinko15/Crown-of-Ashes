'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import { GAMES } from '@/lib/data/games'
import { Lang } from '@/lib/i18n/translations'

const SLIDES = GAMES.filter(g => g.slug === 'avadon')

export default function HeroSlider() {
  const { lang, t } = useLang()
  const [current, setCurrent] = useState(0)
  const game = SLIDES[current] ?? GAMES[0]

  useEffect(() => {
    if (SLIDES.length < 2) return
    const timer = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] overflow-hidden">
      {/* Background gradient (placeholder for cover image) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${game.coverGradient} transition-all duration-1000`} />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)' }}
      />

      {/* Left gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 hero-overlay-bottom" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <span className="inline-block mb-4 px-3 py-1 bg-white text-black text-xs font-bold font-barlow uppercase tracking-wider rounded">
              {game.status === 'dev' ? t('hero_dev_badge') : t('hero_badge')}
            </span>

            {/* Title */}
            <h1 className="font-barlow font-extrabold text-5xl sm:text-6xl md:text-7xl text-white leading-none mb-3">
              {game.title}
            </h1>

            {/* Subtitle */}
            <p className="text-white/70 text-lg mb-2">
              {game.subtitle[lang as Lang] ?? game.subtitle.de}
            </p>
            <p className="text-white/50 text-sm mb-8">
              {game.genre} · {game.engine}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href={`/games/${game.slug}`} className="btn-primary">
                {t('hero_explore')}
              </Link>
              <Link href="/nf-plus" className="btn-secondary">
                {t('hero_nfplus')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/30'}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
