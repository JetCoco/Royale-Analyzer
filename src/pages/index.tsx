// src/pages/index.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Features } from '@/components/features';
import { Crown } from 'lucide-react';
import { SearchBar } from '@/components/search-bar';

//Hola estoy en rama b
export default function Home() {
  const [tag, setTag] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (tag.trim()) {
      router.push(`/player?tag=${encodeURIComponent(tag.trim())}`);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3"
      >
        <Crown className="text-accent w-8 h-8" />
        Royale Analyzer
      </motion.h1>
      <SearchBar />
      <Features />
    </main>
  );
}