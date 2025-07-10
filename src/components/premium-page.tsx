
'use client';

import { motion } from 'framer-motion';
import { Check, Crown, Zap, BarChart3, Shield, Star, Users, Target } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'Gratis',
    period: 'Siempre',
    description: 'Perfecto para empezar',
    features: [
      'Búsqueda de jugadores',
      'Estadísticas básicas',
      'Historial de batallas (7 días)',
      'Análisis de mazo básico',
      'Hasta 5 favoritos',
    ],
    limitations: [
      'Análisis limitado',
      'Sin recomendaciones IA',
      'Datos históricos limitados',
    ],
    buttonText: 'Plan Actual',
    buttonClass: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$4.99',
    period: 'mes',
    description: 'Para jugadores serios',
    features: [
      'Todo lo del plan Básico',
      'Royal Genius IA completo',
      'Análisis avanzado de rendimiento',
      'Historial ilimitado',
      'Recomendaciones personalizadas',
      'Comparación con jugadores top',
      'Favoritos ilimitados',
      'Notificaciones en tiempo real',
      'Análisis de meta',
    ],
    buttonText: 'Elegir Pro',
    buttonClass: 'royal-button',
    popular: true,
  },
  {
    name: 'Elite',
    price: '$9.99',
    period: 'mes',
    description: 'Para clanes y equipos',
    features: [
      'Todo lo del plan Pro',
      'Análisis de clan completo',
      'Dashboard de equipo',
      'Comparación entre miembros',
      'Reportes automáticos',
      'API access',
      'Soporte prioritario',
      'Características beta',
      'Consultoría personalizada',
    ],
    buttonText: 'Elegir Elite',
    buttonClass: 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white',
    popular: false,
  },
];

const features = [
  {
    icon: Zap,
    title: 'Royale Genius IA',
    description: 'Análisis avanzado con inteligencia artificial para mejorar tu juego',
    free: false,
    pro: true,
    elite: true,
  },
  {
    icon: BarChart3,
    title: 'Estadísticas Avanzadas',
    description: 'Métricas detalladas y análisis de rendimiento completo',
    free: true,
    pro: true,
    elite: true,
  },
  {
    icon: Shield,
    title: 'Análisis de Mazo',
    description: 'Recomendaciones de mazo y análisis de meta',
    free: false,
    pro: true,
    elite: true,
  },
  {
    icon: Users,
    title: 'Análisis de Clan',
    description: 'Estadísticas de clan y comparación entre miembros',
    free: false,
    pro: false,
    elite: true,
  },
  {
    icon: Target,
    title: 'Objetivos Personalizados',
    description: 'Establece metas y monitorea tu progreso',
    free: false,
    pro: true,
    elite: true,
  },
  {
    icon: Crown,
    title: 'Soporte Prioritario',
    description: 'Acceso prioritario a soporte y nuevas características',
    free: false,
    pro: false,
    elite: true,
  },
];

export function PremiumPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <Star size={40} className="text-accent" />
          Planes Premium
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Desbloquea todo el potencial de Royale Analyzer con características avanzadas y análisis profesional
        </p>
      </motion.div>

      {/* Pricing cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`royal-card relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period !== 'Siempre' && (
                  <span className="text-muted-foreground">/{plan.period}</span>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {plan.limitations && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Limitaciones:</h4>
                <ul className="space-y-1">
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="text-sm text-muted-foreground">
                      • {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${plan.buttonClass}`}>
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Features comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Comparación de Características</h2>
        
        <div className="royal-card overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4">Característica</th>
                <th className="text-center py-4 px-4">Básico</th>
                <th className="text-center py-4 px-4">Pro</th>
                <th className="text-center py-4 px-4">Elite</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border last:border-b-0">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <feature.icon size={20} className="text-primary" />
                      <div>
                        <div className="font-semibold">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.free ? (
                      <Check size={20} className="text-green-400 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 bg-muted rounded-full mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.pro ? (
                      <Check size={20} className="text-green-400 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 bg-muted rounded-full mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.elite ? (
                      <Check size={20} className="text-green-400 mx-auto" />
                    ) : (
                      <div className="w-5 h-5 bg-muted rounded-full mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Preguntas Frecuentes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="royal-card">
            <h3 className="font-semibold mb-2">¿Puedo cancelar en cualquier momento?</h3>
            <p className="text-sm text-muted-foreground">
              Sí, puedes cancelar tu suscripción en cualquier momento. No hay compromisos a largo plazo.
            </p>
          </div>
          
          <div className="royal-card">
            <h3 className="font-semibold mb-2">¿Hay prueba gratuita?</h3>
            <p className="text-sm text-muted-foreground">
              Ofrecemos una prueba gratuita de 7 días para todos los planes premium.
            </p>
          </div>
          
          <div className="royal-card">
            <h3 className="font-semibold mb-2">¿Los datos están seguros?</h3>
            <p className="text-sm text-muted-foreground">
              Sí, utilizamos encriptación de nivel empresarial para proteger todos los datos de usuario.
            </p>
          </div>
          
          <div className="royal-card">
            <h3 className="font-semibold mb-2">¿Hay descuentos para clanes?</h3>
            <p className="text-sm text-muted-foreground">
              Sí, ofrecemos descuentos especiales para clanes con 10 o más miembros.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
