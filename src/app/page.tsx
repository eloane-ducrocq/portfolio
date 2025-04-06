import React from "react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="Accueil">
      <main className="container mx-auto p-4">
        <h2>Bienvenue sur mon Portfolio</h2>


        <div className="flex flex-row items-center justify-between p-6 bg-gradient-to-r  rounded-lg shadow-lg">
          <div className="basis-[40%] text-left">
            <h1 className="text-[60px] font-bold text-[#ffffff] leading-tight mb-2">Eloane Ducrocq</h1>
            <h2 className="text-[36px] font-medium text-[#25aaa5] mb-4">Développeur Full-Stack</h2>
            <p className="text-gray-500 font-light text-lg leading-relaxed mb-6">
              Curieuse et passionnée par la tech, j’ai exploré et utilisé différentes technologies au fil de mon parcours.
              Toujours en quête de nouveaux défis, je m’efforce d’élargir mes compétences et de repousser mes limites.
              J’aime relever des challenges, apprendre constamment et contribuer à des projets innovants.
            </p>
            <div className="flex gap-6 mt-4">
              <button className="bg-gradient-to-r from-[#25aaa5] via-[#25aaa5] to-[#1e938f] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition-all duration-300">
                Mes Projets
              </button>
              <button className="border-2 border-[#25aaa5] text-[#25aaa5] font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:border-[#1e938f] hover:text-[#1e938f] hover:bg-[#25aaa5] hover:text-white focus:outline-none active:bg-transparent">
                Me Contacter
              </button>
            </div>
          </div>

          {/* Photo de profil */}
          <div className="basis-[60%] flex justify-center">
            <img
              src="/photos/Photo_Ducrocq_Eloane-removebg.png"
              alt="photo profil"
              width={320}
              height={320}
            />
          </div>
        </div>

        <section>
          <h3>Mes Projets</h3>
          <ul>
            <li>
              <a href="/projet1">Projet 1</a> - Description du projet 1.
            </li>
            <li>
              <a href="/projet2">Projet 2</a> - Description du projet 2.
            </li>
            <li>
              <a href="/projet3">Projet 3</a> - Description du projet 3.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
