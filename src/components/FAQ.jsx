import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "01. ¿Las bolitas de hidrogel duelen o lastiman?",
    answer: "Es una actividad de bajo impacto. La sensación se compara a un jalón leve de una liga elástica pequeña. Garantizamos la seguridad combinando nuestras marcadoras exclusivas de potencia controlada, careta completa 360°, petos y la supervisión de monitores que regulan las distancias de tiro."
  },
  {
    question: "02. ¿El hidrogel mancha la ropa o ensucia la terraza?",
    answer: "No mancha ni deja residuos permanentes. La munición es 100% agua biodegradable; al secarse se absorbe en el pasto o se barre fácilmente en piso firme."
  },
  {
    question: "03. ¿Ustedes llevan todo el equipamiento y el staff?",
    answer: "Sí. Llevamos marcadoras, protecciones, bunkers, sistema de luz 110V, montaje/desmontaje y 2 monitores que dirigen las dinámicas de principio a fin."
  },
  {
    question: "04. ¿El staff se queda durante todo el juego?",
    answer: "Sí. Nuestro equipo explica las reglas, equipa a los participantes, organiza los torneos y cuida la seguridad todo el tiempo para que los papás puedan relajarse."
  },
  {
    question: "05. ¿Desde qué edad pueden jugar?",
    answer: "Gellyball, Barra Creativa y Retos están diseñados para niños desde los 5 años. La Cabina de Realidad Virtual se recomienda a partir de los 6 años. Adaptamos la intensidad según el grupo."
  },
  {
    question: "06. ¿Cuánto espacio necesito y sobre qué piso se puede instalar?",
    answer: "Para instalar el laberinto de Gelly Ball recomendamos un área mínima de 12 × 12 metros. Las dinámicas con bunkers ofrecen mayor flexibilidad y pueden adaptarse a las características del espacio disponible."
  },
  {
    question: "07. ¿Cuántos niños pueden jugar al mismo tiempo?",
    answer: "El juego simultáneo ideal es de 10 participantes por ronda. Si hay más invitados, coordinamos rotaciones rápidas y organizadas para que todos jueguen constantemente."
  },
  {
    question: "08. ¿Tengo que ir a un campo o el servicio es a domicilio?",
    answer: "Somos un servicio 100% móvil. Llevamos la infraestructura completa a casas, jardines, terrazas o salones privados en Zapopan y la ZMG (y zonas foráneas bajo cotización)."
  },
  {
    question: "09. ¿Qué pasa si los invitados nunca han jugado?",
    answer: "No requieren experiencia. El staff da una breve capacitación inicial y guía a los niños paso a paso desde la primera partida."
  },
  {
    question: "10. ¿Puedo combinar varias atracciones en el mismo evento?",
    answer: "¡Claro! Puedes armar combos sumando la Cabina VR, Barra Creativa o Gelly Retos a tu paquete de Gellyball para elevar el valor del evento."
  },
  {
    question: "11. ¿Emiten factura?",
    answer: "Sí, emitimos factura fiscal agregando el IVA correspondiente. Debe solicitarse al momento de realizar el pago."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#f4fafc] relative overflow-hidden">
      
      {/* DETALLES DE LUZ Y FONDO DECORATIVO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TÍTULO ENCABEZADO */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-fredoka text-brand-blue uppercase tracking-widest font-semibold text-sm sm:text-base block mb-2">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A3644] tracking-tight uppercase leading-tight">
            RESOLVEMOS TUS DUDAS
          </h2>
          <div className="w-20 h-1.5 bg-brand-yellow mx-auto mt-4 rounded-full" />
        </div>

        {/* CONTENEDOR TIPO TARJETA BLANCA (Igual al prototipo) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl border border-slate-100/80"
        >
          <div className="space-y-3.5">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-brand-blue/60 bg-slate-50/60 shadow-sm' 
                      : 'border-slate-200/80 bg-white hover:border-brand-blue/40 hover:bg-slate-50/30'
                  }`}
                >
                  {/* BOTÓN PREGUNTA */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 px-5 sm:py-5 sm:px-6 flex items-center justify-between text-left gap-4 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-fredoka text-base sm:text-lg font-semibold transition-colors duration-200 ${
                      isOpen ? 'text-brand-blue' : 'text-[#1A3644] group-hover:text-brand-blue'
                    }`}>
                      {item.question}
                    </span>

                    {/* BOTÓN / ICONO (+) CON ROTACIÓN */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#1A3644] text-brand-yellow rotate-45' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-brand-blue/10 group-hover:text-brand-blue'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </button>

                  {/* RESPUESTA ANIMADA */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}