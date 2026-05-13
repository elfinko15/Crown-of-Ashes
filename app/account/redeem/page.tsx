'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

export default function RedeemPage() {
  const { t } = useLang()
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<{ tier: string; expiresAt: string } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await fetch('/api/redeem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) {
      if (data.error?.includes('bereits')) setError(t('redeem_error_used'))
      else if (data.error?.includes('Ungültig') || res.status === 404) setError(t('redeem_error_invalid'))
      else setError(data.error ?? 'Fehler')
    } else {
      setSuccess(data)
      setCode('')
    }
  }

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-[600px] mx-auto px-4 py-12">
          <div className="mb-4">
            <Link href="/account" className="text-muted hover:text-white text-sm transition-colors">← {t('account_title')}</Link>
          </div>

          <h1 className="font-barlow font-bold text-3xl text-white mb-2">{t('redeem_title')}</h1>
          <p className="text-muted mb-8">{t('redeem_subtitle')}</p>

          <div className="nf-card p-8 mb-6">
            {success ? (
              <div className="text-center py-4">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="font-barlow font-bold text-xl text-white mb-2">{t('redeem_success')}</h2>
                <p className="text-muted text-sm mb-1">{t('redeem_success_text')}</p>
                <p className="text-white/50 text-sm">
                  NF Studios+ {success.tier === 'pro' ? 'Pro' : 'Basic'} · {t('account_expires')} {new Date(success.expiresAt).toLocaleDateString()}
                </p>
                <div className="mt-6 flex gap-3 justify-center">
                  <Link href="/account/membership" className="btn-primary text-sm">Zur Mitgliedschaft</Link>
                  <button onClick={() => setSuccess(null)} className="btn-secondary text-sm">Weiteren Code einlösen</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>
                )}
                <div>
                  <label className="block text-white/60 text-xs mb-1.5">{t('redeem_label')}</label>
                  <input
                    type="text"
                    required
                    value={code}
                    onChange={e => setCode(e.target.value.toUpperCase())}
                    placeholder={t('redeem_placeholder')}
                    className="nf-input font-mono tracking-widest"
                    spellCheck={false}
                  />
                </div>
                <button type="submit" disabled={loading || !code.trim()} className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? '…' : t('redeem_submit')}
                </button>
              </form>
            )}
          </div>

          {/* Info box */}
          <div className="nf-card p-6">
            <h3 className="font-barlow font-bold text-white mb-2">{t('redeem_where')}</h3>
            <p className="text-muted text-sm leading-relaxed">{t('redeem_where_text')}</p>
            <Link href="/nf-plus" className="inline-block mt-3 text-white/50 hover:text-white text-sm transition-colors">NF Studios+ entdecken →</Link>
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
