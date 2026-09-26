import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-brand-blue selection:text-white">
      {/* Navbar Superior */}
      <Navbar />

      {/* Secciones Principales */}
      <main>
        <Hero />
        
        {/* Nueva Sección de Métricas y Experiencia */}
        <Stats />
      </main>

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;