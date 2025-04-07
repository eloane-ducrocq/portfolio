function Habitudes() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projet : Site de Suivi d’Habitudes</h1>
      <p className="text-gray-500 mb-2">Par Eloane / Mars 2025</p>
      <a
        href="https://gitlab.com/elo.ane.ducrocq/projet2_daily.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-4 inline-block"
      >
        ▶️ Lien vers le dépôt GitLab du projet
      </a>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Durée du projet</h2>
      <p>2 semaines</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies utilisées</h2>
      <ul className="list-disc ml-6">
        <li>HTML / CSS</li>
        <li>JavaScript (architecture MVC)</li>
        <li>Chart.js</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Objectif du projet</h2>
      <p>
        Développer une application web interactive pour le suivi des habitudes quotidiennes. Le but est de proposer une interface intuitive pour gérer ses tâches, suivre ses progrès, et visualiser des statistiques claires via des graphiques.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Architecture MVC</h2>
      <ul className="list-disc ml-6">
        <li><strong>Modèle (Model) :</strong> Stockage local des données (habitudes, tâches, progression)</li>
        <li><strong>Vue (View) :</strong> Affichage dynamique et interface utilisateur épurée</li>
        <li><strong>Contrôleur (Controller) :</strong> Gestion des actions utilisateur : ajout, édition, suppression</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Fonctionnalités principales</h2>
      <ul className="list-disc ml-6">
        <li>✅ Création, modification et suppression d’habitudes</li>
        <li>✅ Affichage hebdomadaire des habitudes avec calendrier interactif</li>
        <li>✅ Recherche et filtrage d’habitudes</li>
        <li>✅ Suivi du temps d’écran</li>
        <li>✅ Graphiques dynamiques avec Chart.js</li>
        <li>✅ Stockage local pour conserver les données</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Déroulement du projet</h2>
      <ul className="list-disc ml-6">
        <li>📌 <strong>Semaine 1 :</strong> Mise en place du MVC, structure HTML/CSS, fonctionnalités de base</li>
        <li>📌 <strong>Semaine 2 :</strong> Calendrier dynamique, intégration de Chart.js, amélioration UI, tests</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Difficultés rencontrées</h2>
      <ul className="list-disc ml-6">
        <li>📌 Implémentation tardive du calendrier dynamique nécessitant une refonte partielle</li>
        <li>📌 Affichage dynamique fluide en JavaScript</li>
        <li>📌 Intégration de Chart.js pour des visualisations claires</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
      <p>
        Ce projet m’a permis de consolider mes connaissances en JavaScript avancé, en architecture MVC,
        et en visualisation de données avec Chart.js. Il m’a également appris à anticiper les interactions utilisateurs
        pour offrir une expérience fluide et utile.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🔗 Améliorations possibles</h2>
      <ul className="list-disc ml-6">
        <li>Ajouter de nouveaux types de graphiques</li>
        <li>Permettre l’export des données</li>
        <li>Intégrer un backend pour synchronisation multi-appareils</li>
      </ul>
    </div>
  );
}

export default Habitudes;
