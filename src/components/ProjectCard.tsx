import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ProjectType} from '@/types/projects';

interface ProjectCardProps {
    project: ProjectType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const {slug, title, description, image, category, techStack} = project;

    return (
        <Link href={`/projets/${slug}`} className="group">
            <div className="projet-card flex flex-col h-full">
                <div className="projet-image-container">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        className="projet-image"
                        width={300}
                        height={300}
                    />
                    <div className={`projet-tag ${category.color.tag}`}>{category.name}</div>
                </div>
                <div className="projet-content flex flex-col flex-grow">
                    <div className="projet-header">
                        <h4 className={`projet-title ${category.color.hover}`}>{title}</h4>
                        <span className={`projet-arrow ${category.color.arrow}`}>→</span>
                    </div>
                    <p className="projet-description mb-4">
                        {description}
                    </p>
                    <div className="projet-technologies mt-auto">
                        {techStack.map((tech, index) => (
                            <span key={index} className={`tag ${tech.tagClass}`}>{tech.name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export const PendingProjectCard: React.FC<{
    icon: string;
    title: string;
    description: string;
}> = ({icon, title, description}) => {
    return (
        <div className="projet-card nouveau-projet-card">
            <div className="projet-content">
                <div className="nouveau-projet-icon">
                    <span className="nouveau-projet-plus">{icon}</span>
                </div>
                <h4 className="nouveau-projet-title">{title}</h4>
                <p className="nouveau-projet-description">{description}</p>
            </div>
        </div>
    );
};