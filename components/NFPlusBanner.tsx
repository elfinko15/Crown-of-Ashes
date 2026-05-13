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
    <section className="py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="nf-card overflow-hidden">
          {/* Top accent */}
          <div className="h-0.5 bg-white/80" />

          <div className="relative px-8 py-10 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Subtle grid texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)' }}
            />

            {/* Left */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-barlow font-extrabold text-4xl text-white uppercase tracking-tight leading-none">NF Studios+</h2>
                <span className="bg-white text-black text-[10px] font-bold font-barlow px-2 py-0.5 uppercase tracking-wider self-center">Neu</span>
              </div>
              <p className="text-white/40 text-sm mb-5">{t('nfplus_subtitle')}</p>
              <div className="flex flex-wrap gap-2">
                {perks.map(p => (
                  <span key={p} className="px-2.5 py-1 border border-white/12 text-white/50 text-xs font-barlow">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="relative flex items-center gap-0 flex-shrink-0">
              <div className="border-r border-white/10 pr-8 mr-8">
                <p className="text-white/30 text-[10px] font-barlow font-bold uppercase tracking-widest mb-1">Basic</p>
                <p className="font-barlow font-bold text-3xl text-white leading-none">€2,99<span className="text-sm text-white/35 font-normal">/mo</span></p>
              </div>
              <div className="pr-8 mr-8">
                <p className="text-white/30 text-[10px] font-barlow font-bold uppercase tracking-widest mb-1">Pro</p>
                <p className="font-barlow font-bold text-3xl text-white leading-none">€6,99<span className="text-sm text-white/35 font-normal">/mo</span></p>
              </div>
              <Link href="/nf-plus" className="btn-primary whitespace-nowrap">
                {t('nfplus_compare')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
