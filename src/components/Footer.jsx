import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* LOGO E INFO */}
        <div className="space-y-3 text-center md:text-left">
          <img src={logoImg} alt="Gellyball Logo" className="h-10 mx-auto md:mx-0 filter brightness-0 invert" />
          <p className="text-sm text-slate-400">
            La mejor experiencia en entretenimiento e integración para tus eventos en Guadalajara.
          </p>
        </div>

        {/* ENLACES RÁPIDOS */}
        <div className="flex justify-center gap-6 text-sm font-medium">
          <a href="#atracciones" className="hover:text-brand-blue transition-colors">Atracciones</a>
          <a href="#staff" className="hover:text-brand-blue transition-colors">Staff</a>
          <a href="#paquetes" className="hover:text-brand-blue transition-colors">Paquetes</a>
          <a href="#experiencias" className="hover:text-brand-blue transition-colors">Experiencias</a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center md:text-right text-xs text-slate-500">
          © {new Date().getFullYear()} Gellyball. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}