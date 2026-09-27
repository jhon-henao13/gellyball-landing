import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATOS EXTRAÍDOS DE GOOGLE MAPS ---
const reviewsData = [
  {
    id: 1,
    name: "MONSERRAT RINCON DE LA ROSA",
    avatar: "M",
    avatarBg: "bg-purple-600",
    stats: "5 opiniones · 1 foto",
    time: "Hace 3 meses",
    rating: 5,
    verified: true,
    text: "Sin duda lo recomiendo 100% los niños felices !! Una experiencia diferente y segura, atención increíble super organizados!! No dudes en elegirlos",
    media: [
      {
        type: "video",
        url: "https://rr4---sn-q4flrn7y.googlevideo.com/videoplayback?expire=1790536307&ei=U065aoG3Eojgsc8PkKb08AM&ip=190.109.25.72&id=070758d61e1ad59b&itag=18&source=contrib_service_geo_ugc&begin=0&requiressl=yes&xpc=EghoqJzIP3oBAQ==&rms=su,su&sc=yes&susc=gugc&app=fife&ic=1066&eaua=ZrE-er6gHlc&pcm2=yes&mime=video/mp4&vprv=1&rqh=1&dur=14.187&lmt=1782174917445187&cpn=HBn_bIvdUwpevhFd&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,eaua,pcm2,mime,vprv,rqh,dur,lmt&sig=AE0s2JYwRQIgK-UjzkYdxIK9N6qYJK5hg17wGeiAekTitk-txt6tZdsCIQCzRBypEqK9BEDb0d2xy5_ueVbNbYf5jA0ixSMsM7ajMw==&redirect_counter=1&cm2rm=sn-cvbll7l&rrc=191&req_id=1f1e0dbb5575a3ee&cms_redirect=yes&cmsv=e&met=1790529107,&mh=NB&mm=34&mn=sn-q4flrn7y&ms=ltu&mt=1790528679&mv=m&mvi=4&pl=24&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRgIhALk50UQMWp1FuQnP2OsxQm4FH4-AR1RiSGwjCljrP3aoAiEArxVhSKgVsVEZxtgFAbxA5zSXoW87UMXDhAZU8XjXppc%3D",
        poster: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=600&auto=format&fit=crop"
      }
    ],
    ownerResponse: {
      time: "Hace un mes",
      text: "¡Muchísimas gracias por recomendarnos al 100%! 🥳💙 Nos encanta saber que los niños disfrutaron tanto la experiencia y que para ustedes fue una opción diferente, segura y bien organizada. 🙌\n\nTrabajamos con mucho cariño para que cada evento salga increíble desde que llegamos hasta que termina. ¡Gracias por confiar en Gellyball para hacer su fiesta todavía más divertida! 🎯💦⭐️"
    }
  },
  {
    id: 2,
    name: "Familia Hernández Gómez",
    avatar: "F",
    avatarBg: "bg-teal-600",
    stats: "3 opiniones · 2 fotos",
    time: "Hace 6 meses",
    rating: 5,
    verified: true,
    text: "Súper recomendable, excelente servicio y atención, los niños se divierten mucho y muy buena opción para las fiestas",
    media: [
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmMRMD5Fl9xcE-WOU7kYd-V6SYkV66E6yJAGMuVBqimz7bvU7WiDvs8FyMk7L-O2bxB0eN8Fl1Z29Iwry8Ng0Y-JTK7Vjw-gMqWc0VlkHEwkeL7k0xVRdlQ-kTT0lOkXH8GWRUcE0PMcqGw=w270-h405-p-k-no"
      },
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmN1mbzRuAyyXfdOJSenJZr4xjddh0tXUwAi53OqtUHtDEH_WbOtAApagzEWWkMlorrT0FAtIp-Dx2Iq5fB1VHptt-kh28KZIdT6Oznfxo19l0ZF0Q8PkMvZjRz2ADDAaHh66PA_naW2mAFA=w270-h405-p-k-no"
      }
    ],
    ownerResponse: {
      time: "Hace 6 meses",
      text: "Nos encantó acompañarlos en su evento 🙌 La vibra que se armó estuvo increíble y eso hace toda la diferencia. Gracias por confiar en Gellyball para un día tan especial 🎉\n\nCuando quieran volver a vivir la experiencia de gotcha de hidrogel, aquí estamos listos para la acción 💥\n#Gellyball #GotchaDeHidrogel #FiestasInfantiles #EventosEnZapopan"
    }
  },
  {
    id: 3,
    name: "Helene Monchy",
    avatar: "H",
    avatarBg: "bg-amber-600",
    stats: "5 opiniones · 7 fotos",
    time: "Hace 6 meses",
    rating: 5,
    verified: true,
    text: "Excelente servicio y atención de parte de gellyball, también todo el material que ponen a disposición está en excelente estado y limpio, el staff quien acompaña los niños también muy capacitado gracias",
    media: [
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmPo4GrBxcHCAP-u3wHoUivc5scWdeHLJgnCY6L9gORMV_0W38KmHbE2ZOr7GcDcVzULtMYUw8gaWz5gzvoCe2pCL9zuDXUao_9uva99rhOK1MmgLp7GIoeO2cZTN8raaC0m-_GGf3VFknbe=w540-h405-p-k-no"
      }
    ],
    ownerResponse: {
      time: "Hace 6 meses",
      text: "¡Qué gusto leer tu comentario, muchas gracias! 😊\nLa verdad fue un placer acompañarlos en su evento y ver a los niños tan emocionados jugando. Se notaba el gran ambiente que había y eso siempre hace que todo fluya todavía mejor. Gracias también por la confianza para llevar esta experiencia de gotcha de hidrogel a su celebración, esperamos volver a coincidir muy pronto."
    }
  },
  {
    id: 4,
    name: "Josue Netzahualcoyotl Vazquez Cardenas",
    avatar: "J",
    avatarBg: "bg-indigo-600",
    stats: "3 opiniones · 1 foto",
    time: "Hace 6 meses",
    rating: 5,
    verified: true,
    text: "Excelente servicio. Muy disfrutable por pequeños y por grandes… la organización por tandas permite que todos jueguen una y otra vez",
    media: [
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmPmqsC8s2biifjm6kSbtmSqcj1bTn6FMwzJr0oXypMS5l-ZlSt0ac09U0CEAlIM8ldPVL2XchkiX0IRHiZQ-e8tb4NoxojeG4a9rm6KIxVd54py21htDDfmcy2THxN0ujw9HJQf4G9xuTvU=w540-h405-p-k-no"
      }
    ],
    ownerResponse: {
      time: "Hace 6 meses",
      text: "Nos dio muchísimo gusto ser parte de su evento 🙌 Se armó súper buen ambiente y eso es lo que más disfrutamos. Gracias por la confianza y por la energía que le pusieron al Gellyball, ¡así da gusto! 😄\n\nCuando quieran repetir la experiencia de gotcha de hidrogel, aquí estamos para otra gran batalla 💥\n#Gellyball #GotchaDeHidrogel #FiestasInfantiles #EventosEnZapopan #DiversiónParaTodos"
    }
  },
  {
    id: 5,
    name: "Nallely Gonzalez",
    avatar: "N",
    avatarBg: "bg-rose-600",
    stats: "1 opinión",
    time: "Hace 3 meses",
    rating: 5,
    verified: true,
    text: "Excelente Servicio. Desde un principio muy buena atención y en el evento todo perfecto. Llegaron en tiempo y forma, excelente organización…",
    ownerResponse: {
      time: "Hace un mes",
      text: "¡Muchísimas gracias por compartir tu experiencia! 🥳💙 Nos da mucho gusto saber que desde el primer contacto recibiste una excelente atención y que el día del evento todo salió perfecto.\n\nLa puntualidad, organización y atención a cada detalle son parte fundamental de nuestro servicio, así que nos alegra muchísimo saber que lo notaron. 🙌🎯\n\n¡Y qué mejor que saber que los niños quedaron felices y disfrutaron muchísimo! Gracias por confiar en Gellyball y permitirnos ser parte de un día tan especial. 💦🎉"
    }
  },
  {
    id: 6,
    name: "Zairah Alejandra",
    avatar: "Z",
    avatarBg: "bg-emerald-600",
    stats: "6 opiniones",
    time: "Hace 4 meses",
    rating: 5,
    verified: true,
    text: "Excelente servicio! 10 de 10. Las chicas super puntuales y pacientes con chicos y grandes 😅... fue el hit del evento. Muchas gracias 👌🏻…",
    ownerResponse: {
      time: "Hace 4 meses",
      text: "Muchísimas gracias por tu calificación y por tus amables palabras. Nos llena de orgullo saber que nuestro servicio fue el hit de tu evento.\n\nCompartiremos tu felicitación con las chicas de nuestro equipo; para nosotros, la puntualidad y la paciencia con invitados de todas las edades son pilares fundamentales para garantizar una experiencia premium.\n\nGracias por confiar en nosotros."
    }
  },
  {
    id: 7,
    name: "CLAUDETTE RODRÍGUEZ",
    avatar: "C",
    avatarBg: "bg-cyan-600",
    stats: "1 opinión",
    time: "Hace 3 meses",
    rating: 5,
    verified: true,
    text: "Excelente servicio, los niños se divirtieron muchísimo y mi hija quedó feliz con su fiesta.",
    ownerResponse: {
      time: "Hace un mes",
      text: "¡Muchísimas gracias por compartir tu experiencia! 🥳💙 Nos encanta saber que los niños se divirtieron muchísimo y, sobre todo, que tu hija quedó feliz con su fiesta. 🎉🎯\n\nPara nosotros es increíble ser parte de momentos tan especiales. ¡Gracias por confiar en Gellyball para hacer de su celebración una experiencia diferente y llena de diversión! 💦🙌"
    }
  },
  {
    id: 8,
    name: "Gema López N",
    avatar: "G",
    avatarBg: "bg-orange-600",
    stats: "Local Guide · 255 opiniones · 789 fotos",
    time: "Hace 9 meses",
    rating: 5,
    verified: true,
    text: "Nos gustó mucho su atención y servicio durante el evento, los chavos estuvieron contentos, disfrutaron y se divirtieron. Sin duda los recomendamos y volveremos a buscar para futuros eventos.",
    media: [
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmOuEjht7KZgoXh_G8f6H8jyuJzjk6MTLTdJ_dTAgtgBDJ2tfdWhOb0NbJA_BbTmIfHGr6EHVG6ORFbU0Pq1CrqwQK-kFLpnA4RiN25dT3hlFIZAlM9_T0MVNeOy5O_YN4_Ep88trNjVhUds=w540-h405-p-k-no"
      }
    ],
    ownerResponse: {
      time: "Hace 7 meses",
      text: "¡Muchísimas gracias por sus palabras! Nos llena de alegría saber que los chavos se divirtieron y que quedaron contentos con la atención y el servicio de Gellyball. Nuestro gotcha de hidrogel está pensado justo para crear momentos llenos de emoción y convivencia.\n\nAgradecemos mucho su recomendación y la confianza para ser parte de su evento. Será un gusto acompañarlos nuevamente en futuras celebraciones."
    }
  },
  {
    id: 9,
    name: "Kalli Terraza",
    avatar: "K",
    avatarBg: "bg-blue-600",
    stats: "3 opiniones",
    time: "Hace 9 meses",
    rating: 5,
    verified: true,
    text: "El trato fue excelente, muy atentos y puntuales. Los equipos están en perfecto estado y la limpieza genial. Hicieron de nuestro evento todo un éxito con los niños y con los no tan niños. Todos disfrutamos muchísimo de tenerlos en nuestra fiesta.",
    ownerResponse: {
      time: "Hace 7 meses",
      text: "¡Muchísimas gracias por su comentario! Nos alegra saber que el trato, la puntualidad y el estado del equipo estuvieron a la altura de su evento. En Gellyball cuidamos cada detalle para que nuestro gotcha de hidrogel sea seguro, limpio y divertido para todos.\n\nGracias por permitirnos ser parte de su fiesta y por compartir esos momentos de tanta diversión."
    }
  },
  {
    id: 10,
    name: "Martha Gomez",
    avatar: "M",
    avatarBg: "bg-pink-600",
    stats: "2 opiniones",
    time: "Hace 7 meses",
    rating: 5,
    verified: true,
    text: "Nos gustó mucho contratarlos, el trato hacia los niños es bueno. Les explican amablemente cuando tienen que esperar o porqué usar los chalecos. Nos atendieron en tiempo y forma. Recomendable =)",
    ownerResponse: {
      time: "Hace 6 meses",
      text: "¡Muchas gracias por tu reseña, Martha! Nos da mucha alegría saber que los niños disfrutaron la experiencia y que el equipo pudo brindarles esa atención que ellos necesitan. Para nosotros es fundamental que se sientan cómodos y bien atendidos desde el primer minuto. ¡Gracias por recomendarnos y por confiar en nosotros para tu evento!"
    }
  },
  {
    id: 11,
    name: "Cynthia Lugo",
    avatar: "C",
    avatarBg: "bg-violet-600",
    stats: "2 opiniones · 3 fotos",
    time: "Hace 9 meses",
    rating: 5,
    verified: true,
    text: "Fue divertido . Adultos también jugamos :) y los niños súper divertidos .",
    media: [
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmOAcjkJAL0IVCgj5ghfTqg9Lu5vnvHCTyGPF-eS9sBeGOyhQA4Y7JyKRqXnGJZQNtQoS4mKt6hSjTlfhkAL1jOb4u3zQVgid9UiRX3VCfMm3zGHTNQM7Up5Ct1qWhnQzT_1eHG7js4VHXLb=w270-h405-p-k-no"
      },
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmPGvfo3qUnjjEY8XhtgWq-mr1CY0H6hN4qbU_dQoLFuOZf92MfDYmx5WAXlofH5HMtcFH1GpSLIQFGV3U5chC_PWQgbYDh43gBCtdtcxj3RFlEHH4g4io6Tm98FIlJ5I9ahJmjySBrpIV4=w270-h202-p-k-no"
      },
      {
        type: "image",
        url: "https://lh3.googleusercontent.com/grass-cs/ACvplmOzx0Q_uKda8JZUzXYr7UEDT7p90S_RBGpe3q0-tvWkJXlumA19KzD27W5iwNGXWm66Rl6nbyjgY5jtqeeNSoKXN9PydJhIzP6dJ8zeoNBIreNpNwS9_OzWnSDkX0YaxrpYh-DmgwSQFvxy=w270-h202-p-k-no"
      }
    ],
    ownerResponse: {
      time: "Hace 7 meses",
      text: "¡Muchas gracias por compartir su experiencia! Nos encanta saber que tanto adultos como niños se divirtieron con Gellyball, nuestro gotcha de hidrogel está diseñado justo para que toda la familia pueda jugar y pasarla increíble. Gracias por confiar en nosotros para su evento, fue un gusto ser parte de ese día tan divertido."
    }
  },
  {
    id: 12,
    name: "Leonel Menjivar",
    avatar: "L",
    avatarBg: "bg-yellow-600",
    stats: "1 opinión",
    time: "Hace 4 meses",
    rating: 5,
    verified: true,
    text: "Padrísimo, los niños literal, no salieron de las actividades.\nSuper buena atención desde antes del evento y durante el evento.\nSuper opción para fiestas y eventos.",
    ownerResponse: {
      time: "Hace 3 meses",
      text: "¡Muchas gracias por compartir su experiencia! 😊 Nos da muchísimo gusto saber que los niños disfrutaron tanto que prácticamente no quisieron salir de las actividades. Esa es justamente la experiencia que buscamos crear en cada evento de Gellyball.\nAgradecemos también sus palabras sobre la atención antes y durante el evento. Nos esforzamos para que todo el proceso sea sencillo, divertido y memorable para nuestros clientes.\n\n¡Gracias por recomendarnos para fiestas y eventos! Esperamos volver a acompañarlos muy pronto."
    }
  },
  {
    id: 13,
    name: "Rosalba Contreras Cortez",
    avatar: "R",
    avatarBg: "bg-lime-600",
    stats: "1 opinión",
    time: "Hace 5 meses",
    rating: 5,
    verified: true,
    text: "Hola súper divertidos los pequeños y adultos la verdad lo recomiendo mucho, los niños no querían ni irse de la fiesta la atención buenísima muy amables, los recomiendo mucho",
    ownerResponse: {
      time: "Hace 5 meses",
      text: "Gracias por sus comentarios, nos da muchísimo gusto saber que tanto pequeños como adultos disfrutaron al máximo la experiencia 😊 Nos encanta ver cómo nadie se quiere ir cuando están jugando Gellyball.\n\n¡Gracias por recomendarnos! Estamos a sus órdenes para cualquier futura fiesta o evento."
    }
  },

  {
    id: 14,
    name: "Erika Nayeli Orozco",
    avatar: "E",
    avatarBg: "bg-pink-600",
    stats: "2 opiniones · 1 foto",
    time: "Hace 3 meses",
    rating: 5,
    verified: true,
    text: "Excelente servicio, niños y grandes nos divertimos mucho",
    ownerResponse: {
      time: "Hace un mes",
      text: "¡Muchísimas gracias por compartir tu experiencia! 🥳💙 Nos encanta saber que se divirtieron tanto chicos como grandes. 🎯🙌\n\nEsa es justamente la idea: que Gellyball sea una experiencia diferente en la que todos puedan disfrutar y pasar un momento increíble. ¡Gracias por elegirnos y por sus 5 estrellas! ⭐️⭐️⭐️⭐️⭐️"
    }
  }

];

export default function Resenas() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [expandedResponses, setExpandedResponses] = useState({});

  const toggleOwnerResponse = (id) => {
    setExpandedResponses(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="resenas" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      
      {/* DECORACIÓN DE FONDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#ffee7c] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#73c9e7]/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TÍTULO PRINCIPAL DE LA SECCIÓN */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-fredoka text-brand-blue uppercase tracking-widest font-semibold text-base sm:text-lg block mb-2">
            RESEÑAS DE GOOGLE MAPS
          </span>
          <h2 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A3644] tracking-tight uppercase">
            LO QUE OPINAN LOS PADRES
          </h2>
          <div className="w-24 h-1.5 bg-[#ffee7c] mx-auto mt-4 rounded-full" />
        </div>

        {/* ESTRUCTURA PRINCIPAL: RESUMEN GOOGLE + GRID DE RESEÑAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================
              1. TARJETA DE RESUMEN DE GOOGLE (IZQUIERDA)
             ========================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center sticky top-24"
          >
            {/* Logo o Icono de Gellyball */}
            <div className="w-20 h-20 bg-[#ffee7c]/30 rounded-2xl p-2 flex items-center justify-center mb-4 border border-[#ffee7c]">
              <span className="font-fredoka font-black text-2xl text-[#1A3644]">G</span>
            </div>

            <h3 className="font-fredoka text-xl font-bold text-[#1A3644]">
              Gellyball Zapopan
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Gotcha de Hidrogel & Fiestas Infantiles</p>

            {/* Puntuación */}
            <div className="flex items-center gap-2 mt-4">
              <span className="font-fredoka text-4xl font-extrabold text-[#1A3644]">5.0</span>
              <div className="flex flex-col items-start">
                {/* Estrellas Doradas */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500 mt-0.5">Basado en opiniones verificadas</span>
              </div>
            </div>

            {/* Insignia de Google */}
            <div className="flex items-center justify-center gap-2 mt-6 py-2 px-4 bg-slate-50 rounded-full border border-slate-200/80 w-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-xs font-bold text-slate-700">Reseñas de Google</span>
            </div>

            {/* Botón Escribir Reseña */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 w-full py-3 px-6 bg-[#1A3644] hover:bg-[#254b5f] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
            >
              <span>Escribir una reseña</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>


          {/* =========================================
              2. LISTADO DE RESEÑAS (DERECHA)
             ========================================= */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {reviewsData.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  {/* CABECERA DE LA RESEÑA */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar del Usuario */}
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 ${review.avatarBg} text-white font-bold text-lg rounded-full flex items-center justify-center shadow-sm shrink-0`}>
                        {review.avatar}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-[#1A3644] text-base sm:text-lg leading-snug">
                            {review.name}
                          </h4>
                          {/* Badge Verificado */}
                          <svg className="w-4 h-4 text-blue-500 fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <p className="text-xs text-slate-400 font-medium">
                          {review.stats} · <span className="text-slate-500">{review.time}</span>
                        </p>
                      </div>
                    </div>

                    {/* Logo de Google G */}
                    <div className="p-1.5 bg-slate-50 rounded-full border border-slate-100 shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>
                  </div>

                  {/* ESTRELLAS DORADAS DE LA RESEÑA */}
                  <div className="flex text-amber-400 my-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* TEXTO DE LA RESEÑA */}
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                    "{review.text}"
                  </p>

                  {/* FOTOS O VIDEO DE LA RESEÑA */}
                  {review.media && review.media.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {review.media.map((item, mIdx) => (
                        <div 
                          key={mIdx}
                          onClick={() => setSelectedMedia(item)}
                          className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden cursor-pointer group shadow-sm border border-slate-200"
                        >
                          {item.type === 'image' ? (
                            <img 
                              src={item.url} 
                              alt="Evidencia cliente Gellyball" 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <div className="relative w-full h-full bg-black/80 flex items-center justify-center">
                              <img 
                                src={item.poster} 
                                alt="Video preview" 
                                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5 text-[#1A3644] fill-current translate-x-0.5" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* RESPUESTA DEL PROPIETARIO (ACORDEÓN / BLOQUE DISTINTIVO) */}
                {review.ownerResponse && (
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => toggleOwnerResponse(review.id)}
                      className="flex items-center justify-between w-full text-left text-xs sm:text-sm font-bold text-brand-blue hover:text-[#1A3644] transition-colors py-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-blue" />
                        <span>Respuesta del propietario ({review.ownerResponse.time})</span>
                      </div>
                      <svg 
                        className={`w-4 h-4 transform transition-transform ${expandedResponses[review.id] ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {(expandedResponses[review.id] || true) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-slate-50/80 rounded-2xl p-4 mt-2 border border-slate-200/60"
                        >
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                            {review.ownerResponse.text}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* =========================================
          3. MODAL LIGHTBOX PARA VER FOTOS Y VIDEO
         ========================================= */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center max-h-[85vh]"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
              >
                ✕
              </button>

              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.url} 
                  alt="Evidencia en grande" 
                  className="w-full h-full max-h-[80vh] object-contain"
                />
              ) : (
                <video 
                  src={selectedMedia.url} 
                  controls 
                  autoPlay 
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}