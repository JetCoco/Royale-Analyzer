
'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, Zap, Shield, Target, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Estadísticas Avanzadas',
    description: 'Analiza tu rendimiento con métricas detalladas de batallas, victorias y derrotas.',
  },
  {
    icon: Users,
    title: 'Análisis de Clan',
    description: 'Obtén insights sobre tu clan y compara tu progreso con otros miembros.',
  },
  {
    icon: Zap,
    title: 'Royale Genius IA',
    description: 'Inteligencia artificial que analiza tu juego y sugiere mejoras personalizadas.',
  },
  {
    icon: Shield,
    title: 'Análisis de Mazos',
    description: 'Descubre los mazos más efectivos y obtén recomendaciones estratégicas.',
  },
  {
    icon: Target,
    title: 'Seguimiento de Objetivos',
    description: 'Establece metas y monitorea tu progreso hacia nuevas ligas y trofeos.',
  },
  {
    icon: TrendingUp,
    title: 'Tendencias de Juego',
    description: 'Mantente al día con las últimas tendencias y meta del juego.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Herramientas profesionales para mejorar tu juego en Clash Royale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="royal-card group"
            >
              <feature.icon className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
