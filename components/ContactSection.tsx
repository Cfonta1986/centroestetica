
import React, { useState } from 'react';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './IconComponents';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // Hide success message after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-brand-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary text-center mb-12 md:mb-16">
          Ponte en Contacto
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-serif font-semibold text-brand-primary mb-6">Envíanos un Mensaje</h3>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
                ¡Gracias! Tu mensaje ha sido enviado. Te contactaremos pronto.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-dark text-opacity-90">Nombre Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-brand-secondary rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-white text-brand-text-dark"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-dark text-opacity-90">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-brand-secondary rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-white text-brand-text-dark"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text-dark text-opacity-90">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-brand-secondary rounded-lg shadow-sm focus:ring-brand-primary focus:border-brand-primary sm:text-sm bg-white text-brand-text-dark"
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-brand-text-light bg-brand-primary hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-colors duration-300"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-serif font-semibold text-brand-primary mb-6">Información de Contacto</h3>
            <div className="space-y-6 text-brand-text-dark text-opacity-90">
              <p className="leading-relaxed">
                Estamos aquí para responder tus preguntas y ayudarte a agendar tu próximo momento de relax.
              </p>
              <div className="flex items-start space-x-3">
                <WhatsAppIcon className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">WhatsApp:</h4>
                  <a href="https://wa.me/3413245822" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">
                    +34 132 458 22
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MailIcon className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Email:</h4>
                  <a href="mailto:cristianfonta16@gmail.com" className="hover:text-brand-primary transition-colors">
                    cristianfonta16@gmail.com
                  </a>
                </div>
              </div>
               <div className="flex items-start space-x-3">
                <PhoneIcon className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Teléfono (Opcional):</h4>
                  <p>Contactar vía WhatsApp o Email preferentemente.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Horario de Atención:</h4>
                <p>Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>(Sujeto a cambios, por favor confirmar al agendar)</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Dirección:</h4>
                <p>Calle Ficticia 123, Ciudad Ejemplo</p>
                <p>(Por favor, contactar para la dirección exacta al agendar tu cita)</p>
              </div>
            </div>
             <div className="mt-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0863999999996!2d-122.41941548468153!3d37.77492927975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4c1e4f5f%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2ses!4v1620208181600!5m2!1sen!2ses" 
                    width="100%" 
                    height="250" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy"
                    title="Ubicación del Salón (Ejemplo)"
                    className="rounded-lg shadow-md"
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
