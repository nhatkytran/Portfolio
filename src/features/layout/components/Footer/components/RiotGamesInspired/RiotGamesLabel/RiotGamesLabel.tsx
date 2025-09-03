'use client';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';

/** Riot Games label. */
export default function RiotGamesLabel() {
  const { isNightbringer } = useBringer();

  return (
    <p className={cn('relative z-1', 'font-riot-bold text-neutral-300')}>
      Inspired by <span className={cn(isNightbringer ? 'text-red-600' : 'text-sky-600')}>Riot Games</span>
    </p>
  );
}
