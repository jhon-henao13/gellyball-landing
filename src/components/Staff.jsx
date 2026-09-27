import React from 'react';
import { motion } from 'framer-motion';

// Importación de las imágenes exactas de tus assets
import fourPersonsImg from '../assets/4persons.png';
import twoCascosImg from '../assets/2cascos.png';
import twoPersonsImg from '../assets/2persons.jpg';

export default function Staff() {
  return (
    <section id="staff" className="relative w-full py-10 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CONTENEDOR GENERAL */}
        <div className="relative min-h-fit lg:min-h-[680px] w-full flex flex-col justify-end">
          
          {/* 
            =========================================
            FONDO AMARILLO DINÁMICO
            =========================================
          */}
          
          {/* VERSIÓN MÓVIL Y TABLET (< lg): Tarjeta orgánica fluida que envuelve todo sin distorsión */}
          <div className="lg:hidden absolute inset-0 pointer-events-none z-0">
            <div className="w-full h-full bg-[#ffee7c] rounded-[2.5rem] sm:rounded-[3.5rem]" />
          </div>

          {/* VERSIÓN DESKTOP (lg:): Mantiene 100% exactos tus bloques asimétricos originales */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            {/* Bloque Amarillo Superior Izquierdo (Abraza al Título) */}
            <div className="absolute top-0 left-0 w-[90%] sm:w-[65%] lg:w-[53%] h-[460px] sm:h-[470px] bg-[#ffee7c] rounded-t-[3.5rem] rounded-br-[4.5rem] sm:rounded-br-[6rem] rounded-bl-[2.5rem]" />
            

            {/* Bloque Amarillo Inferior / Central (Abraza al equipo de 4 personas) */}
            <div className="absolute -bottom-10 right-0 w-full lg:w-[72%] h-[380px] sm:h-[420px] lg:h-[460px] bg-[#ffee7c] rounded-t-[4.5rem] sm:rounded-tl-[6rem] rounded-b-[5.5rem] sm:rounded-b-[4rem]" />
          </div>

          {/* 
            =========================================
            CONTENIDO Y CAPAS DE ELEMENTOS (Z-INDEX SUPERIOR)
            =========================================
          */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-start pt-6 sm:pt-8 px-3 sm:px-8">
            
            {/* --- COLUMNA IZQUIERDA: TÍTULOS Y FOTO SOBRESALIENTE --- */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 sm:space-y-8 items-center lg:items-center text-center lg:text-left">
              
              {/* Bloque de Textos Principales */}
              <div className="space-y-3 pt-2">
                <span className="font-fredoka text-[#1A3644]/70 text-sm sm:text-xl font-medium tracking-widest uppercase block">
                  STAFF
                </span>
                <h2 className="font-fredoka text-3xl sm:text-5xl lg:text-[3rem] font-bold text-[#1A3644] leading-[1.2] sm:!leading-[1.3] tracking-wide uppercase drop-shadow-sm">
                  TU EVENTO <br className="hidden sm:inline" />
                  <span className="text-[#1A3644]">100% BAJO CONTROL</span>
                </h2>

                {/* Texto Descriptivo */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-medium text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed pt-1 sm:pt-2 max-w-md mx-auto lg:mx-0"
                >
                  Capacitados a cargo del orden, la seguridad y la diversión de cada invitado.
                </motion.p>
              </div>

              {/* FOTO ACCIÓN (2persons.jpg) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative z-20 w-full max-w-[290px] sm:max-w-[400px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl border-4 border-white transform lg:-translate-y-2 mx-auto lg:mx-0"
              >
                <img 
                  src={twoPersonsImg} 
                  alt="Staff capacitado jugando Gellyball" 
                  className="w-full h-[210px] sm:h-[320px] object-cover"
                />
              </motion.div>

            </div>

            {/* --- COLUMNA DERECHA: CASCOS FLOTANTES Y EQUIPO COMPLETO --- */}
            <div className="lg:col-span-6 flex flex-col justify-around h-full relative min-h-fit lg:min-h-[580px] mt-4 lg:mt-14 space-y-6 lg:space-y-0">
              
              {/* CASCOS FLOTANTES (2cascos.png) */}
              <motion.div 
                animate={{ 
                  y: [-6, 6, -6],
                  rotate: [0, 1.5, 0, -1.5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="flex justify-center lg:justify-center w-full relative z-20 lg:-mt-2"
              >
                <img 
                  src={twoCascosImg} 
                  alt="Cascos de protección rojo y azul" 
                  className="w-48 sm:w-72 lg:w-96 object-contain drop-shadow-xl sm:drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              {/* GRUPO DE STAFF EN LA BASE DEL BLOQUE AMARILLO (4persons.png) */}
              <div className="w-full flex justify-center lg:justify-end items-end pt-4 sm:pt-8 lg:pt-0 -mb-2 sm:-mb-6 lg:-mb-20">
                <motion.img 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  src={fourPersonsImg} 
                  alt="Equipo del Staff sonriendo" 
                  className="w-full max-w-[340px] sm:max-w-[600px] lg:max-w-[650px] object-contain drop-shadow-xl"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}