import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Atracciones', href: '#atracciones' },
    { name: 'Staff', href: '#staff' },
    { name: 'Paquetes', href: '#paquetes' },
    { name: 'Experiencias', href: '#experiencias' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 group">
          <img 
            src={logoImg} 
            alt="Gellyball Logo" 
            className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-slate-700 hover:text-brand-blue font-medium text-lg transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2.5px] bg-brand-blue transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <div className="hidden md:flex items-center">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/5213332354398?text=Hola,%20deseo%20apartar%20una%20fecha%20para%20mi%20evento"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:bg-brand-blueHover text-white font-bold px-5 py-2 rounded-lg shadow-sm hover:shadow-glow transition-all duration-300 text-lg flex items-center justify-center tracking-wide"
          >
            Aparta tu fecha
          </motion.a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-700 p-2 focus:outline-none"
          aria-label="Abrir Menú"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 font-medium text-lg py-1 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="https://wa.me/5213332354398?text=Hola,%20deseo%20apartar%20una%20fecha%20para%20mi%20evento"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-brand-blue text-white font-semibold py-3 rounded-lg shadow-md active:scale-95 transition-transform"
              >
                Aparta tu fecha
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}