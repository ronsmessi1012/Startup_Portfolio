import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - New Design O Craft';
  }, []);

  return <ContactSection />;
};

export default Contact;