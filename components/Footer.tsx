'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  const links = [
    { href: '/#games', label: t('nav_games') },
    { href: '/#about', label: t('nav_about') },
    { href: '/#team', label: t('nav_team') },
    { href: '/#contact', label: t('nav_contact') },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image src="/logo.png" alt="Nordic Forge Studios" fill className="object-contain" />
              </div>
              <span className="font-cinzel text-sm font-semibold text-white/80">Nordic Forge Studios</span>
            </div>
            <p className="text-white/30 text-xs">{t('footer_tagline')}</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-white/40 hover:text-gold transition-colors text-sm">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/25 text-xs">{t('footer_copy')}</p>
        </div>
      </div>
    </footer>
  )
}
