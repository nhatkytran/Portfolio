import CardContentDesktop from '../CardContentDesktop';

import CardSkeleton from './components/CardSkeleton';
import TitleSkeleton from './components/TitleSkeleton';
import TitleContent from './components/TitleContent';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn, getSEOSkeletonLoadingKey } from '@/shared/utils/helpers';
import { DESKTOP_SMALL, LEARNINGS } from '@/features/home/data';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm bg-neutral-100' });

/** Learning journey desktop. */
export default function LearningJourneyDesktop({ shouldDisplay = true }: ShouldDisplayProps) {
  return (
    <section className={cn('flex items-center justify-center py-20', !shouldDisplay && 'hidden')}>
      <div className="flex w-full gap-5 px-9">
        <SEOSkeletonLoading
          key={getSEOSkeletonLoadingKey(shouldDisplay)}
          skeleton={<TitleSkeleton SkeletonLoading={SkeletonLoading} />}
          content={<TitleContent />}
        />
        <ul className="grid min-w-[590px] flex-1 grid-cols-2 gap-3">
          {LEARNINGS.map(({ name, Icon }, index) => (
            <SEOSkeletonLoading
              key={`${getSEOSkeletonLoadingKey(shouldDisplay)}-${name}`}
              skeleton={<CardSkeleton SkeletonLoading={SkeletonLoading} />}
              content={<CardContentDesktop size={DESKTOP_SMALL} learning={{ name, Icon }} index={index} />}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
