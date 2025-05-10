import React from 'react';
import {ProjectCard, PendingProjectCard} from './ProjectCard';
import {PROJECTS, PENDING_PROJECT} from '@/constants/projects';

export const ProjectsSection: React.FC = () => {
    return (
        <section id="projets" className="min-h-screen snap-start px-8 py-12 text-white">
            <h3 className="projets-titre">
        <span className="projets-titre-text">
          Mes Projets
          <span className="projets-titre-underline"></span>
        </span>
            </h3>
            <div className="max-w-7xl w-full flex justify-self-center items-center">
                <div className="projets-grid">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.slug} project={project}/>
                    ))}

                    <div className="group mb-[-26px]">
                        <PendingProjectCard
                            icon={PENDING_PROJECT.icon}
                            title={PENDING_PROJECT.title}
                            description={PENDING_PROJECT.description}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};