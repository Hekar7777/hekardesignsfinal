import React from 'react';

export const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
        <path d="M22 2l-11 11"></path>
    </svg>
);

export const DiscordIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.369a1.913 1.913 0 0 0-1.554-.332c-.354.1-.67.248-.943.434C16.5 3.51 14.59 2.5 12.5 2.5c-2.09 0-4 .01-5.821 1.47a10.046 10.046 0 0 0-.943-.434 1.93 1.93 0 0 0-1.554.332c-1.432.816-2.4 2.87-2.735 4.847a1.12 1.12 0 0 0 .14.943c.465.803.96 1.554 1.484 2.253a1.112 1.112 0 0 0 .848.375c.16.01.32-.019.47-.074a8.216 8.216 0 0 1-1.01-1.284 1.115 1.115 0 0 1 .01-1.233c.3-.353.688-.633 1.116-.828a.488.488 0 0 1 .538.04c4.328 2.233 8.656 2.233 12.984 0a.488.488 0 0 1 .538-.04c.428.195.816.475 1.116.828a1.115 1.115 0 0 1 .01 1.233 8.216 8.216 0 0 1-1.01 1.284c.15.055.31.084.47.074a1.112 1.112 0 0 0 .848-.375c.524-.699 1.02-1.45 1.484-2.253a1.12 1.12 0 0 0 .14-.943c-.336-1.977-1.303-4.03-2.735-4.847zM8.5 13.5c-.828 0-1.5-.787-1.5-1.75s.672-1.75 1.5-1.75c.828 0 1.5.787 1.5 1.75s-.672 1.75-1.5 1.75zm7 0c-.828 0-1.5-.787-1.5-1.75s.672-1.75 1.5-1.75c.828 0 1.5.787 1.5 1.75s-.672 1.75-1.5 1.75z" />
    </svg>
);