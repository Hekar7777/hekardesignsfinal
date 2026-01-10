import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { InstagramIcon, MailIcon, WhatsAppIcon, TelegramIcon, DiscordIcon } from '../components/icons';
import PortfolioMarquee from '../components/PortfolioMarquee';

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
    const iconProps = { className: 'w-10 h-10 text-gray-300 group-hover:text-white transition-colors' };
    switch (name) {
      case 'Instagram':
        return <InstagramIcon {...iconProps} />;
      case 'Mail':
        return <MailIcon {...iconProps} />;
      case 'WhatsApp':
        return <WhatsAppIcon {...iconProps} />;
      case 'Telegram':
        return <TelegramIcon {...iconProps} />;
      case 'Discord':
        return <DiscordIcon {...iconProps} />;
      default:
        return null;
    }
};

const HomePage: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-20 md:py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Thumbnails that not only<br />
          <span className="text-brand-blue">looks great</span> but also<br />
          generate clicks
        </h1>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-brand-blue/30 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                Let's Talk &gt;
            </a>
            <Link to="/portfolio" className="inline-block bg-transparent border border-gray-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300">
                Portfolio
            </Link>
            <a href="#about" className="inline-block bg-transparent border border-gray-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300">
                About Me
            </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-white">Featured Projects</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              imageClassName={index % 2 === 0 ? 'md:origin-left' : 'md:origin-right'}
            />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/portfolio" className="text-lg font-medium text-gray-300 hover:text-white">
                See all projects &rarr;
            </Link>
        </div>
      </section>

      <PortfolioMarquee />

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-1">
            <img 
              src="https://i.postimg.cc/FsKhDRjp/fe986baa-38f7-4946-bfac-7eaea8b9bbb0-upscayl-4x-upscayl-standard-4x.png" 
              alt="Hekar | Graphic Designer"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hello! I'm the designer behind HekarDesigns, and I'm passionate about crafting compelling brand identities, beautiful digital experiences, and engaging print materials. My design philosophy is centered around clarity, simplicity, and a deep understanding of your needs.
            </p>
            <p>
              I believe that great design is not just about aesthetics, but about solving problems and communicating ideas effectively. I thrive on collaborating with clients to bring their vision to life, transforming complex challenges into elegant and intuitive solutions.
            </p>
            <p>
              I draw inspiration from art, nature, and technology to deliver unique and impactful work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-400">
            Have a project in mind or just want to say hello? Reach out on your favorite platform.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {SOCIAL_LINKS.map((link) => (
                <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900/50 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-brand-blue/20 hover:scale-105 transition-all duration-300"
                >
                    <SocialIcon name={link.name} />
                    <span className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white">{link.name}</span>
                </a>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;