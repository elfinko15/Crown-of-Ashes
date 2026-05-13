export type GameStatus = 'dev' | 'soon'

export interface Game {
  slug: string
  title: string
  subtitle: { de: string; en: string; fr: string; es: string }
  description: { de: string; en: string; fr: string; es: string }
  genre: string
  engine: string
  status: GameStatus
  coverGradient: string
  features: { de: string[]; en: string[]; fr: string[]; es: string[] }
}

export const GAMES: Game[] = [
  {
    slug: 'avadon',
    title: 'Avadon: The Broken Sigils',
    subtitle: {
      de: 'Ein düsteres Fantasy-RPG',
      en: 'A dark fantasy RPG',
      fr: 'Un RPG dark fantasy',
      es: 'Un RPG de fantasía oscura',
    },
    description: {
      de: 'Avadon: The Broken Sigils befindet sich in aktiver Entwicklung. Weitere Details folgen in Kürze.',
      en: 'Avadon: The Broken Sigils is in active development. More details coming soon.',
      fr: 'Avadon: The Broken Sigils est en développement actif. Plus de détails à venir.',
      es: 'Avadon: The Broken Sigils está en desarrollo activo. Más detalles próximamente.',
    },
    genre: 'RPG',
    engine: 'Godot 4',
    status: 'dev',
    coverGradient: 'from-slate-900 via-purple-950 to-black',
    features: {
      de: ['Rundenbasiertes Kampfsystem', 'Offene Spielwelt', 'Verzweigte Story', 'Handgefertigte Lore'],
      en: ['Turn-based combat', 'Open world', 'Branching story', 'Handcrafted lore'],
      fr: ['Combat au tour par tour', 'Monde ouvert', 'Histoire ramifiée', 'Lore artisanal'],
      es: ['Combate por turnos', 'Mundo abierto', 'Historia ramificada', 'Trasfondo artesanal'],
    },
  },
  {
    slug: 'coming-soon-1',
    title: '???',
    subtitle: { de: 'Demnächst', en: 'Coming Soon', fr: 'Bientôt', es: 'Próximamente' },
    description: { de: 'Weitere Infos folgen.', en: 'More info coming.', fr: 'Infos à venir.', es: 'Más info próximamente.' },
    genre: '?',
    engine: 'Godot 4',
    status: 'soon',
    coverGradient: 'from-zinc-900 to-black',
    features: { de: [], en: [], fr: [], es: [] },
  },
  {
    slug: 'coming-soon-2',
    title: '???',
    subtitle: { de: 'Demnächst', en: 'Coming Soon', fr: 'Bientôt', es: 'Próximamente' },
    description: { de: 'Weitere Infos folgen.', en: 'More info coming.', fr: 'Infos à venir.', es: 'Más info próximamente.' },
    genre: '?',
    engine: 'Godot 4',
    status: 'soon',
    coverGradient: 'from-zinc-900 to-black',
    features: { de: [], en: [], fr: [], es: [] },
  },
]
