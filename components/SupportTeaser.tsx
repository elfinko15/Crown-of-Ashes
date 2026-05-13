'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'

export default function SupportTeaser() {
  const { t } = useLang()
  return (
    <section className="py-10 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="nf-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-barlow font-bold text-xl text-white mb-1">{t('home_support_title')}</h3>
            <p className="text-muted text-sm">{t('home_support_text')}</p>
          </div>
          <Link href="/support" className="btn-secondary whitespace-nowrap flex-shrink-0">
            {t('home_support_cta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
