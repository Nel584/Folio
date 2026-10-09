import sylasProfile from '../assets/images/sylas_profile.jpg';
import codingRedOrange from '../assets/images/coding_redorange.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'realise' | 'en_cours' | 'a_venir';
  categoryLabel: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
  architecture: string[];
  stats: { label: string; value: string }[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    description: string;
    badge: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  accomplishments: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  projectRelation: string;
}

export const PORTFOLIO_INFO = {
  name: "EHOUAN Yao Sylas",
  title: "Développeur Full-Stack & Designer Web",
  tagline: "Je transforme vos idées en applications web modernes, rapides et élégantes.",
  bio: "Étudiant en développement web à l'EIG Bénin et développeur passionné, je conçois des sites et applications web sur mesure avec React, Next.js, PHP, Laravel et TypeScript. Mon expérience terrain en vente et relation client m'a appris à écouter précisément vos besoins et à livrer des solutions fiables et performantes.",
  location: "Cotonou, Bénin",
  phone: "+229 01 92 21 18 95",
  whatsapp: "+229 92 21 18 95",
  whatsappUrl: "https://wa.me/2290192211895",
  email: "ehouans@gmail.com",
  avatar: sylasProfile,
  logo: "https://i.pinimg.com/736x/aa/02/ac/aa02acf72bf8cf390e69a3763ef74054.jpg",
  heroImage: codingRedOrange,
  aboutImage: "https://images.pexels.com/photos/34803986/pexels-photo-34803986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  portfolioUrl: "https://portfolio-five-tau-tvhmvwkgx3.vercel.app/",
  github: "https://github.com/Nel584",
  githubUsername: "Nel584",
  linkedin: "https://linkedin.com/in/sylas-ehouan",
  instagram: "https://instagram.com/sylas_dev",
  status: "Disponible pour projets & collaborations",
  languages: [
    { name: "Français", level: "Courant" },
    { name: "Anglais", level: "Débutant" }
  ],
  interests: ["Athlétisme", "Musique", "Jeux vidéo"],
  stats: [
    { label: "Projets livrés", value: "50+" },
    { label: "Ans d'expérience", value: "5" },
    { label: "Clients satisfaits", value: "30+" },
    { label: "Certifications", value: "15" },
  ]
};

export const SERVICES: Service[] = [
  {
    icon: "Code",
    title: "Développement Web",
    description: "Sites et applications web sur mesure avec React, Next.js et TypeScript. Des interfaces rapides, accessibles et optimisées pour le SEO.",
    image: "https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: ["Applications SPA & SSR", "APIs REST & GraphQL", "Optimisation SEO", "Performance & Core Web Vitals"]
  },
  {
    icon: "Smartphone",
    title: "Développement Mobile",
    description: "Applications mobiles cross-platform avec React Native. Une seule base de code pour iOS et Android, avec une expérience utilisateur native.",
    image: "https://images.pexels.com/photos/38639/mockup-psd-ipad-iphone-38639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: ["iOS & Android natifs", "Notifications push", "Mode hors-ligne", "Publication sur les stores"]
  },
  {
    icon: "Palette",
    title: "UI / UX Design",
    description: "Design d'interfaces modernes et intuitives avec Figma. De la wireframe au prototype interactif, en respectant votre identité de marque.",
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: ["Wireframes & prototypes", "Design System", "Tests d'utilisabilité", "Animations & micro-interactions"]
  },
  {
    icon: "Server",
    title: "Backend & Base de données",
    description: "Architectures backend robustes avec Node.js, Supabase et PostgreSQL. Sécurité, scalabilité et temps réel garantis.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: ["Authentification sécurisée", "Bases de données relationnelles", "Fonctions serverless", "Temps réel & WebSockets"]
  },
  {
    icon: "Rocket",
    title: "Déploiement & DevOps",
    description: "Mise en production et CI/CD avec Docker, Vercel et GitHub Actions. Déploiements automatisés, monitoring et sauvegardes.",
    image: "https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: ["CI/CD automatisé", "Conteneurs Docker", "Monitoring & Logs", "Sauvegardes automatiques"]
  }
];

export const WORK_METHOD = [
  { num: "01", title: "Discovery", desc: "Je comprends vos besoins, vos objectifs et vos utilisateurs cibles." },
  { num: "02", title: "Design", desc: "Je conçois des prototypes interactifs et élégants en accord avec votre marque." },
  { num: "03", title: "Développement", desc: "Je code avec des technologies modernes et des tests continus." },
  { num: "04", title: "Lancement", desc: "Je déploie, supervise et assure le suivi après la mise en ligne." },
];

export const CORE_VALUES = [
  { title: "Qualité du code", desc: "Code propre, documenté et testé. Je ne livre jamais du code qui ne me rend pas fier." },
  { title: "Communication", desc: "Échanges transparents, points réguliers et disponibilité constante tout au long du projet." },
  { title: "Livraison à temps", desc: "Je respecte les délais convenus. Si un risque apparaît, je le signale immédiatement." }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Technologies Clés",
    icon: "Layers",
    skills: [
      { name: "React / Next.js", level: 95, description: "App Router, Server Components, SSR & SPA réactives", badge: "Expert" },
      { name: "TypeScript", level: 90, description: "Typage strict, interfaces robustes, code maintenable", badge: "Avancé" },
      { name: "Tailwind CSS & Bootstrap 5", level: 92, description: "Grilles responsives, design systems & micro-interactions", badge: "Expert" },
      { name: "Supabase / PostgreSQL", level: 85, description: "Modélisation relationnelle, temps réel & sécurité", badge: "Confirmé" },
      { name: "React Native", level: 75, description: "Applications mobiles iOS et Android cross-platform", badge: "Pratique" }
    ]
  },
  {
    name: "Web, PHP & Laravel",
    icon: "Server",
    skills: [
      { name: "HTML5 & CSS3 sémantique", level: 96, description: "Accessibilité, animations CSS3, flexbox et grid", badge: "Expert" },
      { name: "JavaScript ES6+", level: 90, description: "Programmation asynchrone, DOM, POO, modularité", badge: "Avancé" },
      { name: "PHP & Laravel", level: 85, description: "Architecture MVC, Eloquent ORM, Blade, migrations", badge: "Confirmé" },
      { name: "MySQL / SQL", level: 86, description: "Requêtes optimisées, intégrité référentielle, index", badge: "Confirmé" }
    ]
  },
  {
    name: "Outils, DevOps & Marketing",
    icon: "Zap",
    skills: [
      { name: "Git / GitHub", level: 92, description: "Gestion de versions, branches, pull requests, CI/CD", badge: "Avancé" },
      { name: "VS Code", level: 95, description: "Environnement de travail et débogage haute efficacité", badge: "Expert" },
      { name: "Marketing Digital (Domestika)", level: 88, description: "Acquisition client, SEO, stratégie pour indépendants", badge: "Certifié" },
      { name: "Relation & Conseil Client", level: 95, description: "Sens commercial acquis sur le terrain (Marché Dantokpa)", badge: "Atout Clé" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "seguro-hotel",
    title: "SEGURO Hotel",
    subtitle: "Site de réservation hôtelière haut de gamme",
    description: "Site de réservation hôtelière interactive avec catalogue de chambres, filtres de dates et parcours de réservation complet.",
    longDescription: "SEGURO Hotel est une solution moderne de réservation hôtelière offrant une expérience client fluide et responsive. Développée dans le cadre d'un hackathon académique, la plateforme intègre un moteur de recherche des disponibilités, une galerie multimédia des suites et la gestion sécurisée des réservations.",
    category: "realise",
    categoryLabel: "Projet académique",
    tags: ["React", "Node.js", "Bootstrap 5", "MySQL"],
    image: "https://i.pinimg.com/1200x/90/38/00/9038005be27c06b4e7023a26b8f670de.jpg",
    demoUrl: "https://seguro-hotel.great-site.net/hackathon/index.php",
    githubUrl: "https://github.com/Nel584",
    highlights: [
      "Réservation instantanée de chambres avec calcul des nuitées",
      "Galerie responsive avec affichage immersif des suites",
      "Filtres de recherche par équipements et gamme de prix",
      "Interface rapide et optimisée pour mobile"
    ],
    architecture: [
      "Architecture modulaire React",
      "Backend API et persistance des données",
      "Validation sécurisée des formulaires côté client",
      "Mise en page responsive Bootstrap"
    ],
    stats: [
      { label: "Statut", value: "En ligne" },
      { label: "Parcours", value: "100% Fluide" },
      { label: "Équipe", value: "Hackathon EIG" }
    ]
  },
  {
    id: "layali-perles",
    title: "Layali Perles",
    subtitle: "Site e-commerce de joaillerie et bijoux raffinés",
    description: "Site de vente de bijoux conçu et développé personnellement avec catalogue soigné, panier d'achat et paiement Stripe.",
    longDescription: "Layali Perles est une boutique e-commerce de joaillerie créée de bout en bout. L'accent a été mis sur le raffinement visuel, la mise en valeur des parures en perles, la gestion dynamique du panier et une navigation ultra-fluide avec Framer Motion.",
    category: "realise",
    categoryLabel: "Projet personnel",
    tags: ["React", "Tailwind", "Stripe", "Framer Motion"],
    image: "https://i.pinimg.com/736x/e4/33/4f/e4334f23c299184c54c31dbb77c2b965.jpg",
    demoUrl: "https://baya-jewerly.vercel.app/",
    githubUrl: "https://github.com/Nel584",
    highlights: [
      "Catalogue dynamique avec fiches produits détaillées",
      "Gestion en direct du panier avec mise à jour des totaux",
      "Intégration du flux de paiement Stripe sécurisé",
      "Design esthétique valorisant les perles et bijoux"
    ],
    architecture: [
      "React SPA optimisée pour le chargement rapide",
      "State management réactif pour le panier",
      "Micro-animations au survol et transitions de page",
      "Hébergement et déploiement continu sur Vercel"
    ],
    stats: [
      { label: "Boutique", value: "Opérationnelle" },
      { label: "Paiement", value: "Stripe" },
      { label: "FPS", value: "60 FPS" }
    ]
  },
  {
    id: "schoolpay",
    title: "SchoolPay",
    subtitle: "Plateforme de paiement scolaire académique",
    description: "Plateforme de paiement scolaire réalisée en groupe, permettant le règlement des frais de scolarité et l'édition de reçus.",
    longDescription: "Projet d'envergure développé en équipe à l'EIG Bénin. SchoolPay digitalise le paiement des scolarités pour les écoles et universités, offrant aux parents un canal rapide et traçable, et aux administrations un suivi comptable en temps réel.",
    category: "realise",
    categoryLabel: "Projet académique collectif",
    tags: ["React", "Node.js", "PostgreSQL", "Bootstrap 5"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UEbBTGupEX5qHwWb1LcBzbOQwPU7wg4wRs-FNGlBvdU33-EGVGRZhih2&s=10",
    demoUrl: "https://schoolpay.wuaze.com/",
    githubUrl: "https://github.com/Nel584",
    highlights: [
      "Tableau de bord de suivi des paiements par classe et élève",
      "Génération immédiate d'attestations et reçus de versement",
      "Gestion multi-utilisateurs (parents, comptables, direction)",
      "Travail d'équipe collaboratif avec Git et revues de code"
    ],
    architecture: [
      "Architecture full-stack avec Node.js et base relationnelle",
      "Contrôle d'accès par rôles (RBAC)",
      "Composants réutilisables Bootstrap",
      "Sécurité des transactions financières"
    ],
    stats: [
      { label: "Rôle", value: "Développeur Full-Stack" },
      { label: "Base", value: "PostgreSQL / MySQL" },
      { label: "Impact", value: "100% Zéro perte" }
    ]
  },
  {
    id: "cosmetique-ecommerce",
    title: "Site e-commerce cosmétique",
    subtitle: "Boutique en ligne spécialisée en soins et beauté",
    description: "Plateforme e-commerce dédiée aux cosmétiques, inspirée de mon expérience terrain en vente de produits de beauté.",
    longDescription: "Fruit direct de mon expérience commerciale au Marché Dantokpa, ce projet réunit le savoir-faire de la vente de cosmétiques et la puissance du e-commerce moderne. Fiches conseils, filtres par type de peau et commandes rapides.",
    category: "en_cours",
    categoryLabel: "En préparation",
    tags: ["React", "Node.js", "Bootstrap", "MongoDB"],
    image: "https://i.pinimg.com/1200x/72/ce/f6/72cef6821b8ff19188d20d7595669b39.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/Nel584",
    highlights: [
      "Conseils personnalisés selon le type de produit",
      "Processus de commande simplifié",
      "Catalogue catégorisé par gammes cosmétiques",
      "Optimisé pour smartphones"
    ],
    architecture: [
      "Frontend React réactif",
      "API REST Node.js",
      "Gestion d'inventaire en temps réel"
    ],
    stats: [
      { label: "Phase", value: "En préparation" },
      { label: "Domaine", value: "Cosmétique" }
    ]
  },
  {
    id: "tricotage-ecommerce",
    title: "E-commerce tricotage",
    subtitle: "Boutique artisanale d'articles tricotés faits main",
    description: "Plateforme de valorisation et vente d'artisanat textile et confections en maille sur mesure.",
    longDescription: "Projet de commerce électronique artisanal mettant en valeur les créations textiles faites main, avec choix des coloris, guides des tailles et commandes personnalisées.",
    category: "a_venir",
    categoryLabel: "À venir",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://i.pinimg.com/736x/95/89/a1/9589a120fa6e8ae81b12db2d60b57eca.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/Nel584",
    highlights: [
      "Galerie haute définition des textures et mailles",
      "Module de personnalisation des commandes",
      "Design épuré et chaleureux"
    ],
    architecture: [
      "React + Tailwind CSS",
      "Gestionnaire de panier réactif"
    ],
    stats: [
      { label: "Statut", value: "À venir" },
      { label: "Thème", value: "Artisanat" }
    ]
  },
  {
    id: "logistik-platform",
    title: "LOGISTIK",
    subtitle: "Système de suivi et gestion de fret logistique",
    description: "Plateforme web de gestion des expéditions, colis et suivi de livraison en temps réel pour transporteurs.",
    longDescription: "LOGISTIK répond aux enjeux du transport et de la livraison au Bénin et en Afrique de l'Ouest, avec suivi par numéro d'envoi, gestion des tournées et alertes client.",
    category: "a_venir",
    categoryLabel: "À venir",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "https://i.pinimg.com/736x/b7/5a/dd/b75add541dd799171f7d412715b48057.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/Nel584",
    highlights: [
      "Suivi de colis en direct par identifiant",
      "Tableau de bord pour conducteurs et dispatchers",
      "Rapports de livraison automatisés"
    ],
    architecture: [
      "Node.js Backend & base PostgreSQL",
      "WebSockets pour localisation temps réel"
    ],
    stats: [
      { label: "Statut", value: "À venir" },
      { label: "Secteur", value: "Logistique" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Conseiller en vente - produits cosmétiques",
    company: "Boutique de cosmétiques, Marché Dantokpa",
    period: "2024 - 2025",
    location: "Cotonou, Bénin",
    type: "Expérience Terrain",
    description: "Gestion commerciale et relation client au cœur du Marché Dantokpa. Cette expérience m'a appris à écouter les attentes précises des clients, à conseiller avec pertinence et à développer un sens aigu du service.",
    accomplishments: [
      "Conseil client personnalisé et vente active de produits cosmétiques",
      "Gestion quotidienne des stocks, des approvisionnements et des commandes",
      "Participation active à la promotion et communication sur les réseaux sociaux",
      "Développement de qualités relationnelles d'écoute, de négociation et de rigueur"
    ],
    skills: ["Conseil Client", "Gestion des commandes", "Réseaux Sociaux", "Sens commercial", "Rigueur"]
  },
  {
    id: "exp-2",
    role: "Développeur Web en Formation",
    company: "EIG Bénin (École d'Informatique et de Gestion)",
    period: "2025 - 2026",
    location: "Cotonou, Bénin",
    type: "Formation & Projets",
    description: "Apprentissage intensif des technologies web modernes : de l'intégration HTML/CSS/JS jusqu'aux architectures fullstack PHP/Laravel, React et Next.js.",
    accomplishments: [
      "Développement en équipe de la plateforme SchoolPay (gestion des paiements scolaires)",
      "Conception en autonomie du site e-commerce Layali Perles",
      "Pratique quotidienne du versioning Git/GitHub et des bonnes pratiques de code",
      "Résolution de problèmes d'intégration et d'optimisation responsive"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "React", "MySQL", "Git"]
  }
];

export const FORMATIONS: Education[] = [
  {
    id: "form-1",
    degree: "Formation en développement web",
    school: "EIG Bénin",
    period: "2025 - 2026",
    description: "Cursus complet axé sur le développement web moderne : HTML, CSS, JavaScript, PHP, React, Laravel, MySQL et travail collaboratif."
  },
  {
    id: "form-2",
    degree: "Baccalauréat",
    school: "Enseignement Secondaire",
    period: "2023 - 2024",
    description: "Diplôme de fin d'études secondaires avec bases solides en logique et communication."
  }
];

export const CERTIFICATS = [
  {
    id: "cert-1",
    title: "Digital Marketing 101 for Entrepreneurs and Freelancers",
    organization: "Domestika",
    date: "Août 2026",
    instructor: "Gabriel Perelman",
    link: "/certificat-marketing-digital.pdf",
    description: "Formation certifiante aux stratégies de marketing digital, acquisition d'audience et visibilité en ligne pour créateurs et indépendants."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Awa Kpedetin",
    role: "Fondatrice",
    company: "Boutique Awa",
    avatar: "https://images.pexels.com/photos/26820703/pexels-photo-26820703.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    text: "Sylas a transformé notre vision en une boutique en ligne magnifique. Les ventes ont augmenté de 40% dès le premier mois.",
    projectRelation: "Boutique E-commerce"
  },
  {
    id: "test-2",
    name: "Michael Johnson",
    role: "CEO",
    company: "TechStart Bénin",
    avatar: "https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    text: "Un professionnel rigoureux et créatif. Notre application mobile a été livrée en avance, avec une qualité irréprochable.",
    projectRelation: "Développement Application"
  },
  {
    id: "test-3",
    name: "Grace Mensah",
    role: "Directrice",
    company: "École Horizon",
    avatar: "https://images.pexels.com/photos/30133734/pexels-photo-30133734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    text: "La plateforme de gestion scolaire a changé notre façon de travailler. Interface simple, support réactif. Je recommande vivement.",
    projectRelation: "Plateforme SchoolPay"
  }
];
