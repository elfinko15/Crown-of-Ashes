import HeroSlider from '@/components/HeroSlider'
import GameGrid from '@/components/GameGrid'
import NFPlusBanner from '@/components/NFPlusBanner'
import NewsRow from '@/components/NewsRow'
import SupportTeaser from '@/components/SupportTeaser'
import NFFooter from '@/components/NFFooter'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <GameGrid limit={4} />
      <NFPlusBanner />
      <NewsRow limit={3} />
      <SupportTeaser />
      <NFFooter />
    </main>
  )
}
