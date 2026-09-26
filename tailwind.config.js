/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'], // <- NUEVO: Clase utilitaria 'font-fredoka' directa
      },
      colors: {
        brand: {
          blue: '#73c9e7',
          blueHover: '#40ACDA',
          yellow: '#FFD000',
          dark: '#1A1A1A',
          whatsapp: '#25D366',
          whatsappHover: '#20BA5A',
        }
      },
      dropShadow: {
        'hero': '0 4px 12px rgba(0, 0, 0, 0.4)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(91, 189, 228, 0.4)',
        'whatsapp': '0 10px 25px -5px rgba(37, 211, 102, 0.5)',
      }
    },
  },
  plugins: [],
}