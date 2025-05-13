import {ProjectType} from "@/types/projects";

export const PROJECT_CATEGORIES = {
    JEU: {
        name: "Jeu",
        color: {
            tag: "tag-jeu",
            hover: "group-hover:text-teal-600",
            arrow: "text-teal-500",
        }
    },
    MOBILE: {
        name: "Mobile",
        color: {
            tag: "tag-mobile",
            hover: "group-hover:text-green-600",
            arrow: "text-green-500",
        }
    },
    WEB: {
        name: "Web",
        color: {
            tag: "tag-purple",
            hover: "group-hover:text-purple-600",
            arrow: "text-purple-500",
        }
    },
    FULLSTACK: {
        name: "Web Full-Stack",
        color: {
            tag: "tag-web",
            hover: "group-hover:text-indigo-600",
            arrow: "text-indigo-500",
        }
    }
};

export const TECH_STACK_TAGS = {
    JAVA: {name: "Java", tagClass: "tag-java-tech"},
    JAVAFX: {name: "JavaFX", tagClass: "tag-javafx-tech"},
    POO: {name: "POO", tagClass: "tag-POO-tech"},
    GDEVELOP: {name: "Gdevelop", tagClass: "tag-Gdevelop-tech"},
    JS: {name: "JavaScript", tagClass: "tag-JS-tech"},
    HTML: {name: "HTML", tagClass: "tag-HTML-tech"},
    CSS: {name: "CSS", tagClass: "tag-CSS-tech"},
    MVC: {name: "MVC", tagClass: "tag-MVC-tech"},
    PHP: {name: "PHP", tagClass: "tag-PHP-tech"},
    DJANGO: {name: "Django", tagClass: "tag-django-tech"},
    API: {name: "API REST", tagClass: "tag-api-tech"},
    SQL: {name: "SQL", tagClass: "tag-sql-tech"},
    PYTHON: {name: "Python", tagClass: "tag-python-tech"}
};

export const PROJECTS: ProjectType[] = [
    {
        slug: "pokemon",
        title: "Pokémon",
        description: "Création d'un jeu Pokémon combinant la sélection de Pokemon jusqu'au combat contre une IA.",
        minicard: {
            icon: "🎮",
            tech: "Java, JavaFX"
        },
        image: {
            url: "/projets/pokemon.png",
            alt: "pokemon"
        },
        links: {
            gitlab: "https://gitlab.com/agathe3253302/pokemon_java_agatheelo.git"
        },
        category: PROJECT_CATEGORIES.JEU,
        techStack: [
            TECH_STACK_TAGS.JAVA,
            TECH_STACK_TAGS.JAVAFX,
            TECH_STACK_TAGS.POO
        ],
        authors: "Eloane & Agathe",
        date: "Mars 2025",
        duration: "1 semaine intensive",
        context: "On devait créer un jeu Pokémon, avec des combats au tour par tour où le joueur affronte une IA. Le but était de concevoir un système stratégique, où chaque Pokémon a des caractéristiques uniques, et où la gestion de l'équipe et le choix des attaques sont essentiels.",
        distribution: [
            {name: "Eloane & Agathe", role: "Développement, Interface, IA et Design"}
        ],
        concept: "Le jeu propose une expérience de combat Pokémon où le joueur choisit un Pokémon et l'affronte contre une IA dans un combat au tour par tour. Chaque Pokémon possède des attaques variées, effets, objets, et la victoire se décide en fonction de la stratégie utilisée.",
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
        conclusion: "Ce projet a renforcé nos compétences en POO et en développement graphique, tout en nous préparant à gérer des contraintes de temps et des défis techniques importants."
    },
    {
        slug: "grow",
        title: "Grow",
        description: "Réalisation d'un jeu NoCode en 48 heures",
        minicard: {
            icon: "🎮",
            tech: "GDevelop"
        },
        image: {
            url: "/projets/grow.png",
            alt: "grow"
        },
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet-grow.git",
            demo: {
                url: "https://gd.games/games/b7871b30-2357-4011-95b7-ac84b90d9c4c",
                description: "Jouer au jeu « Grow » sur GDevelop"
            }
        },
        category: PROJECT_CATEGORIES.MOBILE,
        techStack: [
            TECH_STACK_TAGS.GDEVELOP
        ],
        authors: "Eloane et 5 autres membres",
        date: "18 mars 2025",
        duration: "48 heures",
        context: "Dans le cadre d'un challenge de 48 heures, notre équipe de 6 personnes (développeurs, graphiste, sound designer) a conçu un jeu intitulé « Grow » en utilisant GDevelop, un moteur no-code. L'objectif était de créer une expérience de jeu fluide et immersive en exploitant les possibilités offertes,ici par GDevelop pour gérer les mécaniques du gameplay sans coder.",
        distribution: [
            {name: "Game Design", role: "Définition des règles et des interactions"},
            {name: "Graphisme", role: "Dessins originaux assurant une identité visuelle unique"},
            {name: "Sound Design", role: "Conception sonore et bande-son immersive"},
            {name: "Développement", role: "Création des logiques avec les événements GDevelop"},
            {name: "Level Design", role: "Construction et équilibrage des niveaux"}
        ],
        concept: "\"Grow\" est un jeu 2D d'arcade où l'on incarne une plante qui grandit en attrapant les gouttes. Plus on grandit, plus le jeu accélère. Attention aux escargots : les attraper vous fait perdre des cœurs ! Un gameplay simple basé sur les réflexes, l'évolution et l'adaptation.",
        features: [
            {icon: "🧠", title: "Jeu de réflexe où il faut attraper les bons objets et éviter les mauvais"},
            {icon: "🌱", title: "Progression évolutive : la plante grandit au fil des bonnes actions"},
            {icon: "⚡", title: "Vitesse qui augmente progressivement pour plus de challenge"},
            {icon: "💎", title: "Bonus Etoile a attraper pour se protéger"},
            {icon: "🐌", title: "Musique pour différentes actions"}
        ],
        difficultiesEncountered: ["Le plus gros défi a été de respecter le délai très court de 48h tout en assurant une cohérence globale dans le gameplay, les graphismes et l'audio. La synchronisation des différents pôles (graphisme, son, gameplay) a demandé une vraie coordination."],
        conclusion: "Ce projet m'a permis de développer mes compétences en game design, en travail d'équipe et en gestion de projet dans un temps limité. L'utilisation de GDevelop m'a ouvert à des possibilités créatives sans barrière technique, tout en mettant l'accent sur la logique et l'ergonomie."
    },
    {
        slug: "habitudes",
        title: "Habitudes",
        description: "Création d'un site web de suivi d'habitudes quotidiennes avec statistiques, calendrier et visualisations des progrès pour atteindre les objectifs.",
        minicard: {
            icon: "📊",
            tech: "HTML, CSS, JS"
        },
        image: {
            url: "/projets/habitudes.png",
            alt: "habitudes"
        },
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet2_daily.git",
        },
        category: PROJECT_CATEGORIES.WEB,
        techStack: [
            TECH_STACK_TAGS.JS,
            TECH_STACK_TAGS.HTML,
            TECH_STACK_TAGS.CSS,
            TECH_STACK_TAGS.MVC
        ],
        authors: "Eloane",
        date: "Mars 2025",
        duration: "2 semaines",
        context: "Développer une application web interactive pour le suivi des habitudes quotidiennes. L'objectif était de créer une interface intuitive pour aider les utilisateurs à gérer leurs tâches quotidiennes, suivre leur progression et visualiser des statistiques claires à travers des graphiques.",
        distribution: [
            {
                name: "Développement",
                role: "Création de la logique du site avec JavaScript, gestion des données et interactions"
            },
            {name: "Interface utilisateur", role: "Design et implémentation de l'interface avec HTML/CSS"},
            {name: "Visualisation de données", role: "Intégration de Chart.js pour l'affichage des graphiques"}
        ],
        concept: "Le site permet aux utilisateurs de suivre leurs habitudes quotidiennes à travers une interface simple et fluide. L'objectif est de visualiser les progrès sur une période donnée grâce à un calendrier. Les utilisateurs peuvent ajouter, modifier ou supprimer des habitudes, ainsi qu'analyser leurs statistiques à l'aide de graphiques interactifs.",
        features: [
            {icon: "🎯", title: "Développement de la logique de gestion des habitudes avec une architecture MVC"},
            {icon: "🗓️", title: "Création d'un calendrier interactif pour suivre les habitudes au quotidien"},
            {icon: "🎨", title: "Conception d'une interface simple et épurée en HTML/CSS"},
            {icon: "📊", title: "Intégration de Chart.js pour afficher les statistiques sous forme de graphiques"},
            {icon: "🧪", title: "Tests pour s'assurer de la fluidité de l'expérience utilisateur"}
        ],
        difficultiesEncountered: [
            "Implémentation d'un calendrier dynamique fluide",
            "Affichage dynamique en JavaScript tout en maintenant de bonnes performances",
            "Intégration de Chart.js pour des graphiques clairs et interactifs"
        ],
        conclusion: "Ce projet m'a permis de renforcer mes compétences en JavaScript, en particulier en ce qui concerne l'architecture MVC et la gestion dynamique des données. Il a également permis d'explorer l'intégration de graphiques interactifs avec Chart.js. Cette expérience m'a appris à optimiser l'interface utilisateur tout en prenant en compte l'expérience de navigation sur différents appareils."
    },
    {
        slug: "battleship",
        title: "Battleship",
        description: "Jeu de bataille navale multijoueur avec interface moderne et IA avancée pour des parties stratégiques et immersives.",
        minicard: {
            icon: "⚓",
            tech: "HTML, CSS, JS, PHP"
        },
        image: {
            url: "/projets/battleship.png",
            alt: "battleship"
        },
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet-battleship-full-stack.git"
        },
        category: PROJECT_CATEGORIES.JEU,
        techStack: [
            TECH_STACK_TAGS.JS,
            TECH_STACK_TAGS.PHP,
            TECH_STACK_TAGS.HTML,
            TECH_STACK_TAGS.CSS
        ],
        authors: "Eloane et Nawfel",
        date: "Mars 2025",
        duration: "5-6 jours",
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
        slug: "dailyDev",
        title: "Daily Dev",
        description: "Reproduction de deux pages du site Daily Dev.",
        minicard: {
            icon: "📄",
            tech: "HTML, CSS"
        },
        image: {
            url: "/projets/dailyDev.png",
            alt: "Daily Dev"
        },
        links: {
            gitlab: "https://gitlab.com/elo.ane.ducrocq/projet-daily-dev-html-css.git"
        },
        category: PROJECT_CATEGORIES.WEB,
        techStack: [
            TECH_STACK_TAGS.HTML,
            TECH_STACK_TAGS.CSS
        ],
        authors: "Eloane",
        date: "Mars 2025",
        duration: "5 jours",
        context: "Reproduction de 2 pages du site Daily Dev en HTML et CSS dans un temps limité.",
        distribution: [
            {name: "Moi", role: "Développement Front-end (HTML, CSS)"},
            {name: "Partenaire", role: "Gestion du Back-end (PHP, SQL)"}
        ],
        concept: "Reproduire le design de 2 pages du site Daily Dev en respectant le design original.",
        features: [
            {icon: "📄", title: "Page d'accueil"},
            {icon: "📄", title: "Page de tags"}
        ],
        difficultiesEncountered: [
            "Respecter le design original",
            "Temps limité pour la réalisation"
        ],
        conclusion: "Projet formateur, j'ai appris à reproduire un design complexe en HTML et CSS."
    },
    {
        slug: "cheques",
        title: "Suivi de Chèques",
        description: "Développement d'un site full-stack pour la Métropole d'Orléans en 3 semaines, permettant aux structures de suivre les chèques attribués.",
        minicard: {
            icon: "💳",
            tech: "HTML, CSS, JS, Django, API, SQL, Python"
        },
        image: {
            url: "/projets/cheques.png",
            alt: "Suivi de Chèques"
        },
        links: {
            gitlab: "https://gitlab.com/kwasnikrayan45/projet_entreprise.git"
        },
        category: PROJECT_CATEGORIES.FULLSTACK,
        techStack: [
            TECH_STACK_TAGS.HTML,
            TECH_STACK_TAGS.CSS,
            TECH_STACK_TAGS.JS,
            TECH_STACK_TAGS.DJANGO,
            TECH_STACK_TAGS.API,
            TECH_STACK_TAGS.SQL,
            TECH_STACK_TAGS.PYTHON
        ],
        authors: "Eloane et 3 autres membres",
        date: "Mars 2025",
        duration: "3 semaines",
        context: "Projet entreprise pour la métropole d'Orléans. Le but était de créer un site de suivi de chèques pour les structures d'aide aux personnes en difficulté numérique.",
        distribution: [
            {name: "Moi", role: "Co-développement du front-end (HTML, CSS, JavaScript)"},
            {name: "Co-développeur", role: "Co-développement du front-end (HTML, CSS, JavaScript)"},
            {name: "Membre 1", role: "Développement back-end avec Django (API, SQL)"},
            {name: "Membre 2", role: "Développement back-end avec Django (API, SQL)"}
        ],
        concept: "Le site permet de gérer les chèques et utilisateurs, différencier les accès par rôles et exporter les données. Il repose sur une API robuste pour un usage fluide.",
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
        conclusion: "Projet formateur, nous avons appris à travailler en télétravail sur un vrai projet client, tout en développant nos compétences full-stack et en gestion d'équipe."
    }
];

export const PENDING_PROJECT = {
    icon: "⏳",
    title: "Nouveau Projet",
    description: "Un nouveau projet passionnant est en cours de développement. Restez à l'écoute !"
};