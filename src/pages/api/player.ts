//src/pages/api/player.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tag } = req.query;

  if (!tag || typeof tag !== 'string') {
    return res.status(400).json({ error: 'Se requiere un tag de jugador válido.' });
  }

  const cleanTag = tag.replace('#', '').toUpperCase();
  const filePath = path.join(process.cwd(), 'data', 'players', `${cleanTag}.json`);

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Jugador no encontrado en almacenamiento local.' });
    }

    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const playerData = JSON.parse(jsonData);
    return res.status(200).json(playerData);
  } catch (error) {
    console.error('Error al leer el archivo JSON:', error);
    return res.status(500).json({ error: 'Error al procesar la solicitud.' });
  }
}