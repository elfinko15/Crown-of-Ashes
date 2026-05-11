'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import { Lang } from '@/lib/i18n/translations'

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/#games', label: t('nav_games') },
    { href: '/#about', label: t('nav_about') },
    { href: '/#team', label: t('nav_team') },
    { href: '/#contact', label: t('nav_contact') },
  ]

  const currentLang = LANGS.find(l => l.code === lang)!

  function handleLangSelect(code: Lang) {
    setLang(code)
    setLangOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Nordic Forge Studios"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-cinzel text-sm font-semibold text-white/90 group-hover:text-gold transition-colors hidden sm:block">
            Nordic Forge Studios
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-gold transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Lang selector + hamburger */}
        <div className="flex items-center gap-3">
          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 glass px-3 py-1.5 rounded-lg text-sm text-white/80 hover:text-white transition-colors"
              aria-label="Select language"
            >
              <span>{currentLang.flag}</span>
              <span className="font-mono text-xs">{currentLang.code.toUpperCase()}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 glass rounded-xl shadow-xl overflow-hidden">
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    onClick={() => handleLangSelect(l.code)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors text-left ${
                      lang === l.code ? 'text-gold' : 'text-white/80'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-white/10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-white/70 hover:text-gold transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
