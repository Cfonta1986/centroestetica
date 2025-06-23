
import React from 'react';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-brand-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/salonInterior/600/400" 
              alt="Interior del salón Lugar de Relax" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">
              Sobre Lugar de Relax
            </h2>
            <p className="text-lg text-brand-text-dark text-opacity-90 mb-4 leading-relaxed">
              Desde el año <span className="font-semibold text-brand-primary">2000</span>, en Lugar de Relax nos dedicamos con pasión al cuidado integral de la estética femenina. Somos un equipo de profesionales comprometidas con brindarte una experiencia única de belleza y bienestar.
            </p>
            <p className="text-lg text-brand-text-dark text-opacity-90 mb-6 leading-relaxed">
              Nuestra misión es ofrecerte un oasis de tranquilidad donde puedas desconectar de la rutina y reconectar contigo misma, mientras realzamos tu belleza natural con servicios de la más alta calidad.
            </p>
            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-semibold text-brand-primary mb-2">Nuestros Valores:</h3>
              <ul className="list-disc list-inside text-brand-text-dark text-opacity-80 space-y-1 text-left ml-4 lg:ml-0">
                <li>Profesionalismo y excelencia en cada servicio.</li>
                <li>Atención personalizada y escucha activa de tus necesidades.</li>
                <li>Creación de un ambiente cálido, acogedor y relajante.</li>
                <li>Uso de productos de alta calidad y técnicas innovadoras.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
