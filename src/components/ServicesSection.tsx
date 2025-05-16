import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, PenTool, MapPin, Home, FileImage, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-amber-500 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="bg-amber-50 w-16 h-16 rounded-lg flex items-center justify-center text-amber-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <Link to={link} className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium">
        Learn more
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Architectural Design',
      description: 'Custom architectural solutions for residential, commercial, and institutional projects that balance form, function, and sustainability.',
      icon: <Ruler size={28} />,
      link: '/services/architectural-design'
    },
    {
      title: 'Interior Design',
      description: 'Transform spaces with innovative interior designs that reflect your personal style while maximizing functionality and comfort.',
      icon: <PenTool size={28} />,
      link: '/services/interior-design'
    },
    {
      title: 'Urban Planning',
      description: 'Comprehensive urban planning services that create sustainable, livable communities through thoughtful land use and infrastructure design.',
      icon: <MapPin size={28} />,
      link: '/services/urban-planning'
    },
    {
      title: 'Landscape Design',
      description: 'Enhance outdoor spaces with sustainable landscape designs that complement architecture and create harmonious environments.',
      icon: <Home size={28} />,
      link: '/services/landscape-design'
    },
    {
      title: '3D Visualization',
      description: 'Photorealistic 3D renderings and animations that bring your project to life before construction begins.',
      icon: <FileImage size={28} />,
      link: '/services/3d-visualization'
    },
    {
      title: 'Consulting',
      description: 'Expert architectural and design consulting services to guide you through every stage of your project.',
      icon: <Users size={28} />,
      link: '/services/consulting'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            We offer a comprehensive range of architectural and design services tailored to meet your specific needs and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;