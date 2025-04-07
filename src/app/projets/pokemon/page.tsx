function Pokemon() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projet : Jeu de Combat Pokémon en Java</h1>
      <p className="text-gray-500 mb-2">Par Eloane & Agathe / Mars 2025</p>
      <a
        href="https://gitlab.com/agathe3253302/pokemon_java_agatheelo.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-4 inline-block"
      >
        ▶️ Lien vers le dépôt GitLab du projet
      </a>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Durée du projet</h2>
      <p>1 semaine</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies utilisées</h2>
      <ul className="list-disc ml-6">
        <li>Java</li>
        <li>JavaFX</li>
        <li>FXML</li>
        <li>CSS</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contexte du projet</h2>
      <p>
        Ce jeu de combat Pokémon a été conçu en une semaine en binôme. Il s’agit d’un système de combat au tour par tour dans lequel le joueur affronte une IA. L’objectif principal était de créer un jeu fonctionnel avec une interface graphique immersive.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Fonctionnalités principales</h2>
      <ul className="list-disc ml-6">
        <li>✅ Sélection et gestion d’une équipe de Pokémon</li>
        <li>✅ Combat au tour par tour avec attaques variées</li>
        <li>✅ Interface graphique avec animations JavaFX</li>
        <li>✅ Intelligence Artificielle de l’adversaire</li>
        <li>✅ Historique des actions affiché en temps réel</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Déroulement d’un combat</h2>
      <ol className="list-decimal ml-6">
        <li>Le joueur choisit son Pokémon de départ</li>
        <li>Le combat débute avec affichage des Pokémon</li>
        <li>Le joueur choisit une attaque disponible</li>
        <li>L’adversaire (IA) répond aléatoirement</li>
        <li>Le combat continue jusqu’à la victoire</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Challenges et difficultés</h2>
      <ul className="list-disc ml-6">
        <li>🔹 Gestion simplifiée des types et des attaques</li>
        <li>🔹 IA basique à améliorer pour plus de stratégie</li>
        <li>🔹 Interface efficace mais encore perfectible visuellement</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Pourquoi ce projet est intéressant ?</h2>
      <p>
        Il illustre notre maîtrise de la programmation orientée objet, du développement graphique avec JavaFX, ainsi que notre capacité à travailler en équipe et à produire un projet complet en un temps limité.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Prochaines améliorations</h2>
      <ul className="list-disc ml-6">
        <li>🚀 Ajouter des animations plus dynamiques</li>
        <li>🚀 Améliorer l’IA pour un gameplay plus stratégique</li>
        <li>🚀 Optimiser l’UI pour plus d'immersion et de lisibilité</li>
      </ul>
    </div>
  );
}

export default Pokemon;
