'use client';

import '../page.css';
import { useState } from 'react';
import Image from 'next/image';


function Habitudes() {

  
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
          <h1>Site de Suivi d'Habitudes</h1>
          <p className="project-meta">Par Eloane / Mars 2025</p>

          {/* Project Image and Link Section */}
          <div className="project-image-container">
            <Image
              src="/projets/habitudes.png"
              alt="Capture d&apos;écran du site de suivi d&apos;habitudes"
              className={`project-image `}
              width={300} 
              height={300}
            />

          </div>

          <div>
            <a
              href="https://gitlab.com/elo.ane.ducrocq/projet2_daily.git"
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
              <p>2 semaines</p>
            </div>

            <div className="info-card">
              <h2>💻 Technologies utilisées</h2>
              <div className="tech-tags">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript (MVC)</span>
                <span className="tech-tag">Chart.js</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Contexte du projet</h2>
              <p>
                Développer une application web interactive pour le suivi des habitudes quotidiennes. L&apos;objectif était de créer une interface intuitive pour aider les utilisateurs à gérer leurs tâches quotidiennes, suivre leur progression et visualiser des statistiques claires à travers des graphiques.
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
                  <span><strong>Développement :</strong> Création de la logique du site avec JavaScript, gestion des données et interactions</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Interface utilisateur :</strong> Design et implémentation de l&apos;interface avec HTML/CSS</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Visualisation de données :</strong> Intégration de Chart.js pour l&apos;affichage des graphiques</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>🎮 Concept du projet</h2>
              <p>
                Le site permet aux utilisateurs de suivre leurs habitudes quotidiennes à travers une interface simple et fluide. L&apos;objectif est de visualiser les progrès sur une période donnée grâce à des graphiques dynamiques. Les utilisateurs peuvent ajouter, modifier ou supprimer des habitudes, ainsi qu&apos;analyser leurs statistiques à l&apos;aide de graphiques interactifs.
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🎯 Objectifs et réalisations</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">🎯</div>
                <p>Développement de la logique de gestion des habitudes avec une architecture MVC</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🗓️</div>
                <p>Création d'un calendrier interactif pour suivre les habitudes au quotidien</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎨</div>
                <p>Conception d'une interface simple et épurée en HTML/CSS</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">📊</div>
                <p>Intégration de Chart.js pour afficher les statistiques sous forme de graphiques</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🧪</div>
                <p>Tests pour s&apos;assurer de la fluidité de l&apos;expérience utilisateur</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Les principaux défis ont été l&apos;implémentation du calendrier dynamique de manière fluide, la gestion de l&apos;affichage dynamique en JavaScript tout en maintenant des performances optimales, et l&apos;intégration de Chart.js pour assurer des graphiques clairs et interactifs.
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              Ce projet m&apos;a permis de renforcer mes compétences en JavaScript, en particulier en ce qui concerne l&apos;architecture MVC et la gestion dynamique des données. Il a également permis d&apos;explorer l&apos;intégration de graphiques interactifs avec Chart.js. Cette expérience m&apos;a appris à optimiser l&apos;interface utilisateur tout en prenant en compte l&apos;expérience de navigation sur différents appareils.
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
            <a href="../projets/grow" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>🌱</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Jeu « Grow »</h3>
                <p className="project-card-tech">GDevelop (No-Code)</p>
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

export default Habitudes;