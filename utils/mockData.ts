export const categories = [
  {
    id: 'Poterie',
    name: 'poterie',
    imageUrl: 'https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'Textiles',
    name: 'textiles',
    imageUrl: 'https://images.pexels.com/photos/2928381/pexels-photo-2928381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'Boiserie',
    name: 'boiserie',
    imageUrl: 'https://images.pexels.com/photos/13766866/pexels-photo-13766866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'Bijoux',
    name: 'bijoux',
    imageUrl: 'https://images.pexels.com/photos/30237001/pexels-photo-30237001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'Cuir',
    name: 'cuir',
    imageUrl: 'https://images.pexels.com/photos/31438368/pexels-photo-31438368/free-photo-of-exposition-coloree-de-babouches-marocaines-traditionnelles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const artisans = [
  {
    id: 'artisan-1',
    name: 'Karima Berrada',
    avatar: 'https://images.pexels.com/photos/32380006/pexels-photo-32380006/free-photo-of-armenie-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    coverImage: 'https://images.pexels.com/photos/4502965/pexels-photo-4502965.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Fes, Maroc',
    bio: 'Je suis potier de quatrième génération, spécialisé dans la céramique traditionnelle marocaine. Mon atelier, situé au cœur de Fès, perpétue un héritage familial de savoir-faire qui s"étend sur plus de 100 ans. Chaque pièce est façonnée à la main selon des techniques transmises de génération en génération, alliant motifs traditionnels et designs contemporains.',
    specialties: [' Poterie en zellige', 'Assiettes en céramique', 'Carreaux décoratifs'],
    rating: 4.8,
    experience: 25,
    reviewCount: 124,
    workshopLocation: 'ancien Medina, Fes',
    workshopImage: 'https://images.pexels.com/photos/32386969/pexels-photo-32386969/free-photo-of-exposition-de-textiles-et-de-ceramiques-colores-dans-une-boutique-artisanale.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: [
      {
        userName: 'Sarah madani',
        userAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
        rating: 5,
        date: 'Mai 15, 2025',
        text: ' La poterie de Karima est absolument magnifique. Le savoir-faire est exceptionnel et les couleurs sont éclatantes. J"ai acheté un ensemble d"assiettes et elles sont encore plus belles en vrai ! '
      },
      {
        userName: 'Mohammed Al-Fasi',
        userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        rating: 4,
        date: 'Avril 28, 2025',
        text: ' J"ai acheté un ensemble de carreaux personnalisés pour la rénovation de ma cuisine. La qualité est exceptionnelle et Karim a été très aidant pour concevoir un motif qui correspondait parfaitement à ma vision. Je le recommande vivement !'
      },
      {
        userName: 'Joudia Ellemki',
        userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        rating: 5,
        date: 'Mars 10, 2025',
        text: 'J"ai visité l"atelier de Karim à Fès et J"ai été émerveillé par le processus de création de ces magnifiques céramiques. J"ai acheté plusieurs pièces qui sont désormais des trésors dans ma maison.'
      },
    ]
  },
  {
    id: 'artisan-2',
    name: 'Fatima Zahra',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    coverImage: 'https://images.pexels.com/photos/30664540/pexels-photo-30664540/free-photo-of-decoration-textile-marocaine-coloree-avec-coussins.jpeg?auto=compress&cs=tinysrgb&w=600',
    location: 'Marrakech, Maroc',
    bio: 'En tant qu"artiste textile de Marrakech, je crée des tapis et des textiles tissés à la main en utilisant des techniques traditionnelles marocaines. Mes créations allient motifs ancestraux berbères et styles minimalistes modernes. Chaque pièce raconte une histoire et porte l"esprit de l"artisanat marocain.',
    specialties: ['Berber Rugs', 'Embroidery', 'Handwoven Textiles'],
    rating: 4.9,
    experience: 15,
    reviewCount: 98,
    workshopLocation: 'Medina Quarter, Marrakech',
    workshopImage: 'https://images.pexels.com/photos/28582588/pexels-photo-28582588/free-photo-of-exposition-de-tapis-marocains-vibrants-dans-la-medina-de-fes.jpeg?auto=compress&cs=tinysrgb&w=600',
    reviews: [
      {
        userName: 'David Miller',
        userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        rating: 5,
        date: 'June 2, 2025',
        text: 'The rug I purchased from Fatima is absolutely gorgeous! The craftsmanship is exceptional, and it has transformed my living room. The colors are vibrant and the pattern is intricate.'
      },
      {
        userName: 'Sophia Garcia',
        userAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
        rating: 5,
        date: 'May 17, 2025',
        text: 'I ordered custom cushion covers from Fatima, and they exceeded my expectations. The fabric quality is superb, and the embroidery is detailed and beautiful. Will definitely order more items!'
      },
    ]
  },
  {
    id: 'artisan-3',
    name: 'Omar Alaoui',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    location: 'Essaouira, Maroc',
    bio: 'Je suis un ébéniste originaire d"Essaouira, ville côtière, spécialisé dans la fabrication de meubles et d"objets de décoration traditionnels marocains en bois de thuya local. Mon art allie techniques de sculpture traditionnelles et sensibilité au design contemporain.',
    specialties: ['Thuya Wood Boxes', 'Carved Furniture', 'Decorative Items'],
    rating: 4.7,
    experience: 20,
    reviewCount: 87,
    workshopImage:'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ld5UiNlULxHY9Qzyn6S2RwHaDq%26r%3D0%26pid%3DApi&sp=1748984111T69cbcf6c4dd69c8a21eca7b38c597a60fd4676cef320352fcb2c7cf30b980b1f '
  },
  {
    id: 'artisan-4',
    name: 'Amina Bakkali',
    avatar: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg',
    location: 'Tangier, Morocco',
    bio: 'Born and raised in Tangier, I specialize in creating handmade silver jewelry inspired by Moroccan and Amazigh designs. Each piece is crafted with attention to detail and respect for traditional techniques, creating modern accessories with cultural roots.',
    specialties: ['Silver Filigree', 'Amazigh Jewelry', 'Contemporary Designs'],
    rating: 4.6,
    experience: 12,
    reviewCount: 56,
  },
];


export const products = [
  {
    id: 'product-1',
    name: 'Bol en céramique marocaine fait main',
    description: 'Ce bol en céramique magnifiquement façonné à la main présente des motifs marocains traditionnels aux tons bleus et blancs éclatants. Chaque pièce est tournée individuellement au tour de potier et peinte à la main selon des techniques transmises de génération en génération. Parfait comme objet décoratif ou pour servir des aliments, ce bol apporte une touche authentique de l"artisanat marocain à votre intérieur.',
    price: 350,
    images: [
      'https://images.pexels.com/photos/28976449/pexels-photo-28976449/free-photo-of-ceramiques-marocaines-colorees-exposees-sur-un-marche.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6842672/pexels-photo-6842672.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/695202/pexels-photo-695202.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Poterie',
    categoryId: 'poterie',
    artisanId: 'artisan-1',
    materials: ['Clay', 'Natural pigments', 'Glaze'],
    dimensions: '12cm height x 20cm diameter',
  },
  {
    id: 'product-2',
    name: 'Ensemble de carreaux en mosaïque de zellige',
    description: 'Cet ensemble de carreaux en mosaïque de zellige, fabriqués à la main, représente le summum de l"art céramique marocain. Chaque carreau est soigneusement découpé et façonné à la main, puis assemblé pour créer des motifs géométriques complexes. Les couleurs vibrantes sont obtenues grâce à des pigments minéraux traditionnels et des techniques de glaçure ancestrales. Ces carreaux peuvent être utilisés pour les dessus de table, les crédences ou comme éléments décoratifs muraux.',
    price: 1200,
    images: [
      'https://images.pexels.com/photos/936801/pexels-photo-936801.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1040895/pexels-photo-1040895.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Poterie',
    categoryId: 'poterie',
    artisanId: 'artisan-1',
    materials: ['Clay', 'Natural pigments', 'Glaze'],
    dimensions: '60cm x 60cm (set of 16 tiles)'
  },
  {
    id: 'product-3',
    name: 'Tapis berbère en laine tissé à la main',
    description: 'This authentic Berber rug is handwoven using traditional techniques that have been passed down through generations. Made from high-quality wool sourced from the Middle Atlas Mountains, the rug features geometric patterns and symbols that tell stories of Berber culture and heritage. Each piece is unique and takes several weeks to complete.',
    price: 2800,
    images: [
      'https://images.pexels.com/photos/31555486/pexels-photo-31555486/free-photo-of-tapis-turcs-traditionnels-exposes-a-antalya.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/32218413/pexels-photo-32218413/free-photo-of-tapis-marocains-colores-exposes-a-rabat.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Textiles',
    categoryId: 'textiles',
    artisanId: 'artisan-2',
    materials: ['Natural wool', 'Vegetable dyes'],
    dimensions: '200cm x 150cm'
  },
  {
    id: 'product-4',
    name: 'Housse de coussin en soie brodée',
    description: 'Cette housse de coussin luxueuse met en valeur l"art raffiné de la broderie marocaine. Faite à la main sur une soie lisse, ses motifs complexes sont inspirés des motifs traditionnels de la broderie de Fès. Chaque point est minutieusement réalisé à la main, créant une pièce qui apporte élégance et richesse culturelle à votre décoration intérieure.',
    price: 450,
    images: [
      'https://images.pexels.com/photos/30778626/pexels-photo-30778626/free-photo-of-salon-confortable-avec-housse-de-canape-a-motifs.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/27532133/pexels-photo-27532133/free-photo-of-mode-hotel-maison-luxe.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Textiles',
    categoryId: 'textiles',
    artisanId: 'artisan-2',
    materials: ['Silk', 'Cotton thread'],
    dimensions: '45cm x 45cm'
  },
  {
    id: 'product-5',
    name: 'Boîte à bijoux en bois de thuya',
    description: 'Fabriquée en bois de thuya aromatique, cette boîte à bijoux finement sculptée est un témoignage de la tradition de la menuiserie d"Essaouira. Le couvercle présente un motif géométrique gravé à la main, tandis que l"intérieur, doublé de velours, comporte plusieurs compartiments. Le grain naturel et les nœuds du bois de thuya rendent chaque boîte unique.',
    price: 890,
    images: [
      'https://images.pexels.com/photos/29624003/pexels-photo-29624003.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6310167/pexels-photo-6310167.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Boiserie',
    categoryId: 'boiserie',
    artisanId: 'artisan-3',
    materials: ['Thuya Wood', 'Brass hinges', 'Velvet lining'],
    dimensions: '24cm x 18cm x 10cm'
  },
  {
    id: 'product-6',
    name: 'Collier pendentif en filigrane d"argent',
    description: 'Ce pendentif exquis met en valeur l"art délicat du filigrane d"argent marocain. Le motif complexe est façonné à la main à partir de fins fils d"argent, soigneusement torsadés et soudés pour créer un dessin orné inspiré des symboles traditionnels amazighs. Le pendentif est suspendu à une chaîne en argent sterling, en faisant une pièce maîtresse qui relie celui ou celle qui le porte à la riche tradition joaillière du Maroc.',
    price: 750,
    images: [
      'https://images.pexels.com/photos/16109306/pexels-photo-16109306/free-photo-of-chien-concevoir-designer-chaine.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/16124746/pexels-photo-16124746/free-photo-of-chaine-a-maillons-cubains.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Bijoux',
    categoryId: 'bijoux',
    artisanId: 'artisan-4',
    materials: ['Sterling Silver', 'Silver filigree'],
    dimensions: 'Pendant: 5cm x 3cm, Chain: 45cm'
  },
  {
    id: 'product-7',
    name: 'Sac en cuir travaillé à la main',
    description: 'Ce sac en cuir fait main illustre l"art raffiné du travail du cuir marocain. Confectionné en cuir de chèvre de première qualité, il présente des motifs finement gravés à la main, caractéristiques de l"artisanat traditionnel marocain. Le tannage naturel, réalisé à partir de plantes et minéraux locaux, confère au cuir sa couleur riche et sa grande durabilité.',
    price: 1200,
    images: [
      'https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/30197052/pexels-photo-30197052/free-photo-of-tannerie-de-cuir-a-fes-1.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Cuir',
    categoryId: 'cuir',
    artisanId: 'artisan-3',
    materials: ['Goatskin leather', 'Brass hardware'],
    dimensions: '30cm x 25cm x 10cm'
  },
  {
    id: 'product-8',
    name: 'Tagine en céramique peint à la main',
    description: 'Ce tagine marocain traditionnel est à la fois un ustensile de cuisson fonctionnel et une magnifique pièce décorative. Façonné à la main en argile et peint à la main avec des motifs géométriques complexes, ce tagine permet une cuisson lente et savoureuse des plats marocains traditionnels. Son couvercle conique est conçu pour faire retomber la condensation dans la base, créant ainsi des plats moelleux et pleins de saveurs.',
    price: 680,
    images: [
      'https://images.pexels.com/photos/17644052/pexels-photo-17644052/free-photo-of-le-maroc-authentique.jpeg?auto=compress&cs=tinysrgb&w=600g',
      'https://images.pexels.com/photos/25489677/pexels-photo-25489677/free-photo-of-art-boutique-magasin-fait-main.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    category: 'Poterie',
    categoryId: 'poterie',
    artisanId: 'artisan-1',
    materials: ['Clay', 'Natural pigments', 'Food-safe glaze'],
    dimensions: '30cm diameter x 25cm height'
  },
];

export const popularProducts = products.slice(0, 4);

export const featuredArtisans = artisans.slice(0, 3);

export const conversations = [
  {
    id: 'artisan-1',
    name: 'Karim Berrada',
    avatar: 'https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg',
    isOnline: true,
    lastMessage: {
      text: 'Oui, le bol est aussi disponible en bleu et en vert.',
      timestamp: '2025-07-01T14:32:00Z',
    },
    unreadCount: 2,
    read: false,
    messages: [
      {
        id: '1',
        sender: 'other',
        text: 'Bonjour ! Merci pour votre intérêt pour mes produits en céramique.',
        timestamp: '2025-07-01T10:12:00Z',
      },
      {
        id: '2',
        sender: 'user',
        text: 'Salut Karim ! J"adore tes bols en céramique. As-tu le grand format en stock ?',
        timestamp: '2025-07-01T10:15:00Z',
      },
      {
        id: '3',
        sender: 'other',
        text: 'Oui, j"ai actuellement 3 grands bols en céramique disponibles. Voulez-vous voir quelques photos ?',
        timestamp: '2025-07-01T10:20:00Z',
      },
      {
        id: '4',
        sender: 'user',
        text: 'Ce serait super ! Je me demande aussi s"ils sont disponibles en différentes couleurs ?',
        timestamp: '2025-07-01T14:30:00Z',
      },
      {
        id: '5',
        sender: 'other',
        text: 'Oui, le bol est également disponible en bleu et en vert.',
        timestamp: '2025-07-01T14:32:00Z',
      },
    ],
  },
  {
    id: 'artisan-2',
    name: 'Fatima Zahra',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    isOnline: false,
    lastMessage: {
      text: 'Je peux créer une taille personnalisée pour vous. Quelles dimensions souhaitez-vous ?',
      timestamp: '2025-06-30T16:45:00Z',
    },
    unreadCount: 0,
    read: true,
    messages: [
      {
        id: '1',
        sender: 'user',
        text: 'Bonjour Fatima, je suis intéressée par vos tapis tissés à la main. Est-ce que vous expédiez à l"international ?',
        timestamp: '2025-06-30T15:22:00Z',
      },
      {
        id: '2',
        sender: 'other',
        text: 'Bonjour ! Oui, j"expédie à l"international. Les frais de livraison dépendent de la destination et de la taille du tapis.',
        timestamp: '2025-06-30T15:30:00Z',
      },
      {
        id: '3',
        sender: 'user',
        text: 'Super ! Je cherche un tapis pour mon salon, mais j"ai besoin d"une taille spécifique. Est-ce que vous faites des tailles personnalisées ?',
        timestamp: '2025-06-30T16:40:00Z',
      },
      {
        id: '4',
        sender: 'other',
        text: 'Je peux créer une taille personnalisée pour vous. Quelles dimensions souhaitez-vous ?',
        timestamp: '2025-06-30T16:45:00Z',
      },
    ],
  },
  {
    id: 'artisan-3',
    name: 'Omar Alaoui',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    isOnline: true,
    lastMessage: {
      text: 'Votre commande a été expédiée ! Vous devriez la recevoir sous 5 à 7 jours ouvrables.',
      timestamp: '2025-06-28T09:15:00Z',
    },
    unreadCount: 1,
    read: false,
    messages: [
      {
        id: '1',
        sender: 'other',
        text: 'Merci pour votre commande de la boîte en bois de thuya !',
        timestamp: '2025-06-25T14:20:00Z',
      },
      {
        id: '2',
        sender: 'user',
        text: 'Je vous en prie ! J"ai  hâte de le recevoir. Quand pensez-vous qu"il sera expédié ?',
        timestamp: '2025-06-25T14:30:00Z',
      },
      {
        id: '3',
        sender: 'other',
        text: 'Je vais le terminer d"ici les deux prochains jours, et il devrait être expédié d "ici vendredi.',
        timestamp: '2025-06-25T14:35:00Z',
      },
      {
        id: '4',
        sender: 'user',
        text: 'Parfait ! Merci de me prévenir lorsque la commande sera expédiée.',
        timestamp: '2025-06-25T14:40:00Z',
      },
      {
        id: '5',
        sender: 'other',
        text: 'Votre commande a été expédiée ! Vous devriez la recevoir sous 5 à 7 jours ouvrables.',
        timestamp:'2025-06-25T15:45:00Z',
      },
    ],
  },
];