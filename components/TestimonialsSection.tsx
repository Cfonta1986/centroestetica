
import React from 'react';
import { StarIcon } from './IconComponents';

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, imageSrc }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full">
    <img src={imageSrc} alt={author} className="w-24 h-24 rounded-full mb-6 object-cover shadow-md" loading="lazy" />
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} className="w-5 h-5 text-yellow-400" filled={true} />
      ))}
    </div>
    <p className="text-brand-text-dark text-opacity-80 italic mb-6 leading-relaxed flex-grow">"{quote}"</p>
    <h4 className="font-semibold text-brand-primary text-lg">{author}</h4>
  </div>
);

interface TestimonialsSectionProps {
  id: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ id }) => {
  const testimonials = [
    {
      quote: "¡Increíble experiencia! El trato es súper personalizado y los resultados son fantásticos. ¡Mi lugar favorito para mimarme!",
      author: "Laura G.",
      imageSrc: "https://picsum.photos/seed/client1/100/100",
    },
    {
      quote: "Profesionales de primer nivel. Siempre salgo renovada y feliz. La manicura dura muchísimo y los tratamientos faciales son una maravilla.",
      author: "Sofía M.",
      imageSrc: "https://picsum.photos/seed/client2/100/100",
    },
    {
      quote: "El ambiente es tan relajante que te olvidas de todo. Calidad, calidez y resultados visibles. ¡Totalmente recomendado!",
      author: "Valentina R.",
      imageSrc: "https://picsum.photos/seed/client3/100/100",
    },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-brand-bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary text-center mb-6">Lo Que Dicen Nuestras Clientas</h2>
        <p className="text-lg text-brand-text-dark text-opacity-80 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          La satisfacción de nuestras clientas es nuestra mayor recompensa. Lee algunas de sus experiencias en Lugar de Relax.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
