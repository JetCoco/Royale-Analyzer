// src/pages/player.tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PlayerProfile from '@/components/player-profile';
import { getPlayerData } from '@/lib/get-player-data';

export default function PlayerPage() {
  const router = useRouter();
  const { tag } = router.query;

  const [player, setPlayer] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof tag === 'string') {
      setLoading(true);
      getPlayerData(tag)
        .then((data) => {
          setPlayer(data);
          setError(null);
        })
        .catch((err) => {
          console.error('Error al obtener datos del jugador:', err);
          setError('❌ No se pudo obtener la información del jugador.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [tag]);

  if (!tag) {
    return (
      <div className="p-8 text-center text-red-500">
        ⚠️ No se proporcionó ningún tag de jugador.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8 text-center text-blue-500">
        ⏳ Cargando datos del jugador...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  return <PlayerProfile tag={tag as string} player={player} />;
}
