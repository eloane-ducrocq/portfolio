function DailyDev() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Projet : Reproduction du site Daily Dev</h1>
      <p className="text-gray-500 mb-2">Par Eloane / Mars 2025</p>
      <a
        href="https://gitlab.com/elo.ane.ducrocq/projet-daily-dev-html-css.git"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline mb-4 inline-block"
      >
        ▶️ Lien vers le dépôt GitLab du projet
      </a>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Durée du projet</h2>
      <p>5 jours</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Technologies utilisées</h2>
      <ul className="list-disc ml-6">
        <li>HTML</li>
        <li>CSS (Flexbox, Media Queries)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contexte du projet</h2>
      <p>
        L’objectif était de reproduire deux pages du site Daily Dev : la page d’accueil et la page de tags. Le challenge consistait à respecter au maximum le design original tout en développant les pages en HTML et CSS en seulement 5 jours.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Objectifs et réalisations</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Page d’accueil :</strong> Structuration complète en HTML avec navigation, en-tête, articles et pied de page.
        </li>
        <li>
          <strong>CSS :</strong> Mise en page responsive grâce à Flexbox, animations sur les boutons et les liens pour améliorer l’interaction.
        </li>
        <li>
          <strong>Page de tags :</strong> Organisation claire des tags avec liens cliquables, responsive design via Flexbox et media queries.
        </li>
        <li>
          <strong>Responsive Design :</strong> Adaptation parfaite aux formats mobile, tablette et desktop.
        </li>
        <li>
          <strong>Optimisation :</strong> Amélioration des performances avec des ressources légères et bien structurées.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Difficultés rencontrées</h2>
      <p>
        Le principal défi a été de respecter le délai de 5 jours tout en assurant un design fidèle à l’original et une expérience utilisateur fluide sur tous les supports. Le responsive design a nécessité une attention particulière.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
      <p>
        Ce projet m’a permis de consolider mes bases en HTML et CSS, notamment en gestion de pages multiples et en conception responsive. Il m’a également appris à optimiser l’affichage pour une meilleure performance sur tous les écrans.
      </p>
    </div>
  );
}

export default DailyDev;
