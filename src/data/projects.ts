export interface Project {
    id: string;
    title: string;
    category: 'Mobile' | 'Web' | 'SIG' | 'Fullstack';
    status: 'Terminé' | 'En cours' | 'Idée';
    description: string;
    // Case Study fields
    problem?: string;
    constraints?: string[];
    longDescription?: string;
    architectureDecisions?: { decision: string; rationale: string }[];
    technicalRequirements?: string[];
    tradeoffs?: { choice: string; gained: string; sacrificed: string }[];
    businessImpact?: string;
    technologies: string[];
    image?: string;
    link?: string;
    github?: string;
    highlights: string[];
}

export const projects: Project[] = [
    {
        id: '27',
        title: 'CouturioShop — Marketplace Mode Africaine',
        category: 'Fullstack',
        status: 'Terminé',
        description: 'Marketplace web & mobile mettant en relation clients, tailleurs certifiés et fournisseurs de tissus africains. Intègre un scanner corporel 3D par IA et un système d\'essayage virtuel (VTON).',
        problem: 'Les tailleurs africains talentueux n\'ont pas de visibilité internationale et les clients peinent à accéder à la mode sur-mesure sans friction. Comment connecter ces acteurs à l\'échelle panafricaine et internationale via la technologie ?',
        constraints: [
            'Projet en équipe de 3 développeurs — coordination et partage du code',
            'Fonctionnalités IA complexes (scanner 3D, essayage virtuel)',
            'Multi-profils : clients, tailleurs, fournisseurs B2B, revendeurs',
            'Présence dans 5 pays avec des réalités logistiques différentes',
        ],
        longDescription: 'Plateforme fullstack web + mobile développée en équipe de 3, avec Moïse en tant que chef de projet. CouturioShop connecte la mode africaine à la technologie : scanner IA 3D pour des mesures précises en 10 secondes (48 points de données, précision 99.8%), essayage virtuel VTON, marketplace B2B pour revendeurs et fournisseurs de tissus, et vitrine internationale pour 16+ artisans certifiés.',
        architectureDecisions: [
            { decision: 'Architecture multi-profils avec rôles distincts', rationale: 'Clients, tailleurs, fournisseurs et revendeurs ont des parcours utilisateur radicalement différents — un système de rôles granulaire est indispensable.' },
            { decision: 'Intégration IA pour le scanner 3D et VTON', rationale: 'La valeur différenciante de la plateforme repose sur l\'expérience sans friction : mesures automatiques et visualisation des tissus avant commande.' },
        ],
        technicalRequirements: [
            'Scanner corporel 3D par IA — 48 points de mesure en 10 secondes',
            'Essayage virtuel (VTON) pour la visualisation des tissus',
            'Marketplace B2B : gestion stocks, facturation, commandes revendeurs',
            'Application mobile + plateforme web unifiées',
        ],
        tradeoffs: [
            { choice: 'Intégration IA tierce vs développement custom', gained: 'Time-to-market rapide, précision éprouvée du scanner 3D', sacrificed: 'Dépendance à un fournisseur tiers, coût variable selon le volume' },
        ],
        businessImpact: 'Plateforme présente dans 5 pays, 10+ fournisseurs de tissus, 200+ références produits, 16+ artisans certifiés, note 4.9/5 — valorisation internationale de la mode africaine par la technologie.',
        technologies: ['Flutter', 'Laravel', 'MySQL', 'REST API', 'IA 3D Scanner', 'VTON'],
        link: 'https://www.couturioshop.com/',
        highlights: [
            'Chef de projet — équipe de 3 développeurs',
            'Scanner IA 3D : mesures corporelles en 10 secondes (précision 99.8%)',
            'Essayage virtuel (VTON) — visualisation des tissus avant commande',
            'Marketplace multi-profils : clients, tailleurs, fournisseurs, revendeurs B2B',
            '5 pays · 16+ artisans certifiés · Note 4.9/5',
        ],
    },
    {
        id: '26',
        title: 'Tinitz ERP',
        category: 'Fullstack',
        status: 'Terminé',
        description: 'Système ERP interne développé pour Tinitz — plateforme de gestion multi-modules couvrant les opérations, la facturation et le suivi des activités de l\'entreprise.',
        longDescription: 'Application web fullstack servant de colonne vertébrale opérationnelle pour Tinitz. Le système centralise la gestion des clients, des projets, de la facturation et des ressources internes dans une interface unifiée et sécurisée.',
        technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
        link: 'https://back.tinitz.com/login',
        highlights: [
            'Gestion multi-modules : clients, projets, facturation',
            'Interface sécurisée avec authentification et rôles',
            'Tableau de bord centralisé pour le suivi des opérations',
        ],
    },
    {
        id: '24',
        title: 'Site Vitrine ARIC Solutions',
        category: 'Web',
        status: 'Terminé',
        description: 'Site web corporate pour ARIC Solutions, leader multitechnique en génie climatique, réfrigération industrielle et efficacité énergétique en Afrique de l\'Ouest.',
        longDescription: 'Développement du site vitrine de la filiale du Groupe Conergies, présente depuis 1996 en Afrique de l\'Ouest. Le site présente les services de génie climatique, les solutions solaires photovoltaïques et l\'assistance technique 24h/24.',
        technologies: ['Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript'],
        link: 'https://dev.aricsolutions.com/',
        highlights: [
            'Site corporate multiservice avec catalogue de prestations',
            'Interface responsive adaptée à la clientèle B2B',
            'Intégration formulaires de contact et demandes d\'intervention',
        ],
    },
    {
        id: '25',
        title: 'Site Vitrine Elton Group',
        category: 'Web',
        status: 'Terminé',
        description: 'Site web pour Elton Group, leader de la distribution pétrolière au Sénégal, avec présentation du réseau de stations-service et des solutions digitales de mobilité.',
        longDescription: 'Développement de la plateforme web d\'Elton Group, spécialisé dans la distribution de carburants et lubrifiants en Afrique de l\'Ouest. Mise en valeur du réseau de stations modernisées, du programme de fidélité et des services associés (café, lavage, entretien).',
        technologies: ['Laravel', 'Tailwind CSS', 'MySQL', 'JavaScript'],
        link: 'https://dev.elton.ci/',
        highlights: [
            'Site institutionnel avec localisation du réseau de stations',
            'Présentation du programme de fidélité clients',
            'Design moderne adapté au marché de l\'énergie en Afrique de l\'Ouest',
        ],
    },
    {
        id: '1',
        title: 'Application Mobile de Sondage Électoral',
        category: 'Mobile',
        status: 'Terminé',
        description: 'Solution Flutter haute performance pour la collecte et l\'analyse de données électorales en temps réel, avec synchronisation offline-first pour les zones à faible connectivité.',
        problem: 'Comment collecter des données électorales fiables dans des zones avec une connectivité Internet instable ou inexistante, tout en garantissant l\'intégrité des données et la synchronisation multi-agents ?',
        constraints: [
            'Connexion Internet intermittente ou absente sur le terrain',
            'Milliers d\'agents terrain simultanés',
            'Données sensibles nécessitant un audit trail complet',
            'Délais très courts entre collecte et résultats consolidés',
        ],
        longDescription: 'Architecture offline-first avec BLoC pattern pour la gestion d\'état réactive. Les données sont stockées localement en SQLite avec un mécanisme de synchronisation différentielle dès que la connexion est rétablie. Firebase est utilisé comme backend temps réel pour la consolidation.',
        architectureDecisions: [
            { decision: 'BLoC pattern pour la gestion d\'état', rationale: 'Séparation claire de la logique métier de l\'UI, testabilité maximale des flux de données.' },
            { decision: 'SQLite local + Firebase sync', rationale: 'Offline-first par défaut. La sync différentielle minimise la bande passante lors de la reconnexion.' },
            { decision: 'Cryptographie locale des données', rationale: 'Intégrité des données sensibles même si le device est compromis.' },
        ],
        technicalRequirements: [
            'Architecture réactive avec gestion d\'état avancée (BLoC/Provider)',
            'Synchronisation offline-first robuste avec résolution de conflits',
            'Base de données SQLite locale avec chiffrement AES-256',
            'Tableaux de bord analytiques en temps réel via Firebase',
        ],
        tradeoffs: [
            { choice: 'SQLite local vs Hive', gained: 'Requêtes SQL complexes pour l\'agrégation terrain', sacrificed: 'Performance brute de lecture (Hive est plus rapide pour K/V)' },
            { choice: 'BLoC vs architecture ad-hoc', gained: 'Testabilité et séparation des concerns claire, flux de données prévisibles', sacrificed: 'Verbosité plus importante qu\'une solution sans structure' },
        ],
        businessImpact: 'Collecte de données fiable pour 5000+ agents terrain, avec synchronisation automatique à la reconnexion et résultats consolidés en moins de 2h.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'BLoC'],
        highlights: [
            'Architecture réactive avec gestion d\'état BLoC',
            'Synchronisation offline-first robuste pour zones reculées',
            'Tableaux de bord analytiques complexes intégrés',
        ]
    },
    {
        id: '9',
        title: 'Ecosystem Tailleur Boutique',
        category: 'Fullstack',
        status: 'Terminé',
        description: 'Suite logicielle complète pour la gestion de boutiques de couture : API REST Laravel + application Flutter mobile pour le suivi de production en temps réel.',
        problem: 'Les boutiques de couture gèrent leur production manuellement (cahiers, appels). Pas de traçabilité des commandes, ni de visibilité temps réel sur l\'avancement des confections pour les clients.',
        constraints: [
            'Budget limité : stack minimal mais robuste',
            'Utilisateurs non-techniques (artisans)',
            'Connectivité mobile intermittente',
            'Multi-boutiques avec données isolées par tenant',
        ],
        longDescription: 'Architecture API-First : Laravel expose une API REST versionnée consommée par l\'app Flutter. Chaque boutique est isolée par tenant_id (Row-Level Security). Les notifications clients sont envoyées via Firebase Cloud Messaging dès qu\'une étape de confection est validée.',
        architectureDecisions: [
            { decision: 'API REST + app mobile découplée', rationale: 'Extensibilité : une future interface web peut consommer la même API sans refactoring.' },
            { decision: 'Authentification Sanctum (token-based)', rationale: 'Stateless, scalable et compatible mobile. Plus léger que Passport pour ce cas d\'usage.' },
        ],
        technicalRequirements: [
            'API REST robuste avec authentification Sanctum',
            'Application mobile Flutter pour le suivi en temps réel',
            'Gestion dynamique des étapes de confection',
            'Notifications push clients via FCM',
        ],
        tradeoffs: [
            { choice: 'Sanctum vs Passport', gained: 'Simplicité d\'implémentation et légèreté', sacrificed: 'OAuth2 complet (non requis pour ce use case)' },
        ],
        businessImpact: 'Réduction de 70% des appels clients pour suivi de commande. Visibilité temps réel sur la production pour le gérant.',
        technologies: ['Laravel', 'Flutter', 'MySQL', 'REST API', 'Firebase FCM'],
        highlights: [
            'API REST versionnée avec authentification Sanctum',
            'App Flutter temps réel avec suivi de production',
            'Notifications push automatiques aux clients',
        ]
    },
    {
        id: '2',
        title: 'Système SIG pour la Filière Cacao',
        category: 'SIG',
        status: 'Terminé',
        description: 'Plateforme géospatiale de suivi et gestion cartographique des plantations de cacao, avec calcul automatique de superficies et rendements par SIG.',
        problem: 'L\'organisation des producteurs de cacao n\'avait aucune visibilité sur la cartographie de ses plantations : superficies imprécises, impossibilité de planifier les traitements phytosanitaires, données dispersées.',
        constraints: [
            '10 000+ parcelles à gérer avec précision métrique',
            'Données géographiques hétérogènes (GPS terrain, shapefiles, DXF)',
            'Équipe d\'agents terrain avec tablettes Android',
            'Performances : rendu cartographique de millions de points',
        ],
        longDescription: 'Architecture hybride : SuperMap pour le moteur cartographique côté client (rendu WebGL des tuiles vectorielles), Laravel + PostGIS pour le stockage et les calculs spatiaux serveur. Les requêtes ST_Area, ST_Intersects et ST_Buffer sont exécutées côté DB pour la performance.',
        architectureDecisions: [
            { decision: 'PostGIS pour les calculs spatiaux', rationale: 'Les fonctions spatiales DB-side (ST_Area, ST_Intersects) sont 10x plus rapides qu\'un calcul applicatif.' },
            { decision: 'SuperMap pour le rendu client', rationale: 'Seule solution compatible avec les données SIG locales (format Workspaces SuperMap) exigée par le client.' },
            { decision: 'Cache des tiles vectorielles', rationale: 'Réduction drastique de la charge serveur sur les zooms répétés.' },
        ],
        technicalRequirements: [
            'Moteur cartographique SuperMap avec rendu WebGL haute performance',
            'Backend Laravel + PostGIS pour requêtes spatiales complexes',
            'Import de données géographiques multi-format (Shapefile, GeoJSON, DXF)',
            'Calculs automatiques de superficie et rendement par zone',
        ],
        tradeoffs: [
            { choice: 'SuperMap vs Leaflet/MapLibre', gained: 'Compatibilité native avec les formats SIG propriétaires client', sacrificed: 'Open-source et communauté plus large de Leaflet/MapLibre' },
            { choice: 'Calculs PostGIS vs applicatif', gained: 'Performance et précision mathématique des calculs spatiaux', sacrificed: 'Couplage DB plus fort, migrations plus complexes' },
        ],
        businessImpact: 'Précision des superficies améliorée de 85%. Planification des traitements phytosanitaires rendue possible par zone géographique. Réduction de 3h à 10min pour la génération de rapports de production.',
        technologies: ['SuperMap', 'Laravel', 'PostgreSQL/PostGIS', 'JavaScript', 'Docker'],
        highlights: [
            'Visualisation de données massives sur cartes interactives (WebGL)',
            'Calcul automatique de superficies et rendements par SIG (PostGIS)',
            'Backend Laravel optimisé pour les requêtes spatiales complexes',
        ]
    },
    {
        id: '3',
        title: 'CRM Expert pour Commerciaux',
        category: 'Fullstack',
        status: 'Terminé',
        description: 'Outil de gestion de la relation client sur-mesure optimisant le cycle de vente avec pipeline dynamique, reporting automatisé et contrôle d\'accès granulaire.',
        problem: 'L\'équipe commerciale utilisait des fichiers Excel partagés pour gérer les prospects. Pas de pipeline de vente, pas de reporting temps réel, et des conflits de données constants entre commerciaux.',
        constraints: [
            'Remplacement d\'un workflow Excel existant (résistance au changement)',
            'Multi-profils : directeur commercial, commercial senior, junior',
            'Intégration avec l\'existant (exports Excel conservés)',
            'Performance : dashboard temps réel pour le management',
        ],
        longDescription: 'SPA React + API Laravel. L\'architecture RBAC (Role-Based Access Control) est implémentée via des Policies Laravel. Le pipeline de vente utilise un système Kanban côté front avec drag-and-drop. Les rapports sont générés asynchroniquement via Laravel Jobs pour ne pas bloquer l\'interface.',
        architectureDecisions: [
            { decision: 'RBAC via Laravel Policies', rationale: 'Granularité fine sur chaque action (view, create, update, delete) par ressource et par rôle.' },
            { decision: 'Jobs asynchrones pour les rapports', rationale: 'Les exports lourds ne bloquent pas l\'UI. Notification par email à la fin de génération.' },
        ],
        technicalRequirements: [
            'Pipeline de vente Kanban avec glisser-déposer',
            'RBAC granulaire avec Laravel Policies',
            'Reporting asynchrone via Laravel Jobs + Queues',
            'Export Excel/PDF des rapports commerciaux',
        ],
        tradeoffs: [
            { choice: 'SPA React vs Blade classique', gained: 'UX temps réel sans rechargement de page, pipeline Kanban fluide', sacrificed: 'Complexité front supplémentaire, deux codebases à maintenir' },
        ],
        businessImpact: 'Adoption complète de l\'équipe en 2 semaines. Réduction de 40% du temps de reporting hebdomadaire. Visibilité temps réel sur le pipeline pour la direction.',
        technologies: ['Laravel', 'React.js', 'MySQL', 'Tailwind CSS', 'Redis Queues'],
        highlights: [
            'Pipeline Kanban avec glisser-déposer temps réel',
            'RBAC granulaire (Policies Laravel)',
            'Reporting asynchrone avec notifications par email',
        ]
    },
    {
        id: '5',
        title: 'Digital Tinitz Dashboard',
        category: 'Fullstack',
        status: 'Terminé',
        description: 'Plateforme de gestion multi-tenant intégrant événements, émargements et notifications push multicanal avec architecture asynchrone haute performance.',
        problem: 'Une organisation gérant plusieurs événements simultanés avait besoin d\'une plateforme centralisée pour les inscriptions, l\'émargement sur site et l\'envoi de communications ciblées (email, SMS, push) à des milliers de participants.',
        constraints: [
            'Multi-tenant : chaque événement = client isolé',
            'Pics de charge lors des émargements (burst traffic)',
            'Notifications à 10 000+ destinataires sans délai perceptible',
            'Haute disponibilité requise pendant les événements',
        ],
        longDescription: 'Architecture multi-tenant avec isolation par tenant_id et scoping automatique (Global Scope Laravel). Les notifications sont déléguées à des workers Redis Queue pour absorber les pics de charge. Le système d\'émargement utilise des QR codes signés (HMAC) pour éviter les fraudes.',
        architectureDecisions: [
            { decision: 'Redis Queue pour les notifications', rationale: 'Découplage total entre la requête HTTP et l\'envoi réel. Retry automatique en cas d\'échec SMTP/SMS.' },
            { decision: 'Global Scope pour le multi-tenant', rationale: 'Isolation transparente au niveau ORM : chaque query est automatiquement filtrée par tenant_id.' },
            { decision: 'QR codes HMAC-signés', rationale: 'Authentification cryptographique sans base de données : vérification O(1) en lookup.' },
        ],
        technicalRequirements: [
            'Architecture multi-tenant avec isolation par tenant_id',
            'Système de notifications push multicanal (email, SMS, push)',
            'Queue Laravel + Redis pour traitement asynchrone haute performance',
            'Émargement par QR code avec vérification HMAC',
        ],
        tradeoffs: [
            { choice: 'Redis vs Database Queue', gained: 'Throughput x10, pas de polling sur la DB', sacrificed: 'Redis comme dépendance infrastructure supplémentaire' },
            { choice: 'Single DB multi-tenant vs DB par tenant', gained: 'Simplicité opérationnelle, coût réduit', sacrificed: 'Risque de data leak si le scoping est mal appliqué' },
        ],
        businessImpact: 'Support de 10 000+ participants par événement. Envoi de 50 000 notifications en moins de 5 minutes. Taux d\'émargement frauduleux réduit à 0.',
        technologies: ['Laravel', 'MySQL', 'Tailwind CSS', 'Redis', 'WebSockets'],
        link: 'https://digital.tinitz.ci/',
        highlights: [
            'Architecture multi-tenant scalable avec Global Scope automatique',
            'Notifications push multicanal via Laravel Queues + Redis',
            'Émargement QR sécurisé avec vérification cryptographique HMAC',
        ]
    },
    {
        id: '6',
        title: 'Pressecotedivoire.fr',
        category: 'Web',
        status: 'Terminé',
        description: 'Portail d\'actualité majeur en Côte d\'Ivoire : architecture Laravel robuste supportant un fort trafic journalier avec CMS sur-mesure et SEO optimisé.',
        problem: 'Un portail d\'actualité existant souffrait de temps de chargement élevés (>4s), un CMS non adapté aux journalistes non-techniques, et des positions SEO faibles malgré un contenu de qualité.',
        constraints: [
            'Fort trafic journalier avec pics au moment des actualités chaudes',
            'Journalistes non-techniques comme utilisateurs principaux du CMS',
            'SEO critique pour la monétisation publicitaire',
            'Budget infrastructure limité',
        ],
        longDescription: 'Architecture Laravel avec optimisation multi-couches : cache Blade pour les pages statiques, cache OPcache PHP, index MySQL couvrants pour les requêtes fréquentes. Le CMS custom utilise une interface WYSIWYG simplifiée. Le sitemap est généré automatiquement à chaque publication.',
        architectureDecisions: [
            { decision: 'Cache Blade + OPcache', rationale: 'Les pages d\'articles ne changent pas après publication. Le cache full-page réduit la charge DB de 90%.' },
            { decision: 'Sitemap automatique à la publication', rationale: 'Indexation Google accélérée : chaque article est connu des crawlers en moins de 24h.' },
        ],
        technicalRequirements: [
            'Cache multi-niveaux (OPcache, Blade cache, Redis)',
            'CMS sur-mesure avec WYSIWYG simplifié',
            'SEO avancé : sitemap auto, méta-tags dynamiques, structured data',
            'Architecture Laravel optimisée pour fort trafic',
        ],
        tradeoffs: [
            { choice: 'CMS custom vs WordPress', gained: 'Performance, sécurité, intégration parfaite avec le domaine métier', sacrificed: 'Plugins ecosystem WordPress, temps de développement initial plus long' },
        ],
        businessImpact: 'Temps de chargement réduit de 4.2s à 0.8s. Amélioration de 60% du score PageSpeed. Augmentation du trafic organique de 35% en 3 mois.',
        technologies: ['Laravel', 'Blade', 'MySQL', 'Redis', 'SEO'],
        link: 'https://www.pressecotedivoire.fr/',
        highlights: [
            'Cache multi-niveaux : -90% de charge DB sur les pics',
            'SEO structuré avec sitemap et rich snippets automatiques',
            'CMS custom optimisé pour journalistes non-techniques',
        ]
    },
    {
        id: '7',
        title: 'MosesWise TV Show Hub',
        category: 'Web',
        status: 'Terminé',
        description: 'Application interactive exploitant l\'API TMDB pour la découverte de séries et films, avec animations Framer Motion et gestion d\'état complexe.',
        technologies: ['React.js', 'Framer Motion', 'TMDB API', 'TypeScript'],
        link: 'https://moseswise-react-tv-show.netlify.app/',
        github: 'https://github.com/githubmoseswise/react-tv-show-adviser',
        highlights: [
            'Animations fluides avec Framer Motion (layout animations)',
            'Consommation d\'API asynchrone avec React Query + cache intelligent',
            'Design responsive et expérience utilisateur premium',
        ]
    },
    {
        id: '10',
        title: 'Générateur de CV Ultra Moderne',
        category: 'Web',
        status: 'Terminé',
        description: 'SPA React permettant la création de CV haut de gamme avec aperçu temps réel, export PDF et système de personnalisation interactif.',
        technologies: ['React.js', 'Tailwind CSS', 'Lucide Icons', 'Vite', 'html2canvas', 'jsPDF'],
        highlights: [
            'Interface Split-Screen avec Live Preview instantané',
            'Système de personnalisation interactif (templates multiples)',
            'Exportation PDF/PNG haute fidélité avec html2canvas + jsPDF',
        ]
    },
    {
        id: '11',
        title: 'Portfolio Architecte Next-Gen',
        category: 'Web',
        status: 'En cours',
        description: 'Refonte complète de mon identité numérique : architecture Astro 5 + React, design system senior, case studies d\'architecture, animations GSAP.',
        problem: 'Un portfolio technique qui ne reflète pas le niveau architecte : statique, sans storytelling, sans démonstration des décisions et trade-offs qui définissent la pensée d\'un architecte logiciel.',
        constraints: [
            'Score Lighthouse 100/100/100/100 obligatoire',
            'Hébergement GitHub Pages (site statique uniquement)',
            'Doit convaincre recruteurs tech et entreprises Big Tech',
        ],
        longDescription: 'Architecture Astro (SSG) pour des performances maximales : zéro JavaScript par défaut, React uniquement pour les composants interactifs (islands architecture). Le design system est construit sur des CSS variables pour le theming dark/light sans flash.',
        architectureDecisions: [
            { decision: 'Astro SSG vs Next.js', rationale: 'Site statique : pas besoin de SSR. Astro élimine tout JS inutile, performance Lighthouse parfaite garantie.' },
            { decision: 'Islands Architecture', rationale: 'React uniquement pour les composants nécessitant de l\'interactivité. Le reste est du HTML statique pur.' },
        ],
        technicalRequirements: [
            'Astro 5 avec Islands Architecture (React pour les composants interactifs)',
            'Score Lighthouse 100/100/100/100',
            'Design system complet (tokens, dark mode, animations)',
            'Case studies d\'architecture avec diagrammes',
        ],
        tradeoffs: [
            { choice: 'Astro SSG vs SPA React', gained: 'Performance maximale, SEO parfait, hébergement statique', sacrificed: 'Moins de flexibilité pour les fonctionnalités dynamiques côté client' },
        ],
        businessImpact: 'Démonstration concrète d\'une pensée architecturale senior : pas juste "ce que j\'ai fait", mais pourquoi, comment, et quels trade-offs.',
        technologies: ['Astro 5', 'React', 'TypeScript', 'Tailwind CSS'],
        highlights: [
            'Islands Architecture : React uniquement où nécessaire',
            'Score Lighthouse cible : 100/100/100/100',
            'Case studies d\'architecture avec ADR et trade-offs explicites',
        ]
    },
    {
        id: '13',
        title: 'SaaS Multi-Tenant de Gestion de Conflits Fonciers',
        category: 'SIG',
        status: 'Idée',
        description: 'Solution de résolution de litiges territoriaux couplant SIG et Blockchain pour l\'immuabilité des titres fonciers, adaptée au contexte africain.',
        problem: 'L\'insécurité foncière en Afrique génère des conflits persistants : titres papier falsifiables, cadastre incomplet, processus de mutation opaque et corruptible. Des millions de personnes n\'ont pas de preuve légale de propriété.',
        constraints: [
            'Infrastructure dégradée (coupures réseau fréquentes)',
            'Multiplicité d\'acteurs : géomètres, notaires, mairies, citoyens',
            'Données géospatiales haute précision (drones, GPS RTK)',
            'Exigences légales locales variables par pays',
        ],
        longDescription: 'Architecture microservices : un service Laravel Core gère le workflow métier (demandes, validations, mutations). Un service Node.js SIG Workers traite les géométries parcellaires via PostGIS. La couche Blockchain (Polygon) stocke les hashs des titres pour l\'immuabilité. n8n orchestre les notifications multi-acteurs.',
        architectureDecisions: [
            { decision: 'Blockchain pour l\'immuabilité (hashes uniquement)', rationale: 'On ne stocke pas les données sur la blockchain (coût/performance), seulement le hash SHA-256 du titre. La preuve d\'existence est on-chain, les données restent off-chain.' },
            { decision: 'Microservices SIG séparés', rationale: 'Les calculs géospatiaux sont CPU-intensive. Les isoler permet de scaler indépendamment du workflow Laravel.' },
            { decision: 'Event Sourcing pour l\'audit trail', rationale: 'Chaque modification d\'un titre est un event immuable. Reconstitution de l\'historique complet possible à tout instant.' },
        ],
        technicalRequirements: [
            'Architecture Microservices (Laravel Core + Node.js SIG Workers)',
            'Blockchain Polygon : hash des titres pour immuabilité et preuve d\'existence',
            'PostGIS pour le stockage et les calculs des géométries parcellaires',
            'Event Sourcing complet pour l\'audit trail des mutations',
            'Synchronisation offline pour les agents terrain',
        ],
        tradeoffs: [
            { choice: 'Blockchain vs base de données immuable', gained: 'Décentralisation, preuve cryptographique vérifiable publiquement', sacrificed: 'Coût gas, latence des transactions, complexité opérationnelle' },
            { choice: 'Microservices vs monolithe', gained: 'Scalabilité indépendante des services SIG, résilience', sacrificed: 'Complexité infrastructure, latence réseau inter-services' },
        ],
        businessImpact: 'Réduction de 90% des litiges fonciers et accélération du processus de mutation de propriété de 6 mois à 2 semaines.',
        technologies: ['Laravel', 'Node.js', 'SuperMap', 'Solidity', 'PostGIS', 'Polygon'],
        highlights: [
            'Titres fonciers ancrés sur Blockchain (preuve d\'existence via hash)',
            'Cartographie parcellaire haute précision avec historique temporel',
            'Workflow collaboratif multi-acteurs (notaires, géomètres, mairies)',
        ]
    },
    {
        id: '14',
        title: 'Super-App Logistique avec Optimisation de Trajet IA',
        category: 'Mobile',
        status: 'Idée',
        description: 'Application Flutter pilotant une flotte de livraison avec calcul de routes optimales en temps réel via algorithmes VRP et infrastructure WebSocket.',
        problem: 'Les livraisons last-mile en Afrique sont inefficaces : routes non optimisées, pas de visibilité temps réel pour les clients, gestion de flotte manuelle. Les livreurs perdent 30-40% de leur temps en déplacements sous-optimaux.',
        constraints: [
            'Connectivité mobile variable sur les routes de livraison',
            'Centaines de livreurs simultanés à tracker en temps réel',
            'Algorithme d\'optimisation en temps réel (< 500ms de recalcul)',
            'Clients non-technophiles sur feature phones',
        ],
        longDescription: 'Architecture Event-Driven : les positions GPS des livreurs sont publiées via WebSocket (Socket.io) et stockées dans Redis Geo (structure de données géospatiale in-memory). L\'algorithme VRP (Vehicle Routing Problem) tourne via Python/Or-Tools dans un service dédié. Les notifications clients sont envoyées via SMS (Africa\'s Talking) pour les zones sans smartphone.',
        architectureDecisions: [
            { decision: 'Redis Geo pour le tracking temps réel', rationale: 'O(log N) pour les requêtes de proximité. In-memory = latence <1ms vs requête PostGIS.' },
            { decision: 'Service VRP indépendant (Python/Or-Tools)', rationale: 'L\'optimisation combinatoire est CPU-intensive. Un service dédié évite de bloquer l\'API principale.' },
            { decision: 'SMS fallback pour les clients', rationale: 'Inclusion : les zones à faible smartphone coverage reçoivent les notifications via SMS USSD.' },
        ],
        technicalRequirements: [
            'Algorithme VRP (Vehicle Routing Problem) via Python Or-Tools',
            'WebSocket bidirectionnel pour tracking GPS haute fréquence',
            'Redis Geo pour la gestion géospatiale in-memory des positions',
            'Architecture Clean séparée par bounded contexts (Fleet, Delivery, Notification)',
        ],
        tradeoffs: [
            { choice: 'Redis Geo vs PostGIS pour le tracking', gained: 'Latence sub-milliseconde, throughput massif des updates GPS', sacrificed: 'Pas de persistance long-terme, historique trajectoires moins riche' },
            { choice: 'VRP exact vs heuristique', gained: 'Solution optimale sur petites flottes (<20 véhicules)', sacrificed: 'Scalabilité : NP-Hard, temps exponentiel au-delà de 50 véhicules' },
        ],
        businessImpact: 'Optimisation de 25% des coûts carburant. Amélioration du taux de livraison à l\'heure de 40%. Réduction du temps de dispatch de 2h à 30 secondes.',
        technologies: ['Flutter', 'Node.js', 'Python (Or-Tools)', 'Redis Geo', 'Socket.io', 'Africa\'s Talking'],
        highlights: [
            'Algorithme VRP pour l\'optimisation dynamique des tournées',
            'Tracking GPS temps réel via Redis Geo + WebSocket',
            'Mode hors-ligne avancé avec synchronisation différentielle',
        ]
    },
    {
        id: '15',
        title: 'Framework UI SIG — "Le ShadCN du Géospatial"',
        category: 'Web',
        status: 'Idée',
        description: 'Bibliothèque de composants React spécialisée dans la visualisation de données géospatiales Big Data : maps, heatmaps, clusters — clé en main.',
        longDescription: 'Le "ShadCN" du SIG. Une suite de composants UI ultra-performants pour des dashboards cartographiques Big Data, capable de rendre des millions de points via WebGL (Deck.gl) sans ralentissement.',
        technicalRequirements: [
            'Rendu WebGL via Deck.gl pour des millions de points de données',
            'Shadow DOM et virtualisation DOM pour les listes massives',
            'TypeScript strict avec schémas GeoJSON typés',
            'Architecture de plugins extensible pour les analyses spatiales',
        ],
        tradeoffs: [
            { choice: 'Deck.gl vs Leaflet pour le rendu', gained: 'Rendu WebGL de millions de features sans drop de framerate', sacrificed: 'Bundle size plus lourd, pas de support IE11' },
        ],
        businessImpact: 'Division par 4 du temps de développement des interfaces SIG complexes pour les équipes produit.',
        technologies: ['React', 'Deck.gl', 'MapLibre', 'D3.js', 'TypeScript', 'Storybook'],
        highlights: [
            'Rendu WebGL de millions de features géospatiales en temps réel',
            'Composants typés TypeScript avec schémas GeoJSON',
            'Documenté avec Storybook et tests de performance intégrés',
        ]
    },
    {
        id: '16',
        title: 'Core Banking Engine — Open-Source Light',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Moteur de transactions financières ultra-sécurisé avec comptabilité double entrée, architecture hexagonale et conformité ISO 20022.',
        problem: 'Les fintechs africaines early-stage n\'ont pas accès à un core banking open-source de qualité production. Temenos/Mambu sont hors budget. Elles bricolent des systèmes de paiement non auditables.',
        constraints: [
            'ACID strict : zéro perte de transaction admissible',
            'Idempotence : les duplications de requêtes ne doivent jamais doubler un débit',
            'Performance : 1000 TPS minimum sur commodity hardware',
            'Auditabilité totale exigée par les régulateurs',
        ],
        longDescription: 'Architecture Hexagonale (Ports & Adapters) avec Go : le domaine financier est complètement isolé des détails d\'infrastructure (DB, HTTP, queues). La comptabilité double entrée garantit l\'intégrité mathématique à tout instant. Chaque transaction est idempotente via une clé d\'idempotence UUID.',
        architectureDecisions: [
            { decision: 'Go pour la performance', rationale: 'Goroutines pour le parallélisme massif, faible empreinte mémoire, 0 GC pause > 1ms. Idéal pour du high-throughput financier.' },
            { decision: 'Double-entry ledger', rationale: 'Chaque débit a un crédit correspondant. Intégrité mathématique vérifiable à tout instant par audit de balance.' },
            { decision: 'Clés d\'idempotence UUID', rationale: 'Garantit qu\'une requête dupliquée (retry réseau) ne génère qu\'une seule transaction. Critique en fintech.' },
        ],
        technicalRequirements: [
            'Architecture Hexagonale (Ports & Adapters) en Go',
            'Comptabilité double entrée avec vérification d\'intégrité continue',
            'Idempotence via UUID par transaction',
            'API documentée aux standards ISO 20022',
        ],
        tradeoffs: [
            { choice: 'Go vs Java/Spring', gained: 'Performance brute, démarrage en millisecondes, binaire unique déployable', sacrificed: 'Écosystème banking Java plus mature (Mifos, Apache Fineract)' },
            { choice: 'PostgreSQL vs CockroachDB', gained: 'Maturité, performance single-node, expertise accessible', sacrificed: 'Scalabilité horizontale native de CockroachDB pour les gros volumes' },
        ],
        businessImpact: 'Moteur de transactions auditable pour fintechs africaines early-stage, en-dessous du coût des solutions enterprise (10-50x moins cher).',
        technologies: ['Go (Golang)', 'PostgreSQL', 'Redis', 'Docker', 'gRPC'],
        highlights: [
            'Architecture Hexagonale : domaine financier isolé de l\'infrastructure',
            'Double-entry ledger avec vérification continue de la balance',
            'Idempotence stricte : zéro double-transaction possible',
        ]
    },
    {
        id: '17',
        title: 'Hub de Collaboration Temps Réel (Type Notion/Figma)',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Éditeur collaboratif utilisant les CRDT (Conflict-free Replicated Data Types) pour la synchronisation sans conflit entre utilisateurs simultanés.',
        longDescription: 'Défi technique majeur : édition simultanée par des centaines d\'utilisateurs sans conflit. Implémentation de Yjs (CRDT) pour la convergence automatique des états distribués. Infrastructure WebRTC pour la collaboration P2P directe.',
        architectureDecisions: [
            { decision: 'CRDT via Yjs plutôt qu\'OT (Operational Transform)', rationale: 'Yjs est plus simple à implémenter, plus performant en décentralisé, et ne nécessite pas de serveur central d\'ordonnancement.' },
            { decision: 'Redis Pub/Sub pour la diffusion serveur', rationale: 'Fallback quand le P2P WebRTC n\'est pas possible (firewalls). Redis sert de Signaling Server.' },
        ],
        technicalRequirements: [
            'CRDT via Yjs pour la convergence automatique sans conflit',
            'Infrastructure WebRTC P2P avec fallback Redis Pub/Sub',
            'Curseurs multi-utilisateurs synchronisés en millisecondes',
            'Persistance incrémentale des états Yjs',
        ],
        tradeoffs: [
            { choice: 'CRDT (Yjs) vs Operational Transform', gained: 'Décentralisation native, pas de serveur central d\'ordonnancement', sacrificed: 'Garbage collection des états CRDT plus complexe' },
        ],
        businessImpact: 'Productivité décuplée pour les équipes distribuées avec une collaboration sans conflit ni latence perceptible.',
        technologies: ['React', 'NestJS', 'Yjs', 'WebRTC', 'Redis Pub/Sub', 'TypeScript'],
        highlights: [
            'CRDT Yjs : convergence automatique des états distribués',
            'WebRTC P2P avec fallback serveur Redis pour les firewalls',
            'Curseurs multi-utilisateurs synchronisés sub-50ms',
        ]
    },
    {
        id: '18',
        title: 'Tontine-Connect Pro : Fintech Coopérative',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Plateforme fintech modernisant les tontines traditionnelles africaines avec automatisation des cycles, Mobile Money intégré et audit trail immuable.',
        problem: 'Les tontines africaines (épargne collective rotative) sont gérées manuellement par des responsables de confiance. Risques de détournement, oublis de paiement, et absence d\'historique traçable fragilisent la confiance communautaire.',
        constraints: [
            'Confiance : les membres doivent voir chaque centime tracé',
            'Intégration Mobile Money (Orange, MTN, Moov) obligatoire',
            'Utilisateurs peu technophiles (SMS, USSD comme fallback)',
            'Algorithmes de rotation complexes (enchères, tirage au sort)',
        ],
        longDescription: 'Architecture event-sourced : chaque cotisation, distribution et pénalité est un event immuable dans un journal d\'audit. Les intégrations Mobile Money utilisent des webhooks avec idempotence. Les notifications sont multicanal : push app, SMS (Africa\'s Talking), WhatsApp Business API.',
        architectureDecisions: [
            { decision: 'Event Sourcing pour l\'audit trail financier', rationale: 'Chaque transaction est un event immuable. La transparence totale est fondamentale pour la confiance entre membres.' },
            { decision: 'Webhooks idempotents pour Mobile Money', rationale: 'Les APIs Mobile Money peuvent envoyer des webhooks en double. L\'idempotence évite les double-crédits catastrophiques.' },
        ],
        technicalRequirements: [
            'Event Sourcing pour l\'auditabilité totale des flux financiers',
            'Intégration Mobile Money (Orange, MTN, Moov) avec idempotence',
            'Algorithme de rotation par enchères ou tirage au sort',
            'Notifications multicanal : push, SMS, WhatsApp Business API',
        ],
        tradeoffs: [
            { choice: 'Event Sourcing vs CRUD classique', gained: 'Auditabilité parfaite, reconstruction possible de l\'état à n\'importe quel instant', sacrificed: 'Complexité des projections et des lectures (CQRS obligatoire)' },
        ],
        businessImpact: 'Formalisation et sécurisation de l\'épargne informelle pour des millions d\'utilisateurs en Afrique. Réduction du risque de détournement à zéro via l\'audit immuable.',
        technologies: ['Laravel', 'Flutter', 'Redis', 'Mobile Money APIs', 'Africa\'s Talking', 'WhatsApp Business API'],
        highlights: [
            'Event Sourcing : historique financier immuable et auditable',
            'Intégration Mobile Money avec idempotence webhooks',
            'Algorithme de rotation automatisé (enchères / tirage au sort)',
        ]
    },
    {
        id: '19',
        title: 'MosesWise-IDE : L\'Éditeur Assisté par IA Local-First',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Environnement de développement intégrant des LLMs locaux (Llama 3, DeepSeek) avec indexation RAG du codebase pour une pertinence contextuelle maximale et une confidentialité totale.',
        longDescription: 'RAG (Retrieval-Augmented Generation) local : le codebase est indexé dans ChromaDB (vecteurs). Chaque requête IA est enrichie du contexte AST (Abstract Syntax Tree) des fichiers concernés. Le LLM tourne localement via Ollama pour une confidentialité totale du code propriétaire.',
        architectureDecisions: [
            { decision: 'RAG local vs appel API OpenAI', rationale: 'Confidentialité du code propriétaire : rien ne quitte le poste de développement. Conformité RGPD et politique IP des entreprises.' },
            { decision: 'ChromaDB pour l\'index vectoriel', rationale: 'Base de données vectorielle embarquée, pas de serveur externe. S\'intègre directement dans le processus Electron.' },
        ],
        technicalRequirements: [
            'RAG local via ChromaDB (index vectoriel du codebase)',
            'Injection de contexte AST pour l\'analyse syntaxique profonde',
            'Architecture Electron pour performance native multi-plateforme',
            'Optimisation de la latence d\'inférence (quantization int4/int8)',
        ],
        tradeoffs: [
            { choice: 'LLM local vs API externe', gained: 'Confidentialité totale, zéro coût variable par token, fonctionnement offline', sacrificed: 'Qualité légèrement inférieure aux meilleurs modèles cloud, GPU requis' },
        ],
        businessImpact: 'Productivité développeur augmentée avec une IA contextuelle 100% confidentielle. Zéro risque de fuite de code propriétaire.',
        technologies: ['TypeScript', 'Electron', 'Python (LangChain)', 'Ollama', 'ChromaDB', 'Tree-sitter'],
        highlights: [
            'RAG local : contexte du projet injecté dans chaque prompt IA',
            'Analyse AST pour une compréhension syntaxique profonde du code',
            'LLM 100% local : confidentialité totale du code propriétaire',
        ]
    },
    {
        id: '20',
        title: 'Global-Resume Engine : Formats Internationaux',
        category: 'Web',
        status: 'Idée',
        description: 'Générateur intelligent adaptant automatiquement la structure d\'un CV aux normes culturelles et ATS de chaque pays (EU, US, Asie, Afrique).',
        longDescription: 'L\'IA analyse le profil et reformule automatiquement selon les standards culturels (pas de photo aux US, photo obligatoire en France, CV fonctionnel au Japon). Le score ATS est calculé en comparant sémantiquement le CV à une offre d\'emploi cible.',
        technicalRequirements: [
            'Templates dynamiques avec support i18n avancé',
            'Score de compatibilité ATS par analyse sémantique (LLM)',
            'Génération de PDFs multi-pages via Headless Chrome (Playwright)',
            'Architecture micro-frontends pour le builder modulaire',
        ],
        businessImpact: 'Maximisation des chances de recrutement international en s\'alignant sur les codes RH et ATS de chaque marché cible.',
        technologies: ['React.js', 'Next.js', 'Playwright', 'Claude API', 'TypeScript'],
        highlights: [
            'Adaptation culturelle automatique (EU, US, Asie, Afrique)',
            'Score ATS calculé par analyse sémantique LLM',
            'Export PDF haute fidélité via Headless Chrome',
        ]
    },
    {
        id: '21',
        title: 'Autonomous Content Factory (Multi-Agent AI)',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Système d\'orchestration n8n multi-agents : veille, rédaction, génération d\'images et publication cross-plateforme entièrement autonome.',
        longDescription: 'n8n orchestre une armée d\'agents IA (recherche, rédaction, image, publication) pour produire et distribuer du contenu de manière entièrement autonome sur WordPress, LinkedIn et Instagram, avec un système "human-in-the-loop" optionnel via Slack.',
        technicalRequirements: [
            'Workflows n8n complexes avec LangChain Nodes agentiques',
            'Intégration DALL-E 3 / Midjourney API pour les visuels',
            'Filtre qualité avec "human-in-the-loop" optionnel via Slack',
            'Publication multi-canal : WordPress, LinkedIn, Instagram',
        ],
        businessImpact: 'Réduction de 95% du temps de création de contenu. Présence digitale 24/7 sur plusieurs marchés simultanément.',
        technologies: ['n8n', 'Python', 'OpenAI API', 'WordPress API', 'LangChain'],
        highlights: [
            'Multi-agents : recherche + rédaction + image + publication',
            'Human-in-the-loop Slack pour validation avant publication',
            'Veille thématique temps réel par scraping intelligent',
        ]
    },
    {
        id: '22',
        title: 'Smart-Bridge : Cloud-to-USSD Financial Gateway',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Passerelle n8n connectant des APIs REST modernes à des infrastructures USSD hérités pour l\'inclusion financière des populations non-connectées.',
        longDescription: 'Un pont technologique pour l\'inclusion financière. n8n traduit des requêtes REST/JSON modernes en protocoles USSD legacy, permettant à des apps web de déclencher des opérations bancaires via code court *XXX# pour les populations sans smartphone.',
        technicalRequirements: [
            'Webhooks haute performance avec queues Redis pour les pics de charge',
            'Chiffrement bout-en-bout des transactions financières',
            'Logique de retry/compensation n8n pour la résilience réseau',
            'Intégration Africa\'s Talking et Twilio pour les passerelles USSD',
        ],
        businessImpact: 'Démocratisation des services financiers digitaux pour les populations sans Internet. Inclusion de 500M+ d\'utilisateurs potentiels en Afrique subsaharienne.',
        technologies: ['n8n', 'Node.js', 'Redis', 'Africa\'s Talking', 'USSD Protocols'],
        highlights: [
            'Bridge REST → USSD : modernisation sans disruption du legacy',
            'Queue Redis pour absorber les pics de trafic USSD',
            'Monitoring temps réel des taux de succès par opérateur',
        ]
    },
    {
        id: '23',
        title: 'Intelligent Lead Enrichment & CRM Engine',
        category: 'Fullstack',
        status: 'Idée',
        description: 'Pipeline n8n capturant, enrichissant et qualifiant automatiquement des prospects via signaux sociaux et IA sémantique.',
        longDescription: 'Un moteur de croissance autonome qui surveille LinkedIn et le web, extrait les profils de nouveaux prospects, les enrichit avec des données financières via IA, et les qualifie automatiquement avant injection dans HubSpot/Salesforce.',
        technicalRequirements: [
            'Scraping dynamique avec rotation de proxies',
            'Qualification sémantique via LLM (analyse de profil et intention)',
            'Normalisation JSON complexe dans n8n',
            'Alerting "High Intent" en temps réel',
        ],
        businessImpact: 'Multiplication par 3 de l\'efficacité commerciale en éliminant la saisie manuelle et la qualification à faible valeur ajoutée.',
        technologies: ['n8n', 'HubSpot API', 'Browserless', 'Python AI', 'LangChain'],
        highlights: [
            'Capture de leads par signaux sociaux automatisée',
            'Enrichissement 360° sans intervention humaine',
            'Qualification prédictive par LLM intégrée au workflow',
        ]
    },
];
