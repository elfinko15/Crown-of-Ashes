'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n/LanguageContext'
import { NEWS } from '@/lib/data/news'
import { Lang } from '@/lib/i18n/translations'

interface Props { limit?: number }

export default function NewsRow({ limit }: Props) {
  const { lang, t } = useLang()
  const articles = limit ? NEWS.slice(0, limit) : NEWS

  return (
    <section className="py-14 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-barlow font-bold text-2xl text-white">{t('home_news_title')}</h2>
          <Link href="/news" className="text-sm text-white/50 hover:text-white transition-colors">{t('home_news_all')} →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map(article => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="nf-card group p-5 block">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-white/10 text-white/60 text-xs font-mono rounded">{article.category}</span>
                <span className="text-faint text-xs">{new Date(article.date).toLocaleDateString(lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : 'en-GB')}</span>
              </div>
              <h3 className="font-barlow font-bold text-white text-lg leading-snug mb-2 group-hover:text-white/80 transition-colors">
                {article.title[lang as Lang] ?? article.title.de}
              </h3>
              <p className="text-muted text-sm leading-relaxed line-clamp-2">
                {article.excerpt[lang as Lang] ?? article.excerpt.de}
              </p>
              <span className="inline-block mt-4 text-white/40 hover:text-white text-xs transition-colors">
                {t('news_read_more')} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
