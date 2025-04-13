'use client';

import '../page.css';
import Image from 'next/image';


function Pokemon() {

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
          <h1>Jeu de Combat Pokémon en Java</h1>
          <p className="project-meta">Par Eloane & Agathe / Mars 2025</p>

          <div className="project-image-container">
            <Image
              src="/projets/pokemon.png"
              alt="Capture d&apos;écran du jeu Pokémon"
              className={`project-image`}
              width={300}
              height={300}
            />
          </div>

          <div>
            <a
              href="https://gitlab.com/agathe3253302/pokemon_java_agatheelo.git"
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
              <p>1 semaine intensive</p>
            </div>

            <div className="info-card">
              <h2>💻 Technologies utilisées</h2>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">JavaFX</span>
                <span className="tech-tag">POO</span>
                <span className="tech-tag">CSS</span>
              </div>
            </div>

            <div className="info-card">
              <h2>📝 Contexte du projet</h2>
              <p>
                On devait créé un jeu Pokémo, avec des combats au tour par tour où le joueur affronte une IA. Le but était de concevoir un système stratégique, où chaque Pokémon a des caractéristiques unique, et où la gestion de l’équipe et le choix des attaques sont essentiel
              </p>
            </div>
          </div>

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
                  <span><strong>Interface Graphique :</strong> Conception de l&apos;UI avec JavaFX et FXML</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Intelligence Artificielle :</strong> Programmation de l&apos;IA pour le combat</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-marker">•</span>
                  <span><strong>Design :</strong> Création de l&apos;esthétique visuelle et animations</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h2>🎮 Concept du jeu</h2>
              <p>
                Le jeu propose une expérience de combat Pokémon où le joueur choisit un Pokémon et l&apos;affronte contre une IA dans un combat au tour par tour. Chaque Pokémon possède des attaques variées, effets, objets, et la victoire se décide en fonction de la stratégie utilisée par le joueur et des forces/faiblesses de chaque Pokémon.
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
                <p>Conception d&apos;un système de combat au tour par tour avec différents types de Pokémon</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎮</div>
                <p>Développement de l&apos;IA pour attaquer le joueur</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🎨</div>
                <p>Création d&apos;une interface graphique avec animations en JavaFX</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🔊</div>
                <p>Intégration d&apos;un système d&apos;historique des actions en temps réel</p>
              </div>
              <div className="objective-item">
                <div className="objective-icon">🧪</div>
                <p>Ajout d&apos;objets, d&apos;effets et des concepts de forces et faiblesses aux pokemons
                </p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>🧩 Difficultés rencontrées</h2>
            <p>
              Le plus grand défi a été le temps très limité et la quantité de tâches à accomplir dans un délai aussi court. La gestion des liens entre les différents types de Pokémon, leurs attaques et les effets visuels a également été un point crucial à maîtriser. L&apos;équilibrage des attaques et leur efficacité, en particulier en fonction des types, a nécessité de nombreux ajustements.
            </p>
          </div>

          <div className="info-card">
            <h2>📝 Conclusion</h2>
            <p>
              Ce projet a permis d&apos;approfondir nos compétences en programmation orientée objet et en développement graphique. Il nous a également offert une expérience précieuse dans la gestion de projet, en nous confrontant à un délai serré et à des défis techniques complexes, ce qui a renforcé notre capacité à travailler efficacement sous pression.
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

export default Pokemon;