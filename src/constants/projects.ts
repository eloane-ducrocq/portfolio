type Project = {
    slug: string;
    title: string;
    image: string;
    links: {
        gitlab?: string;
        github?: string;
        demo?: {
            url: string;
            description: string;
        };
    };
    authors: string;
    date: string;
    duration: string;
    techStack: string[];
    context: string;
    distribution: {
        name: string;
        role: string;
    }[];
    concept: string;
    features: {
        icon: string;
        title: string;
    }[];
    difficultiesEncountered: string[];
    conclusion: string;
};

export const PROJECTS: Project[] = [
    {
        slug: "battleship",
        title: "Jeu de Bataille Navale en Local",
        image: "/projets/battleship.png",
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet-battleship-full-stack.git"
        },
        authors: "Eloane et Nawfel",
        date: "Mars 2025",
        duration: "5-6 jours",
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
        context: "Développement d'un jeu en binôme dans un temps limité.",
        distribution: [
            {name: "Moi", role: "Développement Front-end (HTML, CSS, JavaScript)"},
            {name: "Partenaire", role: "Back-end (PHP, SQL)"}
        ],
        concept: "Jeu de bataille navale en local avec gestion des scores.",
        features: [
            {icon: "🎮", title: "Mode tour par tour avec grille fixe"},
            {icon: "🎯", title: "Affichage des tirs réussis et ratés"},
            {icon: "💾", title: "Sauvegarde des scores en SQL"},
            {icon: "🔄", title: "Fonctionnement en local avec rafraîchissement"},
            {icon: "🏁", title: "Système de victoire et score final"}
        ],
        difficultiesEncountered: [
            "Temps limité",
            "Grille statique au lieu de placement dynamique",
            "Rafraîchissement serveur complexe en PHP",
            "Fonctionnement limité au local"
        ],
        conclusion: "Projet réussi dans les délais, expérience enrichissante malgré les contraintes techniques."
    },
    {
        slug: "cheques",
        title: "Développement d'un site de suivi de chèques full-stack",
        image: "/projets/cheques.png",
        links: {
            gitlab: "https://gitlab.com/kwasnikrayan45/projet_entreprise.git"
        },
        authors: "Eloane et 3 autres membres",
        date: "Mars 2025",
        duration: "3 semaines",
        techStack: ["HTML", "CSS", "JavaScript", "MVC", "Django", "API REST", "SQL"],
        context:
            "Projet entreprise pour la métropole d'Orléans. Le but était de créer un site de suivi de chèques pour les structures d’aide aux personnes en difficulté numérique.",
        distribution: [
            {name: "Moi", role: "Co-développement du front-end (HTML, CSS, JavaScript)"},
            {name: "Co-développeur", role: "Co-développement du front-end (HTML, CSS, JavaScript)"},
            {name: "Membre 1", role: "Développement back-end avec Django (API, SQL)"},
            {name: "Membre 2", role: "Développement back-end avec Django (API, SQL)"}
        ],
        concept:
            "Le site permet de gérer les chèques et utilisateurs, différencier les accès par rôles et exporter les données. Il repose sur une API robuste pour un usage fluide.",
        features: [
            {icon: "🧾", title: "Ajout et visualisation des chèques"},
            {icon: "📊", title: "Suivi des statuts et historique des chèques"},
            {icon: "🔍", title: "Gestion des structures et utilisateurs"},
            {icon: "🔐", title: "Connexion sécurisée avec rôles"},
            {icon: "📁", title: "Export des données pour administrateurs"}
        ],
        difficultiesEncountered: [
            "Charge de travail importante et nouvelles fonctionnalités en cours de projet",
            "Synchronisation complexe entre front-end et back-end",
            "Communication d'équipe difficile",
            "Manque de temps"
        ],
        conclusion:
            "Projet formateur, nous avons appris à travailler en télétravail sur un vrai projet client, tout en développant nos compétences full-stack et en gestion d’équipe."
    },
    {
        slug: "dailyDev",
        title: "Reproduction du site Daily Dev",
        image: "/projets/dailyDev.png",
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet-daily-dev-html-css.git"
        },
        authors: "Eloane",
        date: "Mars 2025",
        duration: "5 jours",
        techStack: ["HTML", "CSS"],
        context:
            "Reproduction de 2 pages du site Daily Dev en HTML et CSS dans un temps limité.",
        distribution: [
            {name: "Moi", role: "Développement Front-end (HTML, CSS)"},
            {name: "Partenaire", role: "Gestion du Back-end (PHP, SQL)"}
        ],
        concept:
            "Reproduire le design de 2 pages du site Daily Dev en respectant le design original.",
        features: [
            {icon: "📄", title: "Page d'accueil"},
            {icon: "📄", title: "Page de tags"}
        ],
        difficultiesEncountered: [
            "Respecter le design original",
            "Temps limité pour la réalisation"
        ],
        conclusion:
            "Projet formateur, j'ai appris à reproduire un design complexe en HTML et CSS."
    },
    {
        slug: "grow",
        title: "Projet No-Code : Jeu « Grow »",
        image: "/projets/grow.png",
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet-grow.git",
            demo: {
                url: "https://gd.games/games/b7871b30-2357-4011-95b7-ac84b90d9c4c",
                description: "Jouer au jeu « Grow » sur GDevelop"
            }
        },
        authors: "Eloane et 5 autres membres",
        date: "18 mars 2025",
        duration: "48 heures",
        techStack: ["GDevelop (No-Code)"],
        context: "Dans le cadre d&apos;un challenge de 48 heures, notre équipe de 6 personnes (développeurs, graphiste, sound designer) a conçu un jeu intitulé « Grow » en utilisant GDevelop, un moteur no-code. L&apos;objectif était de créer une expérience de jeu fluide et immersive en exploitant les possibilités offertes,ici par GDevelop pour gérer les mécaniques du gameplay sans coder.",
        distribution: [
            {
                name: "Game Design",
                role: "Définition des règles et des interactions",
            },
            {
                name: "Graphisme",
                role: "Dessins originaux assurant une identité visuelle unique",
            },
            {
                name: "Sound Design",
                role: "Conception sonore et bande-son immersive",
            },
            {
                name: "Développement",
                role: "Création des logiques avec les événements GDevelop",
            },
            {
                name: "Level Design",
                role: "Construction et équilibrage des niveaux",
            },
        ],
        concept: "&quot;Grow&quot; est un jeu 2D d&apos;arcade où l&apos;on incarne une plante qui grandit en attrapant les gouttes. Plus on grandit, plus le jeu accélère. Attention aux escargots : les attraper vous fait perdre des cœurs ! Un gameplay simple basé sur les réflexes, l&apos;évolution et l&apos;adaptation.",
        features: [
            {
                icon: "🧠",
                title: "Jeu de réflexe où il faut attraper les bons objets et éviter les mauvais",
            },
            {
                icon: "🌱",
                title: "Progression évolutive : la plante grandit au fil des bonnes actions"
            },
            {
                icon: "⚡",
                title: "Vitesse qui augmente progressivement pour plus de challenge"
            },
            {
                icon: "💎",
                title: "Bonus Etoile a attraper pour se protéger"
            },
            {
                icon: "🐌",
                title: "Musique pour différentes actions"
            }
        ],
        difficultiesEncountered: ["Le plus gros défi a été de respecter le délai très court de 48h tout en assurant une cohérence globale dans le gameplay, les graphismes et l&apos;audio. La synchronisation des différents pôles (graphisme, son, gameplay) a demandé une vraie coordination."],
        conclusion: "Ce projet m&apos;a permis de développer mes compétences en game design, en travail d&apos;équipe et en gestion de projet dans un temps limité. L&apos;utilisation de GDevelop m&apos;a ouvert à des possibilités créatives sans barrière technique, tout en mettant l&apos;accent sur la logique et l&apos;ergonomie."
    }, {
        slug: "habitudes",
        title: "Site de Suivi d'Habitudes",
        image: "/projets/habitudes.png",
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet2_daily.git",
        },
        authors: "Eloane",
        date: "Mars 2025",
        duration: "2 semaines",
        techStack: ["HTML", "CSS", "JavaScript (MVC)", "Chart.js"],
        context:
            "Développer une application web interactive pour le suivi des habitudes quotidiennes. L'objectif était de créer une interface intuitive pour aider les utilisateurs à gérer leurs tâches quotidiennes, suivre leur progression et visualiser des statistiques claires à travers des graphiques.",
        distribution: [
            {
                name: "Développement",
                role: "Création de la logique du site avec JavaScript, gestion des données et interactions",
            },
            {
                name: "Interface utilisateur",
                role: "Design et implémentation de l'interface avec HTML/CSS",
            },
            {
                name: "Visualisation de données",
                role: "Intégration de Chart.js pour l'affichage des graphiques",
            },
        ],
        concept:
            "Le site permet aux utilisateurs de suivre leurs habitudes quotidiennes à travers une interface simple et fluide. L'objectif est de visualiser les progrès sur une période donnée grâce à un calendrier. Les utilisateurs peuvent ajouter, modifier ou supprimer des habitudes, ainsi qu'analyser leurs statistiques à l'aide de graphiques interactifs.",
        features: [
            {
                icon: "🎯",
                title: "Développement de la logique de gestion des habitudes avec une architecture MVC",
            },
            {
                icon: "🗓️",
                title: "Création d'un calendrier interactif pour suivre les habitudes au quotidien",
            },
            {
                icon: "🎨",
                title: "Conception d'une interface simple et épurée en HTML/CSS",
            },
            {
                icon: "📊",
                title: "Intégration de Chart.js pour afficher les statistiques sous forme de graphiques",
            },
            {
                icon: "🧪",
                title: "Tests pour s'assurer de la fluidité de l'expérience utilisateur",
            },
        ],
        difficultiesEncountered: [
            "Implémentation d'un calendrier dynamique fluide",
            "Affichage dynamique en JavaScript tout en maintenant de bonnes performances",
            "Intégration de Chart.js pour des graphiques clairs et interactifs",
        ],
        conclusion:
            "Ce projet m'a permis de renforcer mes compétences en JavaScript, en particulier en ce qui concerne l'architecture MVC et la gestion dynamique des données. Il a également permis d'explorer l'intégration de graphiques interactifs avec Chart.js. Cette expérience m'a appris à optimiser l'interface utilisateur tout en prenant en compte l'expérience de navigation sur différents appareils.",
    }, {
        slug: "pokemon",
        title: "Jeu de Combat Pokémon en Java",
        image: "/projets/pokemon.png",
        links: {
            gitlab: "https://gitlab.com/agathe3253302/pokemon_java_agatheelo.git"
        },
        authors: "Eloane & Agathe",
        date: "Mars 2025",
        duration: "1 semaine intensive",
        techStack: ["Java", "JavaFX", "POO", "CSS"],
        context:
            "On devait créer un jeu Pokémon, avec des combats au tour par tour où le joueur affronte une IA. Le but était de concevoir un système stratégique, où chaque Pokémon a des caractéristiques uniques, et où la gestion de l’équipe et le choix des attaques sont essentiels.",
        distribution: [
            {name: "Eloane & Agathe", role: "Développement, Interface, IA et Design"}
        ],
        concept:
            "Le jeu propose une expérience de combat Pokémon où le joueur choisit un Pokémon et l'affronte contre une IA dans un combat au tour par tour. Chaque Pokémon possède des attaques variées, effets, objets, et la victoire se décide en fonction de la stratégie utilisée.",
        features: [
            {icon: "🎯", title: "Combat au tour par tour avec types de Pokémon"},
            {icon: "🎮", title: "Développement de l'IA pour attaquer le joueur"},
            {icon: "🎨", title: "Interface graphique animée avec JavaFX"},
            {icon: "🔊", title: "Historique des actions en temps réel"},
            {icon: "🧪", title: "Objets, effets, forces et faiblesses intégrés"}
        ],
        difficultiesEncountered: [
            "Temps très limité pour tout développer",
            "Gestion complexe des types de Pokémon et équilibrage des attaques",
            "Intégration des effets visuels avec JavaFX"
        ],
        conclusion:
            "Ce projet a renforcé nos compétences en POO et en développement graphique, tout en nous préparant à gérer des contraintes de temps et des défis techniques importants."
    }
];
