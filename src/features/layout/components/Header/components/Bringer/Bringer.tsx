'use client';

import { cn } from '@/shared/utils/helpers';
import { useModeActions } from '@/shared/zustand';
import { useBringer } from '@/shared/hooks';
import { DAWNBRINGER_MODE, NIGHTBRINGER_MODE } from '@/shared/constants';
import { PropsWithClassName } from '@/shared/utils/types';
import { BringerIcon } from '@/shared/icons/layout';

/** Bringer - Night / Dawn. */
export default function Bringer({ className }: PropsWithClassName) {
  const { isNightbringer } = useBringer();
  const { setMode } = useModeActions();

  /** Handle set bringer mode. */
  const handleSetMode = () => setMode(isNightbringer ? DAWNBRINGER_MODE : NIGHTBRINGER_MODE);

  return (
    <div
      onClick={handleSetMode}
      className={cn('group relative flex cursor-pointer items-center gap-1 p-0.5', className)}
    >
      <span
        className={cn(
          'font-riot-bold text-sm tracking-[0.2em] uppercase',
          isNightbringer ? 'group-hover:text-sky-400' : 'group-hover:text-red-400',
        )}
      >
        {isNightbringer ? 'To.Dawn' : 'To.Night'}
      </span>
      <BringerIcon
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'size-12 opacity-10',
          isNightbringer ? 'group-hover:fill-sky-400' : 'group-hover:fill-red-400',
        )}
      />
    </div>
  );
}
