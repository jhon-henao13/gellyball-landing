import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroBg from '../assets/background-hero.jpg';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    // CAMBIO 1: Modificamos 'items-center' por 'items-end' para mandar el contenido abajo
    <section className="relative w-full min-h-[85vh] sm:min-h-screen pt-20 flex items-end justify-center overflow-hidden bg-slate-900">
      
      {/* BACKGROUND IMAGE & OVERLAYS */}
      {/* BACKGROUND IMAGE & OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Gellyball Fondo"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
        />
        
        {/* Gradiente principal UI/UX: Fuerte en la esquina inferior izquierda, desvaneciéndose hacia arriba y derecha */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-black/20 to-transparent" />
        
        {/* Capa de soporte inferior para asegurar una base sólida y limpia para los textos */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Viñeta global sutil para profesionalizar los bordes superiores y derechos sin apagar la foto */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* CONTENT CONTAINER */}
      {/* CAMBIO 3: Añadimos padding inferior (pb-12 o pb-16) para que los textos respiren desde el borde inferior */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
        

        {/* LEFT TEXT COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-8 lg:col-span-7 space-y-4 text-left"
        >
          {/* Tag de Ubicación / Subtítulo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <span className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium tracking-widest uppercase text-shadow-subtle">
              GUADALAJARA ZMP
            </span>
          </motion.div>

          {/* Headline Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-normal !leading-[1.2] text-shadow-strong uppercase font-fredoka"
          >
            DIVERSIÓN<br />
            PARA EVENTOS
          </motion.h1>

          {/* Subtítulo Descriptivo */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-xl md:text-2xl text-slate-100 font-normal max-w-xl !leading-relaxed text-shadow-subtle pt-1"
          >
            Convierte su cumpleaños en una aventura con <b>Gellyball, Cabinas VR y más en tu jardín.</b>
          </motion.p>
        


          {/* Botones de Acción Móviles / CTA Adicional */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            <a 
              href="#contacto"
              className="bg-brand-blue hover:bg-brand-blueHover text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-glow transition-all duration-300 text-lg inline-flex items-center gap-2 transform active:scale-95"
            >
              Reserva Ahora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div> */}
        </motion.div>

      </div>

    </section>
  );
}