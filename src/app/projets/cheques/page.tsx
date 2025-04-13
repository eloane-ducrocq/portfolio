'use client';

import '../page.css';
import Image from 'next/image';

function SuiviCheques() {
  return (
    <div className="project-container">
      {/* Blobs animés en background */}
      <div className="blob blob-1 animate-blob1" />
      <div className="blob blob-2 animate-blob2" />
      <div className="blob blob-3 animate-blob3" />
      <div className="blob blob-4 animate-blob4" />
      <div className="blob blob-5 animate-blob5" />
      <div className="blob blob-6 animate-blob6" />

      {/* Contenu principal du projet */}
      <div className="content-wrapper">
        {/* En-tête du projet */}
        <div className="project-header animate-fadeInUp">
          <h1>DÉVELOPPEMENT D'UN SITE DE SUIVI DE CHÈQUES FULL-STACK (2025)</h1>
          <p className="project-meta">
            Objectif : Développer un site en 3 semaines en équipe de 4 (2 front, 2 back)
            <br />
            Rôle : Co-développement du front-end et gestion du back-end avec Django et API REST
          </p>

          {/* Image de présentation et lien vers le code ou démo */}
          <div className="project-image-container">
            <Image
              src="/projets/cheques.png"
              alt="Capture d'écran du site de suivi de chèques"
              className="project-image"
              width={300}
              height={300}
            />
          </div>

          <div>
            <a
              href="https://gitlab.com/kwasnikrayan45/projet_entreprise.git"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <Image
                src="/photos/gitlab-svgrepo-com.svg"
                alt="GitLab Logo"
                width="20"
                height="20"
                className="c-white"
              />
              Voir le code sur GitLab
            </a>
          </div>
        </div>

        {/* Détails du projet */}
        <div className="grid-container">
          {/* Colonne de gauche */}
          <div className="space-y animate-fadeInUp delay-200">
            <div className="info-card">
              <h2>⏱️ Durée du projet</h2>
              <p>3 semaines</p>
            </div>

            <div className="info-card">
              <h2>💻 Environnement & Technologies</h2>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">MVC</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">API REST</span>
                <span className="tech-tag">SQL</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📄 Contexte du projet</h2>
              <p>
                Projet entreprise pour « Nous Métropoles Dorlenas » : réaliser un site de suivi
                de chèques destiné aux différentes structures d’aide aux personnes en difficulté.
                Ce projet full-stack visait à optimiser le suivi des chèques et améliorer
                la transparence pour les personnes concernées.
              </p>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="space-y animate-fadeInUp delay-400">
            <div className="info-card">
              <h2>👥 Répartition des rôles</h2>
              <div className="bullet-list">
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span>
                    <strong>Front-end :</strong> Co-développement du front (moi et Rayan)
                  </span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span>
                    <strong>Back-end :</strong> Gestion du back-end avec Django (Alexis et Agathe)
                  </span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Description du développement</h2>
              <p>
                Le développement du site a été complexe et chargé en défis. Dès le début, nous avions
                une charge de travail importante et nous devions adapter notre organisation en cours de route.
                Des fonctionnalités supplémentaires ont été identifiées après démarrage, ce qui a rendu
                l'intégration entre le front-end et le back-end particulièrement difficile. Malgré tous les
                obstacles et quelques dysfonctionnements initiaux, nous avons réussi à livrer un site opérationnel.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🚀 Bilan & Leçons apprises</h2>
            <p>
              Ce projet full-stack nous a permis de développer nos compétences en gestion de projet dans un environnement en équipe.
              La coordination entre le front et le back a été un réel challenge, mais il nous a également appris l'importance de la communication
              et de la flexibilité pour intégrer de nouvelles idées en cours de développement.
            </p>
          </div>
        </div>

        <div className="other-projects-card animate-fadeInUp delay-800">
          <h2>🔍 Découvrez mes autres projets</h2>
          <div className="projects-grid">
            <a href="../projets/autre-projet-1" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>💼</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Autre Projet 1</h3>
                <p className="project-card-tech">HTML, CSS, JS</p>
              </div>
            </a>
            <a href="../projets/autre-projet-2" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>📊</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Autre Projet 2</h3>
                <p className="project-card-tech">Django, API REST</p>
              </div>
            </a>
          </div>
        </div>

        {/* Appel à l'action Contact */}
        <div className="contact-container animate-fadeInUp delay-1000">
          <a href="../contact" className="contactButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Me contacter pour en savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}

export default SuiviCheques;
