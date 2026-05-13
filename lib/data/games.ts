export type GameStatus = 'dev' | 'soon'

export interface Region {
  name: string
  subtitle: string
  description: string
}

export interface Boss {
  name: string
  description: string
}

export interface Game {
  slug: string
  title: string
  tagline: { de: string; en: string; fr: string; es: string }
  subtitle: { de: string; en: string; fr: string; es: string }
  description: { de: string; en: string; fr: string; es: string }
  descriptionShort: { de: string; en: string; fr: string; es: string }
  genre: string
  engine: string
  status: GameStatus
  coverGradient: string
  features: { de: string[]; en: string[]; fr: string[]; es: string[] }
  regions?: { de: Region[]; en: Region[]; fr: Region[]; es: Region[] }
  bosses?: { de: Boss[]; en: Boss[]; fr: Boss[]; es: Boss[] }
}

export const GAMES: Game[] = [
  {
    slug: 'avadon',
    title: 'Avadon: The Broken Sigils',
    tagline: {
      de: 'Ein Held. Vier Siegel. Das Schicksal einer Welt.',
      en: 'One Hero. Four Seals. The Fate of a World.',
      fr: 'Un héros. Quatre sceaux. Le destin d\'un monde.',
      es: 'Un héroe. Cuatro sellos. El destino de un mundo.',
    },
    subtitle: {
      de: 'Episches Open World Fantasy Action RPG',
      en: 'Epic Open World Fantasy Action RPG',
      fr: 'RPG d\'action fantasy open world épique',
      es: 'RPG de acción fantasy de mundo abierto épico',
    },
    description: {
      de: 'Vor tausend Jahren versiegelte der sterbende König Avadon das uralte Wesen Nerath mit seinem eigenen Leben. Er wurde zur Legende. Sein Name wurde zur Welt. Doch niemand kannte die Wahrheit: Er hat nicht gesiegt. Er hat nur Zeit gekauft. Du bist Leifr – ein namenloser Söldner ohne Vergangenheit. Als das erste Siegel bricht und deine gesamte Gruppe ausgelöscht wird, überlebst du als Einziger. Ein alter Ordenspriester erkennt dich sofort: Du bist ein Sigilborn. Der Letzte deiner Art. Reise durch vier einzigartige Regionen – das eisige Yskarheim, den magischen Zauberwald Elunvara, die weiten Ebenen von Valdmeer und die mystischen Nebelklippen von Mordenfels. Besiege korrumpierte Ordenshüter, aktiviere die vier uralten Siegel und enthülle die Wahrheit hinter dem Pakt des gefallenen Königs. Doch mit jedem reparierten Siegel wird klarer: Die Siegel waren nicht nur ein Schutz. Sie sind auch ein Gefängnis. Und du bist das nächste Opfer.',
      en: 'A thousand years ago, the dying King Avadon sealed the ancient being Nerath with his own life. He became legend. His name became the world. But no one knew the truth: he did not win. He only bought time. You are Leifr – a nameless mercenary without a past. When the first seal breaks and your entire group is wiped out, you are the only survivor. An old order priest recognizes you immediately: You are a Sigilborn. The last of your kind. Journey through four unique regions – the icy Yskarheim, the magical enchanted forest Elunvara, the vast plains of Valdmeer, and the mystical Fog Cliffs of Mordenfels. Defeat corrupted Order Keepers, activate the four ancient seals, and uncover the truth behind the pact of the fallen king. But with every seal repaired, it becomes clearer: the seals were not just a protection. They are also a prison. And you are the next victim.',
      fr: 'Il y a mille ans, le roi mourant Avadon a scellé l\'être ancestral Nerath au prix de sa propre vie. Il est devenu légende. Son nom est devenu le monde. Mais personne ne connaissait la vérité : il n\'a pas gagné. Il n\'a fait qu\'acheter du temps. Tu es Leifr – un mercenaire sans nom ni passé. Quand le premier sceau se brise et que tout ton groupe est anéanti, tu es le seul survivant. Un vieux prêtre de l\'Ordre te reconnaît aussitôt : Tu es un Sigilborn. Le dernier de ton espèce. Voyage à travers quatre régions uniques – l\'glaciale Yskarheim, la forêt enchantée d\'Elunvara, les vastes plaines de Valdmeer et les mystiques Falaises de Brume de Mordenfels.',
      es: 'Hace mil años, el moribundo rey Avadon selló al ser ancestral Nerath con su propia vida. Se convirtió en leyenda. Su nombre se convirtió en el mundo. Pero nadie conocía la verdad: no ganó. Solo compró tiempo. Eres Leifr – un mercenario sin nombre ni pasado. Cuando el primer sello se rompe y todo tu grupo es aniquilado, eres el único superviviente. Un viejo sacerdote de la Orden te reconoce de inmediato: Eres un Sigilborn. El último de tu especie. Viaja por cuatro regiones únicas – el helado Yskarheim, el mágico bosque encantado Elunvara, las vastas llanuras de Valdmeer y los místicos Acantilados de Niebla de Mordenfels.',
    },
    descriptionShort: {
      de: 'Ein Söldner ohne Vergangenheit. Eine sterbende Welt. Vier Siegel die brechen. Avadon: The Broken Sigils – ein episches Open World Fantasy RPG von Nordic Forge Studios.',
      en: 'A mercenary without a past. A dying world. Four seals breaking. Avadon: The Broken Sigils – an epic open world fantasy RPG by Nordic Forge Studios.',
      fr: 'Un mercenaire sans passé. Un monde mourant. Quatre sceaux qui se brisent. Avadon: The Broken Sigils – un RPG fantasy open world épique par Nordic Forge Studios.',
      es: 'Un mercenario sin pasado. Un mundo moribundo. Cuatro sellos que se rompen. Avadon: The Broken Sigils – un épico RPG de fantasía de mundo abierto de Nordic Forge Studios.',
    },
    genre: 'Open World | Action RPG | Dark Fantasy',
    engine: 'Godot 4',
    status: 'dev',
    coverGradient: 'from-slate-900 via-purple-950 to-black',
    features: {
      de: [
        'Open World mit 4 einzigartigen Regionen ohne Ladebildschirme',
        'Dynamisches Kampfsystem – kein festes Klassensystem',
        'Lebendige NPCs mit Gedächtnis – Entscheidungen haben Konsequenzen',
        'Vier Völker mit eigener Kultur, Sprache und Konflikten',
        'Fünf epische Boss-Kämpfe – jeder mit drei Phasen und einer Wendung',
        'Das Siegel-System – vier Siegel, vier Fähigkeiten, eine finale Entscheidung',
      ],
      en: [
        'Open world with 4 unique regions – no loading screens',
        'Dynamic combat system – no fixed class system',
        'Living NPCs with memory – your choices have consequences',
        'Four peoples with unique cultures, languages, and conflicts',
        'Five epic boss fights – each with three phases and a twist',
        'The Seal System – four seals, four abilities, one final decision',
      ],
      fr: [
        'Monde ouvert avec 4 régions uniques – sans écrans de chargement',
        'Système de combat dynamique – pas de classe fixe',
        'PNJ vivants avec mémoire – vos choix ont des conséquences',
        'Quatre peuples avec cultures, langues et conflits uniques',
        'Cinq combats de boss épiques – chacun en trois phases avec une surprise',
        'Le Système des Sceaux – quatre sceaux, quatre capacités, une décision finale',
      ],
      es: [
        'Mundo abierto con 4 regiones únicas – sin pantallas de carga',
        'Sistema de combate dinámico – sin clase fija',
        'NPCs vivos con memoria – tus decisiones tienen consecuencias',
        'Cuatro pueblos con culturas, idiomas y conflictos únicos',
        'Cinco combates épicos contra jefes – cada uno con tres fases y un giro',
        'El Sistema de Sellos – cuatro sellos, cuatro habilidades, una decisión final',
      ],
    },
    regions: {
      de: [
        {
          name: 'Yskarheim',
          subtitle: 'Das Eisgebiet',
          description: 'Das eisige Norden. Heimat der Drakenvolk – kriegerische Wikinger-Zwerge die in Bergfestungen leben und Eiswaffen schmieden. Rauhe Überleben, uralte Runen, gefrorene Seen und Schneestürme die nie aufhören. Hier bricht das Frostsiegel. Hier wartet Valdrek der Eisgebrochene – ein Mann der Zeit selbst anhielt weil er den Tod seiner Tochter nicht akzeptieren kann.',
        },
        {
          name: 'Elunvara',
          subtitle: 'Der Zauberwald',
          description: 'Der magische Zauberwald im Süden. Leuchtende Pilze in allen Farben, uralte Baumriesen deren Wurzeln ganze Städte tragen, Naturgeister die halb körperlich halb geistförmig sind. Das Lebenssiegel bricht hier. Aelindra die Verdorbene war einst die größte Heilerin ihrer Zeit – bis sie beschloss alles andere der Natur zu opfern.',
        },
        {
          name: 'Valdmeer',
          subtitle: 'Die Ebenen',
          description: 'Die weiten Ebenen der Menschenreiche. Goldene Getreidefelder, mächtige Burgen, belebte Marktstädte und politische Intrigen die seit Generationen schwelen. Hier beginnt deine Reise. Das Ordnungssiegel fällt hier. Kommandant Varek glaubte so tief an Ordnung dass er daraus ein Regime der Angst erschuf – und glaubt immer noch er rettet die Welt damit.',
        },
        {
          name: 'Mordenfels',
          subtitle: 'Die Nebelklippen',
          description: 'Die mystischen Nebelklippen im Osten. Steile Klippen im dichten Nebel, schwebende Felsbroken, Realität die an den Rändern flimmert. Die Steinwesen schweigen und beobachten alles seit Jahrtausenden. Das Realitätssiegel zerbricht hier. Gorthael der Steinvater wollte die Realität selbst umschreiben – eine Welt ohne Krieg erschaffen durch eine Welt ohne freien Willen.',
        },
      ],
      en: [
        {
          name: 'Yskarheim',
          subtitle: 'The Ice Lands',
          description: 'The frozen north. Home of the Drakenvolk – warrior dwarf-Vikings who live in mountain fortresses and forge ice weapons. Harsh survival, ancient runes, frozen lakes, and never-ending blizzards. The Frost Seal breaks here. Valdrek the Ice-Broken waits here – a man who stopped time itself because he cannot accept the death of his daughter.',
        },
        {
          name: 'Elunvara',
          subtitle: 'The Enchanted Forest',
          description: 'The magical forest of the south. Glowing mushrooms in every color, ancient giant trees whose roots carry entire cities, nature spirits that are half-physical half-spectral. The Life Seal breaks here. Aelindra the Corrupted was once the greatest healer of her age – until she decided to sacrifice everything else to nature.',
        },
        {
          name: 'Valdmeer',
          subtitle: 'The Plains',
          description: 'The vast plains of the human kingdoms. Golden grain fields, mighty castles, bustling market towns, and political intrigues that have smoldered for generations. Your journey begins here. The Order Seal falls here. Commander Varek believed so deeply in order that he built a regime of fear from it – and still believes he is saving the world.',
        },
        {
          name: 'Mordenfels',
          subtitle: 'The Fog Cliffs',
          description: 'The mystical fog cliffs of the east. Steep cliffs in dense mist, floating rock formations, reality shimmering at the edges. The Stone beings have watched in silence for millennia. The Reality Seal shatters here. Gorthael the Stone Father wanted to rewrite reality itself – create a world without war through a world without free will.',
        },
      ],
      fr: [
        {
          name: 'Yskarheim',
          subtitle: 'Les Terres de Glace',
          description: 'Le nord gelé. Terre des Drakenvolk – des nains-vikings guerriers vivant dans des forteresses de montagne et forgeant des armes de glace. Survie rude, runes anciennes, lacs gelés et blizzards interminables. Le Sceau de Givre se brise ici.',
        },
        {
          name: 'Elunvara',
          subtitle: 'La Forêt Enchantée',
          description: 'La forêt magique du sud. Champignons lumineux de toutes les couleurs, arbres géants anciens dont les racines portent des villes entières, esprits de la nature à moitié physiques. Le Sceau de Vie se brise ici.',
        },
        {
          name: 'Valdmeer',
          subtitle: 'Les Plaines',
          description: 'Les vastes plaines des royaumes humains. Champs de blé dorés, châteaux puissants, villes marchandes animées et intrigues politiques qui couvent depuis des générations. Ton voyage commence ici. Le Sceau de l\'Ordre tombe ici.',
        },
        {
          name: 'Mordenfels',
          subtitle: 'Les Falaises de Brume',
          description: 'Les mystiques falaises de brume de l\'est. Falaises escarpées dans un brouillard épais, formations rocheuses flottantes, réalité qui scintille aux bords. Le Sceau de Réalité se brise ici.',
        },
      ],
      es: [
        {
          name: 'Yskarheim',
          subtitle: 'Las Tierras de Hielo',
          description: 'El norte helado. Hogar de los Drakenvolk – enanos-vikingos guerreros que viven en fortalezas de montaña y forjan armas de hielo. Supervivencia dura, runas antiguas, lagos congelados y ventiscas interminables. El Sello de Escarcha se rompe aquí.',
        },
        {
          name: 'Elunvara',
          subtitle: 'El Bosque Encantado',
          description: 'El mágico bosque del sur. Hongos brillantes de todos los colores, árboles gigantes antiguos cuyas raíces sostienen ciudades enteras, espíritus de la naturaleza medio físicos. El Sello de Vida se rompe aquí.',
        },
        {
          name: 'Valdmeer',
          subtitle: 'Las Llanuras',
          description: 'Las vastas llanuras de los reinos humanos. Campos de trigo dorados, castillos poderosos, ciudades mercado animadas e intrigas políticas que llevan generaciones ardiendo. Tu viaje comienza aquí. El Sello del Orden cae aquí.',
        },
        {
          name: 'Mordenfels',
          subtitle: 'Los Acantilados de Niebla',
          description: 'Los místicos acantilados de niebla del este. Acantilados empinados en densa niebla, formaciones rocosas flotantes, realidad que parpadea en los bordes. El Sello de Realidad se rompe aquí.',
        },
      ],
    },
    bosses: {
      de: [
        {
          name: 'Valdrek der Eisgebrochene',
          description: 'Ehemaliger Erster Kriegsherr von Grimvael. Er hielt die Zeit an um den Tod seiner Tochter rückgängig zu machen. Seither existiert er außerhalb der Zeit – und hält alle anderen mit sich gefangen.',
        },
        {
          name: 'Aelindra die Verdorbene',
          description: 'Einst größte Heilerin von Lirenmoor. Sie liebte die Natur so sehr dass sie alles andere ihr opferte. Jetzt ist sie selbst zur Natur geworden – unkontrollierbar und alles verschlingend.',
        },
        {
          name: 'Kommandant Varek der Gefallene',
          description: 'Einst gerechter Paladin des Ordens der Goldenen Klinge. Er glaubte so tief an Ordnung dass er Chaos mit absoluter Kontrolle bekämpfte – bis die Kontrolle wichtiger wurde als die Menschen die sie schützen sollte.',
        },
        {
          name: 'Gorthael der Steinvater',
          description: 'Ältestes Steinwesen von Mordenfels. Er beobachtete Jahrtausende lang wie Menschen Fehler machen. Irgendwann beschloss er die Realität selbst umzuschreiben – für eine bessere Welt. Durch eine Welt ohne freien Willen.',
        },
        {
          name: 'Nerath – Das Ungeborene',
          description: 'Kein simpler Bösewicht. Ein uraltes Wesen das nie geboren werden wollte – in eine Existenz gezwungen die es nie wählte. Es hält die Welt als Geisel nicht aus Bosheit – sondern weil es nicht weiß wie man aufhört zu existieren.',
        },
      ],
      en: [
        {
          name: 'Valdrek the Ice-Broken',
          description: 'Former First Warlord of Grimvael. He stopped time to undo the death of his daughter. Since then he exists outside of time – and holds everyone else captive with him.',
        },
        {
          name: 'Aelindra the Corrupted',
          description: 'Once the greatest healer of Lirenmoor. She loved nature so much that she sacrificed everything else to it. Now she has become nature itself – uncontrollable and all-consuming.',
        },
        {
          name: 'Commander Varek the Fallen',
          description: 'Once a righteous paladin of the Order of the Golden Blade. He believed so deeply in order that he fought chaos with absolute control – until control became more important than the people it was meant to protect.',
        },
        {
          name: 'Gorthael the Stone Father',
          description: 'The oldest Stone Being of Mordenfels. He watched for millennia as humans made mistakes. Eventually he decided to rewrite reality itself – for a better world. Through a world without free will.',
        },
        {
          name: 'Nerath – The Unborn',
          description: 'No simple villain. An ancient being that never wanted to be born – forced into an existence it never chose. It holds the world hostage not out of malice – but because it does not know how to stop existing.',
        },
      ],
      fr: [
        {
          name: 'Valdrek le Brisé-par-la-Glace',
          description: 'Ancien Premier Seigneur de Guerre de Grimvael. Il a arrêté le temps pour annuler la mort de sa fille. Depuis il existe hors du temps – et retient tout le monde captif avec lui.',
        },
        {
          name: 'Aelindra la Corrompue',
          description: 'Autrefois la plus grande guérisseuse de Lirenmoor. Elle aimait la nature au point de tout lui sacrifier. Elle est maintenant devenue la nature elle-même – incontrôlable et dévorante.',
        },
        {
          name: 'Commandant Varek le Déchu',
          description: 'Autrefois juste paladin de l\'Ordre de la Lame d\'Or. Il croyait si profondément en l\'ordre qu\'il combattait le chaos par un contrôle absolu – jusqu\'à ce que le contrôle devienne plus important que les gens qu\'il devait protéger.',
        },
        {
          name: 'Gorthael le Père de Pierre',
          description: 'L\'être de pierre le plus ancien de Mordenfels. Il a observé pendant des millénaires les erreurs humaines. Il a finalement décidé de réécrire la réalité elle-même – pour un monde meilleur. Par un monde sans libre arbitre.',
        },
        {
          name: 'Nerath – L\'Inné',
          description: 'Pas un simple méchant. Un être ancestral qui n\'a jamais voulu naître – forcé dans une existence qu\'il n\'a jamais choisie. Il prend le monde en otage non par malveillance – mais parce qu\'il ne sait pas comment cesser d\'exister.',
        },
      ],
      es: [
        {
          name: 'Valdrek el Quebrado-por-el-Hielo',
          description: 'Antiguo Primer Señor de la Guerra de Grimvael. Detuvo el tiempo para deshacer la muerte de su hija. Desde entonces existe fuera del tiempo – y mantiene a todos los demás cautivos con él.',
        },
        {
          name: 'Aelindra la Corrompida',
          description: 'Antaño la mayor sanadora de Lirenmoor. Amaba la naturaleza tanto que le sacrificó todo lo demás. Ahora ella misma se ha convertido en naturaleza – incontrolable y devoradora.',
        },
        {
          name: 'Comandante Varek el Caído',
          description: 'Antaño justo paladín de la Orden de la Hoja Dorada. Creía tan profundamente en el orden que combatía el caos con control absoluto – hasta que el control se volvió más importante que las personas que debía proteger.',
        },
        {
          name: 'Gorthael el Padre de Piedra',
          description: 'El ser de piedra más antiguo de Mordenfels. Observó durante milenios cómo los humanos cometían errores. Eventualmente decidió reescribir la realidad misma – para un mundo mejor. A través de un mundo sin libre albedrío.',
        },
        {
          name: 'Nerath – El No-Nacido',
          description: 'No un simple villano. Un ser ancestral que nunca quiso nacer – forzado a una existencia que nunca eligió. Mantiene al mundo como rehén no por maldad – sino porque no sabe cómo dejar de existir.',
        },
      ],
    },
  },
  {
    slug: 'coming-soon-1',
    title: '???',
    tagline: { de: 'Demnächst', en: 'Coming Soon', fr: 'Bientôt', es: 'Próximamente' },
    subtitle: { de: 'Demnächst', en: 'Coming Soon', fr: 'Bientôt', es: 'Próximamente' },
    description: { de: 'Weitere Infos folgen.', en: 'More info coming.', fr: 'Infos à venir.', es: 'Más info próximamente.' },
    descriptionShort: { de: 'Weitere Infos folgen.', en: 'More info coming.', fr: 'Infos à venir.', es: 'Más info próximamente.' },
    genre: '?',
    engine: 'Godot 4',
    status: 'soon',
    coverGradient: 'from-zinc-900 to-black',
    features: { de: [], en: [], fr: [], es: [] },
  },
  {
    slug: 'coming-soon-2',
    title: '???',
    tagline: { de: 'Demnächst', en: 'Coming Soon', fr: 'Bientôt', es: 'Próximamente' },
    subtitle: { de: 'Demnächst', en: 'Coming Soon', fr: 'Bientôt', es: 'Próximamente' },
    description: { de: 'Weitere Infos folgen.', en: 'More info coming.', fr: 'Infos à venir.', es: 'Más info próximamente.' },
    descriptionShort: { de: 'Weitere Infos folgen.', en: 'More info coming.', fr: 'Infos à venir.', es: 'Más info próximamente.' },
    genre: '?',
    engine: 'Godot 4',
    status: 'soon',
    coverGradient: 'from-zinc-900 to-black',
    features: { de: [], en: [], fr: [], es: [] },
  },
]
