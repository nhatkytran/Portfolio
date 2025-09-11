import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { LearningBookIcon } from '@/shared/icons';
import {
  LEARNING_JOURNEY_SOLDIER_QUOTE,
  LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE,
  LEARNING_JOURNEY_DAWN_BRINGER_QUOTE,
} from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Title content */
export default function TitleContent() {
  const { isNightbringer } = useBringer();

  return (
    <FadeInMotion
      className={cn(
        'relative flex size-full flex-col justify-center gap-2.5',
        'overflow-hidden rounded-sm bg-neutral-50 px-6 pt-6 pb-7',
        'sm:py-9 sm:pr-34 sm:pl-9',
      )}
    >
      <h2 className="font-riot-sans-bold text-xl font-normal tracking-wider uppercase">Learning Journey</h2>
      <p className="font-inter text-[15px]">{LEARNING_JOURNEY_SOLDIER_QUOTE}</p>
      <p className={cn('font-riot-bold text-xs tracking-wider', isNightbringer ? 'text-red-base' : 'text-sky-600')}>
        {isNightbringer ? LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE : LEARNING_JOURNEY_DAWN_BRINGER_QUOTE}
      </p>
      <div
        className={cn(
          'learning-journey-clip-path',
          'h-full w-32',
          'absolute top-0 right-0 hidden',
          'sm:flex sm:items-center sm:justify-center',
          isNightbringer ? 'bg-red-600' : 'bg-sky-500',
        )}
      >
        <LearningBookIcon className="relative left-1" />
      </div>
    </FadeInMotion>
  );
}
