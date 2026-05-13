'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useLang } from '@/lib/i18n/LanguageContext'
import { Lang } from '@/lib/i18n/translations'

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
]

export default function NFNavbar() {
  const { lang, setLang, t } = useLang()
  const { data: session } = useSession()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const accountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) setAccountOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLinks = [
    { href: '/games', label: t('nav_games') },
    { href: '/nf-plus', label: 'NF Studios+' },
    { href: '/about', label: 'Über uns' },
    { href: '/news', label: t('nav_news') },
    { href: '/support', label: t('nav_support') },
  ]

  const currentLang = LANGS.find(l => l.code === lang)!

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-[#111] border-b border-white/10' : 'bg-[#0f0f0f]/90'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 lg:px-8 h-14 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 mr-2">
          <div className="w-8 h-8 relative">
            <Image src="/logo.png" alt="NF Studios" fill className="object-contain" priority />
          </div>
          <span className="font-barlow font-bold text-white text-lg tracking-tight hidden sm:block">
            Nordic Forge Studios
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm font-medium transition-colors rounded ${
                link.href === '/nf-plus'
                  ? 'text-white hover:text-gray-200 font-bold'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.href === '/nf-plus' ? (
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 bg-white rounded-full" />
                  {link.label}
                </span>
              ) : link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(v => !v)}
            className="p-2 text-white/60 hover:text-white transition-colors rounded"
            aria-label="Suche"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Language */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1 p-2 text-white/60 hover:text-white transition-colors text-xs font-mono rounded"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.code.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 bg-[#1a1a1a] border border-white/10 rounded shadow-xl animate-slide-down overflow-hidden">
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false) }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-left transition-colors hover:bg-white/5 ${
                      lang === l.code ? 'text-white' : 'text-white/60'
                    }`}
                  >
                    <span>{l.flag}</span><span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Auth */}
          {session ? (
            <div ref={accountRef} className="relative">
              <button
                onClick={() => setAccountOpen(v => !v)}
                className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 transition-colors"
              >
                <div className="w-7 h-7 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold font-barlow">
                  {session.user?.name?.[0]?.toUpperCase() ?? 'N'}
                </div>
                <span className="text-white/80 text-sm hidden sm:block max-w-[100px] truncate">
                  {session.user?.name}
                </span>
              </button>
              {accountOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-[#1a1a1a] border border-white/10 rounded shadow-xl animate-slide-down overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-xs text-white/40">{t('nav_loggedin_as')}</p>
                    <p className="text-sm text-white truncate">{session.user?.email}</p>
                  </div>
                  <Link href="/account" className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">{t('nav_account')}</Link>
                  <Link href="/account/membership" className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">NF Studios+</Link>
                  <Link href="/account/redeem" className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">{t('nav_redeem')}</Link>
                  <div className="border-t border-white/10">
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className="w-full text-left px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {t('nav_logout')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn-ghost text-sm">{t('nav_login')}</Link>
              <Link href="/register" className="btn-primary text-sm px-4 py-1.5">{t('nav_register')}</Link>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white/60 hover:text-white ml-1"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="bg-[#111] border-b border-white/10 px-4 py-3 animate-slide-down">
          <div className="max-w-[1400px] mx-auto">
            <input
              autoFocus
              className="nf-input"
              placeholder={t('search_placeholder')}
              onKeyDown={e => { if (e.key === 'Escape') setSearchOpen(false) }}
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#111] border-t border-white/10 animate-slide-down">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3.5 text-white/70 hover:text-white text-sm border-b border-white/5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
