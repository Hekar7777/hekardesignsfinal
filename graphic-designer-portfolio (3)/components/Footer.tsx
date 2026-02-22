import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { InstagramIcon, MailIcon, WhatsAppIcon, TelegramIcon, DiscordIcon } from './icons';

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconProps = { className: 'w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300' };
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

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <SocialIcon name={link.name} />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} HekarDesigns. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;