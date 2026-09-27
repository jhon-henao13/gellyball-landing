import React from 'react';
import { motion } from 'framer-motion';
import contactImg from '../assets/contact-section.png';

export default function ContactCTA() {
  // Número o enlace directo de WhatsApp para el botón
  const whatsappUrl = "https://wa.me/5213300000000?text=Hola,%20quiero%20cotizar%20y%20apartar%20mi%20fecha%20para%20un%20evento%20Gellyball";

  return (
    <section id="contacto" className="py-8 sm:py-10 px-4 sm:px-4 lg:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TARJETA CONTENEDORA DE IMPACTO */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#73c9e7] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-sky-200/50"
        >
          {/* DECORACIÓN DE FONDO CON RESPLANDOR */}
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[420px] relative z-10">
            
            {/* COLUMNA IZQUIERDA: TEXTO Y CTA */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-fredoka text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white uppercase !tracking-tight !leading-[1.3] text-shadow-subtle"
              >
                ¿LISTO PARA HACER SU FIESTA INOLVIDABLE?
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/95 text-base sm:text-xl font-medium mt-4 sm:mt-6 max-w-xl leading-relaxed"
              >
                Cotiza, confirma tu espacio y asegura tu evento hoy.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 sm:mt-10"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#113c49] hover:bg-[#0a2730] text-white font-fredoka font-bold text-lg sm:text-xl px-6 py-4 sm:px-8 sm:py-4.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-95 group cursor-pointer border border-white/10"
                >
                  <span>Aparta tu fecha</span>
                  <svg 
                    className="w-6 h-6 ml-3 text-brand-yellow group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* COLUMNA DERECHA: IMAGEN PROTAGONISTA */}
            <div className="lg:col-span-5 h-full min-h-[180px] sm:min-h-[260px] lg:min-h-[350px] relative flex items-end justify-center lg:justify-end overflow-hidden">
              <motion.img
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                src={contactImg}
                alt="Niños disfrutando de la experiencia Gellyball con bunkers inflables"
                className="w-lg h-lg object-cover object-center rounded-b-3xl lg:rounded-b-none lg:rounded-r-[2.5rem]"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}