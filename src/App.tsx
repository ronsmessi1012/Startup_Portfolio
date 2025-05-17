import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
<<<<<<< HEAD
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
=======
>>>>>>> 2c29876279bb6862deaf2119bf94e55f00110ab9

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
=======
          {/* Add other routes as they are implemented */}
>>>>>>> 2c29876279bb6862deaf2119bf94e55f00110ab9
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;