import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#ffffff', // text-white
    fontWeight: '600' // font-semibold
  };
  
  const inactiveLinkStyle = {
    color: '#9CA3AF' // text-gray-400
  };

  return (
    <header className="bg-[#111111]/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white hover:text-gray-100">
              Hekar<span className="text-brand-blue">Designs</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => (isActive ? activeLinkStyle : inactiveLinkStyle)}
                  className="hover:text-white transition-colors duration-300 text-base"
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <HamburgerIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
               <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  style={({ isActive }) => (isActive ? activeLinkStyle : inactiveLinkStyle)}
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;