import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { isAuthenticated } = useAuth();

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

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        { title: 'Interior Design', path: '/services/interior-design' },
        { title: 'Building Planning', path: '/services/building-planning' },
        { title: 'Landscape Design', path: '/services/landscape-design' },
      ]
    },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const getHeaderStyle = () => {
    if (!isHomePage) {
      return 'bg-white dark:bg-slate-900 shadow-md';
    }
    return scrolled ? 'bg-white dark:bg-slate-900 shadow-md' : 'bg-transparent';
  };

  const getTextStyle = (isDropdown = false) => {
    if (!isHomePage || scrolled) {
      return isDropdown ? 'text-slate-700 dark:text-slate-300' : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400';
    }
    return isDropdown ? 'text-white' : 'text-white hover:text-amber-400';
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${getHeaderStyle()} py-4`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`text-xl sm:text-2xl font-serif font-bold ${!isHomePage || scrolled ? 'text-slate-800 dark:text-white' : 'text-white'}`}>
              NEW DESIGN <span className="text-amber-600">O CRAFT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center cursor-pointer">
                    <span 
                      className={`font-medium ${getTextStyle(true)} transition-colors duration-200`}
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                    </span>
                    <ChevronDown 
                      size={16} 
                      className={`ml-1 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''} ${
                        !isHomePage || scrolled ? 'text-slate-700 dark:text-slate-300' : 'text-white'
                      }`} 
                    />
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`font-medium ${getTextStyle()} transition-colors duration-200`}
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
                        className="absolute left-0 mt-2 w-64 bg-white dark:bg-slate-800 shadow-lg rounded-md py-2 z-20"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400"
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
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Client Portal Link */}
            <Link
              to={isAuthenticated ? "/dashboard" : "/login"}
              className={`flex items-center font-medium ${getTextStyle()} transition-colors duration-200 ml-4`}
            >
              <User size={18} className="mr-1" />
              {isAuthenticated ? 'Dashboard' : 'Client Portal'}
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={toggleMenu} 
              className="p-2"
              aria-label="Menu"
            >
              {isOpen ? (
                <X className={!isHomePage || scrolled ? 'text-slate-800 dark:text-white' : 'text-white'} size={24} />
              ) : (
                <Menu className={!isHomePage || scrolled ? 'text-slate-800 dark:text-white' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-slate-800 rounded-b-lg shadow-lg mt-2 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 py-4">
                {menuItems.map((item) => (
                  <div key={item.title}>
                    {item.dropdown ? (
                      <div>
                        <div 
                          className="flex items-center justify-between px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer"
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
                              className="bg-slate-50 dark:bg-slate-700 py-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.title}
                                  to={dropdownItem.path}
                                  className="block px-8 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-slate-600 hover:text-amber-600 dark:hover:text-amber-400"
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
                        className="block px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile Client Portal Link */}
              <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-600">
                <Link
                  to={isAuthenticated ? "/dashboard" : "/login"}
                  className="flex items-center text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 py-2 px-2 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} className="mr-2" />
                  {isAuthenticated ? 'Dashboard' : 'Client Portal'}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;