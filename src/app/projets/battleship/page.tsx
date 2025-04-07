function Battleship() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projet : Jeu de Bataille Navale en Local</h1>
      <p className="text-gray-500 mb-2">Par Eloane / Mars 2025</p>
      <a
        href="https://gitlab.com/elo.ane.ducrocq/projet-battleship-full-stack.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-4 inline-block"
      >
        ▶️ Lien vers le dépôt GitLab du projet
      </a>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Durée du projet</h2>
      <p>5-6 jours</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Travail en binôme</h2>
      <ul className="list-disc ml-6">
        <li><strong>Moi :</strong> Développement du Front-end (HTML, CSS, JavaScript)</li>
        <li><strong>Partenaire :</strong> Gestion du Back-end (PHP, SQL)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Objectif du projet</h2>
      <p>
        Développer un jeu de Bataille Navale en local en 5 jours, avec une interface simple et fonctionnelle.
        L’objectif était de proposer une version jouable et de gérer les scores, malgré le temps limité.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies utilisées</h2>
      <ul className="list-disc ml-6">
        <li>Front-end : HTML, CSS, JavaScript</li>
        <li>Back-end : PHP, SQL</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Fonctionnalités principales</h2>
      <ul className="list-disc ml-6">
        <li>✅ Grille fixe générée dans le code (en raison du temps limité)</li>
        <li>✅ Mode tour par tour entre les joueurs</li>
        <li>✅ Affichage des résultats avec tirs réussis (❌) et ratés (⚪)</li>
        <li>✅ Enregistrement des scores dans une base de données SQL</li>
        <li>✅ Fonctionnement local avec rafraîchissement des données</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Déroulement du projet</h2>
      <ul className="list-disc ml-6">
        <li>📌 <strong>Jour 1-2 :</strong> Création du design et de la grille fixe en HTML/CSS</li>
        <li>📌 <strong>Jour 3 :</strong> Développement de la logique de tir en JavaScript</li>
        <li>📌 <strong>Jour 4 :</strong> Ajout de PHP et SQL pour la gestion des scores</li>
        <li>📌 <strong>Jour 5 :</strong> Tests et corrections pour assurer un bon déroulement de la partie</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Difficultés rencontrées</h2>
      <ul className="list-disc ml-6">
        <li>⚠ Pas assez de temps pour un placement dynamique des bateaux (Solution : grille pré-construite)</li>
        <li>⚠ Problème de rafraîchissement des tours (Solution : gestion en PHP côté serveur)</li>
        <li>⚠ Mode de jeu limité à un fonctionnement local</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
      <p>
        En seulement 5 jours, nous avons réussi à créer un jeu fonctionnel, bien que limité. Avec plus de temps,
        nous aurions ajouté de nombreuses fonctionnalités supplémentaires telles qu'un mode en ligne, un placement libre
        des bateaux et des animations pour rendre l’expérience plus immersive.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🚀 Améliorations possibles</h2>
      <ul className="list-disc ml-6">
        <li>Ajouter un mode en ligne pour affronter d’autres joueurs</li>
        <li>Permettre un placement libre des bateaux au début de la partie</li>
        <li>Ajouter des animations et effets pour une expérience plus immersive</li>
      </ul>
    </div>
  );
}

export default Battleship;
