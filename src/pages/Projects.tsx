import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import CTASection from '../components/CTASection';
import { ArrowLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const { projectId } = useParams();
  const [activeFilter, setActiveFilter] = useState('all');
  
  useEffect(() => {
    document.title = projectId 
      ? `${projects.find(p => p.slug === projectId)?.title || 'Project'} - New Design O Craft` 
      : 'Our Projects - New Design O Craft';
  }, [projectId]);

  const selectedProject = projectId ? projects.find(p => p.slug === projectId) : null;

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

  if (projectId && !selectedProject) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-slate-800">Project Not Found</h1>
          <p className="mt-4 text-slate-600">The requested project could not be found.</p>
          <Link to="/projects" className="mt-6 inline-block text-amber-600 hover:text-amber-700">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  if (selectedProject) {
    return (
      <>
        <section className="relative py-20 lg:py-32 bg-slate-900">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: `url(${selectedProject.mainImage})` }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/projects" 
                className="inline-flex items-center text-white hover:text-amber-400 mb-8 transition-colors"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Projects
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
              >
                {selectedProject.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-1 bg-amber-500 mb-6"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-slate-300"
              >
                <p className="text-lg mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">
                    {selectedProject.category}
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {selectedProject.location}
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm">
                    {selectedProject.year}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">The Challenge</h2>
                  <p className="text-slate-600">{selectedProject.challenge}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">Our Solution</h2>
                  <p className="text-slate-600">{selectedProject.solution}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">The Result</h2>
                <p className="text-slate-600">{selectedProject.result}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-8">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="aspect-w-16 aspect-h-9"
                    >
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </>
    );
  }

  return (
    <>
      <section className="relative py-20 lg:py-32 bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-amber-500 mx-auto mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-300"
            >
              Explore our portfolio of innovative architectural designs
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                        src={project.mainImage} 
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
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Projects;