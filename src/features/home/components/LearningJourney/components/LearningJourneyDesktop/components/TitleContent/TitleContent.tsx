import Link from 'next/link';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { learningJourneyCopy } from '@/features/home/data';
import { ArrowExploreIcon } from '@/shared/icons/layout';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Title content. */
export default function TitleContent() {
  const { isNightbringer } = useBringer();

  return (
    <FadeInMotion className="max-w-[474px] rounded-sm p-1">
      <div className={cn('relative size-full', 'flex flex-col justify-center gap-2.5', 'rounded-sm bg-neutral-50 p-9')}>
        <Link href="/learning-journey" className={cn('absolute top-4 right-4 rounded-sm p-1', 'hover:bg-neutral-200')}>
          <ArrowExploreIcon fill={isNightbringer ? '#f03647' : '#08b0f0'} />
        </Link>
        <h2 className={cn('font-riot-sans-bold text-xl font-normal tracking-wider uppercase', 'lgx:text-2xl')}>
          {learningJourneyCopy.desktopTitle}
        </h2>
        <p className="font-inter text-[15px]">{learningJourneyCopy.subTitle}</p>
        <p className={cn('font-riot-bold text-xs tracking-wider', isNightbringer ? 'text-red-base' : 'text-sky-600')}>
          {isNightbringer ? learningJourneyCopy.nightbringerQuote : learningJourneyCopy.dawnbringerQuote}
        </p>
      </div>
    </FadeInMotion>
  );
}
