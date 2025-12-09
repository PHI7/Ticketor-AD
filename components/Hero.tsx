import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Leaf } from 'lucide-react';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-ticketor-black text-center overflow-hidden">
      
      {/* Abstract Background Element - More subtle and golden */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ticketor-gold rounded-full blur-[150px]" />
      </div>

      <div className="z-10 px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 flex justify-center"
        >
          <Logo className="h-32 md:h-48 drop-shadow-[0_0_15px_rgba(230,184,0,0.2)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ticketor-yellow/5 border border-ticketor-yellow/20 text-ticketor-yellow mb-8 backdrop-blur-sm">
            <Leaf size={14} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Sustainable Ticketing</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] text-white tracking-tight">
            Ihr Event. Ihre Regeln. <br />
            <span className="text-ticketor-yellow bg-clip-text text-transparent bg-gradient-to-r from-ticketor-yellow to-ticketor-gold">
              Unser Planet.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Schluss mit Schwarzmarkt. Schluss mit Papierverschwendung.
            Ticketor verwandelt Eintrittskarten in intelligente, <span className="text-white font-normal">100% digitale Assets</span>.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(230, 184, 0, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-ticketor-yellow text-black font-bold text-lg rounded-sm tracking-wider uppercase transition-all duration-300"
          >
            Zukunft entdecken
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 text-ticketor-yellow/50 z-10"
      >
        <ArrowDown size={32} strokeWidth={1} />
      </motion.div>
    </div>
  );
};