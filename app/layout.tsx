import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NFNavbar from '@/components/NFNavbar'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NF Studios',
  description: 'Nordic Forge Studios — Indie Game Studio aus Deutschland.',
  icons: { icon: '/logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${barlow.variable} ${inter.variable}`}>
      <body className="bg-nf-bg min-h-screen">
        <Providers>
          <NFNavbar />
          <div className="pt-14">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
