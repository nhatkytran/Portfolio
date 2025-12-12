import { cn } from '@/shared/utils/helpers';
import { RiotGamesIcon } from '@/shared/icons/layout';
import { layoutCopy } from '@/features/layout/data';

/** Riot Games inspired. */
export default function RiotGamesInspired() {
  return (
    <div className="w-full max-w-2xl">
      <div className={cn('flex flex-col items-center justify-center gap-1.5', 'relative px-2 py-20', 'xs:px-9')}>
        <div className={cn('flex items-center justify-center', 'absolute top-0 left-0 z-0 size-full opacity-10')}>
          <RiotGamesIcon className={cn('h-[100px] w-[300px] rotate-287', 'xs:h-[150px] xs:w-[452px] xs:rotate-0')} />
        </div>
        <p className={cn('relative z-1', 'font-riot-bold text-neutral-300')}>{layoutCopy.riotInspire}</p>
        <p className={cn('relative z-1', 'font-inter text-center text-sm font-semibold text-neutral-400')}>
          {layoutCopy.riotCredit}
        </p>
      </div>
    </div>
  );
}
