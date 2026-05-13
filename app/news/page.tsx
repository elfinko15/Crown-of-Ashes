'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import { NEWS } from '@/lib/data/news'
import NFFooter from '@/components/NFFooter'

export default function NewsPage() {
  const { t, lang } = useLang()

  return (
    <>
      <main className="min-h-screen">
        <div className="max-w-[1100px] mx-auto px-4 py-12">
          <h1 className="font-barlow font-bold text-4xl text-white mb-2">{t('news_title')}</h1>
          <p className="text-muted mb-10">{NEWS.length} {lang === 'de' ? 'Artikel' : lang === 'fr' ? 'articles' : lang === 'es' ? 'artículos' : 'articles'}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.map(article => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="nf-card overflow-hidden group hover:bg-nf-card-hover transition-colors flex flex-col"
              >
                {/* Color header */}
                <div className="h-2 bg-white/10 group-hover:bg-white/20 transition-colors" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-barlow font-bold text-white/40 uppercase tracking-wider">{article.category}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-xs text-white/40">{new Date(article.date).toLocaleDateString()}</span>
                  </div>

                  <h2 className="font-barlow font-bold text-lg text-white mb-3 leading-tight group-hover:text-white/90 flex-1">
                    {article.title[lang]}
                  </h2>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">{article.excerpt[lang]}</p>

                  <span className="text-white/40 text-sm group-hover:text-white transition-colors">
                    {t('news_read_more')} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <NFFooter />
    </>
  )
}
