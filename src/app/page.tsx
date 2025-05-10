'use client';

import React from "react";
import Image from "next/image";
import "./page.css";
import {ProjectsSection} from "../components/ProjectsSection";

export default function Home() {
    return (
        <div
            className="min-w-full overflow-x-hidden scroll-smooth snap-y snap-mandatory bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b]">
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div
                    className="absolute top-[-150px] right-[-100px] w-72 h-72 bg-[#25aaa5] rounded-full filter blur-3xl opacity-40 animate-blob1"/>
                <div
                    className="absolute top-[-50px] left-[-150px] w-48 h-48 bg-[#25aaa5] rounded-full filter blur-3xl opacity-20 animate-blob3"/>
                <div
                    className="absolute bottom-[-120px] right-[-150px] w-80 h-80 bg-[#25aaa5] rounded-full filter blur-3xl opacity-50 animate-blob4"/>
                <div
                    className="absolute top-[20%] left-[-100px] w-60 h-60 bg-[#25aaa5] rounded-full filter blur-2xl opacity-35 animate-blob5"/>
            </div>

            <section className="relative h-screen snap-start overflow-hidden text-white Accueil">
                <main className="relative container mx-auto p-4">
                    <div id="accueilBottom"
                         className="flex flex-row items-center justify-between p-6 bg-gradient-to-r rounded-lg">
                        <div id="textAccueil" className="basis-[50%] ">
                            <h1 className="text-[64px] font-bold text-[#ffffff] leading-tight mb-[-19px]">
                                Eloane Ducrocq
                            </h1>
                            <h2 className="text-[40px] font-medium text-[#25aaa5]">
                                Développeuse Full-Stack
                            </h2>
                            <p className="text-gray-500 font-light text-[17px] leading-relaxed mb-6 mt-2">
                                Curieuse et passionnée par la tech, j'ai exploré et utilisé différentes
                                technologies au fil de mon parcours. Toujours en quête de nouveaux défis,
                                je m'efforce d'élargir mes compétences et de repousser mes limites. J'aime
                                relever des challenges, apprendre constamment et contribuer à des projets
                                innovants.
                            </p>
                            <div className="flex gap-6 mt-4">
                                <button
                                    onClick={() => {
                                        const section = document.getElementById("projets");
                                        section?.scrollIntoView({behavior: "smooth"});
                                    }}
                                    className="bg-gradient-to-r from-[#25aaa5] via-[#25aaa5] to-[#1e938f] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition-all duration-300"
                                >
                                    Mes Projets
                                </button>

                                <a href="/contact">
                                    <button
                                        className="border-2 border-[#25aaa5] text-[#25aaa5] font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:border-black hover:text-[#1e938f] hover:bg-white hover:text-black focus:outline-none">
                                        Me Contacter
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="basis-[60%] items-end flex justify-end justify-content: right;">
                            <Image
                                src="/photos/Photo_Ducrocq_Eloane-removebg-Copie.png"
                                alt="photo profil"
                                id="photo"
                                className="object-contain h-[92vh]"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </main>
            </section>

            <ProjectsSection/>
        </div>
    );
}