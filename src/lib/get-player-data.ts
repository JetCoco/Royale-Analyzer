// src/lib/get-player-data.ts
import { ClashPlayer } from '@/types/clash';

export async function getPlayerData(tag: string): Promise<ClashPlayer | null> {
  try {
    const cleanTag = tag.replace('#', '').toUpperCase();
    const response = await fetch(`/api/player?tag=${encodeURIComponent(cleanTag)}`);

    if (!response.ok) {
      throw new Error('No se pudo obtener información del jugador.');
    }

    const data: ClashPlayer = await response.json();
    return data;
  } catch (err) {
    console.error(`Error al obtener datos del jugador: ${err}`);
    return null;
  }
}