'use client';

import '../page.css';
import { useState } from 'react';

function Pokemon() {
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  return (
    <div className="project-container">
      {/* Background animated blobs */}
      <div className="blob blob-1 animate-blob1" />
      <div className="blob blob-2 animate-blob2" />
      <div className="blob blob-3 animate-blob3" />
      <div className="blob blob-4 animate-blob4" />
      <div className="blob blob-5 animate-blob5" />
      <div className="blob blob-6 animate-blob6" />

      {/* Main Content Container */}
      <div className="content-wrapper">
        {/* Project Header */}
        <div className="project-header animate-fadeInUp">
          <h1>Jeu de Combat Pokémon en Java</h1>
          <p className="project-meta">Par Eloane & Agathe / Mars 2025</p>

          {/* Project Image and Link Section */}
          <div className="project-image-container">
            <img
              src="../projets/pokemon.png"
              alt="Capture d'écran du jeu Pokémon"
              className={`project-image`}

            />
          </div>

          <div>
            <a
              href="https://gitlab.com/agathe3253302/pokemon_java_agatheelo.git"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Voir le code sur GitLab
            </a>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid-container">
          {/* Left Column */}
          <div className="space-y animate-fadeInUp delay-200">
            <div className="info-card">
              <h2>⏱️ Durée du projet</h2>
              <p>1 semaine intensive</p>
            </div>

            <div className="info-card">
              <h2>💻 Technologies utilisées</h2>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">JavaFX</span>
                <span className="tech-tag">FXML</span>
                <span className="tech-tag">CSS</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Contexte du projet</h2>
              <p>
                Ce jeu de combat Pokémon a été conçu en une semaine en binôme. Il s'agit d'un système de combat au tour par tour dans lequel le joueur affronte une IA. L'objectif principal était de créer un jeu fonctionnel avec une interface graphique immersive.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y animate-fadeInUp delay-400">
            <div className="info-card">
              <h2>👥 Répartition des rôles</h2>
              <div className="bullet-list">
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Développement :</strong> Création de la logique de combat, gestion des types de Pokémon et des attaques</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Interface Graphique :</strong> Conception de l'UI avec JavaFX et FXML</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Intelligence Artificielle :</strong> Programmation de l'IA pour le combat</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Design :</strong> Création de l'esthétique visuelle et animations</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>🎮 Concept du jeu</h2>
              <p>
                Le jeu propose une expérience de combat Pokémon où le joueur choisit un Pokémon et l'affronte contre une IA dans un combat au tour par tour. Chaque Pokémon possède des attaques variées, et la victoire se décide en fonction de la stratégie utilisée par le joueur et des forces/faiblesses de chaque Pokémon.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🎯 Objectifs et réalisations</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">🎯</div>
                <p>Conception d'un système de combat au tour par tour avec différents types de Pokémon</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎮</div>
                <p>Développement de l'IA pour réagir aux choix du joueur</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎨</div>
                <p>Création d'une interface graphique avec animations en JavaFX</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🔊</div>
                <p>Intégration d'un système d'historique des actions en temps réel</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🧪</div>
                <p>Tests pour équilibrer le gameplay et optimiser l'IA</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Le plus grand défi a été de gérer la complexité de l'IA et l'équilibrage des différents types de Pokémon. Trouver un équilibre entre les attaques et leur efficacité a nécessité de nombreux ajustements. De plus, le travail d'équipe en binôme a été essentiel pour répartir les tâches efficacement.
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              Ce projet a permis d'approfondir nos compétences en programmation orientée objet et en développement graphique. Il a également renforcé notre capacité à gérer un projet complexe tout en respectant un délai serré. L'optimisation de l'IA et de l'interface sont des points sur lesquels nous continuons à travailler pour améliorer l'expérience de jeu.
            </p>
          </div>
        </div>

        <div className="other-projects-card animate-fadeInUp delay-800">
          <h2>🔍 Découvrez mes autres projets</h2>
          <div className="projects-grid">
            <a href="../projets/battleship" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>🎮</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Bataille Navale</h3>
                <p className="project-card-tech">HTML, CSS, JS, PHP</p>
              </div>
            </a>
            <a href="../projets/habitudes" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>📊</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Suivi d'Habitudes</h3>
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
          <a href="../contact" className="contact-button">
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

export default Pokemon;