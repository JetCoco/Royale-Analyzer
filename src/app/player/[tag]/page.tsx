
import { PlayerProfile } from '@/components/player-profile';
import { notFound } from 'next/navigation';

interface PlayerPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { tag } = await params;
  
  // Decode the tag (remove URL encoding)
  const decodedTag = decodeURIComponent(tag);
  
  // Validate tag format (basic validation)
  if (!decodedTag || decodedTag.length < 3) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <PlayerProfile tag={decodedTag} />
    </div>
  );
}
