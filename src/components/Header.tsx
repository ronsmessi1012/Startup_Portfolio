import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { 
      title: 'Services', 
      path: '/services',
      dropdown: [
        { title: 'Architectural Design', path: '/services/architectural-design' },
        { title: 'Urban Planning', path: '/services/urban-planning' },
        { title: 'Landscape Design', path: '/services/landscape-design' },
        { title: '3D Visualization', path: '/services/3d-visualization' },
        { title: 'Consulting', path: '/services/consulting' },
      ]
    },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              NEW DESIGN<span className="text-amber-600"> O CRAFT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center cursor-pointer">
                    <span 
                      className={`font-medium ${scrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'} transition-colors duration-200`}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''} ${
                        scrolled ? 'text-slate-700' : 'text-white'
                      }`} 
                    />
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`font-medium ${scrolled ? 'text-slate-700 hover:text-amber-600' : 'text-white hover:text-amber-400'} transition-colors duration-200`}
                  >
                    {item.title}
                  </Link>
                )}
                
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-20"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-slate-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-slate-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white rounded-b-lg shadow-lg mt-2 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 py-4">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    {item.dropdown ? (
                      <div>
                        <div 
                          className="flex items-center justify-between px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600 cursor-pointer"
                          onClick={() => toggleDropdown(item.title)}
                        >
                          <span>{item.title}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                          />
                        </div>
                        
                        <AnimatePresence>
                          {activeDropdown === item.title && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-slate-50 py-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.title}
                                  to={dropdownItem.path}
                                  className="block px-8 py-2 text-sm text-slate-600 hover:bg-amber-50 hover:text-amber-600"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={item.path} 
                        className="block px-4 py-2 text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;