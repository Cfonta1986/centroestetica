import React from 'react';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id={id} className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center bg-brand-bg-dark overflow-hidden">
        <img 
          src="/imagenes/masaje.jpg" 
          alt="Salon de belleza relajante" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          loading="eager" // Hero image should load eagerly
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark via-transparent to-transparent"></div>
        <div className="relative z-10 p-8 container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-primary mb-6 drop-shadow-md">
            Lugar de Relax
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-dark font-light mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
            Tu espacio de bienestar y belleza femenina. Expertas en depilación, manicura, tratamientos faciales y mucho más.
          </p>
          <button
            onClick={scrollToServices}
            className="bg-brand-primary text-brand-text-light font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-brand-accent hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Descubre Nuestros Servicios
          </button>
        </div>
         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-brand-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </section>
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5493413245822" // Reemplaza por tu número de WhatsApp en formato internacional
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full shadow-lg p-3 hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        style={{ width: 60, height: 60 }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="32" height="32" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.58-5.51-1.67l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.94 9.94 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.19 2.07 3.17 5.03 4.32.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
        </svg>
      </a>
    </>
  );
};

export default HeroSection;
