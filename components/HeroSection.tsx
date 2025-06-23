
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
    <section id={id} className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center bg-brand-bg-dark overflow-hidden">
      <img 
        src="https://picsum.photos/seed/relaxSpa/1920/1080" 
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
  );
};

export default HeroSection;
