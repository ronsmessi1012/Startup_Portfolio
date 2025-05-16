import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import CTASection from '../components/CTASection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'ArchVision - Architectural & Design Planning';
  }, []);

  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </>
  );
};

export default Home;