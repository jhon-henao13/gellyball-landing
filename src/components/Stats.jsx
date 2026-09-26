import React from 'react';
import { motion } from 'framer-motion';
import imgPintura from '../assets/img-pintura.png';

// Generador de Confeti de Fondo para recrear la atmósfera festiva
// Generador de Confeti Premium, Dinámico y Optimizado en 3D
const ConfettiBackground = () => {
  const [particles, setParticles] = React.useState([]);

  React.useEffect(() => {
    // Paleta de colores pastel vibrante idéntica a tu imagen de referencia
    const colors = ['#93C5FD', '#FCA5A5', '#FDE047', '#D8B4FE', '#86EFAC', '#FDBA74'];
    
    // Generar 120 partículas proceduralmente (puedes ajustar la cantidad)
    const generated = Array.from({ length: 120 }).map((_, i) => {
      const type = Math.random(); // Distribución de formas
      let w, h, br, skew;
      
      if (type < 0.25) {
        // 25% Cuadritos pequeños
        w = Math.random() * 6 + 6; 
        h = w; 
        br = '2px'; 
        skew = 0;
      } else if (type < 0.65) {
        // 40% Rectángulos/Confeti clásico sesgado
        w = Math.random() * 8 + 6; 
        h = Math.random() * 12 + 10; 
        br = '2px'; 
        skew = Math.random() * 30 - 15;
      } else {
        // 35% Cintas curvas (El secreto para el aspecto orgánico/premium de la imagen)
        w = Math.random() * 10 + 6; 
        h = Math.random() * 20 + 15; 
        // Genera bordes irregulares para simular papel curvado
        br = `${Math.random() * 50 + 20}% ${Math.random() * 30}% ${Math.random() * 50 + 20}% ${Math.random() * 30}%`;
        skew = Math.random() * 40 - 20;
      }

      return {
        id: i,
        x: Math.random() * 100, // Posición inicial X %
        y: Math.random() * 100, // Posición inicial Y %
        w, h, br, skew,
        color: colors[Math.floor(Math.random() * colors.length)],
        // Variables de animación fluida
        duration: Math.random() * 10 + 6, // Entre 6 y 16 segundos
        delay: Math.random() * -10, // Delay negativo para que ya estén en movimiento al cargar
        rotateZ: Math.random() * 360,
        drift: (Math.random() - 0.5) * 50, // Deriva horizontal suave
        float: (Math.random() - 0.5) * 80, // Oscilación vertical suave
      };
    });
    
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80" style={{ perspective: '800px' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute drop-shadow-sm will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.w,
            height: p.h,
            backgroundColor: p.color,
            borderRadius: p.br,
            transform: `skew(${p.skew}deg)`,
          }}
          animate={{
            x: [0, p.drift, 0],
            y: [0, p.float, 0],
            // El giro en X y Y crea la ilusión 3D de papel cayendo
            rotateX: [0, 360], 
            rotateY: [0, 360], 
            rotateZ: [p.rotateZ, p.rotateZ + 180],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear", // Linear mantiene el giro 3D constante y natural
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function Stats() {
  const statsData = [
    // LADO IZQUIERDO
    {
      id: 'eventos',
      value: '1,000+',
      label: 'eventos realizados',
      position: 'left-top',
      align: 'md:items-end md:text-right',
    },
    {
      id: 'experiencia',
      value: '4+',
      label: 'años de experiencia',
      position: 'left-bottom',
      align: 'md:items-end md:text-left',
    },
    // LADO DERECHO
    {
      id: 'edad',
      value: '5+',
      label: 'desde esta edad',
      position: 'right-top',
      align: 'md:items-start md:text-left',
    },
    {
      id: 'staff',
      value: 'Staff',
      label: 'durante toda actividad',
      position: 'right-bottom',
      align: 'md:items-start md:text-left',
    },
  ];

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Fondo de Confeti */}
      <ConfettiBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          
          {/* COLUMNA IZQUIERDA (Métricas 1 y 2) */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-10 md:space-y-20 order-2 md:order-1">
            {statsData.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center ${item.align} text-center group`}
              >
                <span className="font-fredoka text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-[#1a3644] tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {item.value}
                </span>
                <span className="text-slate-600 text-xl sm:text-2xl font-normal mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* COLUMNA CENTRO (Imagen de Pincelada) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-6 flex items-center justify-center order-1 md:order-2 my-4 md:my-0"
          >
            <div className="relative group max-w-md sm:max-w-lg md:max-w-xl w-full">
              {/* Resplandor suave detrás de la imagen */}
              <div className="absolute inset-0 bg-brand-blue/20 rounded-full filter blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              
              <motion.img
                src={imgPintura}
                alt="Niños jugando Gellyball en evento"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* COLUMNA DERECHA (Métricas 3 y 4) */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-10 md:space-y-20 order-3">
            {statsData.slice(2, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center ${item.align} text-center group`}
              >
                <span className="font-fredoka text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-[#1a3644] tracking-tight transition-transform duration-300 group-hover:scale-105">
                  {item.value}
                </span>
                <span className="text-slate-600 text-xl sm:text-2xl font-normal mt-1">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}