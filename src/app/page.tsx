import React from "react";
import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b] text-white overflow-hidden Accueil">
      {/* Blobs animés en fond */}
      <div className="absolute top-[-100px] left-[-100px] w-60 h-60 bg-[#25aaa5] rounded-full filter blur-2xl opacity-40 animate-blob1"></div>
      <div className="absolute bottom-[-80px] right-[-100px] w-80 h-80 bg-[#25aaa5] rounded-full filter blur-3xl opacity-30 animate-blob2"></div>

      <main className="relative container mx-auto p-4">
        <div className="flex flex-row items-center justify-between p-6 bg-gradient-to-r rounded-lg shadow-lg mb-[200px]">
          <div className="basis-[50%] text-left ml-[100px]">
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
              <button className="bg-gradient-to-r from-[#25aaa5] via-[#25aaa5] to-[#1e938f] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition-all duration-300">
                Mes Projets
              </button>
              <button className="border-2 border-[#25aaa5] text-[#25aaa5] font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:border-[#1e938f] hover:text-[#1e938f] hover:bg-[#25aaa5] hover:text-white focus:outline-none active:bg-transparent">
                <a href="/contact">Me Contacter</a>
              </button>
            </div>
          </div>

          <div className="basis-[60%] items-end flex justify-end justify-content: right;">
            <img
              src="/photos/Photo_Ducrocq_Eloane-removebg-Copie.png"
              alt="photo profil"
              className="object-contain h-[91vh]"
            />
          </div>
        </div>


        <section>
          <h3>Mes Projets</h3>
          <div>
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Projet Pokemon</h4>
                  <img src="/projets/pokemon.png" alt="pokemon" />
                  <p className="text-gray-700">Description du projet 1.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Projet Daily Dev</h4>
                  <img src="/projets/dailyDev.png" alt="projet Daily Dev" />
                  <p className="text-gray-700">Description du projet 2.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Projet Grow</h4>
                  <img src="/projets/grow.png" alt="grow" />
                  <p className="text-gray-700">Description du projet 3.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Projet Habitudes</h4>
                  <img src="/projets/habitudes.png" alt="habitudes" />
                  <p className="text-gray-700">Description du projet 4.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Projet Battleship</h4>
                  <img src="/projets/battleship.png" alt="battleship" />
                  <p className="text-gray-700">Description du projet 5.</p>
                  lire la suite

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
