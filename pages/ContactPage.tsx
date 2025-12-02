import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { InstagramIcon, MailIcon, WhatsAppIcon, TelegramIcon, DiscordIcon } from '../components/icons';

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

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h1>
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
    </div>
  );
};

export default ContactPage;