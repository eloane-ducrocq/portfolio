'use client';

import React from "react";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="min-w-full overflow-x-hidden scroll-smooth snap-y snap-mandatory bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b]">

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute top-[-150px] right-[-100px] w-72 h-72 bg-[#25aaa5] rounded-full filter blur-3xl opacity-40 animate-blob1" />
        <div className="absolute top-[-50px] left-[-150px] w-48 h-48 bg-[#25aaa5] rounded-full filter blur-3xl opacity-20 animate-blob3" />
        <div className="absolute bottom-[-120px] right-[-150px] w-80 h-80 bg-[#25aaa5] rounded-full filter blur-3xl opacity-50 animate-blob4" />
        <div className="absolute top-[20%] left-[-100px] w-60 h-60 bg-[#25aaa5] rounded-full filter blur-2xl opacity-35 animate-blob5" />
      </div>

      <section className="relative h-screen snap-start overflow-hidden text-white overflow-hidden Accueil">
        <main className="relative container mx-auto p-4">
          <div id="accueilBottom" className="flex flex-row items-center justify-between p-6 bg-gradient-to-r rounded-lg">
            <div id="textAccueil" className="basis-[50%] ">
              <h1 className="text-[64px] font-bold text-[#ffffff] leading-tight mb-[-19px]">
                Eloane Ducrocq
              </h1>
              <h2 className="text-[40px] font-medium text-[#25aaa5]">
                Développeuse Full-Stack
              </h2>
              <p className="text-gray-500 font-light text-[17px] leading-relaxed mb-6 mt-2">
                Curieuse et passionnée par la tech, j’ai exploré et utilisé différentes
                technologies au fil de mon parcours. Toujours en quête de nouveaux défis,
                je m’efforce d’élargir mes compétences et de repousser mes limites. J’aime
                relever des challenges, apprendre constamment et contribuer à des projets
                innovants.
              </p>
              <div className="flex gap-6 mt-4">
                <button
                  onClick={() => {
                    const section = document.getElementById("projets");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-gradient-to-r from-[#25aaa5] via-[#25aaa5] to-[#1e938f] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition-all duration-300"
                >
                  Mes Projets
                </button>

                <a href="/contact"><button className="border-2 border-[#25aaa5] text-[#25aaa5] font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:border-black hover:text-[#1e938f] hover:bg-white hover:text-black focus:outline-none ">
                  Me Contacter
                </button>
                </a>
              </div>
            </div>

            <div id="photo" className="basis-[60%] items-end flex justify-end justify-content: right;">
              <Image
                src="/photos/Photo_Ducrocq_Eloane-removebg-Copie.png"
                alt="photo profil"
                className="object-contain h-[92vh]"
                width={510}
                height={510}
              />
            </div>
          </div>
        </main>
      </section>

      <section id="projets" className=" min-h-screen snap-start px-8 py-12 text-white ">
        <h3 className="projets-titre">
          <span className="projets-titre-text">
            Mes Projets
            <span className="projets-titre-underline"></span>
          </span>
        </h3>
        <div className="max-w-7xl w-full flex justify-self-center items-center">

          <div className="projets-grid">
            <a href="/projets/pokemon" className="group">
              <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                  <Image src="/projets/pokemon.png" alt="pokemon" className="projet-image"
                    width={300}
                    height={300} />
                  <div className="projet-tag tag-jeu">Jeu</div>
                </div>
                <div className="projet-content flex flex-col flex-grow">
                  <div className="projet-header">
                    <h4 className="projet-title group-hover:text-teal-600">Pokémon</h4>
                    <span className="projet-arrow text-teal-500">→</span>
                  </div>
                  <p className="projet-description mb-4">
                    Création d&apos;un jeu Pokémon combinant la sélection de Pokemon jusqu&apos;au combat contre une IA.
                  </p>
                  <div className="projet-technologies mt-auto">
                    <span className="tag tag-java-tech">Java</span>
                    <span className="tag tag-javafx-tech">JavaFX</span>
                    <span className="tag tag-POO-tech">POO</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/projets/grow" className="group">
              <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                  <Image src="/projets/grow.png" alt="grow" className="projet-image"
                    width={300}
                    height={300} />
                  <div className="projet-tag tag-mobile">Mobile</div>
                </div>
                <div className="projet-content flex flex-col flex-grow">
                  <div className="projet-header">
                    <h4 className="projet-title group-hover:text-green-600">Grow</h4>
                    <span className="projet-arrow text-green-500">→</span>
                  </div>
                  <p className="projet-description mb-4">Réalisation d&apos;un jeu NoCode en 48 heures</p>
                  <div className="projet-technologies mt-auto">
                    <span className="tag tag-Gdevelop-tech">Gdevelop</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/projets/habitudes" className="group">
              <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                  <Image src="/projets/habitudes.png" alt="habitudes" className="projet-image"
                    width={300}
                    height={300} />
                  <div className="projet-tag tag-purple">Web</div>
                </div>
                <div className="projet-content flex flex-col flex-grow">
                  <div className="projet-header">
                    <h4 className="projet-title group-hover:text-purple-600">Habitudes</h4>
                    <span className="projet-arrow text-purple-500">→</span>
                  </div>
                  <p className="projet-description mb-4">
                    Création d&apos;un site web de suivi d&apos;habitudes quotidiennes avec statistiques, calendrier et visualisations des progrès pour atteindre les objectifs.
                  </p>
                  <div className="projet-technologies mt-auto">
                    <span className="tag tag-JS-tech">Javascript</span>
                    <span className="tag tag-HTML-tech">HTML</span>
                    <span className="tag tag-CSS-tech">CSS</span>
                    <span className="tag tag-MVC-tech">MVC</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/projets/battleship" className="group">
              <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                  <Image src="/projets/battleship.png" alt="battleship" className="projet-image"
                    width={300}
                    height={300} />
                  <div className="projet-tag tag-jeu">Jeu</div>
                </div>
                <div className="projet-content flex flex-col flex-grow">
                  <div className="projet-header">
                    <h4 className="projet-title group-hover:text-blue-600">Battleship</h4>
                    <span className="projet-arrow text-blue-500">→</span>
                  </div>
                  <p className="projet-description mb-4">
                    Jeu de bataille navale multijoueur avec interface moderne et IA avancée pour des parties stratégiques et immersives.
                  </p>
                  <div className="projet-technologies mt-auto">
                    <span className="tag tag-JS-tech">JavaScript</span>
                    <span className="tag tag-PHP-tech">PHP</span>
                    <span className="tag tag-HTML-tech">HTML</span>
                    <span className="tag tag-CSS-tech">CSS</span>
                  </div>
                </div>
              </div>
            </a>


            <a href="/projets/dailyDev" className="group">
              <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                  <Image src="/projets/dailyDev.png" alt="Daily Dev" className="projet-image"
                    width={300}
                    height={300} />
                  <div className="projet-tag tag-web">Web</div>
                </div>

                <div className="projet-content flex flex-col flex-grow">
                  <div className="projet-header">
                    <h4 className="projet-title group-hover:text-indigo-600">Daily Dev</h4>
                    <span className="projet-arrow text-indigo-500">→</span>
                  </div>
                  <p className="projet-description mb-4">
                    Reproduction de deux pages du site Daily Dev.
                  </p>

                  <div className="projet-technologies mt-auto">
                    <span className="tag tag-HTML-tech">HTML</span>
                    <span className="tag tag-CSS-tech">CSS</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/projets/cheques" className="group">
              <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                  <Image src="/projets/cheques.png" alt="Suivi de Chèques" className="projet-image"
                    width={300}
                    height={300} />
                  <div className="projet-tag tag-web">Web Full-Stack</div>
                </div>

                <div className="projet-content flex flex-col flex-grow">
                  <div className="projet-header">
                    <h4 className="projet-title group-hover:text-indigo-600">Suivi de Chèques</h4>
                    <span className="projet-arrow text-indigo-500">→</span>
                  </div>
                  <p className="projet-description mb-4">
                    Développement d’un site full-stack pour la Métropole d’Orléans en 3 semaines, permettant aux structures de suivre les chèques attribués.
                  </p>

                  <div className="projet-technologies mt-auto">
                    <span className="tag tag-HTML-tech">HTML</span>
                    <span className="tag tag-CSS-tech">CSS</span>
                    <span className="tag tag-JS-tech">JavaScript</span>
                    <span className="tag tag-django-tech">Django</span>
                    <span className="tag tag-api-tech">API REST</span>
                    <span className="tag tag-sql-tech">SQL</span>
                    <span className="tag tag-python-tech">Python</span>
                  </div>
                </div>
              </div>
            </a>

            <a className="group mb-[-26px]">
              <div className="projet-card nouveau-projet-card">
                <div className="projet-content">
                  <div className="nouveau-projet-icon">
                    <span className="nouveau-projet-plus">⏳</span>
                  </div>
                  <h4 className="nouveau-projet-title">Nouveau Projet</h4>
                  <p className="nouveau-projet-description">Un nouveau projet passionnant est en cours de développement. Restez à l&apos;écoute !</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section >
    </div>
  );
}
