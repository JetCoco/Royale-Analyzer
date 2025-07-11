// src/lib/get-player-data.ts
import fs from 'fs/promises';
import path from 'path';
import { PLAYER_STORAGE_PATH } from '@/config/local-storage';
import { fetchPlayerByTag } from './clash-api';
import { ClashPlayer } from '@/types/clash';

export async function getPlayerData(tag: string): Promise<ClashPlayer> {
  const filename = `${tag.toUpperCase()}.json`;
  const fullPath = path.join(process.cwd(), PLAYER_STORAGE_PATH, filename);

  try {
    // Si el archivo existe, leerlo
    const fileData = await fs.readFile(fullPath, 'utf-8');
    return JSON.parse(fileData);
  } catch {
    // Si no existe, consulta la API y guarda el archivo
    const playerData = await fetchPlayerByTag(tag);

    // Asegura que el directorio exista
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(playerData, null, 2), 'utf-8');

    return playerData;
  }
}