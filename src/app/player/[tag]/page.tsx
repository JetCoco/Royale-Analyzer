// src/app/player/[tag]/page.tsx
import { notFound } from 'next/navigation';
import { getPlayerFromLocalOrAPI } from '@/lib/player-cache';
import PlayerProfile from '@/components/player-profile';

export default async function PlayerPage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag).replace(/^#/, '');

  if (!decodedTag || decodedTag.length < 3) {
    notFound();
  }

  const player = await getPlayerFromLocalOrAPI(decodedTag);

  if (!player) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <PlayerProfile player={player} tag={decodedTag} />
    </div>
  );
}