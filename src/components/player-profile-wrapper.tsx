// src/components/player-profile-wrapper.tsx
import PlayerProfile from './player-profile';
import { getPlayerFromLocalOrAPI } from '@/lib/player-cache';
import { ClashPlayer } from '@/types/clash';

interface PlayerProfileWrapperProps {
  tag: string;
}

export default async function PlayerProfileWrapper({ tag }: PlayerProfileWrapperProps) {
  try {
    const player = await getPlayerFromLocalOrAPI(tag);

    if (!player) {
      console.error('No se encontró información del jugador.');
      return <div className="p-4 text-center text-red-500">❌ Jugador no encontrado.</div>;
    }

    return <PlayerProfile tag={tag} player={player} />;
  } catch (error) {
    console.error('Error en PlayerProfileWrapper:', error);
    return <div className="p-4 text-center text-red-500">❌ Error al cargar datos del jugador.</div>;
  }
}
