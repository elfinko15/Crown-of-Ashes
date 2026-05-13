'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import NFFooter from '@/components/NFFooter'

interface FAQItem { q: string; a: string }

function Accordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-nf-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-barlow font-bold text-white text-base pr-4">{item.q}</span>
            <span className="text-white/40 flex-shrink-0 text-xl leading-none">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="pb-5">
              <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function SupportPage() {
  const { t } = useLang()

  const faqs: FAQItem[] = [
    { q: t('support_faq_1_q'), a: t('support_faq_1_a') },
    { q: t('support_faq_2_q'), a: t('support_faq_2_a') },
    { q: t('support_faq_3_q'), a: t('support_faq_3_a') },
    { q: t('support_faq_4_q'), a: t('support_faq_4_a') },
    { q: t('support_faq_5_q'), a: t('support_faq_5_a') },
  ]

  return (
    <>
      <main className="min-h-screen">
        {/* Header */}
        <section className="border-b border-nf-border py-14 px-4">
          <div className="max-w-[900px] mx-auto text-center">
            <h1 className="font-barlow font-bold text-5xl text-white mb-3">{t('support_title')}</h1>
            <p className="text-muted text-lg">{t('support_subtitle')}</p>
          </div>
        </section>

        <div className="max-w-[900px] mx-auto px-4 py-12 space-y-8">
          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/account', icon: '👤', label: t('account_title') },
              { href: '/account/redeem', icon: '🎟', label: t('nav_redeem') },
              { href: '/nf-plus', icon: '⭐', label: 'NF Studios+' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="nf-card p-5 flex items-center gap-4 hover:bg-nf-card-hover transition-colors">
                <span className="text-2xl">{l.icon}</span>
                <span className="font-barlow font-bold text-white">{l.label}</span>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <div className="nf-card p-8">
            <h2 className="font-barlow font-bold text-2xl text-white mb-2">{t('support_faq')}</h2>
            <p className="text-muted text-sm mb-6">{t('support_subtitle')}</p>
            <Accordion items={faqs} />
          </div>

          {/* Contact */}
          <div className="nf-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-barlow font-bold text-2xl text-white mb-1">{t('support_contact')}</h2>
              <p className="text-muted text-sm">{t('support_contact_text')}</p>
              <p className="text-white/40 text-sm mt-1">nordicforge.studios@gmx.de</p>
            </div>
            <a
              href="mailto:nordicforge.studios@gmx.de"
              className="btn-primary flex-shrink-0"
            >
              {t('support_contact_btn')}
            </a>
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
