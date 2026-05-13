'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function NFFooter() {
  const { t } = useLang()

  const cols = [
    {
      title: t('footer_col_games'),
      links: [
        { label: 'Avadon: The Broken Sigils', href: '/games/avadon' },
        { label: t('footer_all_games'), href: '/games' },
      ],
    },
    {
      title: 'NF Studios+',
      links: [
        { label: t('nfplus_basic'), href: '/nf-plus' },
        { label: t('nfplus_pro'), href: '/nf-plus' },
        { label: t('nav_redeem'), href: '/account/redeem' },
      ],
    },
    {
      title: t('footer_col_info'),
      links: [
        { label: t('nav_news'), href: '/news' },
        { label: t('nav_support'), href: '/support' },
        { label: 'Impressum', href: '/support#impressum' },
        { label: 'Datenschutz', href: '/support#datenschutz' },
      ],
    },
    {
      title: t('footer_col_account'),
      links: [
        { label: t('nav_login'), href: '/login' },
        { label: t('nav_register'), href: '/register' },
        { label: t('nav_account'), href: '/account' },
      ],
    },
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-14">
        {/* Top: logo + cols */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image src="/logo.png" alt="NF Studios" fill className="object-contain" />
              </div>
              <span className="font-barlow font-bold text-white">NF Studios</span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed">
              {t('footer_tagline')}
            </p>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/45 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">{t('footer_copy')}</p>
          <div className="flex gap-4">
            {/* Discord placeholder */}
            <a href="#" aria-label="Discord" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
              </svg>
            </a>
            {/* Instagram placeholder */}
            <a href="#" aria-label="Instagram" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
