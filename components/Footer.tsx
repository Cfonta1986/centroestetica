
import React from 'react';
import { InstagramIcon, WhatsAppIcon, MailIcon } from './IconComponents';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg-dark text-brand-text-dark text-opacity-80 py-12 border-t border-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h5 className="font-serif text-xl font-semibold text-brand-primary mb-3">Lugar de Relax</h5>
            <p className="text-sm">
              Tu espacio de bienestar y belleza femenina. Cuidado experto desde 2000.
            </p>
          </div>
          <div>
            <h5 className="font-serif text-xl font-semibold text-brand-primary mb-3">Enlaces Rápidos</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });}} className="hover:text-brand-primary transition-colors">Inicio</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });}} className="hover:text-brand-primary transition-colors">Servicios</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });}} className="hover:text-brand-primary transition-colors">Nosotras</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });}} className="hover:text-brand-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-serif text-xl font-semibold text-brand-primary mb-3">Síguenos</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-text-dark hover:text-brand-primary transition-colors">
                <InstagramIcon className="w-7 h-7" />
              </a>
              <a href="https://wa.me/3413245822" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-brand-text-dark hover:text-brand-primary transition-colors">
                <WhatsAppIcon className="w-7 h-7" />
              </a>
               <a href="mailto:cristianfonta16@gmail.com" aria-label="Email" className="text-brand-text-dark hover:text-brand-primary transition-colors">
                <MailIcon className="w-7 h-7" />
              </a>
              {/* Add other social media icons here if available */}
            </div>
             <p className="text-sm mt-4">
              WhatsApp: <a href="https://wa.me/3413245822" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">3413245822</a>
            </p>
            <p className="text-sm">
              Email: <a href="mailto:cristianfonta16@gmail.com" className="hover:text-brand-primary transition-colors">cristianfonta16@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-brand-secondary pt-8 text-center text-sm">
          <p>&copy; {currentYear} Lugar de Relax. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado con <span className="text-red-500">❤</span> y mucho café.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
