'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

interface Membership { active: boolean; tier?: string; expiresAt?: string }

export default function AccountPage() {
  const { data: session } = useSession()
  const { t } = useLang()
  const [membership, setMembership] = useState<Membership | null>(null)

  useEffect(() => {
    fetch('/api/account/membership').then(r => r.json()).then(setMembership)
  }, [])

  const createdDate = (session?.user as any)?.createdAt
    ? new Date((session?.user as any).createdAt).toLocaleDateString()
    : '–'

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-[1100px] mx-auto px-4 py-12">
          <h1 className="font-barlow font-bold text-3xl text-white mb-2">{t('account_title')}</h1>
          <p className="text-muted mb-10">{t('account_welcome')}, {session?.user?.name}</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile card */}
            <div className="nf-card p-6">
              <h2 className="font-barlow font-bold text-lg text-white mb-4">{t('account_profile')}</h2>
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold font-barlow mb-4">
                {session?.user?.name?.[0]?.toUpperCase()}
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-faint text-xs">{t('account_name')}</p>
                  <p className="text-white text-sm">{session?.user?.name}</p>
                </div>
                <div>
                  <p className="text-faint text-xs">{t('account_email')}</p>
                  <p className="text-white text-sm truncate">{session?.user?.email}</p>
                </div>
              </div>
            </div>

            {/* Membership card */}
            <div className="nf-card p-6 lg:col-span-2">
              <h2 className="font-barlow font-bold text-lg text-white mb-4">{t('account_membership_section')}</h2>
              {membership === null ? (
                <p className="text-muted text-sm">…</p>
              ) : membership.active ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="nf-plus-badge px-3 py-1 rounded text-sm font-bold font-barlow">
                      NF Studios+ {membership.tier === 'pro' ? 'Pro' : 'Basic'}
                    </span>
                    <span className="text-green-400 text-sm">● Aktiv</span>
                  </div>
                  <p className="text-muted text-sm">
                    {t('account_expires')} {membership.expiresAt ? new Date(membership.expiresAt).toLocaleDateString() : '–'}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Link href="/account/redeem" className="btn-secondary text-sm">{t('nav_redeem')}</Link>
                    <Link href="/nf-plus" className="btn-ghost text-sm">NF Studios+ →</Link>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-muted text-sm mb-4">{t('account_no_membership')}</p>
                  <div className="flex gap-3">
                    <Link href="/nf-plus" className="btn-primary text-sm">{t('account_get_nfplus')}</Link>
                    <Link href="/account/redeem" className="btn-secondary text-sm">{t('nav_redeem')}</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Quick links */}
            <div className="nf-card p-6 lg:col-span-3">
              <h2 className="font-barlow font-bold text-lg text-white mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { href: '/account/membership', label: 'NF Studios+' },
                  { href: '/account/redeem', label: t('nav_redeem') },
                  { href: '/games', label: t('nav_games') },
                  { href: '/support', label: t('nav_support') },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="nf-card p-4 text-center hover:bg-nf-card-hover">
                    <span className="text-white/70 text-sm">{l.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
