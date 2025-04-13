'use client';

import '../page.css';
import Image from 'next/image';


function Grow() {

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
          <h1>Projet No-Code : Jeu « Grow »</h1>
          <p className="project-meta">Par Eloane et 5 autres membres / 18 mars 2025</p>

          <div className="project-image-container">
            <Image
              src="/projets/grow.png"
              alt="Capture d&apos;écran du jeu Grow"
              className={`project-image`}
              width={300}
              height={300}
            />

          </div>

          <div>
            <a
              href="https://gd.games/games/b7871b30-2357-4011-95b7-ac84b90d9c4c"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              <Image src="/photos/gitlab-svgrepo-com.svg" alt="GitLab Logo" width="20" height="20" className='c-white' />
              Jouer au jeu « Grow » sur GDevelop
            </a>
          </div>
        </div>

        <div className="grid-container">
          <div className="space-y animate-fadeInUp delay-200">
            <div className="info-card">
              <h2>⏱️ Durée du projet</h2>
              <p>48 heures</p>
            </div>

            <div className="info-card">
              <h2>💻 Technologies utilisées</h2>
              <div className="tech-tags">
                <span className="tech-tag">GDevelop (No-Code)</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Contexte du projet</h2>
              <p>
                Dans le cadre d&apos;un challenge de 48 heures, notre équipe de 6 personnes (développeurs, graphiste, sound designer)
                a conçu un jeu intitulé « Grow » en utilisant GDevelop, un moteur no-code. L&apos;objectif était de créer une
                expérience de jeu fluide et immersive en exploitant les possibilités offertes,ici par GDevelop pour gérer les mécaniques du gameplay sans coder.
              </p>
            </div>
          </div>

          <div className="space-y animate-fadeInUp delay-400">
            <div className="info-card">
              <h2>👥 Répartition des rôles</h2>
              <div className="bullet-list">
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Game Design :</strong> Définition des règles et des interactions</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Développement :</strong> Création des logiques avec les événements GDevelop</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Graphisme :</strong> Dessins originaux assurant une identité visuelle unique</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Sound Design :</strong> Conception sonore et bande-son immersive</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Level Design :</strong> Construction et équilibrage des niveaux</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>🎮 Concept du jeu</h2>
              <p>
              &quot;Grow&quot; est un jeu 2D d&apos;arcade où l&apos;on incarne une plante qui grandit en attrapant les gouttes. Plus on grandit, plus le jeu accélère. Attention aux escargots : les attraper vous fait perdre des cœurs ! Un gameplay simple basé sur les réflexes, l&apos;évolution et l&apos;adaptation.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y animate-fadeInUp delay-600 sectionBack">
          <div className="info-card">
            <h2>🎯 Fonctionnalités principales</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <div className="objective-icon">🧠</div>
                <p>Jeu de réflexe où il faut attraper les bons objets et éviter les mauvais</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🌱</div>
                <p>Progression évolutive : la plante grandit au fil des bonnes actions</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">⚡</div>
                <p>Vitesse qui augmente progressivement pour plus de challenge</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">💎</div>
                <p>Bonus Etoile a attraper pour se protéger</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🐌</div>
                <p>Musique pour différentes actions</p>
              </div>
            </div>

          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Le plus gros défi a été de respecter le délai très court de 48h tout en assurant une cohérence globale
              dans le gameplay, les graphismes et l&apos;audio. La synchronisation des différents pôles (graphisme, son, gameplay)
              a demandé une vraie coordination.
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              Ce projet m&apos;a permis de développer mes compétences en game design, en travail d&apos;équipe
              et en gestion de projet dans un temps limité. L&apos;utilisation de GDevelop m&apos;a ouvert à des possibilités
              créatives sans barrière technique, tout en mettant l&apos;accent sur la logique et l&apos;ergonomie.
            </p>
          </div>
        </div>

        {/* Navigate to other projects */}
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
            <a href="../projets/dailyDev" className="project-card">
              <div className="project-card-icon">
                <span style={{ fontSize: '2.5rem' }}>🌐</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Daily Dev</h3>
                <p className="project-card-tech">HTML, CSS</p>
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

export default Grow;