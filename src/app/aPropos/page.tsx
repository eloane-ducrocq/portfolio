import React from 'react';
import Carousel from "../carousel";

function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b] text-white overflow-hidden">
      {/* Blobs animés asymétriques */}
      <div className="absolute top-[-150px] right-[-100px] w-72 h-72 bg-[#25aaa5] rounded-full filter blur-3xl opacity-40 animate-blob1" />
      <div className="absolute bottom-[-100px] left-[-80px] w-64 h-64 bg-[#25aaa5] rounded-full filter blur-3xl opacity-30 animate-blob2" />
      <div className="absolute top-[-50px] left-[-150px] w-48 h-48 bg-[#25aaa5] rounded-full filter blur-3xl opacity-20 animate-blob3" />
      <div className="absolute bottom-[-120px] right-[-150px] w-80 h-80 bg-[#25aaa5] rounded-full filter blur-3xl opacity-50 animate-blob4" />
      <div className="absolute top-[20%] left-[-100px] w-60 h-60 bg-[#25aaa5] rounded-full filter blur-2xl opacity-35 animate-blob5" />

      <div className="relative px-6 py-12 max-w-6xl mx-auto space-y-24">
        {/* SECTION À PROPOS */}
        <section className="space-y-10 animate-fadeInUp">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg transition-transform hover:scale-105 duration-300">
              À propos de moi
            </h1>
            <h2 className="text-2xl font-medium text-[#25aaa5] drop-shadow-sm">
              Étudiante en développement informatique, passionnée et en quête d’expérience
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto animate-fadeIn">
            <p className="drop-shadow-sm">
              Actuellement en première année de développement informatique à la
              <strong className="text-[#25aaa5]"> Coda School</strong>, je suis une étudiante de 18 ans passionnée par la création numérique. Chaque jour, j’explore de nouveaux outils et langages pour enrichir mes compétences et bâtir une solide expertise dans ce domaine.
            </p>
            <p className="drop-shadow-sm">
              Pour l’année <strong className="text-[#25aaa5]">2025-2026</strong>, je recherche une alternance en développement informatique. Bien que ouverte à différentes opportunités, je porte un intérêt particulier à la conception d’applications et de sites web, où je pourrais mettre en pratique et approfondir mes connaissances.
            </p>
            <p className="drop-shadow-sm">
              Motivée, curieuse et créative, j’aspire à intégrer une équipe dynamique afin de contribuer activement à des projets innovants tout en évoluant aux côtés de professionnels expérimentés.
            </p>
          </div>
        </section>

        {/* SECTION TECHNOLOGIES & OUTILS */}
        <section className="space-y-10 animate-fadeInUp">
          <h3 className="text-4xl font-bold text-center tracking-wide drop-shadow-lg transition-transform hover:scale-105 duration-300">
            Technologies & Outils
          </h3>

          <div className="max-w-3xl mx-auto space-y-4 text-center animate-fadeIn">
            <p className="text-lg leading-relaxed drop-shadow-sm">
              Au fil du temps, j’ai découvert et utilisé de nombreuses technologies et outils qui ont marqué mon apprentissage et facilité mon travail. Que ce soit pour le développement web, la gestion de projets ou le travail en équipe, chacun a son importance et son utilité.
            </p>
            <p className="text-lg leading-relaxed drop-shadow-sm">
              Cette liste, en constante évolution, reflète les technologies et outils que j’ai appris et utilisés au fil de mon parcours.
            </p>
          </div>

          <div className="mt-8">
            <Carousel />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
