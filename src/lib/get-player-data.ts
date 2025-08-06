// src/lib/get-player-data.ts
import { ClashPlayer } from '@/types/clash';

export async function getPlayerData(tag: string): Promise<ClashPlayer | null> {
  try {
    const cleanTag = tag.replace('#', '').toUpperCase();

    const apiBase = process.env.NEXT_PUBLIC_API_URL; // <- API Gateway
    const response = await fetch(`${apiBase}/player/${cleanTag}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('No se pudo obtener información del jugador.');
    }

    const data: ClashPlayer = await response.json();
    return data;
  } catch (err) {
    console.error(`Error al obtener datos del jugador:`, err);
    return null;
  }
}
