import React from 'react';
// StarIcon import is not used here but kept for consistency if it were.
// import {StarIcon} from './IconComponents'; 

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
    <img src={imageSrc} alt={title} className="w-full h-56 object-cover" loading="lazy" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-serif font-semibold text-brand-primary mb-3">{title}</h3>
      <p className="text-brand-text-dark text-opacity-80 leading-relaxed mb-4 flex-grow">{description}</p>
      <a href="#contact" 
         onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
         className="inline-block mt-auto bg-brand-accent text-brand-text-light font-medium py-2 px-6 rounded-lg hover:bg-brand-primary transition-colors duration-300 text-center"
      >
        Consultar
      </a>
    </div>
  </div>
);

interface ServicesSectionProps {
  id: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  const services = [
    {
      imageSrc: "/imagenes/uñas.jpg",
      title: "Manicuría Profesional",
      description: "Manos impecables con nuestros servicios de manicuría, esmaltado tradicional y semipermanente.",
    },
    {
      imageSrc: "/imagenes/depilacion.jpg",
      title: "Depilación Suave",
      description: "Sistemas de depilación efectivos y cuidadosos con tu piel, para resultados duraderos y suaves.",
    },
    {
      imageSrc: "/imagenes/facial.jpg",
      title: "Tratamientos Faciales",
      description: "Revitaliza tu piel con limpiezas profundas, hidratación y tratamientos específicos para cada necesidad.",
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-brand-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary text-center mb-6">Nuestros Servicios Estrella</h2>
        <p className="text-lg text-brand-text-dark text-opacity-80 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Descubre los tratamientos que nuestras clientas aman, diseñados para realzar tu belleza natural y brindarte un momento de relax.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
