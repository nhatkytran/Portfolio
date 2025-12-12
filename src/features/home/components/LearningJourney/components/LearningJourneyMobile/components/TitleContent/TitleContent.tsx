import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { learningJourneyCopy } from '@/features/home/data';
import { LearningBookIcon } from '@/shared/icons/learning';
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
      <h2 className="font-riot-sans-bold text-xl font-normal tracking-wider uppercase">
        {learningJourneyCopy.mobileTitle}
      </h2>
      <p className="font-inter text-[15px]">{learningJourneyCopy.subTitle}</p>
      <p className={cn('font-riot-bold text-xs tracking-wider', isNightbringer ? 'text-red-base' : 'text-sky-600')}>
        {isNightbringer ? learningJourneyCopy.nightbringerQuote : learningJourneyCopy.dawnbringerQuote}
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
