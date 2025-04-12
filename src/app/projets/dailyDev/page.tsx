'use client';

import '../page.css';
import { useState } from 'react';
import Image from 'next/image';


function DailyDev() {
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
          <h1>Reproduction du site Daily Dev</h1>
          <p className="project-meta">Par Eloane / Mars 2025</p>

          {/* Project Image and Link Section */}
          <div className="project-image-container">
            <img
              src="../projets/dailyDev.png"
              alt="Capture d'écran du site Daily Dev"
              className={`project-image `}
            />
            
          </div>

          <div>
            <a
              href="https://gitlab.com/elo.ane.ducrocq/projet-daily-dev-html-css.git"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <Image src="/photos/gitlab-svgrepo-com.svg" alt="GitLab Logo" width="20" height="20" className='c-white' />

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
              <p>5 jours</p>
            </div>

            <div className="info-card">
              <h2>💻 Technologies utilisées</h2>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS (Flexbox)</span>
                <span className="tech-tag">Media Queries</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Contexte du projet</h2>
              <p>
                L'objectif était de reproduire deux pages du site Daily Dev : la page d'accueil et la page de tags. Le challenge consistait à respecter au maximum le design original tout en développant les pages en HTML et CSS en seulement 5 jours.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y animate-fadeInUp delay-400">
            <div className="info-card">
              <h2>🎮 Concept du projet</h2>
              <p>
                Ce projet de reproduction fidèle du site Daily Dev visait à mettre en pratique mes compétences en intégration web, tout en respectant les standards de responsive design. L'accent a été mis sur la précision visuelle, l'organisation du code et l'adaptation à différentes tailles d'écran.
              </p>
            </div>

            <div className="info-card">
              <h2>📌 Déroulement du projet</h2>
              <div className="bullet-list">
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Jour 1 :</strong> Analyse du site original et création de la structure HTML de la page d'accueil</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Jour 2 :</strong> Développement de la page de tags et structuration en HTML</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Jour 3-4 :</strong> Mise en place du CSS avec Flexbox et Media Queries</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Jour 5 :</strong> Tests de responsive design et optimisation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🎯 Objectifs et réalisations</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">📱</div>
                <p>Adaptation parfaite aux formats mobile, tablette et desktop via Media Queries</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🏗️</div>
                <p>Structuration complète en HTML avec navigation, en-tête, articles et pied de page</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎨</div>
                <p>Mise en page responsive grâce à Flexbox et animations sur les boutons</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🔖</div>
                <p>Organisation claire des tags avec liens cliquables et design adaptatif</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">⚡</div>
                <p>Optimisation des performances avec des ressources légères et bien structurées</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Le principal défi a été de respecter le délai de 5 jours tout en assurant un design fidèle à l'original et une expérience utilisateur fluide sur tous les supports. Le responsive design a nécessité une attention particulière pour garantir une transition harmonieuse entre les différentes tailles d'écran.
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              Ce projet m'a permis de consolider mes bases en HTML et CSS, notamment en gestion de pages multiples et en conception responsive. Il m'a également appris à optimiser l'affichage pour une meilleure performance sur tous les écrans. Cette reproduction fidèle m'a poussée à approfondir ma maîtrise des outils de mise en page web modernes.
            </p>
          </div>
        </div>

        {/* Navigate to other projects */}
        <div className="other-projects-card animate-fadeInUp delay-800">
          <h2>🔍 Découvrez mes autres projets</h2>
          <div className="projects-grid">
            <a href="../projets/pokemon" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>🎮</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Jeu Pokémon</h3>
                <p className="project-card-tech">Java, JavaFX</p>
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
            <a href="../projets/battleship" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>⚓</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Bataille Navale</h3>
                <p className="project-card-tech">HTML, CSS, JS, PHP</p>
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

export default DailyDev;