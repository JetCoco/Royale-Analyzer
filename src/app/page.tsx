
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { Stats } from '@/components/stats';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}