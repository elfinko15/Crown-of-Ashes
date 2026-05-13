'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function LoginPage() {
  const { t } = useLang()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await signIn('credentials', { email, password, redirect: false })
    setLoading(false)
    if (res?.error) {
      setError(t('login_error'))
    } else {
      router.push('/account')
    }
  }

  return (
    <div className="min-h-screen bg-nf-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative"><Image src="/logo.png" alt="NF Studios" fill className="object-contain" /></div>
            <span className="font-barlow font-bold text-white text-xl">Nordic Forge Studios</span>
          </Link>
        </div>

        <div className="nf-card p-8">
          <h1 className="font-barlow font-bold text-2xl text-white mb-6">{t('login_title')}</h1>

          {error && (
            <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/60 text-xs mb-1.5">{t('login_email')}</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="nf-input"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-1.5">{t('login_password')}</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="nf-input"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '…' : t('login_submit')}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3 text-center text-sm">
            <p className="text-muted">
              {t('login_no_account')}{' '}
              <Link href="/register" className="text-white hover:underline">{t('login_register_link')}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
