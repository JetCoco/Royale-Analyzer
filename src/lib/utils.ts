
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatTag(tag: string): string {
  return tag.startsWith('#') ? tag : `#${tag}`;
}

export function cleanTag(tag: string): string {
  return tag.replace('#', '').toUpperCase();
}

export function calculateWinRate(wins: number, losses: number): number {
  const total = wins + losses;
  return total > 0 ? (wins / total) * 100 : 0;
}

export function getTrophyColor(trophies: number): string {
  if (trophies >= 7000) return 'text-purple-400';
  if (trophies >= 6000) return 'text-yellow-400';
  if (trophies >= 5000) return 'text-orange-400';
  if (trophies >= 4000) return 'text-red-400';
  if (trophies >= 3000) return 'text-pink-400';
  return 'text-blue-400';
}

export function getArenaFromTrophies(trophies: number): string {
  if (trophies >= 7000) return 'Ultimate Champion';
  if (trophies >= 6500) return 'Master III';
  if (trophies >= 6000) return 'Master II';
  if (trophies >= 5500) return 'Master I';
  if (trophies >= 5000) return 'Champion';
  if (trophies >= 4600) return 'Grand Champion';
  if (trophies >= 4300) return 'Royal Champion';
  if (trophies >= 4000) return 'Legendary Arena';
  return 'Arena';
}

export function timeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffMins < 60) {
    return `Hace ${diffMins} minuto${diffMins !== 1 ? 's' : ''}`;
  } else if (diffHours < 24) {
    return `Hace ${diffHours} hora${diffHours !== 1 ? 's' : ''}`;
  } else {
    return `Hace ${diffDays} día${diffDays !== 1 ? 's' : ''}`;
  }
}

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function isValidTag(tag: string): boolean {
  // Clash Royale tags are typically 8-9 characters, alphanumeric
  const cleanedTag = cleanTag(tag);
  return /^[A-Z0-9]{3,9}$/.test(cleanedTag);
}

export function generateDeckId(cards: any[]): string {
  return cards
    .map(card => card.id)
    .sort()
    .join('-');
}

export function getCardRarity(card: any): string {
  const rarityMap: { [key: string]: string } = {
    'common': 'Común',
    'rare': 'Rara',
    'epic': 'Épica',
    'legendary': 'Legendaria',
    'champion': 'Campeón'
  };
  return rarityMap[card.rarity] || 'Desconocida';
}

export function getCardType(card: any): string {
  const typeMap: { [key: string]: string } = {
    'troop': 'Tropa',
    'spell': 'Hechizo',
    'building': 'Edificio'
  };
  return typeMap[card.type] || 'Desconocido';
}
