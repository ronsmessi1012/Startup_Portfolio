import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a server here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Have a project in mind or just want to learn more about our services? We'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-amber-50 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Office Address</h4>
                  <address className="not-italic text-slate-600">
                    123 Architecture Plaza<br />
                    Design District<br />
                    Cityville, ST 12345
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-50 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-slate-600 hover:text-amber-600 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-50 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Email</h4>
                  <a href="mailto:info@archvision.com" className="text-slate-600 hover:text-amber-600 transition-colors">
                    info@archvision.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-amber-50 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-800 mb-1">Business Hours</h4>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.666632047712!2d-73.98514568459395!3d40.74881797932823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645612786392!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 transition-colors"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;