
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const navItems = [
    { label: 'Inicio', targetId: 'home' },
    { label: 'Servicios', targetId: 'services' },
    { label: 'Nosotras', targetId: 'about' },
    { label: 'Testimonios', targetId: 'testimonials' },
    { label: 'Contacto', targetId: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header navItems={navItems} />
      <main className="flex-grow">
        <HeroSection id="home" />
        <ServicesSection id="services" />
        <AboutSection id="about" />
        <TestimonialsSection id="testimonials" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
