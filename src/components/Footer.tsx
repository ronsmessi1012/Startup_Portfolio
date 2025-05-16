import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              ARCH<span className="text-amber-500">VISION</span>
            </h3>
            <p className="mb-4 text-slate-300">
              Creating innovative architectural solutions that blend creativity, functionality, and sustainability since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ndocraft" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-amber-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-amber-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-amber-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-amber-400 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-300 hover:text-amber-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/architectural-design" className="text-slate-300 hover:text-amber-400 transition-colors">Architectural Design</Link>
              </li>
              <li>
                <Link to="/services/urban-planning" className="text-slate-300 hover:text-amber-400 transition-colors">Urban Planning</Link>
              </li>
              <li>
                <Link to="/services/landscape-design" className="text-slate-300 hover:text-amber-400 transition-colors">Landscape Design</Link>
              </li>
              <li>
                <Link to="/services/3d-visualization" className="text-slate-300 hover:text-amber-400 transition-colors">3D Visualization</Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-slate-300 hover:text-amber-400 transition-colors">Consulting</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contact Us</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-slate-300">
                  Tarapukur Main Rd, Tara Pukur South<br />
                     Agarpara, Pirtala<br />
                    Kolkata, West Bengal 700109
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone size={20} className="text-amber-500" />
                <a href="tel:+919875663719" className="text-slate-300 hover:text-amber-400 transition-colors">
                  +91 98756 63719
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-amber-500" />
                <a href="mailto:avijitchowdhury55@gmail.com" className="text-slate-300 hover:text-amber-400 transition-colors">
                  avijitchowdhury55@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>© {currentYear} New Design O Craft Architechture and Building Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;