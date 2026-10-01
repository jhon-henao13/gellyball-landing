import React, { useState } from 'react';
import logoImg from '../assets/logo-white.png';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Enlaces de redes sociales
  const socialLinks = {
    instagram: "https://www.instagram.com/gellyballguadalajara/",
    facebook: "https://www.facebook.com/gellyballguadalajara", // Reemplaza si es necesario
    tiktok: "https://www.tiktok.com/@gellyballguadalajara",     // Reemplaza si es necesario
    whatsapp: "https://wa.me/5213332354398?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n"
  };

  return (
    <>
      <footer className="bg-[#112631] text-slate-300 py-12 lg:py-16 border-t border-slate-800/80 relative overflow-hidden">
        
        {/* LUZ DE FONDO Y DECORACIÓN */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            
            {/* COLUMNA 1: LOGO E INFO PRINCIPAL */}
            <div className="space-y-4 text-center md:text-left">
              <a href="#" className="inline-block">
                <img 
                  src={logoImg} 
                  alt="Gellyball Logo" 
                  className="h-12 mx-auto md:mx-0 filter brightness-0 invert drop-shadow-md hover:scale-105 transition-transform" 
                />
              </a>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                La mejor experiencia en entretenimiento e integración móvil para tus eventos en Zapopan y la Zona Metropolitana de Guadalajara.
              </p>
              
              {/* REDES SOCIALES */}
              <div className="flex justify-center md:justify-start gap-3 pt-2">
                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 transition-all shadow-md hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1877F2] transition-all shadow-md hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-black transition-all shadow-md hover:-translate-y-1"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.001h3.08c.094 1.538.702 3.03 1.781 4.041 1.08 1.01 2.58 1.57 4.114 1.572V8.71c-1.802-.007-3.551-.57-5.01-1.611v7.62c0 3.76-3.04 6.81-6.81 6.81-3.77 0-6.82-3.05-6.82-6.81 0-3.77 3.05-6.82 6.82-6.82.35 0 .7.03 1.04.08V11c-.34-.05-.68-.08-1.04-.08-2.12 0-3.84 1.72-3.84 3.84 0 2.12 1.72 3.84 3.84 3.84 2.12 0 3.84-1.72 3.84-3.84V.001z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] transition-all shadow-md hover:-translate-y-1"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.553 4.198 1.604 6.02L.031 24l6.096-1.547a11.982 11.982 0 005.904 1.578h.005c6.645 0 12.03-5.385 12.03-12.03C24.066 5.385 18.676 0 12.031 0zm0 22.032h-.004a9.96 9.96 0 01-5.081-1.396l-.364-.216-3.775.958.975-3.681-.237-.378a9.96 9.96 0 01-1.53-5.288c0-5.498 4.474-9.972 9.973-9.972 5.498 0 9.972 4.474 9.972 9.972 0 5.499-4.474 9.973-9.972 9.973zm5.467-7.466c-.3-.15-1.773-.874-2.048-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.466-2.41-1.486-.892-.796-1.494-1.78-1.669-2.08-.175-.3-.019-.462.13-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.494-.505-.675-.514-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.23 5.124 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.773-.725 2.023-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* COLUMNA 2: NAVEGACIÓN RÁPIDA */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-fredoka text-lg font-bold text-white uppercase tracking-wider">
                Navegación
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#atracciones" className="hover:text-brand-blue transition-colors">Atracciones y Juegos</a></li>
                <li><a href="#staff" className="hover:text-brand-blue transition-colors">Staff y Seguridad</a></li>
                <li><a href="#como-funciona" className="hover:text-brand-blue transition-colors">¿Cómo funciona?</a></li>
                <li><a href="#faq" className="hover:text-brand-blue transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#contacto" className="hover:text-brand-blue transition-colors">Cotizar Evento</a></li>
              </ul>
            </div>

            {/* COLUMNA 3: CONTACTO Y TELÉFONO */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-fredoka text-lg font-bold text-white uppercase tracking-wider">
                Contacto Directo
              </h3>
              <div className="space-y-3 text-sm">
                <a 
                  href="tel:+523300000000" 
                  className="flex items-center justify-center md:justify-start gap-2.5 text-slate-300 hover:text-brand-yellow transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-blue group-hover:bg-brand-yellow group-hover:text-[#112631] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-semibold">+52 1 33 3235 4398</span>
                </a>

                <div className="flex items-start justify-center md:justify-start gap-2.5 text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-blue shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Zapopan y Zona Metropolitana de Guadalajara (ZMG), Jalisco.</span>
                </div>
              </div>
            </div>

            {/* COLUMNA 4: COBERTURA Y HORARIO */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-fredoka text-lg font-bold text-white uppercase tracking-wider">
                Servicio Móvil
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Llevamos toda la infraestructura hasta casas, jardines, terrazas y salones privados.
              </p>
              <div className="inline-block bg-slate-800/80 border border-slate-700/60 rounded-xl p-3 text-xs text-brand-blue font-medium">
                ⚡ Disponibilidad previa reservación los 365 días del año.
              </div>
            </div>

          </div>

          {/* PARTE INFERIOR: COPYRIGHT Y POLÍTICA DE PRIVACIDAD */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} Gellyball Guadalajara. Todos los derechos reservados.
            </div>

            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-slate-400 hover:text-brand-blue underline underline-offset-4 transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
          </div>

        </div>
      </footer>

      {/* MODAL / POPUP DE POLÍTICA DE PRIVACIDAD */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative border border-slate-100">
            
            {/* BOTÓN CERRAR */}
            <button
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors"
            >
              ✕
            </button>

            <h3 className="font-fredoka text-2xl font-bold text-[#1A3644] mb-4">
              Aviso de Privacidad
            </h3>

            <div className="text-slate-600 text-sm space-y-4 leading-relaxed">
              <p>
                En <strong>Gellyball Guadalajara</strong>, la privacidad de nuestros clientes es de suma importancia. Los datos personales recabados a través de formularios o WhatsApp (nombre, teléfono, fecha de evento y ubicación) son utilizados de manera exclusiva para la cotización, coordinación y prestación de nuestros servicios de entretenimiento.
              </p>
              <p>
                <strong>Protección de datos:</strong> Nos comprometemos a no vender, compartir ni transferir sus datos personales a terceros sin previa autorización, salvo requerimientos legales.
              </p>
              <p>
                <strong>Uso de fotografía y video:</strong> Durante los eventos, nuestro staff puede registrar fotografías o videos con fines de promoción en redes sociales oficiales. Si no desea que el material de su evento sea publicado, puede indicarlo libremente a nuestro equipo antes del inicio de la actividad.
              </p>
              <p>
                Para cualquier duda o aclaración acerca de sus datos, puede comunicarse directamente con nosotros a través de nuestras líneas oficiales de WhatsApp o teléfono.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-[#1A3644] text-white font-fredoka font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-brand-blue transition-colors"
              >
                Entendido y Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}