'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

export function SearchBar() {
  const [tag, setTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tag.trim()) return;

    setIsLoading(true);

    const cleanTag = tag.replace('#', '').toUpperCase();
    router.push(`/player/${encodeURIComponent(cleanTag)}`);

    setIsLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative max-w-2xl mx-auto"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Hash className="text-muted-foreground" size={20} />
        </div>

        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Ingresa tu tag de jugador (ej: #2PP)"
          className="royal-input w-full pl-14 pr-36 py-4 text-lg"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={!tag.trim() || isLoading}
          className="absolute right-2 top-2 royal-button h-12 px-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Search size={20} />
          )}
          <span className="hidden sm:inline">Buscar</span>
        </button>
      </div>

      <p className="text-sm text-muted-foreground mt-2 text-center">
        Ejemplo: #2PP, #9CQ0GL9QY, #ABCDEFG
      </p>
    </motion.form>
  );
}
