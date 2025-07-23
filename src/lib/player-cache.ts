// src/lib/player-cache.ts

import { fetchPlayerByTag } from './clash-api';
import { ClashPlayer } from '@/types/clash';

export async function getPlayerFromLocalOrAPI(tag: string): Promise<ClashPlayer | null> {
  const cleanTag = tag.replace('#', '').toUpperCase();

  try {
    const player = await fetchPlayerByTag(cleanTag);
    return player;
  } catch (err) {
    console.error('Error fetching player from API:', err);
    return null;
  }
}