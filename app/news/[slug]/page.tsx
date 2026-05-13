'use client'

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useLang } from '@/lib/i18n/LanguageContext'
import { NEWS } from '@/lib/data/news'
import NFFooter from '@/components/NFFooter'

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const { t, lang } = useLang()

  const article = NEWS.find(a => a.slug === slug)
  if (!article) notFound()

  const others = NEWS.filter(a => a.slug !== slug).slice(0, 2)

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-[800px] mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/news" className="text-muted hover:text-white text-sm transition-colors">{t('news_back')}</Link>
          </div>

          {/* Article */}
          <article>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-barlow font-bold text-white/40 uppercase tracking-wider">{article.category}</span>
              <span className="text-white/20 text-xs">·</span>
              <span className="text-xs text-white/40">{t('news_published')} {new Date(article.date).toLocaleDateString()}</span>
            </div>

            <h1 className="font-barlow font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              {article.title[lang]}
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-8 pb-8 border-b border-nf-border">
              {article.excerpt[lang]}
            </p>

            <div className="text-white/70 leading-relaxed text-base">
              <p>{article.body[lang]}</p>
            </div>
          </article>

          {/* More articles */}
          {others.length > 0 && (
            <div className="mt-12 pt-10 border-t border-nf-border">
              <h2 className="font-barlow font-bold text-xl text-white mb-5">{t('home_news_title')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {others.map(a => (
                  <Link key={a.slug} href={`/news/${a.slug}`} className="nf-card p-5 hover:bg-nf-card-hover transition-colors">
                    <p className="text-white/40 text-xs mb-2">{a.category} · {new Date(a.date).toLocaleDateString()}</p>
                    <h3 className="font-barlow font-bold text-white text-base leading-snug">{a.title[lang]}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <NFFooter />
    </>
  )
}
