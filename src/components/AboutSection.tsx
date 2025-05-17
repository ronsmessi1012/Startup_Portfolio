import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const stats = [
    { value: '25+', label: 'Years of Experience', icon: <Calendar className="text-amber-500" size={24} /> },
    { value: '500+', label: 'Projects Completed', icon: <CheckSquare className="text-amber-500" size={24} /> },
    { value: '15', label: 'Team Members', icon: <Users className="text-amber-500" size={24} /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Architecture Team" 
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 rounded-lg p-6 shadow-lg hidden md:block">
              <span className="text-3xl font-bold text-white">25+</span>
              <p className="text-white font-medium">Years of Excellence</p>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Designing Exceptional Spaces Since 1995
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-slate-600 text-lg mb-6">
              At New Design O Craft, we believe that architecture is more than just buildings – it's about creating spaces that inspire, function efficiently and stand the test of time.
            </p>
            <p className="text-slate-600 mb-8">
              Our multidisciplinary team of architects, designers and planners work collaboratively to deliver innovative solutions that balance creativity, functionality and sustainability. With a client-centered approach, we transform concepts into extraordinary spaces that exceed expectations.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-lg p-4 text-center"
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <span className="block text-3xl font-bold text-slate-800 mb-1">{stat.value}</span>
                  <span className="text-slate-600">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            
            <Link 
              to="/about" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;