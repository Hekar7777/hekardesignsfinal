import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-white">Project not found</h1>
        <Link to="/portfolio" className="mt-4 inline-block text-gray-300 hover:underline">
          &larr; Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/portfolio" className="inline-block mb-8 text-gray-400 hover:text-white transition-colors">
        &larr; Back to Portfolio
      </Link>
      
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        <p className="text-xl text-gray-400 mt-2">{project.tagline}</p>
      </header>

      <div className="space-y-8">
        {project.images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`${project.title} screenshot ${index + 1}`}
            className="w-full rounded-lg shadow-lg" 
          />
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">Client</h3>
          <p className="mt-2">{project.client}</p>

          <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2 mt-6">Tools Used</h3>
          <ul className="mt-2 space-y-1">
            {project.tools.map(tool => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">The Challenge</h3>
            <p className="mt-2 leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">The Solution</h3>
            <p className="mt-2 leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;