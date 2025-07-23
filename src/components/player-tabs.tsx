'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Zap, BarChart3, Sword, Shield, Trophy, Target } from 'lucide-react';

interface PlayerTabsProps {
  player: any;
}

export function PlayerTabs({ player }: PlayerTabsProps) {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'genius', label: 'Royale Genius', icon: Zap },
  ];

  return (
    <div className="space-y-6">
      {/* Tab navigation */}
      <div className="w-full royal-card glass-effect animate-gradient border border-white/10 flex gap-4 p-1 h-[64px] rounded-2xl backdrop-blur-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-glass flex-1 h-full px-6 py-3 flex items-center justify-center gap-4 rounded-2xl font-medium text-base transition-all ${
              activeTab === tab.id
                ? tab.id === 'genius'
                  ? 'tab-active-gold'
                  : 'bg-primary/60 text-white font-semibold glow-effect scale-105 transition-all duration-300'
                : 'text-muted-foreground hover:text-white'
            }`}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>


      {/* Tab content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {activeTab === 'profile' && <ProfileTab player={player} />}
        {activeTab === 'genius' && <GeniusTab player={player} />}
      </motion.div>
    </div>
  );
}

function ProfileTab({ player }: { player: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main stats */}
      <div className="lg:col-span-2 space-y-6">
        <div className="royal-card glass-effect animate-gradient border border-white/10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BarChart3 size={20} />
            Estadísticas de Batalla
          </h3>
          <div className="grid grid-cols-2 gap-4">
          <StatBox
            value={player?.wins || 0}
            label="Victorias"
            color="text-green-400"
            icon={<Trophy className="text-green-400" size={24} />}
          />
          <StatBox
            value={player?.losses || 0}
            label="Derrotas"
            color="text-red-400"
            icon={<Shield className="text-red-400" size={24} />}
          />
          <StatBox
            value={player?.draws || 0}
            label="Empates"
            color="text-blue-400"
            icon={<BarChart3 className="text-blue-400" size={24} />}
          />
          <StatBox
            value={
              player?.wins && player?.losses
                ? `${((player.wins / (player.wins + player.losses)) * 100).toFixed(1)}%`
                : '0%'
            }
            label="Ratio Victoria"
            color="text-accent"
            icon={<Target className="text-accent" size={24} />}
          />

          </div>
        </div>

        <div className="royal-card glass-effect animate-gradient border border-white/10">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sword size={20} />
            Cartas Favoritas
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {player?.currentDeck?.slice(0, 8).map((card: any, index: number) => (
              <div key={index} className="text-center p-3 bg-secondary/30 rounded-lg">
                <div className="w-12 h-12 rounded-lg overflow-hidden mx-auto mb-2">
                  <img
                    src={`/cards/${card.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}.png`}
                    alt={card.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/cards/default.png';
                    }}
                  />
                </div>
                <div className="text-sm font-medium truncate">{card.name}</div>
                <div className="text-xs text-muted-foreground">Nivel {card.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {player?.clan && (
          <div className="royal-card glass-effect animate-gradient border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Información del Clan</h3>
            <div className="space-y-3">
              <InfoItem label="Nombre" value={player.clan.name} />
              <InfoItem label="Rol" value={player.clan.role} />
              <InfoItem label="Donaciones" value={player.clan.donations} />
            </div>
          </div>
        )}

        <div className="royal-card glass-effect animate-gradient border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
          <div className="space-y-3">
            <ActivityItem icon={<Trophy size={16} className="text-primary" />} title="Victoria en Escalera" time="Hace 2 horas" />
            <ActivityItem icon={<Target size={16} className="text-green-400" />} title="Desafío Completado" time="Hace 1 día" />
            <ActivityItem icon={<Sword size={16} className="text-accent" />} title="Carta Mejorada" time="Hace 2 días" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GeniusTab({ player }: { player: any }) {
  return (
    <div className="space-y-6">
      <div className="royal-card glass-effect animate-gradient border border-white/10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Zap size={20} className="text-accent" />
          Análisis de Royal Genius
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <h4 className="font-semibold text-accent mb-2">Recomendación Principal</h4>
            <p className="text-sm text-muted-foreground">
              Basado en tu historial de batallas, recomendamos mejorar tu defensa aérea.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Fortalezas</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Excelente manejo de elixir</li>
                <li>• Buena defensa terrestre</li>
                <li>• Timing de contragolpes</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">Áreas de Mejora</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Defensa contra tropas aéreas</li>
                <li>• Gestión de ciclo de cartas</li>
                <li>• Placement defensivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="royal-card glass-effect animate-gradient border border-white/10">
        <h3 className="text-xl font-semibold mb-4">Mazos Recomendados</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((deck) => (
            <div key={deck} className="p-4 bg-secondary/30 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold">Mazo Meta #{deck}</h4>
                <div className="text-sm text-accent">95% Win Rate</div>
              </div>
              <div className="grid grid-cols-8 gap-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Shield size={16} className="text-primary" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="royal-card glass-effect animate-gradient border border-white/10">
        <h3 className="text-xl font-semibold mb-4">Métricas de Rendimiento</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatBox value="8.2" label="Skill Rating" color="text-primary" />
          <StatBox value="A+" label="Grado Global" color="text-accent" />
          <StatBox value="+156" label="Trofeos/Día" color="text-green-400" />
          <StatBox value="73%" label="Potencial" color="text-blue-400" />
        </div>
      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES

function StatBox({
  value,
  label,
  color,
  icon,
}: {
  value: any;
  label: string;
  color: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="text-center p-4 bg-secondary/30 rounded-lg flex flex-col items-center">
      {icon && <div className="mb-2">{icon}</div>}
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}


function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function ActivityItem({ icon, title, time }: { icon: React.ReactNode; title: string; time: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
      {icon}
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{time}</div>
      </div>
    </div>
  );
}