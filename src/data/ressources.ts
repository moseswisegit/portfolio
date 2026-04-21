export type Category = 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'Architecture' | 'UX' | 'IA';

export interface Resource {
    id: string;
    title: string;
    category: Category;
    tags: string[];
    url: string;
    description: string;
    note: string;
    image?: string;
}

export const resources: Resource[] = [
    {
        id: '1',
        title: 'Astro Docs',
        category: 'Frontend',
        tags: ['Framework', 'SSG', 'Web'],
        url: 'https://docs.astro.build',
        description: 'La documentation officielle d\'Astro, le framework web pour une performance optimale.',
        note: 'Ma référence pour construire ce portfolio vitrine.',
        image: '/portfolio/images/resources/astro.png'
    },
    {
        id: '2',
        title: 'Tailwind CSS Docs',
        category: 'Frontend',
        tags: ['CSS', 'Utility-first', 'Design'],
        url: 'https://tailwindcss.com/docs',
        description: 'Guide complet sur Tailwind CSS pour un design d\'interface rapide et flexible.',
        note: 'Mon outil de prédilection pour le styling moderne et maintenable.',
        image: '/portfolio/images/resources/tailwind.png'
    },
    {
        id: '3',
        title: 'Kubernetes Docs',
        category: 'Architecture',
        tags: ['DevOps', 'Cloud', 'Orchestration'],
        url: 'https://kubernetes.io/docs/concepts/configuration/overview/',
        description: 'Concepts fondamentaux et bonnes pratiques pour la configuration et l\'orchestration de conteneurs.',
        note: 'Essentiel pour mes architectures cloud-native.',
        image: '/portfolio/images/resources/kubernetes.png'
    },
    {
        id: '4',
        title: 'The Clean Code Blog',
        category: 'Architecture',
        tags: ['Craftsmanship', 'Best Practices', 'Backend'],
        url: 'https://blog.cleancoder.com/',
        description: 'Les articles officiels de Robert C. Martin (Uncle Bob) sur le Clean Code et le Software Craftsmanship.',
        note: 'La base de ma philosophie de développement : le code comme un artisanat.',
        image: '/portfolio/images/resources/clean-coder.png'
    },
    {
        id: '5',
        title: 'SuperMap iServer Documentation',
        category: 'Architecture',
        tags: ['SIG', 'GIS', 'Cloud'],
        url: 'http://support.supermap.com.cn/DataInfor/ProductCenter.aspx',
        description: 'Plateforme serveur Cloud SIG hautement performante.',
        note: 'Utilisé lors de ma mission chez SuperMap CI pour l\'hébergement et la publication de données géospatiales complexes. Une référence en SIG.',
        image: '/portfolio/images/resources/supermap.png'
    },
    {
        id: '6',
        title: 'Gemini Code Assist (VS Code)',
        category: 'IA',
        tags: ['AI', 'Assistant', 'Google'],
        url: 'https://marketplace.visualstudio.com/items?itemName=Google.cloud-code',
        description: 'Assistant de codage intelligent AI propulsé par Gemini, directement dans VS Code.',
        note: 'Une solution puissante pour booster la productivité, générer des fonctions et expliquer le code sans quitter l\'éditeur.',
        image: '/portfolio/images/resources/google-cloud-code.png'
    },
    {
        id: '7',
        title: 'Cursor AI Editor',
        category: 'IA',
        tags: ['AI', 'IDE', 'Productivity'],
        url: 'https://www.cursor.com/',
        description: 'L\'éditeur de code nouvelle génération, conçu nativement pour l\'IA.',
        note: 'Mon outil de prédilection pour accélérer le développement. La compréhension contextuelle du codebase dépasse tout ce que j\'ai testé auparavant.',
        image: '/portfolio/images/resources/cursor.png'
    },
    {
        id: '8',
        title: 'TypingClub',
        category: 'UX',
        tags: ['Productivity', 'Skill', 'Learning'],
        url: 'https://www.typingclub.com',
        description: 'Maîtrisez la dactylographie (touch typing) pour coder à la vitesse de la pensée.',
        note: 'La compétence la plus sous-estimée en 2026. Gagner en vitesse de frappe libère de la puissance cognitive pour l\'architecture.'
    },
    {
        id: '9',
        title: 'Mobbin Design Patterns',
        category: 'Mobile',
        tags: ['UX', 'UI', 'Mobile Patterns'],
        url: 'https://mobbin.com/',
        description: 'Bibliothèque exhaustive de screenshots et patterns d\'applications mobiles réelles.',
        note: 'Une mine d\'or pour s\'inspirer des meilleures UX/UI du marché avant de concevoir mes propres architectures mobiles.'
    },
    {
        id: '10',
        title: 'SonarQube Quality Gate',
        category: 'Architecture',
        tags: ['Quality', 'CI/CD', 'Clean Code'],
        url: 'https://www.sonarsource.com/products/sonarqube/',
        description: 'Analyseur de code automatique pour détecter bugs, vulnérabilités et odeurs de code.',
        note: 'L\'outil indispensable pour garantir une architecture saine et maintenable sur le long terme.'
    },
    {
        id: '11',
        title: 'MinIO Object Storage',
        category: 'Backend',
        tags: ['S3', 'Cloud', 'Data'],
        url: 'https://www.min.io/',
        description: 'Solution de stockage d\'objets performante, compatible API S3, pour infrastructures privées.',
        note: 'Utilisé pour la gestion robuste des médias et documents dans mes applications distribuées.'
    },
    {
        id: '12',
        title: 'Claude AI (Anthropic)',
        category: 'IA',
        tags: ['AI', 'LLM', 'Claude'],
        url: 'https://claude.ai/',
        description: 'L\'un des modèles de langage les plus avancés, réputé pour son raisonnement et sa sécurité.',
        note: 'Mon partenaire de réflexion pour les architectures complexes et la revue de code critique.',
        image: '/portfolio/images/resources/claude.png'
    },
    {
        id: '13',
        title: 'DeepSeek Chat',
        category: 'IA',
        tags: ['AI', 'LLM', 'Reasoning'],
        url: 'https://chat.deepseek.com/',
        description: 'Modèle de langage haute performance, particulièrement efficace pour le raisonnement logique et le code.',
        note: 'Une alternative sérieuse et ultra-rapide pour valider des algorithmes complexes et explorer des architectures backend.',
        image: '/portfolio/images/resources/deepseek.png'
    },
    {
        id: '14',
        title: 'Perplexity AI Research',
        category: 'IA',
        tags: ['AI', 'Search', 'Research'],
        url: 'https://www.perplexity.ai/',
        description: 'Moteur de recherche par IA fournissant des réponses sourcées en temps réel.',
        note: 'Mon outil de veille technologique numéro 1. Idéal pour obtenir des comparatifs techniques à jour avec des sources fiables.',
        image: '/portfolio/images/resources/perplexity.png'
    },
    {
        id: '15',
        title: 'Mistral AI Chat',
        category: 'IA',
        tags: ['AI', 'LLM', 'Europe'],
        url: 'https://chat.mistral.ai/',
        description: 'Intelligence artificielle de pointe développée en Europe, performante et polyvalente.',
        note: 'Utilisé pour des tâches de traitement de langage naturel exigeantes, avec une excellente compréhension du français.',
        image: '/portfolio/images/resources/mistral.png'
    },
    {
        id: '16',
        title: 'Bolt.new (StackBlitz)',
        category: 'IA',
        tags: ['AI', 'Web Dev', 'Fullstack'],
        url: 'https://bolt.new/',
        description: 'Générez, prévisualisez et déployez des applications web complètes via un simple prompt.',
        note: 'La révolution du prototypage rapide en 2025. Un gain de temps phénoménal pour passer de l\'idée au MVP.'
    },
    {
        id: '17',
        title: 'n8n Workflow Automation',
        category: 'Architecture',
        tags: ['No-Code', 'Self-Hosted', 'Automation'],
        url: 'https://n8n.io/',
        description: 'Outil d\'automatisation de workflow extensible permettant d\'interconnecter n\'importe quel service.',
        note: 'Le cœur de mes architectures "Smart-Bridge" pour le parsing de données USSD et l\'orchestration de micro-services.'
    },
    {
        id: '18',
        title: 'Blackbox AI Code',
        category: 'IA',
        tags: ['AI', 'Code Generation', 'VS Code'],
        url: 'https://www.blackbox.ai/',
        description: 'Assistant IA spécialisé dans la génération de code et l\'auto-complétion rapide.',
        note: 'Une solution complémentaire pour accélérer l\'écriture de composants complexes et de scripts d\'automatisation.'
    },
    {
        id: '19',
        title: 'NotebookLM (Google)',
        category: 'IA',
        tags: ['AI', 'Knowledge', 'Notebooks'],
        url: 'https://notebooklm.google.com/',
        description: 'Assistant de recherche personnalisé utilisant vos propres sources pour générer des synthèses.',
        note: 'Indispensable pour ingérer des documentations techniques denses et en extraire des insights structurés.',
        image: '/portfolio/images/resources/notebooklm.png'
    },
    {
        id: '20',
        title: 'HuggingChat (Open Source)',
        category: 'IA',
        tags: ['AI', 'Open Source', 'LLM'],
        url: 'https://huggingface.co/chat/',
        description: 'Interface de chat open-source accédant aux meilleurs modèles de la communauté LLM.',
        note: 'Ma porte d\'entrée vers l\'écosystème open-IA, permettant de tester et comparer les derniers modèles (Llama, Mistral).',
        image: '/portfolio/images/resources/huggingchat.png'
    },
    {
        id: '21',
        title: 'Storyset Illustrations',
        category: 'UX',
        tags: ['Design', 'Illustration', 'SVG'],
        url: 'https://storyset.com/',
        description: 'Illustrations personnalisables et animables pour enrichir l\'identité visuelle des projets web.',
        note: 'La clé pour transformer une interface technique en une expérience utilisateur mémorable.',
        image: '/portfolio/images/resources/storyset.png'
    },
    {
        id: '22',
        title: 'IconDuck Open Library',
        category: 'UX',
        tags: ['Design', 'Icons', 'Open Source'],
        url: 'https://iconduck.com/',
        description: 'Bibliothèque massive d\'icônes et d\'assets open-source pour développeurs.',
        note: 'Ma source préférée pour trouver des sets d\'icônes pro sans friction de licence, garantissant une UI propre.'
    },
    {
        id: '23',
        title: 'ShadCN UI Components',
        category: 'Frontend',
        tags: ['React', 'Tailwind', 'Components'],
        url: 'https://ui.shadcn.com',
        description: 'Collection de composants réutilisables, accessibles et personnalisables via copier-coller.',
        note: 'Ma référence absolue pour construire des interfaces modernes et robustes avec un contrôle total sur le code.'
    },
    {
        id: '24',
        title: 'Create.xyz App Generator',
        category: 'IA',
        tags: ['AI', 'No-Code', 'Deployment'],
        url: 'https://www.create.xyz/',
        description: 'Plateforme permettant de construire des applications web entières via une interface conversationnelle.',
        note: 'Utilisé pour expérimenter des concepts d\'UI disruptifs et accélérer les phases de conception.'
    },
    {
        id: '25',
        title: 'Lookup.design Assets',
        category: 'UX',
        tags: ['Design', 'Search', 'Assets'],
        url: 'https://lookup.design/',
        description: 'Moteur de recherche dédié aux composants de design et sources d\'inspiration visuelle.',
        note: 'Un outil vital pour maintenir un niveau de qualité esthétique élevé sur tous mes projets.'
    },
    {
        id: '26',
        title: 'Poe AI (Quora)',
        category: 'IA',
        tags: ['AI', 'LLM', 'Multi-model'],
        url: 'https://poe.com/',
        description: 'Plateforme centralisant l\'accès à plusieurs modèles d\'IA (GPT-4, Claude, Llama).',
        note: 'Un outil polyvalent pour comparer les réponses de différents modèles et explorer de nouvelles capacités d\'IA.',
        image: '/portfolio/images/resources/poe.png'
    },
    {
        id: '27',
        title: 'Heroicons (Tailwind Labs)',
        category: 'UX',
        tags: ['Design', 'Icons', 'SVG'],
        url: 'https://heroicons.com',
        description: 'Ensemble d\'icônes SVG open source créées par l\'équipe de Tailwind CSS.',
        note: 'L\'élégance de la simplicité. Des icônes parfaitement calibrées pour des interfaces professionnelles et propres.'
    },
    {
        id: '28',
        title: 'Feather Icons',
        category: 'UX',
        tags: ['Design', 'Icons', 'Minimalist'],
        url: 'https://feathericons.com',
        description: 'Collection d\'icônes open source minimalistes, légères et hautement personnalisables.',
        note: 'Idéal lorsque la légèreté visuelle est une priorité absolue pour l\'expérience utilisateur.'
    },
    {
        id: '29',
        title: 'Lucide Icons',
        category: 'UX',
        tags: ['Design', 'Icons', 'Community'],
        url: 'https://lucide.dev',
        description: 'Fork communautaire de Feather Icons, offrant une bibliothèque d\'icônes SVG en constante expansion.',
        note: 'Mon choix par défaut pour la plupart des projets React grâce à son excellente intégration et sa variété.'
    },
    {
        id: '30',
        title: 'Flowbite UI Library',
        category: 'Frontend',
        tags: ['Tailwind', 'Components', 'Open Source'],
        url: 'https://flowbite.com',
        description: 'Bibliothèque de composants UI basée sur Tailwind CSS incluant des éléments interactifs riches.',
        note: 'Excellent pour accélérer l\'intégration de composants standards sans sacrifier le design système.'
    },
    {
        id: '31',
        title: 'Aceternity UI',
        category: 'UX',
        tags: ['Design', 'Animations', 'Framer Motion'],
        url: 'https://ui.aceternity.com/',
        description: 'Composants UI hautement stylisés et animés pour des interfaces web futuristes et premium.',
        note: 'Le secret pour ajouter cet effet "WOW" et une touche de luxe technologique à mes réalisations.'
    },
    {
        id: '32',
        title: 'Lordicon Animated Lib',
        category: 'UX',
        tags: ['Design', 'Icons', 'Lottie'],
        url: 'https://lordicon.com/',
        description: 'Vaste bibliothèque d\'icônes animées pour rendre les interfaces plus vivantes et expressives.',
        note: 'L\'animation micro-interactionnelle au service de l\'engagement utilisateur. Un plus indéniable pour le branding.'
    },
    {
        id: '33',
        title: 'MGX (MetaGPT X)',
        category: 'IA',
        tags: ['AI', 'No-Code', 'Multi-agent'],
        url: 'https://mgx.dev/',
        description: 'Plateforme AI multi-agent pour générer des applications via langage naturel.',
        note: 'Une vision futuriste du développement où l\'architecte orchestre une équipe d\'agents IA spécialisés.'
    },
    {
        id: '34',
        title: 'Chat Z.ai Business',
        category: 'IA',
        tags: ['AI', 'LLM', 'Productivity'],
        url: 'https://chat.z.ai/',
        description: 'Assistant IA polyvalent spécialisé dans la recherche, le code et la rédaction professionnelle.',
        note: 'Outil puissant pour la synthèse documentaire et l\'aide à la décision stratégique sur mes projets.'
    },
    {
        id: '35',
        title: 'Blackbox AI Pro',
        category: 'IA',
        tags: ['AI', 'Code', 'VS Code'],
        url: 'https://www.blackbox.ai/',
        description: 'Assistant IA ultra-rapide spécialisé dans la génération de code et l\'auto-complétion.',
        note: 'Une alternative sérieuse pour booster l\'efficacité du cycle de développement frontend.'
    },
    {
        id: '36',
        title: 'Chat100.ai',
        category: 'IA',
        tags: ['AI', 'GPT-4', 'Claude 3.5'],
        url: 'https://chat100.ai/',
        description: 'Interface unifiée offrant un accès gratuit aux meilleurs modèles : GPT-4o, Claude 3.5 Sonnet et Gemini Pro.',
        note: 'Mon couteau suisse pour tester la versatilité des modèles sur un même problème architectural.'
    },
    {
        id: '37',
        title: 'LMArena.ai (Chatbot Arena)',
        category: 'IA',
        tags: ['AI', 'Benchmarking', 'LLM'],
        url: 'https://lmarena.ai/',
        description: 'Plateforme de benchmarking de référence pour comparer les performances des LLM en aveugle.',
        note: 'L\'outil indispensable pour choisir le modèle le plus performant selon l\'évolution hebdomadaire du marché.'
    },
    {
        id: '38',
        title: 'Consensus AI Search',
        category: 'IA',
        tags: ['AI', 'Research', 'Science'],
        url: 'https://consensus.app/',
        description: 'Moteur de recherche scientifique extrayant des preuves basées sur des millions d\'articles de recherche.',
        note: 'Indispensable pour valider des choix techniques ou des théories avec des données scientifiques probantes.'
    },
    {
        id: '39',
        title: 'AI Backdrop',
        category: 'IA',
        tags: ['AI', 'Design', 'Product Design'],
        url: 'https://www.aibackdrop.com/',
        description: 'Génération automatique d\'environnements professionnels et de fonds pour produits à partir de photos simples.',
        note: 'Permet d\'obtenir des visuels de haute qualité pour des démos produits sans shooting coûteux.'
    },
    {
        id: '40',
        title: 'ViralSky',
        category: 'IA',
        tags: ['Social Media', 'LinkedIn', 'Automation'],
        url: 'https://viralsky.ai/',
        description: 'Générateur de threads viraux pour LinkedIn et X à partir d\'actualités ou de contenus longs.',
        note: 'Optimise ma visibilité technique en transformant mes recherches en contenus engageants pour ma communauté.'
    },
    {
        id: '41',
        title: 'SkySnail UI',
        category: 'IA',
        tags: ['Design', 'Social Media', 'Marketing'],
        url: 'https://skysnail.com/',
        description: 'Spécialiste de la génération de hooks et de vignettes à fort taux de clic via l\'IA.',
        note: 'Excellent pour booster le CTR de mes présentations et posts de veille technologique.'
    },
    {
        id: '42',
        title: 'Text Blaze',
        category: 'Architecture',
        tags: ['Productivity', 'Automation', 'Chrome'],
        url: 'https://blaze.today/',
        description: 'Automatisation de la saisie répétitive via des snippets intelligents et dynamiques.',
        note: 'Un gain de temps massif pour documenter les projets et répondre aux sollicitations récurrentes.'
    },
    {
        id: '43',
        title: 'Dumme AI Video',
        category: 'IA',
        tags: ['Video', 'Shorts', 'Automation'],
        url: 'https://dumme.com/',
        description: 'Extraction automatique de moments viraux de vidéos longues pour formats Shorts, Reels et TikTok.',
        note: 'Idéal pour recycler mes longs tutos techniques en formats d\'apprentissage courts et percutants.'
    },
    {
        id: '44',
        title: 'RestorePhotos.io',
        category: 'IA',
        tags: ['AI', 'Photo', 'Restoration'],
        url: 'https://restorephotos.io/',
        description: 'Outil open-source de restauration de photos anciennes ou floues utilisant l\'IA haute fidélité.',
        note: 'Démonstration parfaite de la puissance des modèles Generative Adversarial Networks (GAN) appliqués à l\'image.'
    },
    {
        id: '45',
        title: 'AI Lawyer',
        category: 'IA',
        tags: ['Legal', 'Automation', 'AI'],
        url: 'https://ailawyer.pro/',
        description: 'Simplification de documents juridiques complexes et réponses instantanées en langage naturel.',
        note: 'Précieux pour décrypter rapidement des contrats de freelance ou des licences open-source complexes.'
    },
    {
        id: '46',
        title: 'Vribble',
        category: 'IA',
        tags: ['Voice', 'Note-taking', 'Summarization'],
        url: 'https://vribble.com/',
        description: 'Assistant vocal transformant les notes audio en résumés structurés et listes d\'actions.',
        note: 'La solution ultime pour capturer des pensées architecturales en mobilité et les transformer en roadmap.'
    },
    {
        id: '47',
        title: 'Snack Prompt Lib',
        category: 'IA',
        tags: ['Prompt Engineering', 'Library', 'Community'],
        url: 'https://snackprompt.com/',
        description: 'Bibliothèque communautaire massive de prompts optimisés pour ChatGPT et Claude.',
        note: 'Ma source d\'inspiration pour affiner mes interactions avec les assistants de codage et de recherche.'
    },
    {
        id: '48',
        title: 'Hacker AI (Offensive 360)',
        category: 'IA',
        tags: ['Security', 'AI', 'Code Audit', 'CyberSecurity'],
        url: 'https://offensive360.com/one-time-scan/',
        description: 'Scanner de vulnérabilités alimenté par l\'IA qui audite le code source pour détecter les failles critiques (RCE, SQLi, LFI).',
        note: 'Un outil vital pour automatiser la sécurité offensive dans mes architectures et garantir la robustesse du code avant production.',
        image: '/portfolio/images/resources/hacker-ai.png'
    },
    {
        id: '49',
        title: 'Best Free AI Websites',
        category: 'IA',
        tags: ['AI', 'Directory', 'Free Tools', 'Platform'],
        url: 'https://bestfreeaiwebsites.com/all-tools/',
        description: 'La plus grande bibliothèque de plateformes et d\'outils IA gratuits, classés par cas d\'usage.',
        note: 'Ma source principale pour la veille technologique sur les nouveaux modèles et services IA émergents.'
    },
    {
        id: '50',
        title: 'Storyset',
        category: 'UX',
        tags: ['Illustrations', 'Animations', 'Vector', 'Free'],
        url: 'https://storyset.com/',
        description: 'Bibliothèque exhaustive d\'illustrations vectorielles personnalisables avec éditeur d\'animation intégré.',
        note: 'L\'outil parfait pour donner de la vie aux interfaces avec des illustrations cohérentes et animées.',
        image: '/portfolio/images/resources/storyset.png'
    },
    {
        id: '51',
        title: 'Abacus AI Enterprise',
        category: 'IA',
        tags: ['AI', 'MLOps', 'Predictive'],
        url: 'https://abacus.ai/',
        description: 'Plateforme d\'IA prédictive et de ML opérationnel de bout en bout pour les entreprises.',
        note: 'Une référence pour l\'IA industrielle. Leur capacité à entraîner des modèles personnalisés est un atout architectural majeur.'
    },
    {
        id: '52',
        title: 'Runway Gen-3 Alpha',
        category: 'IA',
        tags: ['Video', 'GenAI', 'Creative'],
        url: 'https://runwayml.com/',
        description: 'Suite d\'outils créatifs IA de pointe pour la génération et l\'édition de vidéos professionnelles.',
        note: 'La frontière entre design et vidéo s\'efface. Runway est l\'outil ultime pour créer des mockups animés ultra-réalistes.'
    },
    {
        id: '53',
        title: 'HeyGen Video AI',
        category: 'IA',
        tags: ['Video', 'Avatar', 'Translation'],
        url: 'https://www.heygen.com/',
        description: 'Plateforme de génération de vidéos d\'avatars IA et de traduction vidéo avec synchronisation labiale.',
        note: 'Un outil puissant pour localiser des tutoriels d\'applications mobiles et humaniser les interactions numériques.'
    },
    {
        id: '54',
        title: 'Framer Web Design',
        category: 'Frontend',
        tags: ['Web Design', 'No-Code', 'Animations'],
        url: 'https://www.framer.com/',
        description: 'Outil de design et de publication web permettant de transformer des maquettes en sites haut de gamme sans code.',
        note: 'Le pont parfait entre le design haute fidélité et la production web. Leur gestion des animations est exemplaire.'
    },
    {
        id: '55',
        title: 'Zapier Automation',
        category: 'Backend',
        tags: ['Automation', 'Integrations', 'Workflow'],
        url: 'https://zapier.com/',
        description: 'Leader de l\'automatisation de workflows connectant plus de 6000 applications entre elles.',
        note: 'L\'indispensable "colle" du web. Maîtriser Zapier permet d\'orchestrer des écosystèmes entiers sans infrastructure lourde.'
    },
    {
        id: '56',
        title: 'Gamma AI Presentation',
        category: 'IA',
        tags: ['AI', 'Presentation', 'Interactive'],
        url: 'https://gamma.app/',
        description: 'Générateur de présentations, documents et pages web interactifs via l\'IA en quelques secondes.',
        note: 'Un game-changer pour les revues de design. Permet de transformer une idée brute en support de présentation premium instantanément.'
    },
    {
        id: '57',
        title: 'Jasper AI Copy',
        category: 'IA',
        tags: ['AI', 'Content', 'Enterprise'],
        url: 'https://www.jasper.ai/',
        description: 'Copilote IA pour les équipes marketing, spécialisé dans la rédaction de contenus longs et stratégiques.',
        note: 'Outil idéal pour structurer des argumentaires techniques et de la documentation projet de haute qualité.'
    },
    {
        id: '58',
        title: 'Quillbot Refiner',
        category: 'Architecture',
        tags: ['Writing', 'Refining', 'Grammar'],
        url: 'https://quillbot.com/',
        description: 'Assistant de rédaction polyvalent pour la paraphrase, la correction grammaticale et le résumé de texte.',
        note: 'Mon allié pour polir la documentation technique et garantir une clarté absolue dans les communications complexes.'
    },
    {
        id: '59',
        title: 'Otter.ai Meetings',
        category: 'Architecture',
        tags: ['Productivity', 'Notes', 'Meetings'],
        url: 'https://otter.ai/',
        description: 'Service de transcription et de prise de notes automatisée pour les réunions et entretiens.',
        note: 'Essentiel pour ne perdre aucun détail lors des phases de recueil de besoins et de cadrage architectural.'
    },
    {
        id: '61',
        title: 'Chatbase Custom AI',
        category: 'IA',
        tags: ['AI', 'Chatbot', 'Knowledge'],
        url: 'https://www.chatbase.co/',
        description: 'Permet de créer un chatbot personnalisé entraîné sur vos propres données en quelques minutes.',
        note: 'La solution la plus simple pour intégrer une base de connaissances interactive dans n\'importe quel produit web ou mobile.'
    },
    {
        id: '60',
        title: 'Midjourney Art',
        category: 'IA',
        tags: ['AI', 'Art', 'Design'],
        url: 'https://www.midjourney.com/',
        description: 'Le modèle de génération d\'images par IA le plus esthétique et créatif du marché.',
        note: 'Ma source infinie d\'inspiration pour les concepts d\'UI et les compositions visuelles de haute volée.'
    },
    {
        id: '62',
        title: 'freeCodeCamp YouTube',
        category: 'Architecture',
        tags: ['Learning', 'Fullstack', 'Open Source'],
        url: 'https://www.youtube.com/@freecodecamp',
        description: 'La référence mondiale pour apprendre le code gratuitement via des cours complets de plusieurs heures.',
        note: 'Une université du savoir accessible à tous. Leurs cours sur l\'architecture système et le cloud sont d\'une valeur inestimable.'
    },
    {
        id: '63',
        title: 'The Net Ninja',
        category: 'Frontend',
        tags: ['Web Dev', 'Modern JS', 'Firebase'],
        url: 'https://www.youtube.com/@NetNinja',
        description: 'Tutoriels web ultra-pédagogiques sur les frameworks modernes (React, Vue, Flutter).',
        note: 'La clarté de ses explications sur les concepts complexes comme les hooks ou la gestion d\'état est inégalée.'
    },
    {
        id: '64',
        title: 'Traversy Media',
        category: 'Frontend',
        tags: ['Web Development', 'Career', 'Tutorials'],
        url: 'https://www.youtube.com/@TraversyMedia',
        description: 'Cours de référence pour les développeurs web, des fondamentaux aux technologies les plus récentes.',
        note: 'Un mentor pour toute une génération de développeurs. Ses "Crash Courses" sont parfaits pour une montée en compétence rapide.'
    },
    {
        id: '65',
        title: 'Academind (Max Schwarzmüller)',
        category: 'Frontend',
        tags: ['Frameworks', 'React', 'Angular'],
        url: 'https://www.youtube.com/@academind',
        description: 'Analyses profondes et tutoriels sur les frameworks JS et les meilleures pratiques de développement.',
        note: 'Max va au-delà du "comment" pour expliquer le "pourquoi". Essentiel pour une compréhension architecturale fine.'
    },
    {
        id: '66',
        title: 'NetworkChuck',
        category: 'Architecture',
        tags: ['Networking', 'Cybersecurity', 'Cloud'],
        url: 'https://www.youtube.com/@NetworkChuck',
        description: 'Démystifie les réseaux, la cybersécurité et le cloud avec une énergie communicative.',
        note: 'Comprendre l\'infrastructure est vital pour un architecte. Chuck rend ces sujets complexes passionnants et actionnables.'
    },
    {
        id: '67',
        title: 'Programming with Mosh',
        category: 'Architecture',
        tags: ['Clean Code', 'Software Engineering', 'Skills'],
        url: 'https://www.youtube.com/@programmingwithmosh',
        description: 'Focus sur le code propre, les algorithmes et les fondamentaux de l\'ingénierie logicielle.',
        note: 'Ses conseils sur la "Clean Architecture" et la structure du code influencent directement mes standards de qualité.'
    },
    {
        id: '68',
        title: 'DesignCourse (Gary Simon)',
        category: 'UX',
        tags: ['UI/UX', 'Design for Devs', 'Visuals'],
        url: 'https://www.youtube.com/@DesignCourse',
        description: 'Apprendre le design d\'interface spécifiquement pour les développeurs.',
        note: 'L\'outil indispensable pour muscler mon oeil critique et créer des UI qui ne sont pas seulement fonctionnelles, mais magnifiques.'
    },
    {
        id: '69',
        title: 'Sentdex (Python & ML)',
        category: 'Backend',
        tags: ['Python', 'AI', 'Machine Learning'],
        url: 'https://www.youtube.com/@sentdex',
        description: 'La référence Python pour le Machine Learning, la Data Science et la programmation avancée.',
        note: 'Une mine d\'or pour explorer l\'IA sous le capot et implémenter mes propres modèles backend.'
    },
    {
        id: '70',
        title: 'LiveOverflow Security',
        category: 'Architecture',
        tags: ['Cybersecurity', 'Reverse Engineering', 'Hacking'],
        url: 'https://www.youtube.com/@LiveOverflow',
        description: 'Exploration fascinante de la cybersécurité et du hacking au-delà des bases.',
        note: 'Apprendre à penser comme un attaquant pour construire des architectures défensives impénétrables.'
    },
    {
        id: '71',
        title: 'A Cloud Guru (Pluralsight)',
        category: 'Architecture',
        tags: ['Cloud', 'AWS', 'Azure'],
        url: 'https://www.youtube.com/@ACloudGuru',
        description: 'Le leader de la formation Cloud, spécialisé dans les certifications AWS, Azure et GCP.',
        note: 'Ma source pour rester à la pointe des services Cloud natifs et des architectures distribuées modernes.'
    },
    {
        id: '72',
        title: 'Stripe Payments',
        category: 'Backend',
        tags: ['Payments', 'API', 'Fintech'],
        url: 'https://stripe.com/',
        description: 'Infrastructure de paiement pour Internet, offrant les API les plus robustes et scalables du marché.',
        note: 'Le standard absolu pour l\'intégration de paiements. Leur documentation est une leçon de design d\'API.'
    },
    {
        id: '73',
        title: 'Shopify Platform',
        category: 'Architecture',
        tags: ['E-commerce', 'SaaS', 'Commerce'],
        url: 'https://www.shopify.com/',
        description: 'La plateforme de commerce tout-en-un la plus puissante pour créer et gérer une boutique en ligne.',
        note: 'Une architecture e-commerce mature et extensible. Indispensable pour comprendre les systèmes de vente à grande échelle.'
    },
    {
        id: '74',
        title: 'ClickUp productivity',
        category: 'Architecture',
        tags: ['Productivity', 'Project Management', 'SaaS'],
        url: 'https://clickup.com/',
        description: 'L\'application tout-en-un pour les tâches, les documents et la gestion de projet complexe.',
        note: 'Mon centre de commande pour orchestrer mes développements et maintenir une roadmap claire et agile.'
    },
    {
        id: '75',
        title: 'Brevo (Sendinblue)',
        category: 'Backend',
        tags: ['Marketing', 'Emailing', 'Automation'],
        url: 'https://www.brevo.com/',
        description: 'Plateforme complète de CRM suite incluant emailing transactionnel et marketing automation.',
        note: 'Ma solution de prédilection pour l\'envoi de notifications et la gestion des flux transactionnels dans mes applications.'
    },
    {
        id: '76',
        title: 'Godly Design',
        category: 'UX',
        tags: ['Design', 'Inspiration', 'Web Design'],
        url: 'https://godly.website/',
        description: 'Curateur des meilleurs designs web interactifs et animés du monde entier.',
        note: 'Une source constante de "wow" pour repousser les limites de mes propres interfaces utilisateur.'
    },
    {
        id: '77',
        title: 'Canva Pro',
        category: 'UX',
        tags: ['Design', 'Graphic', 'Social Media'],
        url: 'https://www.canva.com/',
        description: 'Outil de design graphique intuitif permettant de créer des visuels professionnels sans expertise complexe.',
        note: 'Parfait pour prototyper rapidement des assets marketing ou des illustrations de haute qualité pour mes projets.'
    },
    {
        id: '78',
        title: 'Google Trends',
        category: 'Architecture',
        tags: ['Data', 'Market', 'Trends'],
        url: 'https://trends.google.com/',
        description: 'Outil d\'analyse des recherches Google pour identifier les tendances et le comportement des utilisateurs.',
        note: 'Indispensable pour de la veille stratégique et valider la pertinence technologique de mes futures architectures.'
    },
    {
        id: '79',
        title: 'Calendly Automation',
        category: 'Architecture',
        tags: ['Productivity', 'Scheduling', 'Automation'],
        url: 'https://calendly.com/',
        description: 'Plateforme d\'automatisation de planification de rendez-vous simple et élégante.',
        note: 'Réduit drastiquement la friction dans mes échanges professionnels et optimise mon funnel de conversion.'
    },
    {
        id: '80',
        title: 'Moz SEO Analytics',
        category: 'Architecture',
        tags: ['SEO', 'Analytics', 'Marketing'],
        url: 'https://moz.com/',
        description: 'Suite complète d\'outils d\'analyse SEO pour améliorer la visibilité et le classement des sites web.',
        note: 'L\'approche mathématique et analytique du SEO. Crucial pour garantir que mes réalisations sont visibles par leur audience cible.'
    },
    {
        id: '81',
        title: 'React Docs',
        category: 'Frontend',
        tags: ['Framework', 'JavaScript', 'UI'],
        url: 'https://react.dev/',
        description: 'La bibliothèque pour les interfaces utilisateur web et natives.',
        note: 'Ma référence pour construire des composants réactifs et performants.',
        image: '/portfolio/images/resources/react-docs.png'
    },
    {
        id: '82',
        title: 'Next.js Docs',
        category: 'Frontend',
        tags: ['Framework', 'React', 'Fullstack'],
        url: 'https://nextjs.org/docs',
        description: 'Le framework React pour le web, optimisé pour la production.',
        note: 'Indispensable pour le rendu côté serveur et les performances web.',
        image: '/portfolio/images/resources/nextjs-docs.png'
    },
    {
        id: '83',
        title: 'Vue.js Docs',
        category: 'Frontend',
        tags: ['Framework', 'JavaScript', 'Progressive'],
        url: 'https://vuejs.org/',
        description: 'Le framework JavaScript progressif pour construire des interfaces web.',
        note: 'Un équilibre parfait entre simplicité et puissance architecturale.',
        image: '/portfolio/images/resources/vuejs-docs.png'
    },
    {
        id: '84',
        title: 'Vite Docs',
        category: 'Frontend',
        tags: ['Build Tool', 'Development', 'Fast'],
        url: 'https://vitejs.dev/',
        description: 'Outil de build frontend de nouvelle génération, ultra-rapide.',
        note: 'Mon choix par défaut pour un cycle de développement fluide et rapide.',
        image: '/portfolio/images/resources/vite-docs.png'
    },
    {
        id: '85',
        title: 'Web.dev (Google)',
        category: 'Frontend',
        tags: ['Best Practices', 'Performance', 'Web'],
        url: 'https://web.dev/',
        description: 'Conseils de Google pour créer des expériences web modernes et performantes.',
        note: 'Ma source pour les standards de performance et d\'accessibilité.',
        image: '/portfolio/images/resources/web-dev.png'
    },
    {
        id: '86',
        title: 'Google Fonts',
        category: 'UX',
        tags: ['Typography', 'Design', 'Fonts'],
        url: 'https://fonts.google.com/',
        description: 'Bibliothèque massive de polices de caractères gratuites et open-source.',
        note: 'Le fondement de l\'identité visuelle et de la lisibilité de mes projets.',
        image: '/portfolio/images/resources/google-fonts.png'
    },
    {
        id: '87',
        title: 'Inter Font',
        category: 'UX',
        tags: ['Typography', 'Design', 'UI'],
        url: 'https://rsms.me/inter/',
        description: 'Une famille de polices de caractères soigneusement conçue pour les interfaces informatiques.',
        note: 'Ma police préférée pour une UI propre, moderne et hautement lisible.',
        image: '/portfolio/images/resources/inter-font.png'
    },
    {
        id: '88',
        title: 'Font Awesome',
        category: 'UX',
        tags: ['Icons', 'Design', 'SVG'],
        url: 'https://fontawesome.com/',
        description: 'L\'ensemble d\'icônes et d\'outils le plus populaire au monde.',
        note: 'Une bibliothèque d\'icônes exhaustive pour enrichir visuellement chaque interface.',
        image: '/portfolio/images/resources/fontawesome.png'
    },
    {
        id: '89',
        title: 'Flaticon',
        category: 'UX',
        tags: ['Icons', 'Design', 'Assets'],
        url: 'https://www.flaticon.com/',
        description: 'La plus grande base de données d\'icônes vectorielles gratuites au monde.',
        note: 'Idéal pour trouver des illustrations et des icônes thématiques variées.',
        image: '/portfolio/images/resources/flaticon.png'
    },
    {
        id: '90',
        title: 'ChatGPT (OpenAI)',
        category: 'IA',
        tags: ['AI', 'LLM', 'Productivity'],
        url: 'https://chatgpt.com/',
        description: 'Modèle de langage polyvalent pour le texte, le code et l\'analyse.',
        note: 'Mon assistant quotidien pour dégrossir des concepts et accélérer la rédaction.',
        image: '/portfolio/images/resources/chatgpt.png'
    },
    {
        id: '91',
        title: 'JSON Data AI',
        category: 'IA',
        tags: ['AI', 'API', 'JSON'],
        url: 'https://www.jsondataai.com/',
        description: 'Génération de endpoints API et de données JSON via des prompts IA.',
        note: 'Un outil brillant pour prototyper rapidement des backends et simuler des structures de données complexes.',
        image: '/portfolio/images/resources/jsondataai.png'
    },
    {
        id: '92',
        title: 'Unblast Templates',
        category: 'UX',
        tags: ['Design', 'Templates', 'Assets'],
        url: 'https://unblast.com/templates/',
        description: 'Sélection premium de mockups, polices et templates gratuits pour designers.',
        note: 'Une ressource de premier choix pour trouver des assets de haute qualité et professionnaliser mes présentations de projets.',
        image: '/portfolio/images/resources/unblast.png'
    },
    {
        id: '93',
        title: 'AI Agent Directory',
        category: 'IA',
        tags: ['IA', 'Agents', 'Marketplace', 'Automation'],
        url: 'https://aiagents.directory/',
        description: 'Répertoire complet pour découvrir et intégrer les meilleurs agents d\'IA du marché.',
        note: 'Une véritable mine d\'or pour automatiser des flux de travail complexes et explorer le futur des agents autonomes.',
        image: '/portfolio/images/resources/ai-agents-directory.png'
    },
    {
        id: '94',
        title: 'AI Agents Directory & Marketplace',
        category: 'IA',
        tags: ['IA', 'Marketplace', 'Agents', 'Skills'],
        url: 'https://aiagentsdirectory.com/',
        description: 'Place de marché d\'agents IA spécialisée dans les compétences (skills) et les outils interactifs.',
        note: 'Se distingue par son AArena et sa collection de skills directement installables pour booster ses propres agents.',
        image: '/portfolio/images/resources/ai-agents-directory-com.png'
    },
    {
        id: '95',
        title: 'Tugan.ai - Content Gen',
        category: 'IA',
        tags: ['AI', 'Copywriting', 'Content Creation'],
        url: 'https://www.tugan.ai/fr',
        description: 'Transformez vos contenus existants (vidéos, blogs) en posts originaux pour les réseaux sociaux grâce à l\'IA.',
        note: 'L\'outil indispensable pour recycler son expertise technique en contenus marketing percutants et originaux.'
    },
    {
        id: '96',
        title: 'Grok (xAI)',
        category: 'IA',
        tags: ['AI', 'LLM', 'Real-time', 'X'],
        url: 'https://grok.com',
        description: 'Intelligence artificielle conversationnelle développée par xAI, intégrée à la plateforme X pour une compréhension en temps réel.',
        note: 'L\'accès aux informations en temps réel sur l\'écosystème tech via X en fait un outil de veille unique.',
        image: '/portfolio/images/resources/grok.png'
    }
];













