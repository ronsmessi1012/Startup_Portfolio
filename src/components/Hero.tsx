import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Crafting Spaces,<br />
            <span className="text-amber-500">Designing Futures</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl"
          >
            New Design O Craft   transforms concepts into extraordinary spaces where aesthetics meet functionality. With over 25 years of experience, we deliver innovative architectural solutions tailored to your vision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/projects" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center sm:justify-start"
            >
              <span>View Our Projects</span>
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="border border-white hover:border-amber-400 text-white hover:text-amber-400 font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center sm:justify-start"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
        <span className="block text-white text-xs mt-2 text-center font-light">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;