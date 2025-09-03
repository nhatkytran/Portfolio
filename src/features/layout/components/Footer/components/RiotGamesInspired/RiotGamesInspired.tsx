import { cn } from '@/shared/utils/helpers';
import RiotGamesIcon from '@/shared/icons/RiotGamesIcon';
import RiotGamesLabel from '@/features/layout/components/Footer/components/RiotGamesInspired/RiotGamesLabel';

/** Riot Games inspired. */
export default function RiotGamesInspired() {
  return (
    <div className="w-full max-w-2xl">
      <div className={cn('flex flex-col items-center justify-center gap-1.5', 'relative px-2 py-20', 'xs:px-9')}>
        <div className={cn('flex items-center justify-center', 'absolute top-0 left-0 z-0 size-full opacity-10')}>
          <RiotGamesIcon className={cn('h-[100px] w-[300px] rotate-287', 'xs:h-[150px] xs:w-[452px] xs:rotate-0')} />
        </div>
        <RiotGamesLabel />
        <p className={cn('relative z-1', 'font-inter text-center text-sm font-semibold text-neutral-400')}>
          This portfolio design was inspired by Riot&apos;s UI/UX. All rights to original assets belong to Riot Games.
          Personal, non-commercial project.
        </p>
      </div>
    </div>
  );
}
