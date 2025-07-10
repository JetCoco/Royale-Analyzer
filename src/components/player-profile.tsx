'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Users, Crown, Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { PlayerTabs } from './player-tabs';
import { mockPlayerData } from '@/lib/mock-data';

interface PlayerProfileProps {
  tag: string;
}

export function PlayerProfile({ tag }: PlayerProfileProps) {
  const [player, setPlayer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPlayer(mockPlayerData);
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((fav: any) => fav.tag === tag));
      } catch (err) {
        setError('Error al cargar el perfil del jugador');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [tag]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const newFavorites = favorites.filter((fav: any) => fav.tag !== tag);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      const newFavorite = {
        tag,
        name: player?.name || 'Jugador',
        trophies: player?.trophies || 0,
        level: player?.level || 1,
        addedAt: new Date().toISOString(),
      };
      favorites.push(newFavorite);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 bg-secondary rounded animate-pulse" />
          <div className="w-32 h-8 bg-secondary rounded animate-pulse" />
        </div>
        <div className="royal-card glass-effect animate-gradient border border-white/10">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-secondary rounded-full animate-pulse" />
            <div className="space-y-2">
              <div className="w-48 h-8 bg-secondary rounded animate-pulse" />
              <div className="w-32 h-6 bg-secondary rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="royal-card glass-effect max-w-md mx-auto animate-gradient border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-destructive">Error</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Link href="/" className="royal-button">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
        <ArrowLeft size={20} />
        Volver a la búsqueda
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="royal-card glass-effect animate-gradient border border-white/10"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-primary/20">
              <Crown size={32} className="text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{player?.name}</h1>
              <p className="text-muted-foreground">#{tag}</p>
            </div>
          </div>

          <button
            onClick={toggleFavorite}
            className={`p-3 rounded-full transition-all duration-200 ${
              isFavorite 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground'
            }`}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem icon={Trophy} value={player?.trophies?.toLocaleString()} label="Trofeos" color="text-primary" />
          <StatItem icon={Star} value={player?.level} label="Nivel" color="text-accent" />
          <StatItem icon={Users} value={player?.clan?.name ? 'Sí' : 'No'} label="En Clan" color="text-blue-400" />
          <StatItem value={player?.wins || 0} label="Victorias" color="text-green-400" />
        </div>
      </motion.div>

      <PlayerTabs player={player} />
    </div>
  );
}

function StatItem({ icon: Icon, value, label, color }: { icon?: any, value: any, label: string, color: string }) {
  return (
    <div className="text-center">
      <div className={`flex items-center justify-center gap-1 text-2xl font-bold ${color}`}>
        {Icon && <Icon size={20} />}
        {value}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}