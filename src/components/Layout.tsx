import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
/*import ChatWidget from './ChatWidget';*/

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={isHomePage ? '' : 'pt-20'}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;