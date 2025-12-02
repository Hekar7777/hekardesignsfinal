import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h1>
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
            I draw inspiration from art, nature, and technology to deliver unique and impactful work. Whether you're a startup looking to build a brand from scratch or an established company seeking a creative refresh, I'm here to help you make your mark.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;