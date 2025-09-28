import React from 'react';
import FloatingIcons from './components/FloatingIcons';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlobCursor from './components/BlobCursor';

function App() {
  return (
    <div className="min-h-screen bg-brand-light overflow-hidden">
      <BlobCursor />
      <FloatingIcons />
      <Navigation />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <CaseStudies />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
