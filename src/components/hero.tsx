
'use client';

import { motion } from 'framer-motion';
import { Search, Crown, Zap, Trophy } from 'lucide-react';
import { SearchBar } from './search-bar';
import { useState, useEffect } from 'react';

interface AnimatedDot {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export function Hero() {
  const [animatedDots, setAnimatedDots] = useState<AnimatedDot[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate random positions and timing only after component mounts
    const dots = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setAnimatedDots(dots);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 royal-gradient opacity-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {isMounted && animatedDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo and title */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center"
            >
              <Crown size={80} className="text-yellow-400 drop-shadow-lg" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent"
            >
              Royale Analyzer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400"
            >
              Analiza tu rendimiento en Clash Royale con estadísticas detalladas
            </motion.p>
          </div>

          {/* Search section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <SearchBar />
          </motion.div>

          {/* Features preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Trophy className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-semibold mb-2">Estadísticas Detalladas</h3>
              <p className="text-gray-400">Análisis completo de tu rendimiento</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-semibold mb-2">Royal Genius</h3>
              <p className="text-gray-400">IA para mejorar tu juego</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-semibold mb-2">Búsqueda Rápida</h3>
              <p className="text-gray-400">Encuentra cualquier jugador</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
