import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Activities from './components/Activities';
import Staff from './components/Staff';
import Resenas from './components/Resenas';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-brand-blue selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Activities />
        <Staff />
        <Resenas />
        <HowItWorks />
        <FAQ />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;