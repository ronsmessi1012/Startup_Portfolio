import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: number;
  location: string;
  slug: string;
}

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Urban Heights Tower',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2023,
      location: 'Kolkata, India',
      slug: 'urban-heights-tower'
    },
    {
      id: 2,
      title: 'Serenity Residence',
      category: 'residential',
      image: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2022,
      location: 'Kolkata, India',
      slug: 'serenity-residence'
    },
    {
      id: 3,
      title: 'Harmony Park',
      category: 'urban',
      image: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2021,
      location: 'Kolkata, India',

      slug: 'harmony-park'
    },
    {
      id: 4,
      title: 'Tech Innovation Center',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/3773404/pexels-photo-3773404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2023,
      location: 'Kolkata, India',

      slug: 'tech-innovation-center'
    },
    {
      id: 5,
      title: 'Coastal Villa',
      category: 'residential',
      image: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2022,
      location: 'Kolkata, India',

      slug: 'coastal-villa'
    },
    {
      id: 6,
      title: 'Heritage Museum',
      category: 'institutional',
      image: 'https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2021,
      location: 'Kolkata, India',
      slug: 'heritage-museum'
    }
  ];
  
  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Residential', value: 'residential' },
    { label: 'Urban', value: 'urban' },
    { label: 'Institutional', value: 'institutional' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Explore our portfolio of innovative architectural designs and transformative spaces.
          </p>
        </motion.div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeFilter === filter.value 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="text-amber-400 text-sm uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-xl font-semibold text-white mt-1">{project.title}</h3>
                      <div className="text-slate-300 text-sm mt-2">
                        {project.location} • {project.year}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-amber-600 text-sm uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-semibold text-slate-800 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                  <div className="text-slate-500 text-sm mt-1">
                    {project.location} • {project.year}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium text-lg"
          >
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;