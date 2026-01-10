import React from 'react';
import { PROJECTS } from '../constants';

const marqueeProjects = [...PROJECTS, ...PROJECTS.slice(0, 4)];
const extendedProjects = [...marqueeProjects, ...marqueeProjects];

const PortfolioMarquee: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">More Of My Work</h2>
        
        <div className="group/marquee relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div 
            className="flex group-hover/marquee:[animation-play-state:paused]"
            style={{ 
              animation: 'marquee 10s linear infinite',
            }}
          >
            {extendedProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="group relative w-[50vw] md:w-[30vw] lg:w-[22vw] shrink-0 mx-4"
              >
                <div
                  className="block w-full h-full rounded-xl overflow-hidden"
                >
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-[16/9] transition-transform duration-300 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMarquee;