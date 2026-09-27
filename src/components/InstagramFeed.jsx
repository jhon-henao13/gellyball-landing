import React from 'react';
import { motion } from 'framer-motion';

// REEMPLAZA ESTAS RUTAS POR TUS IMÁGENES GUARDADAS EN src/assets/instagram/
import post1 from '../assets/instagram/post1.jpg';
import post2 from '../assets/instagram/post2.jpg';
import post3 from '../assets/instagram/post3.jpg';
import post4 from '../assets/instagram/post4.jpg';
import post5 from '../assets/instagram/post5.jpg';
import post6 from '../assets/instagram/post6.jpg';


const instagramPosts = [
  {
    id: 1,
    image: post1,
    likes: '124',
    comments: '18',
    link: 'https://www.instagram.com/gellyballguadalajara/'
  },
  {
    id: 2,
    image: post2,
    likes: '210',
    comments: '35',
    link: 'https://www.instagram.com/gellyballguadalajara/'
  },
  {
    id: 3,
    image: post3,
    likes: '95',
    comments: '12',
    link: 'https://www.instagram.com/gellyballguadalajara/'
  },
  {
    id: 4,
    image: post4,
    likes: '340',
    comments: '42',
    link: 'https://www.instagram.com/gellyballguadalajara/'
  },
  {
    id: 5,
    image: post5,
    likes: '188',
    comments: '27',
    link: 'https://www.instagram.com/gellyballguadalajara/'
  },
  {
    id: 6,
    image: post6,
    likes: '275',
    comments: '31',
    link: 'https://www.instagram.com/gellyballguadalajara/'
  }
];

export default function InstagramFeed() {
  const profileUrl = "https://www.instagram.com/gellyballguadalajara/";

  return (
    <section id="instagram-feed" className="py-16 sm:py-24 bg-[#f4fafc] relative overflow-hidden">
      
      {/* DECORACIÓN DE FONDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12 sm:mb-16">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-sm text-slate-700 font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-all mb-4 group"
          >
            <svg className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@gellyballguadalajara</span>
          </a>

          <h2 className="font-fredoka text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A3644] tracking-tight uppercase leading-tight">
            SÍGUENOS EN INSTAGRAM
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-xl mx-auto">
            Descubre fotos y videos de nuestros eventos en vivo
          </p>
          <div className="w-20 h-1.5 bg-brand-yellow mx-auto mt-4 rounded-full" />
        </div>

        {/* MOSAICO GRID RESPONSIVO (2 cols movil, 3 tablet, 6 desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-200 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* IMAGEN DEL POST */}
              <img
                src={post.image}
                alt={`Publicación de Instagram Gellyball ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* OVERLAY EN HOVER (EFECTO PREMIUM) */}
              <div className="absolute inset-0 bg-[#1A3644]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white p-2">
                <svg className="w-8 h-8 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-fredoka text-xs font-bold uppercase tracking-wider text-center">
                  Ver publicación
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* BOTÓN INFERIOR DE ACCIÓN */}
        <div className="text-center mt-10">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A3644] hover:bg-[#112631] text-white font-fredoka font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Ver perfil en Instagram</span>
            <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}