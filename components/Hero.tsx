'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.4 - 0.1,
      o: Math.random() * 0.6 + 0.1,
    }))

    let raf: number
    function draw() {
      ctx!.clearRect(0, 0, W, H)
      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(201,168,76,${p.o})`
        ctx!.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W }
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden rune-bg">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-48 md:h-64">
          <path
            d="M0,320 L0,200 L180,80 L360,180 L540,60 L720,160 L900,40 L1080,140 L1260,70 L1440,150 L1440,320 Z"
            fill="rgba(10,10,10,0.9)"
          />
          <path
            d="M0,320 L0,240 L120,160 L280,220 L440,130 L600,200 L760,100 L920,180 L1100,110 L1300,170 L1440,120 L1440,320 Z"
            fill="rgba(10,10,10,0.6)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <span className="inline-block text-gold/80 text-xs font-mono tracking-[0.3em] uppercase mb-6 border border-gold/30 px-4 py-1.5 rounded-full">
            {t('hero_tag')}
          </span>
        </div>

        <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gold-gradient leading-tight mb-6 animate-fade-up">
          {t('hero_title')}
        </h1>

        <p className="text-white/70 text-lg md:text-xl mb-10 animate-fade-up font-light tracking-wide"
          style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}>
          {t('hero_subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          <Link href="#games" className="btn-gold">
            {t('hero_cta_games')}
          </Link>
          <Link href="#about" className="btn-glass">
            {t('hero_cta_about')}
          </Link>
        </div>
      </div>
    </section>
  )
}
