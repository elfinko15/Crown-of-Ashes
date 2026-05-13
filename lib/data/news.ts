export interface NewsArticle {
  slug: string
  title: { de: string; en: string; fr: string; es: string }
  excerpt: { de: string; en: string; fr: string; es: string }
  body: { de: string; en: string; fr: string; es: string }
  date: string
  category: string
}

export const NEWS: NewsArticle[] = [
  {
    slug: 'nf-studios-launch',
    title: {
      de: 'Nordic Forge Studios startet durch',
      en: 'Nordic Forge Studios launches',
      fr: 'Nordic Forge Studios se lance',
      es: 'Nordic Forge Studios se lanza',
    },
    excerpt: {
      de: 'Wir stellen offiziell unser Studio vor und teilen unsere Vision für die Zukunft.',
      en: 'We officially introduce our studio and share our vision for the future.',
      fr: 'Nous présentons officiellement notre studio et partageons notre vision.',
      es: 'Presentamos oficialmente nuestro estudio y compartimos nuestra visión.',
    },
    body: {
      de: 'Nordic Forge Studios ist ein kleines, leidenschaftliches Indie-Studio aus Deutschland. Wir entwickeln Avadon: The Broken Sigils mit Godot 4 und freuen uns auf diese Reise mit euch.',
      en: 'Nordic Forge Studios is a small, passionate indie studio from Germany. We are developing Avadon: The Broken Sigils with Godot 4 and look forward to this journey with you.',
      fr: 'Nordic Forge Studios est un petit studio indie passionné d\'Allemagne. Nous développons Avadon: The Broken Sigils avec Godot 4.',
      es: 'Nordic Forge Studios es un pequeño estudio indie apasionado de Alemania. Desarrollamos Avadon: The Broken Sigils con Godot 4.',
    },
    date: '2026-05-01',
    category: 'Studio',
  },
  {
    slug: 'avadon-development-update',
    title: {
      de: 'Avadon: Erstes Entwickler-Update',
      en: 'Avadon: First Developer Update',
      fr: 'Avadon: Premier rapport de développement',
      es: 'Avadon: Primera actualización de desarrollo',
    },
    excerpt: {
      de: 'Ein erster Blick hinter die Kulissen der Entwicklung von Avadon: The Broken Sigils.',
      en: 'A first look behind the scenes of Avadon: The Broken Sigils development.',
      fr: 'Un premier aperçu des coulisses du développement d\'Avadon.',
      es: 'Un primer vistazo al desarrollo de Avadon.',
    },
    body: {
      de: 'Das Team arbeitet hart an den Kernsystemen von Avadon. Mehr Details folgen in Kürze.',
      en: 'The team is working hard on Avadon\'s core systems. More details coming soon.',
      fr: 'L\'équipe travaille dur sur les systèmes de base d\'Avadon. Plus de détails à venir.',
      es: 'El equipo trabaja duro en los sistemas principales de Avadon. Más detalles próximamente.',
    },
    date: '2026-05-08',
    category: 'Development',
  },
  {
    slug: 'nf-plus-launch',
    title: {
      de: 'NF Studios+ ist jetzt verfügbar',
      en: 'NF Studios+ is now available',
      fr: 'NF Studios+ est maintenant disponible',
      es: 'NF Studios+ ya está disponible',
    },
    excerpt: {
      de: 'Unterstütze uns mit NF Studios+ und erhalte exklusive Vorteile.',
      en: 'Support us with NF Studios+ and get exclusive benefits.',
      fr: 'Soutenez-nous avec NF Studios+ et obtenez des avantages exclusifs.',
      es: 'Apóyanos con NF Studios+ y obtén beneficios exclusivos.',
    },
    body: {
      de: 'NF Studios+ ist unser Mitgliedschaftsprogramm für alle, die unser Studio direkt unterstützen möchten. Basic ab €4,99/Monat, Pro ab €9,99/Monat.',
      en: 'NF Studios+ is our membership program for everyone who wants to support our studio directly. Basic from €4.99/month, Pro from €9.99/month.',
      fr: 'NF Studios+ est notre programme d\'adhésion pour tous ceux qui souhaitent soutenir notre studio directement.',
      es: 'NF Studios+ es nuestro programa de membresía para todos los que quieren apoyar nuestro estudio directamente.',
    },
    date: '2026-05-11',
    category: 'NF Studios+',
  },
]
