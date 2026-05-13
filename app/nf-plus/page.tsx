'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

const CHECK = (
  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
  </svg>
)

const DASH = (
  <svg className="w-5 h-5 flex-shrink-0 text-white/20" fill="currentColor" viewBox="0 0 20 20">
    <path d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"/>
  </svg>
)

export default function NFPlusPage() {
  const { t } = useLang()

  const BASIC_FEATURES = [
    t('nfplus_feature_demos'),
    t('nfplus_feature_updates'),
    t('nfplus_feature_discord'),
    t('nfplus_feature_wallpapers'),
  ]

  const PRO_ONLY = [
    t('nfplus_feature_beta'),
    t('nfplus_feature_credits'),
    t('nfplus_feature_merch'),
    t('nfplus_feature_priority'),
  ]

  const ALL_FEATURES = [...BASIC_FEATURES, ...PRO_ONLY]

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-white text-black py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-barlow font-bold text-sm tracking-widest uppercase mb-3 text-black/50">Membership</p>
            <h1 className="font-barlow font-bold text-6xl md:text-8xl mb-4">NF Studios+</h1>
            <p className="text-black/60 text-lg max-w-xl mx-auto mb-8">{t('nfplus_subtitle')}</p>
            <div className="flex gap-3 justify-center">
              <Link href="/account/redeem" className="px-6 py-3 bg-black text-white font-bold font-barlow rounded hover:bg-zinc-800 transition-colors text-sm">
                {t('nfplus_redeem')}
              </Link>
              <a href="#pricing" className="px-6 py-3 border border-black text-black font-bold font-barlow rounded hover:bg-black/5 transition-colors text-sm">
                {t('nfplus_compare')}
              </a>
            </div>
          </div>
        </section>

        {/* Features strip */}
        <section className="bg-nf-elevated border-b border-nf-border py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {BASIC_FEATURES.map(f => (
              <div key={f} className="flex items-center gap-3">
                <span className="text-white">{CHECK}</span>
                <span className="text-white/70 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-barlow font-bold text-3xl text-white text-center mb-10">{t('nfplus_compare')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Basic */}
              <div className="nf-card p-8 flex flex-col">
                <div className="mb-6">
                  <p className="text-white/50 text-xs font-barlow font-bold uppercase tracking-widest mb-2">NF Studios+</p>
                  <h3 className="font-barlow font-bold text-3xl text-white mb-4">{t('nfplus_basic')}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-barlow font-bold text-5xl text-white">€{t('nfplus_basic_price')}</span>
                    <span className="text-white/40 text-base mb-2">{t('nfplus_month')}</span>
                  </div>
                  <p className="text-white/40 text-sm">€{t('nfplus_basic_year_price')}{t('nfplus_year')} · {t('nfplus_cancel')}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {BASIC_FEATURES.map(f => (
                    <li key={f} className="flex items-center gap-3 text-white/70 text-sm">
                      <span className="text-white">{CHECK}</span>{f}
                    </li>
                  ))}
                  {PRO_ONLY.map(f => (
                    <li key={f} className="flex items-center gap-3 text-white/20 text-sm">
                      {DASH}{f}
                    </li>
                  ))}
                </ul>
                <Link href="/account/redeem" className="btn-secondary text-center block font-barlow font-bold">
                  {t('nfplus_redeem')}
                </Link>
              </div>

              {/* Pro */}
              <div className="relative bg-white rounded-lg p-8 flex flex-col overflow-hidden">
                <div className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded font-barlow tracking-wider">
                  PRO
                </div>
                <div className="mb-6">
                  <p className="text-black/40 text-xs font-barlow font-bold uppercase tracking-widest mb-2">NF Studios+</p>
                  <h3 className="font-barlow font-bold text-3xl text-black mb-4">{t('nfplus_pro')}</h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-barlow font-bold text-5xl text-black">€{t('nfplus_pro_price')}</span>
                    <span className="text-black/40 text-base mb-2">{t('nfplus_month')}</span>
                  </div>
                  <p className="text-black/40 text-sm">€{t('nfplus_pro_year_price')}{t('nfplus_year')} · {t('nfplus_cancel')}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {ALL_FEATURES.map(f => (
                    <li key={f} className="flex items-center gap-3 text-black/70 text-sm">
                      <svg className="w-5 h-5 flex-shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/account/redeem" className="block text-center px-6 py-3 bg-black text-white font-bold font-barlow rounded hover:bg-zinc-800 transition-colors text-sm">
                  {t('nfplus_redeem')}
                </Link>
              </div>
            </div>

            {/* Comparison table */}
            <div className="nf-card overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-nf-border">
                    <th className="text-left p-4 text-white/50 text-sm font-normal">Feature</th>
                    <th className="p-4 text-center text-white text-sm font-barlow font-bold">Basic</th>
                    <th className="p-4 text-center text-white text-sm font-barlow font-bold">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {BASIC_FEATURES.map((f, i) => (
                    <tr key={f} className={i < BASIC_FEATURES.length - 1 ? 'border-b border-nf-border' : ''}>
                      <td className="p-4 text-white/60 text-sm">{f}</td>
                      <td className="p-4 text-center text-green-400">✓</td>
                      <td className="p-4 text-center text-green-400">✓</td>
                    </tr>
                  ))}
                  {PRO_ONLY.map((f, i) => (
                    <tr key={f} className={i < PRO_ONLY.length - 1 ? 'border-b border-nf-border' : ''}>
                      <td className="p-4 text-white/60 text-sm">{f}</td>
                      <td className="p-4 text-center text-white/20">—</td>
                      <td className="p-4 text-center text-green-400">✓</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA bottom */}
        <section className="py-16 px-4 border-t border-nf-border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-barlow font-bold text-3xl text-white mb-3">{t('nfplus_trial')}</h2>
            <p className="text-muted mb-6">{t('nfplus_cancel')}</p>
            <Link href="/account/redeem" className="btn-primary px-8 py-3 font-barlow font-bold">
              {t('nfplus_redeem')}
            </Link>
          </div>
        </section>
      </main>
      <NFFooter />
    </>
  )
}
