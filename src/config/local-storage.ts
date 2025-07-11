// src/config/local-storage.ts

// Ruta base donde se almacenarán los archivos JSON de los jugadores.
// Esta ruta puede cambiarse más adelante a: s3://bucket/players
export const PLAYER_STORAGE_PATH = 'data/players';
// src/config/local-storage.ts
export const PLAYER_CACHE_TTL = 5 * 60 * 1000; // 5 minutos en milisegundos
