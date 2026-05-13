'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

interface Membership { active: boolean; tier?: string; expiresAt?: string }

export default function MembershipPage() {
  const { t } = useLang()
  const [membership, setMembership] = useState<Membership | null>(null)

  useEffect(() => {
    fetch('/api/account/membership').then(r => r.json()).then(setMembership)
  }, [])

  const BASIC_FEATURES = [
    t('nfplus_feature_demos'),
    t('nfplus_feature_updates'),
    t('nfplus_feature_discord'),
    t('nfplus_feature_wallpapers'),
  ]
  const PRO_FEATURES = [
    ...BASIC_FEATURES,
    t('nfplus_feature_beta'),
    t('nfplus_feature_credits'),
    t('nfplus_feature_merch'),
    t('nfplus_feature_priority'),
  ]

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-[1100px] mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/account" className="text-muted hover:text-white text-sm transition-colors">← {t('account_title')}</Link>
          </div>
          <h1 className="font-barlow font-bold text-3xl text-white mb-2">NF Studios+</h1>
          <p className="text-muted mb-10">{t('account_membership_section')}</p>

          {/* Current status */}
          {membership?.active && (
            <div className="nf-card p-6 mb-8 flex items-center gap-4">
              <span className="nf-plus-badge px-4 py-2 rounded text-base font-bold font-barlow">
                NF Studios+ {membership.tier === 'pro' ? 'Pro' : 'Basic'}
              </span>
              <div>
                <p className="text-green-400 text-sm font-medium">● Mitgliedschaft aktiv</p>
                <p className="text-muted text-xs mt-0.5">
                  {t('account_expires')} {membership.expiresAt ? new Date(membership.expiresAt).toLocaleDateString() : '–'}
                </p>
              </div>
            </div>
          )}

          {/* Tier comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Basic */}
            <div className="nf-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-barlow font-bold text-xl text-white">Basic</h3>
                {membership?.active && membership.tier === 'basic' && (
                  <span className="text-green-400 text-xs border border-green-500/30 px-2 py-0.5 rounded">Aktiv</span>
                )}
              </div>
              <p className="font-barlow font-bold text-3xl text-white mb-1">€4,99<span className="text-base font-normal text-muted">/mo</span></p>
              <p className="text-muted text-xs mb-6">€49,99/Jahr · {t('nfplus_cancel')}</p>
              <ul className="space-y-2.5 mb-6">
                {BASIC_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2 text-white/70 text-sm">
                    <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/account/redeem" className="btn-secondary w-full text-center block">{t('nfplus_redeem')}</Link>
            </div>

            {/* Pro */}
            <div className="relative bg-white rounded-lg p-6 overflow-hidden">
              <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-2 py-0.5 rounded font-barlow">PRO</div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-barlow font-bold text-xl text-black">Pro</h3>
                {membership?.active && membership.tier === 'pro' && (
                  <span className="text-green-600 text-xs border border-green-600/30 px-2 py-0.5 rounded">Aktiv</span>
                )}
              </div>
              <p className="font-barlow font-bold text-3xl text-black mb-1">€9,99<span className="text-base font-normal text-black/50">/mo</span></p>
              <p className="text-black/40 text-xs mb-6">€99,99/Jahr · {t('nfplus_cancel')}</p>
              <ul className="space-y-2.5 mb-6">
                {PRO_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2 text-black/70 text-sm">
                    <svg className="w-4 h-4 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/account/redeem" className="block text-center px-5 py-2.5 bg-black text-white font-bold font-barlow rounded text-sm hover:bg-zinc-800 transition-colors">
                {t('nfplus_redeem')}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
