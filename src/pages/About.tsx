import rudranilImg from '../assets/images/Rudranil.jpg';
import tirthaImg from '../assets/images/Tirtha.png';
import sayanImg from '../assets/images/Sayan.jpg';
import avijitImg from '../assets/images/Avijit.jpg';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckSquare, Users, Award, Lightbulb } from 'lucide-react';
import CTASection from '../components/CTASection';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - New Design O Craft';
  }, []);

  const stats = [
    { value: '25+', label: 'Years of Experience', icon: <Calendar className="text-amber-500" size={24} /> },
    { value: '500+', label: 'Projects Completed', icon: <CheckSquare className="text-amber-500" size={24} /> },
    { value: '15', label: 'Team Members', icon: <Users className="text-amber-500" size={24} /> },
    { value: '25', label: 'Industry Awards', icon: <Award className="text-amber-500" size={24} /> },
    { value: '100%', label: 'Client Satisfaction', icon: <Lightbulb className="text-amber-500" size={24} /> }
  ];

  const team = [
    {
      name: 'Avijit Chowdhury',
      position: 'Principal Architect & Founder',
      image: avijitImg,
      bio: 'Avijit founded New Design O Craft in 1995 with a vision to create innovative architectural solutions that balance form, function, and sustainability.'
    },
    {
      name: 'Rudranil Chowdhury',
      position: 'Technical Director',
      image: rudranilImg,
      bio: 'Rudranil ensures that our designs are technically sound and buildable, bringing his excellence of technical expertise to every project.'
    },
    {
      name: 'Tirtha Majumder',
      position: 'Management Lead',
      image: tirthaImg,
      bio: 'Tirtha brings strategic leadership and organizational insight to the team, ensuring that every project runs smoothly from inception to completion with a focus on efficiency, communication, and client satisfaction.'
    },
    {
      name: 'Sayan Roy Chowdhury',
      position: 'Design Director',
      image: sayanImg,
      bio: 'With well built experience, Sayan leads our design team with a focus on creating spaces that inspire and transform the human experience.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            About New Design O Craft
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
            Our passion for innovative design and commitment to excellence have made us a leader in architectural solutions for over 25 years.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-lg text-slate-700 mb-4">Founded in 1995 by Avijit Chowdhury, New Design O Craft began as a small architectural practice with a big vision.</p>
            <p className="text-slate-600 mb-4">Over the past 25 years, we've grown into a multidisciplinary team of architects, designers, and planners.</p>
            <p className="text-slate-600 mb-6">Our core values of innovation, sustainability, client satisfaction, and design excellence guide every project.</p>
            <blockquote className="italic border-l-4 border-amber-500 pl-4 text-slate-700">
              "Architecture is not just about creating buildings; it's about creating experiences."
              <footer className="mt-2 text-slate-600 not-italic">— Avijit Chowdhury, Founder</footer>
            </blockquote>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <img src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team" className="rounded-lg shadow-lg" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
              <span className="text-3xl md:text-4xl font-bold text-amber-600">25+</span>
              <p className="text-slate-800 font-medium">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 text-center shadow-md"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <span className="block text-3xl font-bold text-slate-800 mb-1">{stat.value}</span>
              <span className="text-slate-600">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Our Values
          </motion.h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-12">Our core values guide every project and decision we make.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Innovation', description: 'Creative thinking and design approaches.', icon: '💡' },
              { title: 'Sustainability', description: 'Environmentally responsible design practices.', icon: '🌱' },
              { title: 'Client Focus', description: 'Listening and collaborating with clients.', icon: '👥' },
              { title: 'Excellence', description: 'Highest standards in every aspect.', icon: '🏆' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Our Leadership Team
          </motion.h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg mb-12">
            Meet the talented individuals who lead our firm with expertise and vision.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img src={member.image} alt={`Portrait of ${member.name}`} className="object-cover w-full h-72 object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-amber-600 mb-4">{member.position}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
