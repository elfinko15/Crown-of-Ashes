'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function RegisterPage() {
  const { t } = useLang()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError(t('register_error_match')); return }
    if (password.length < 8) { setError(t('register_error_length')); return }
    setLoading(true)
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    const data = await res.json()
    setLoading(false)
    if (!res.ok) {
      setError(data.error ?? 'Fehler')
    } else {
      setSuccess(true)
      setTimeout(() => router.push('/login'), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-nf-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative"><Image src="/logo.png" alt="NF Studios" fill className="object-contain" /></div>
            <span className="font-barlow font-bold text-white text-xl">NF Studios</span>
          </Link>
        </div>

        <div className="nf-card p-8">
          <h1 className="font-barlow font-bold text-2xl text-white mb-6">{t('register_title')}</h1>

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>
          )}
          {success && (
            <div className="mb-4 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm">{t('register_success')}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/60 text-xs mb-1.5">{t('register_name')}</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} className="nf-input" />
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-1.5">{t('register_email')}</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="nf-input" autoComplete="email" />
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-1.5">{t('register_password')}</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="nf-input" autoComplete="new-password" />
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-1.5">{t('register_confirm')}</label>
              <input type="password" required value={confirm} onChange={e => setConfirm(e.target.value)} className="nf-input" autoComplete="new-password" />
            </div>

            <button type="submit" disabled={loading || success} className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? '…' : t('register_submit')}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm">
            <p className="text-muted">
              {t('register_has_account')}{' '}
              <Link href="/login" className="text-white hover:underline">{t('register_login_link')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
