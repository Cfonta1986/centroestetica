
import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './IconComponents';

interface NavItem {
  label: string;
  targetId: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg-light shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home');}} className="text-3xl font-serif font-bold text-brand-primary hover:text-brand-accent transition-colors">
          Lugar de Relax
        </a>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.targetId); }}
              className="text-brand-text-dark hover:text-brand-primary transition-colors font-medium px-3 py-2 rounded-md text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-brand-primary hover:text-brand-accent p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
          >
            {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-500 ease-in-out absolute top-full left-0 right-0 bg-brand-bg-light shadow-xl`}>
        <nav className="flex flex-col items-center py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.targetId}
              href={`#${item.targetId}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.targetId); }}
              className="text-brand-text-dark hover:text-brand-primary transition-colors font-medium text-lg py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
