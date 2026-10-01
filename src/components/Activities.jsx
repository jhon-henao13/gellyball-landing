import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Activities() {
  // Estado para controlar el video activo en el Modal reproductor
  const [activeVideo, setActiveVideo] = useState(null);

  // Configuración de las 3 actividades (Listo para poner tus URLs de video y posters)
  const activitiesData = {
    gellyball: {
      id: 'gellyball',
      title: 'GELLYBALL',
      bgColor: 'bg-[#e8f5fc]', // Azul claro pastel exacto
      videoUrl: 'https://res.cloudinary.com/dodxaehv3/video/upload/v1790819661/activities1_mbbzqx.mp4', // <-- MODIFICADO
      posterImg: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop',
      caption: ' ',
    },
    talleres: {
      id: 'talleres',
      title: 'TALLERES',
      bgColor: 'bg-[#ffe4e1]', // Rosa pastel exacto
      videoUrl: 'https://res.cloudinary.com/dodxaehv3/video/upload/v1790819664/activities3_xkhw4r.mp4', // <-- MODIFICADO
      posterImg: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=800&auto=format&fit=crop',
      caption: ' ',
    },
    realidadVirtual: {
      id: 'realidadVirtual',
      title: 'REALIDAD VIRTUAL',
      bgColor: 'bg-[#fee3a2]', // Amarillo pastel exacto
      videoUrl: 'https://res.cloudinary.com/dodxaehv3/video/upload/v1790819663/activities2_hctbhe.mp4', // <-- MODIFICADO
      posterImg: '...',
      caption: ' ',
    },
  };

  return (
    <section id="atracciones" className="relative w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID ASIMÉTRICO EN 2 COLUMNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: Gellyball & Talleres */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* CARD 1: GELLYBALL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`${activitiesData.gellyball.bgColor} rounded-3xl p-6 sm:p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <h3 className="font-fredoka text-3xl sm:text-4xl font-bold text-[#1a3644] tracking-wide mb-6 text-center">
                {activitiesData.gellyball.title}
              </h3>
              
              {/* Frame de Video Vertical 9:16 */}
              <VideoPlayerFrame 
                activity={activitiesData.gellyball} 
                onPlay={() => setActiveVideo(activitiesData.gellyball)} 
              />
            </motion.div>

            {/* CARD 2: TALLERES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${activitiesData.talleres.bgColor} rounded-3xl p-6 sm:p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <h3 className="font-fredoka text-4xl sm:text-5xl font-bold text-[#1a3644] tracking-wide mb-6 text-center">
                {activitiesData.talleres.title}
              </h3>

              {/* Frame de Video Vertical 9:16 */}
              <VideoPlayerFrame 
                activity={activitiesData.talleres} 
                onPlay={() => setActiveVideo(activitiesData.talleres)} 
              />
            </motion.div>

          </div>

          {/* COLUMNA DERECHA: Encabezado + Realidad Virtual + CTA */}
          <div className="lg:col-span-6 flex flex-col gap-14">
            
            {/* ENCABEZADO DE SECCIÓN */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-3 pt-2"
            >
              <span className="text-emerald-700 text-xl font-semibold tracking-widest uppercase block">
                ACTIVIDADES
              </span>
              <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1a3644] uppercase !leading-tight">
                LA FIESTA MÁS ÉPICA
              </h2>
              <p className="text-slate-900 text-lg sm:text-xl !leading-relaxed pt-1">
                Llevamos a tu domicilio experiencias interactivas de gama alta con staff experto, para que tú solo te dediques a disfrutar con tus invitados.
              </p>
            </motion.div>

            {/* CARD 3: REALIDAD VIRTUAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${activitiesData.realidadVirtual.bgColor} rounded-3xl p-6 sm:p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <h3 className="font-fredoka text-4xl sm:text-5xl font-bold text-[#1a3644] tracking-wide mb-6 text-center">
                {activitiesData.realidadVirtual.title}
              </h3>

              {/* Frame de Video Vertical 9:16 */}
              <VideoPlayerFrame 
                activity={activitiesData.realidadVirtual} 
                onPlay={() => setActiveVideo(activitiesData.realidadVirtual)} 
              />
            </motion.div>

            {/* BOTÓN CTA: APARTA TU FECHA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="w-full bg-[#6ACAE8] hover:bg-brand-blueHover text-white font-fredoka text-2xl font-bold py-6 px-6 rounded-2xl shadow-md hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 group text-center tracking-wider"
              >
                <span>Aparta tu fecha</span>
                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </motion.a>
            </motion.div>

          </div>

        </div>
      </div>

      {/* MODAL REPRODUCTOR DE VIDEO */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black p-2 rounded-full z-20 transition-colors"
                aria-label="Cerrar video"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Video MP4 en Modal */}
              <video
                className="w-full h-full object-cover"
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


function VideoPlayerFrame({ activity, onPlay }) {
  return (
    <div 
      onClick={onPlay}
      className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg cursor-pointer group transform transition-all duration-300 hover:scale-[1.02]"
    >
      <video
        src={activity.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />


      {/* Sombreante para contraste de texto y botón */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

      {/* BOTÓN DE PLAY CENTRAL */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center"
        >
          {/* Anillo Pulsante */}
          <span className="absolute -inset-3 rounded-full bg-white/30 animate-ping opacity-75 group-hover:bg-brand-blue/50" />
          
          {/* Círculo Principal */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-900/60 backdrop-blur-sm border-2 border-white/80 flex items-center justify-center shadow-xl group-hover:bg-brand-blue group-hover:border-white transition-colors duration-300">
            <svg 
              className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* CAPTION INFERIOR SOBRE EL VIDEO */}
      <div className="absolute bottom-6 left-0 right-0 px-4 text-center">
        <span className="font-fredoka text-white text-lg sm:text-xl font-bold uppercase tracking-wider drop-shadow-md">
          {activity.caption}
        </span>
      </div>
    </div>
  );
}