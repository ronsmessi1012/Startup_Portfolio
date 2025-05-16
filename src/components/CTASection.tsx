import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Vision Into Reality?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Whether you're planning a new building, renovating an existing space, or need expert architectural consultation, our team is ready to bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 flex items-center"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2" size={18} />
              </Link>
              
              <Link 
                to="/services" 
                className="bg-transparent border border-white hover:border-amber-400 text-white hover:text-amber-400 font-medium py-3 px-8 rounded-md transition duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;