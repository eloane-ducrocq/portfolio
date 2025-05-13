import React from 'react';
import {ProjectType} from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import '@/app/projets/page.css';
import {PROJECTS} from "@/constants/projects";

const Project = ({project}: { project: ProjectType }) => {
    const otherProjects = PROJECTS
        .filter(p => p.slug !== project.slug && p.minicard)
        .slice(0, 3); // Limiter à 3 projets pour l'affichage
    return (
        <div className="project-container">
            <div className="blob blob-1 animate-blob1"/>
            <div className="blob blob-2 animate-blob2"/>
            <div className="blob blob-3 animate-blob3"/>
            <div className="blob blob-4 animate-blob4"/>
            <div className="blob blob-5 animate-blob5"/>
            <div className="blob blob-6 animate-blob6"/>

            <div className="content-wrapper">
                <div className="project-header animate-fadeInUp">
                    <h1>{project.title}</h1>
                    <p className="project-meta">Par {project.authors} / {project.date}</p>

                    <div className="project-image-container">
                        <Image
                            src={project.image.url}
                            alt={project.image.alt}
                            className="project-image"
                            width={300}
                            height={300}
                        />
                    </div>

                    <div>
                        {
                            project.links.gitlab && (
                                <a
                                    href="https://gitlab.com/elo.ane.ducrocq/projet-daily-dev-html-css.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="external-link"
                                >
                                    <Image src="/photos/gitlab-svgrepo-com.svg" alt="GitLab Logo" width="20" height="20"
                                           className='c-white'/>
                                    Voir le code sur GitLab
                                </a>
                            )
                        }
                        {
                            project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="external-link"
                                >
                                    <Image src="/photos/github-svgrepo-com.svg" alt="GitHub Logo" width="20" height="20"
                                           className='c-white'/>
                                    Voir le code sur GitHub
                                </a>
                            )
                        }
                    </div>
                </div>

                <div className="grid-container">
                    <div className="space-y delay-200">
                        <div className="info-card">
                            <h2>⏱️ Durée du projet</h2>
                            <p>{project.duration}</p>
                        </div>

                        <div className="info-card">
                            <h2>💻 Technologies utilisées</h2>
                            <div className="tech-tags">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech.name}</span>
                                ))}
                            </div>
                        </div>

                        <div className="info-card">
                            <h2>📝 Contexte du projet</h2>
                            <p>
                                {project.context}
                            </p>
                        </div>
                    </div>


                    <div className="space-y animate-fadeInUp delay-800">
                        {
                            project.distribution && project.distribution.length > 0 && (
                                <div className="info-card">
                                    <h2>👥 Répartition des rôles</h2>
                                    <div className="bullet-list">
                                        {
                                            project.distribution.map((role, index) => (
                                                <div key={index} className="bullet-item">
                                                    <span className="bullet-marker">•</span>
                                                    <span><strong>{role.name} :</strong> {role.role}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        <div className="info-card">
                            <h2>🎮 Concept du projet</h2>
                            <p>
                                {project.concept}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y animate-fadeInUp delay-600 sectionBack">
                    {project.features && project.features.length > 0 && (
                        <div className="info-card">
                            <h2>🎯 Fonctionnalitées Principales</h2>
                            <div className="objectives-grid">
                                {project.features.map((objective, index) => (
                                    <div key={index} className="objective-item">
                                        <div className="objective-icon">{objective.icon}</div>
                                        <p>{objective.title}</p>
                                    </div>
                                ))}
                                <div className="objective-item">
                                    <div className="objective-icon">📱</div>
                                    <p>Adaptation du responsive aux formats mobile, tablette et desktop </p>
                                </div>
                                <div className="objective-item">
                                    <div className="objective-icon">🏗️</div>
                                    <p>Structuration complète en HTML avec navigation, en-tête, articles et pied de
                                        page</p>
                                </div>
                                <div className="objective-item">
                                    <div className="objective-icon">🎨</div>
                                    <p>Ressemblance avec le site de base</p>
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
                    )}
                    {project.difficultiesEncountered && project.difficultiesEncountered.length > 0 && (
                        <div className="info-card">
                            <h2>🧩 Difficultés rencontrées</h2>
                            {project.difficultiesEncountered.map((difficult, index) => (
                                <p key={index}>
                                    {difficult}
                                </p>
                            ))}
                        </div>
                    )}
                    {project.conclusion && (
                        <div className="info-card">
                            <h2>📝 Conclusion</h2>
                            <p>
                                {project.conclusion}
                            </p>
                        </div>
                    )}
                </div>

                <div className="other-projects-card animate-fadeInUp delay-800">
                    <h2>🔍 Découvrez mes autres projets</h2>
                    <div className="projects-grid">
                        {otherProjects.map((otherProject, index) => (
                            <Link
                                href={`/projets/${otherProject.slug}`}
                                key={index}
                                className="project-card"
                            >
                                <div className="project-card-icon">
                                    <span style={{fontSize: '2.5rem'}}>{otherProject.minicard?.icon}</span>
                                </div>
                                <div className="project-card-content">
                                    <h3 className="project-card-title">{otherProject.title}</h3>
                                    <p className="project-card-tech">{otherProject.minicard?.tech}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="contact-container animate-fadeInUp delay-1000">
                    <Link href="/contact" className="contactButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        Me contacter pour en savoir plus
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
