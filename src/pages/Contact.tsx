import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - New Design O Craft';
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800">
      <ContactSection />
    </div>
  );
};

export default Contact;