'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

interface Membership { active: boolean; tier?: string; expiresAt?: string }

const Check = () => (
  <svg className="w-4 h-4 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

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

          <h1 className="font-barlow font-bold text-3xl text-white mb-1">NF Studios+</h1>
          <p className="text-muted mb-10">{t('account_membership_section')}</p>

          {/* Current status */}
          {membership?.active && (
            <div className="nf-card p-5 mb-8 flex items-center gap-4">
              <span className="bg-white text-black px-4 py-2 text-sm font-bold font-barlow uppercase tracking-wide">
                NF Studios+ {membership.tier === 'pro' ? 'Pro' : 'Basic'}
              </span>
              <div>
                <p className="text-white text-sm font-medium">Mitgliedschaft aktiv</p>
                <p className="text-muted text-xs mt-0.5">
                  {t('account_expires')} {membership.expiresAt ? new Date(membership.expiresAt).toLocaleDateString('de-DE') : '–'}
                </p>
              </div>
            </div>
          )}

          {/* Tier comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Basic */}
            <div className="nf-card p-7 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide">Basic</h3>
                {membership?.active && membership.tier === 'basic' && (
                  <span className="bg-white text-black text-[10px] font-bold font-barlow px-2 py-0.5 uppercase tracking-wide">Aktiv</span>
                )}
              </div>
              <p className="font-barlow font-bold text-4xl text-white mb-1 leading-none">€2,99<span className="text-base font-normal text-muted">/mo</span></p>
              <p className="text-muted text-xs mb-7">{t('nfplus_cancel')}</p>
              <ul className="space-y-3 mb-7 flex-1">
                {BASIC_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-white/65 text-sm">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/account/redeem" className="btn-secondary w-full text-center block text-sm">{t('nfplus_redeem')}</Link>
            </div>

            {/* Pro */}
            <div className="nf-card border-white/20 p-7 flex flex-col relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-white" />
              <div className="absolute top-4 right-4">
                <span className="bg-white text-black text-[10px] font-bold font-barlow px-2 py-0.5 uppercase tracking-wider">Pro</span>
              </div>

              <div className="flex items-center justify-between mb-5">
                <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-wide">Pro</h3>
                {membership?.active && membership.tier === 'pro' && (
                  <span className="bg-white text-black text-[10px] font-bold font-barlow px-2 py-0.5 uppercase tracking-wide mr-10">Aktiv</span>
                )}
              </div>
              <p className="font-barlow font-bold text-4xl text-white mb-1 leading-none">€6,99<span className="text-base font-normal text-muted">/mo</span></p>
              <p className="text-muted text-xs mb-7">{t('nfplus_cancel')}</p>
              <ul className="space-y-3 mb-7 flex-1">
                {PRO_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-white/65 text-sm">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/account/redeem" className="btn-primary w-full text-center block text-sm">{t('nfplus_redeem')}</Link>
            </div>
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
