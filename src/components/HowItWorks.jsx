import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Cuéntanos cuándo y dónde",
    description: "Indica fecha, horario, ubicación, invitados y la atracción deseada.",
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Revisamos la fecha y el espacio",
    description: "Confirmamos fecha, cobertura y que tu espacio cumpla los requisitos.",
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Aparta tu fecha",
    description: "Asegura tu reservación con un anticipo desde $1,000 MXN.",
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "¡A disfrutar!",
    description: "Montamos, dirigimos las dinámicas y retiramos todo. Tú solo relájate.",
    icon: (
      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const highlights = [
  {
    title: "Llegamos con anticipación",
    description: "El equipo llega aproximadamente una hora antes del inicio.",
    icon: (
      <svg className="w-6 h-6 text-[#73c9e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Montaje y desmontaje",
    description: "Cada proceso toma alrededor de 30 minutos de forma eficiente.",
    icon: (
      <svg className="w-6 h-6 text-[#73c9e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    )
  },
  {
    title: "Servicio 100% móvil",
    description: "Llevamos la experiencia completa hasta la ubicación de tu evento.",
    icon: (
      <svg className="w-6 h-6 text-[#73c9e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* DECORACIÓN DE FONDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center">
        
        {/* TÍTULO PRINCIPAL */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto w-full">
          <span className="font-fredoka text-brand-blue uppercase tracking-widest font-semibold text-base sm:text-lg block mb-2">
            PROCESO SENCILLO
          </span>
          <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A3644] tracking-tight uppercase !leading-tight">
            TÚ ELIGES. NOSOTROS HACEMOS EL RESTO
          </h2>
          <div className="w-24 h-1.5 bg-brand-yellow mx-auto mt-4 rounded-full" />
        </div>

        {/* CONTENEDOR DE PASOS (GRID + LÍNEA CONECTORA) */}
        <div className="relative mb-16 sm:mb-20">
          
          {/* LÍNEA DE PROGRESO HORIZONTAL (Visible en pantallas grandes LG) */}
          <div className="hidden lg:block absolute top-0 left-[10%] right-[10%] h-1 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue rounded-full z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-white rounded-3xl p-6 sm:p-8 pt-10 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-2"
              >
                {/* INSIGNIA NUMÉRICA FLOTANTE (01, 02, 03, 04) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#1A3644] transition-all duration-300">
                  <span className="font-fredoka font-black text-lg text-[#1A3644] group-hover:text-brand-yellow transition-colors">
                    {step.number}
                  </span>
                </div>

                <div>
                  {/* ICONO Y TÍTULO */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 mx-auto group-hover:bg-brand-blue/10 transition-colors">
                    {step.icon}
                  </div>

                  <h3 className="font-fredoka text-xl font-semibold text-[#1A3644] text-center mb-3 group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed text-center font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BANNER INFERIOR DE GARANTÍAS Y LOGÍSTICA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A3644] rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800"
        >
          {/* DETALLE DE RESPLANDOR DE FONDO */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700/80 relative z-10">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex items-start gap-4 ${idx !== 0 ? 'pt-6 md:pt-0 md:pl-8' : ''}`}
              >
                {/* ICONO EN CONTENEDOR REDONDEADO */}
                <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 shadow-inner">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-fredoka text-lg font-semibold text-white mb-1 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-md !leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}