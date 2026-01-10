import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  imageClassName?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, imageClassName }) => {
  return (
    <div 
      className="group block relative rounded-lg bg-gray-900/50"
    >
      <div className="rounded-lg overflow-hidden">
        <img
          src={project.thumbnailUrl}
          alt={project.title}
          className={`w-full h-full object-cover aspect-[16/9] transition-transform duration-300 ease-in-out group-hover:scale-125 ${imageClassName || ''}`}
        />
      </div>
    </div>
  );
};

export default ProjectCard;