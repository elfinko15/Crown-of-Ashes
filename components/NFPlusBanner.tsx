'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function NFPlusBanner() {
  const { t } = useLang()

  const perks = [
    t('nfplus_feature_demos'),
    t('nfplus_feature_updates'),
    t('nfplus_feature_discord'),
    t('nfplus_feature_beta'),
  ]

  return (
    <section className="py-0">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="relative bg-white rounded-lg overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg,#000 0,#000 1px,transparent 1px,transparent 20px)' }}
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-10">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-barlow font-extrabold text-3xl text-black tracking-tight">NF Studios+</span>
                <span className="px-2 py-0.5 bg-black text-white text-xs font-bold font-barlow rounded uppercase tracking-wide">Neu</span>
              </div>
              <p className="text-black/60 text-sm max-w-md">{t('nfplus_subtitle')}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-4">
                {perks.map(p => (
                  <span key={p} className="flex items-center gap-1.5 text-black/70 text-sm">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <div className="text-center">
                <p className="text-black/40 text-xs mb-1">Basic</p>
                <p className="font-barlow font-bold text-2xl text-black">€4,99<span className="text-sm font-normal">/mo</span></p>
              </div>
              <div className="hidden sm:block w-px bg-black/20 self-stretch" />
              <div className="text-center">
                <p className="text-black/40 text-xs mb-1">Pro</p>
                <p className="font-barlow font-bold text-2xl text-black">€9,99<span className="text-sm font-normal">/mo</span></p>
              </div>
              <Link href="/nf-plus" className="self-center px-6 py-2.5 bg-black text-white font-bold font-barlow rounded text-sm hover:bg-zinc-800 transition-colors ml-2 whitespace-nowrap">
                {t('nfplus_compare')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
