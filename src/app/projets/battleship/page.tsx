'use client';

import '../page.css';
import Image from 'next/image';

function Battleship() {

  return (
    <div className="project-container">
      <div className="blob blob-1 animate-blob1" />
      <div className="blob blob-2 animate-blob2" />
      <div className="blob blob-3 animate-blob3" />
      <div className="blob blob-4 animate-blob4" />
      <div className="blob blob-5 animate-blob5" />
      <div className="blob blob-6 animate-blob6" />

      <div className="content-wrapper">
        <div className="project-header animate-fadeInUp">
          <h1>Jeu de Bataille Navale en Local</h1>
          <p className="project-meta">Par Eloane et Nawfel / Mars 2025</p>
a
          <div className="project-image-container">
            <Image
              src="/projets/battleship.png"
              alt="Capture d&apos;écran du jeu de Bataille Navale"
              className={`project-image `}
              width={300}
              height={300}
            />
          </div>

          <div>
            <a
              href="https://gitlab.com/elo.ane.ducrocq/projet-battleship-full-stack.git"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <Image src="/photos/gitlab-svgrepo-com.svg" alt="GitLab Logo" width="20" height="20" className='c-white' />
              Voir le code sur GitLab
            </a>
          </div>
        </div>

        <div className="grid-container">
          <div className="space-y animate-fadeInUp delay-200">
            <div className="info-card">
              <h2>⏱️ Durée du projet</h2>
              <p>5-6 jours</p>
            </div>

            <div className="info-card">
              <h2>💻 Technologies utilisées</h2>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">SQL</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Contexte du projet</h2>
              <p>
                Développer un jeu de Bataille Navale en local en 5 jours, avec une interface simple et fonctionnelle.
                L&apos;objectif était de proposer une version jouable et de gérer les scores, malgré le temps limité.
                Ce projet a été réalisé en binôme avec une répartition des tâches entre front-end et back-end.
              </p>
            </div>
          </div>

          <div className="space-y animate-fadeInUp delay-400">
            <div className="info-card">
              <h2>👥 Répartition des rôles</h2>
              <div className="bullet-list">
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Moi :</strong> Développement du Front-end (HTML, CSS, JavaScript)</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Partenaire :</strong> Gestion du Back-end (PHP, SQL)</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>🎮 Concept du jeu</h2>
              <p>
                Le jeu de Bataille Navale propose un système de tour par tour où les joueurs doivent localiser et
                détruire les navires adverses. Nous avons implémenté une grille fixe pour optimiser le développement,
                un système pour enregistrer les coups réussis et ratés, et une base de données pour sauvegarder les scores
                des parties. Le jeu fonctionne en local avec un système de rafraîchissement des données.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🎯 Fonctionnalités principales</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">🎮</div>
                <p>Mode tour par tour entre les joueurs avec grille fixe générée dans le code</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎯</div>
                <p>Affichage des résultats avec tirs réussis (❌) et ratés (⚪)</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">💾</div>
                <p>Enregistrement des scores dans une base de données SQL</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🔄</div>
                <p>Fonctionnement local avec rafraîchissement des données</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🏁</div>
                <p>Système de victoire et affichage des scores en fin de partie</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Nous avons dû faire face à plusieurs défis techniques. Le manque de temps nous a contraints à opter pour une grille pré-construite plutôt qu&apos;un placement dynamique des bateaux. Le rafraîchissement entre les tours a nécessité une gestion côté serveur via PHP. Enfin, le mode de jeu a été limité à un fonctionnement local en raison du manque de temps.
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              En seulement 5 jours, nous avons réussi à créer un jeu fonctionnel, bien que limité. Le projet nous a permis de développer nos compétences en travail d&apos;équipe et en intégration front-end/back-end. Avec plus de temps, nous aurions ajouté de nombreuses fonctionnalités supplémentaires telles qu&apos;un mode en ligne, un placement libre des bateaux et des animations pour rendre l&apos;expérience plus immersive.
            </p>
          </div>
        </div>

        <div className="other-projects-card animate-fadeInUp delay-800">
          <h2>🔍 Découvrez mes autres projets</h2>
          <div className="projects-grid">
            <a href="../projets/cheques" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>📊</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Site de suivis de cheques</h3>
                <p className="project-card-tech">Javascript, CSS, HTML, Python, Django, Api Rest</p>
              </div>
            </a>
            <a href="../projets/habitudes" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>📊</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Suivi d&apos;Habitudes</h3>
                <p className="project-card-tech">HTML, CSS, JavaScript</p>
              </div>
            </a>
            <a href="../projets/grow" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>🌱</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Jeu « Grow »</h3>
                <p className="project-card-tech">GDevelop (No-Code)</p>
              </div>
            </a>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-container animate-fadeInUp delay-1000">
          <a href="../contact" className="contactButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Me contacter pour en savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}

export default Battleship;