import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white selection:bg-brand-blue selection:text-white">
      {/* Navbar Superior */}
      <Navbar />

      {/* Hero Principal */}
      <main>
        <Hero />
        
        {/* Marcadores de posición para las siguientes secciones */}
        <div id="atracciones" className="py-20 text-center bg-slate-50 border-b">
          <h2 className="text-3xl font-bold text-slate-800">Sección de Atracciones</h2>
          <p className="text-slate-500 mt-2">Próximamente...</p>
        </div>
      </main>

      {/* Botón Flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Pie de Página */}
      <Footer />
    </div>
  );
}

export default App;