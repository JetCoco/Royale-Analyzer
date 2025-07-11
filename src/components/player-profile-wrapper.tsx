// src/components/player-profile-wrapper.tsx
import PlayerProfile from './player-profile';
import { getPlayerFromLocalOrAPI } from '@/lib/player-cache';
import { ClashPlayer } from '@/types/clash';

interface PlayerProfileWrapperProps {
  tag: string;
}

export default async function PlayerProfileWrapper({ tag }: PlayerProfileWrapperProps) {
  try {
    const player: ClashPlayer = await getPlayerFromLocalOrAPI(tag);
    return <PlayerProfile tag={tag} player={player} />;
  } catch (error) {
    console.error('Error en PlayerProfileWrapper:', error);
    return <PlayerProfile tag={tag} player={null as any} />;
  }
}