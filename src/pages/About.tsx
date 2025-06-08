import rudranilImg from '../assets/images/Rudranil.jpg';
import tirthaImg from '../assets/images/Tirtha.jpg';
import sayanImg from '../assets/images/Sayan.jpg';
import avijitImg from '../assets/images/Avijit.jpg';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckSquare, Users, Award, Lightbulb, Mail, Briefcase, MessageSquare } from 'lucide-react';
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
      bio: 'Avijit founded New Design O Craft in 1995 with a vision to create innovative architectural solutions that balance form, function, and sustainability.',
      social: null
    },
    {
      name: 'Rudranil Chowdhury',
      position: 'Technical Director',
      image: rudranilImg,
      bio: 'Rudranil ensures that our designs are technically sound and buildable, bringing his excellence of technical expertise to every project.',
      social: {
        portfolio: 'https://rudranil.netlify.app/',
        whatsapp: 'https://wa.me/8240025108',
        email: 'mailto:godleoronmessi10@gmail.com'
      }
    },
    {
      name: 'Tirtha Majumder',
      position: 'Management Lead',
      image: tirthaImg,
      bio: 'Tirtha brings strategic leadership and organizational insight to the team, ensuring that every project runs smoothly from inception to completion with a focus on efficiency, communication, and client satisfaction.',
      social: {
        whatsapp: 'https://wa.me/8617231928',
        email: 'mailto:tirtham777@gmail.com'
      }
    },
    {
      name: 'Sayan Roy Chowdhury',
      position: 'Design Director',
      image: sayanImg,
      bio: 'With well built experience, Sayan leads our design team with a focus on creating spaces that inspire and transform the human experience.',
      social: {
        whatsapp: 'https://wa.me/7003461121',
        email: 'mailto:lesayan263@gmail.com'
      }
    }
  ];

  return (
    <>
      {/* About Hero */}
      <section className="relative py-20 lg:py-32 bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="New Design O craft Team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 md:p-8 rounded-lg shadow-lg text-center">
                <span className="text-3xl md:text-4xl font-bold text-amber-600">25+</span>
                <p className="text-slate-800 font-medium">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <span className="block text-3xl font-bold text-slate-800 mb-1">{stat.value}</span>
                <span className="text-slate-600">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Our core values guide every project and decision we make.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace creative thinking and cutting-edge design approaches to solve complex architectural challenges.',
                icon: '💡'
              },
              {
                title: 'Sustainability',
                description: 'We prioritize environmentally responsible design practices to create buildings that minimize their ecological footprint.',
                icon: '🌱'
              },
              {
                title: 'Client Focus',
                description: 'We listen carefully to our clients\' needs and involve them throughout the design process to ensure satisfaction.',
                icon: '👥'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards of quality in design, documentation, and project delivery.',
                icon: '🏆'
              }
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

      {/* Leadership Team */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Meet the talented individuals who lead our firm with expertise and vision.
            </p>
          </motion.div>
          
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
                <div className="aspect-w-3 aspect-h-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-72 object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-amber-600 mb-4">{member.position}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                  {member.social && (
                    <div className="flex items-center justify-center space-x-4">
                      {member.social.portfolio && (
                        <a 
                          href={member.social.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-amber-600 transition-colors"
                          aria-label="Portfolio"
                        >
                          <Briefcase size={20} />
                        </a>
                      )}
                      {member.social.whatsapp && (
                        <a 
                          href={member.social.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-amber-600 transition-colors"
                          aria-label="WhatsApp"
                        >
                          <MessageSquare size={20} />
                        </a>
                      )}
                      {member.social.email && (
                        <a 
                          href={member.social.email}
                          className="text-slate-600 hover:text-amber-600 transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  )}
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