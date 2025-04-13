'use client';

import '../page.css';
import Image from 'next/image';

function SuiviCheques() {
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
          <h1>DÉVELOPPEMENT D&apos;UN SITE DE SUIVI DE CHÈQUES FULL-STACK (2025)</h1>
          <p className="project-meta">Par Eloane et 3 autres membres / Mars 2025</p>

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

        <div className="grid-container">
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
                Projet entreprise pour la métropole d&apos;Orléans : réaliser un site de suivi
                de chèques destiné aux différentes structures d&apos;aide aux personnes en difficulté numériques.
                Ce projet full-stack visait à optimiser le suivi des chèques et améliorer
                leurs suivis.
              </p>
            </div>
          </div>

          <div className="space-y animate-fadeInUp delay-400">
            <div className="info-card">
              <h2>👥 Répartition des rôles</h2>
              <div className="bullet-list">
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Front-end :</strong> Co-développement du front (moi et mon co-développeur)</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Back-end :</strong> Gestion du back-end avec Django (2 autres membres)</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>🎮 Concept du Site</h2>
              <p>
                Le site permet la création, la visualisation et la modification de chèques, ainsi que l&apos;ajout et la gestion d&apos;utilisateurs. Il offre aussi la possibilité d&apos;ajouter, modifier et gérer des structures. Chaque utilisateur a un accès différencié selon son rôle, avec des pages et fonctionnalités adaptées. L&apos;ensemble repose sur une API robuste, garantissant un fonctionnement fluide et une structure solide.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🚀 Fonctionnalités principales</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">🧾</div>
                <p>Ajout, visualisations de chèques</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">📊</div>
                <p>Suivi de l&apos;historique des chèques et gestion des statuts</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🔍</div>
                <p>Ajout des modifications des différentes structures et utilisateurs</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🔐</div>
                <p>Connexion sécurisée avec gestion des rôles</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">📁</div>
                <p>Export des données pour les administrateurs</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Le développement du site a été complexe, avec une charge de travail importante et des fonctionnalités ajoutées en cours de route. La synchronisation entre le front-end et le back-end, couplée au manque de temps et aux défis de communication, a été un réel défi. Malgré tout, nous avons su nous adapter et livrer un site opérationnel dans les délais
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              Ce projet nous a permis de plonger dans le monde professionnel du télétravail et de l&apos;automatisation. Il nous a appris à travailler efficacement en équipe sur un projet complet, tout en respectant les contraintes techniques et temporelles. Il a renforcé nos compétences en front-end, back-end, mais surtout en gestion de projet et en communication.
            </p>
          </div>
        </div>

        <div className="other-projects-card animate-fadeInUp delay-800">
          <h2>🔍 Découvrez mes autres projets</h2>
          <div className="projects-grid">
            <a href="../projets/pokemon" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>🎮</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Jeu Pokémon</h3>
                <p className="project-card-tech">Java, JavaFX, POO</p>
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

export default SuiviCheques;
