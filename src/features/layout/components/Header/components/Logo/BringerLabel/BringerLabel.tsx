'use client';

import { cn } from '@/shared/utils/helpers';
import { BringerIcon } from '@/shared/icons';
import { useBringer } from '@/shared/hooks';

/** Bringer label. */
export default function BringerLabel() {
  const { isNightbringer } = useBringer();

  return (
    <div className={cn('flex items-center gap-0.5', 'relative top-0.25')}>
      <BringerIcon className={cn('size-2.5', isNightbringer ? 'fill-red-600' : 'fill-sky-600')} />
      <span
        className={cn(
          'font-riot-sans-bold text-[11px] tracking-widest uppercase',
          isNightbringer ? 'text-red-600' : 'text-sky-600',
        )}
      >
        {isNightbringer ? 'Nightbringer' : 'Dawnbringer'}
      </span>
    </div>
  );
}
