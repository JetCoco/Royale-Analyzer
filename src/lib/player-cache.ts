// src/lib/player-cache.ts

import fs from 'fs/promises';
import path from 'path';
import { fetchPlayerByTag } from './clash-api';
import { PLAYER_STORAGE_PATH, PLAYER_CACHE_TTL } from '@/config/local-storage';
import { ClashPlayer } from '@/types/clash';

export async function getPlayerFromLocalOrAPI(tag: string): Promise<ClashPlayer> {
  const cleanTag = tag.replace('#', '').toUpperCase();
  const filePath = path.join(PLAYER_STORAGE_PATH, `${cleanTag}.json`);

  try {
    const stat = await fs.stat(filePath);
    const isExpired = Date.now() - stat.mtimeMs > PLAYER_CACHE_TTL;

    if (!isExpired) {
      const cachedData = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(cachedData) as ClashPlayer;
    }
  } catch (err: any) {
    // Si el archivo no existe, simplemente continuamos para hacer fetch
    if (err.code !== 'ENOENT') {
      console.error(`Error accediendo al cache del jugador: ${err.message}`);
    }
  }

  // Si no existe el archivo o está vencido, hacemos fetch
  const freshData = await fetchPlayerByTag(cleanTag);

  try {
    await fs.mkdir(PLAYER_STORAGE_PATH, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(freshData, null, 2), 'utf-8');
  } catch (writeErr) {
    console.error(`Error escribiendo el cache del jugador: ${(writeErr as Error).message}`);
  }

  return freshData;
}