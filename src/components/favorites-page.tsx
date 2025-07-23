
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Search, Trash2, Trophy, Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = () => {
      const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavorites(savedFavorites);
      setLoading(false);
    };

    loadFavorites();
  }, []);

  const removeFavorite = (tag: string) => {
    const newFavorites = favorites.filter((fav: any) => fav.tag !== tag);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const filteredFavorites = favorites.filter((fav: any) =>
    fav.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fav.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="w-64 h-8 bg-secondary rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="royal-card animate-pulse">
              <div className="h-32 bg-secondary/50 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Heart size={32} className="text-red-500" />
          Jugadores Favoritos
        </h1>
        <p className="text-muted-foreground">
          Tus jugadores guardados y seguimiento de progreso
        </p>
      </motion.div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative max-w-md"
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          type="text"
          placeholder="Buscar en favoritos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="royal-input w-full pl-10"
        />
      </motion.div>

      {/* Favorites grid */}
      {filteredFavorites.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-16"
        >
          <div className="royal-card max-w-md mx-auto">
            <Heart size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {searchTerm ? 'No se encontraron favoritos' : 'No tienes favoritos guardados'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm 
                ? 'Intenta con otro término de búsqueda'
                : 'Busca jugadores y agréaglos a tus favoritos para seguir su progreso'
              }
            </p>
            <Link href="/" className="royal-button">
              Buscar Jugadores
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredFavorites.map((favorite: any, index: number) => (
            <motion.div
              key={favorite.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="royal-card group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Trophy size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{favorite.name}</h3>
                    <p className="text-sm text-muted-foreground">#{favorite.tag}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => removeFavorite(favorite.tag)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-red-500/20 rounded-lg text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-primary">
                    <Trophy size={16} />
                    {favorite.trophies?.toLocaleString() || 0}
                  </div>
                  <div className="text-xs text-muted-foreground">Trofeos</div>
                </div>
                
                <div className="text-center p-3 bg-secondary/30 rounded-lg">
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-accent">
                    <Star size={16} />
                    {favorite.level || 1}
                  </div>
                  <div className="text-xs text-muted-foreground">Nivel</div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground mb-4">
                Agregado: {new Date(favorite.addedAt).toLocaleDateString()}
              </div>

              <Link
                href={`/player?tag=${encodeURIComponent(favorite.tag)}`}
                className="w-full bg-primary/20 hover:bg-primary/30 text-primary px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                Ver Perfil
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
