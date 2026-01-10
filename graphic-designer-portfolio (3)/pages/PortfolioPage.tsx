import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage: React.FC = () => {
  return (
    <div className="animate-fade-in px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            imageClassName={index % 2 === 0 ? 'md:origin-left' : 'md:origin-right'}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;