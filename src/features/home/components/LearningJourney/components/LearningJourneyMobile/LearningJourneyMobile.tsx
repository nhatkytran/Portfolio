import TitleSkeleton from './components/TitleSkeleton';
import TitleContent from './components/TitleContent';
import CardSkeleton from './components/CardSkeleton';
import CardContent from './components/CardContent';

import { type ShouldDisplayProps } from '@/shared/utils/types';
import { cn } from '@/shared/utils/helpers';
import { getSEOSkeletonLoadingKey } from '@/shared/utils/helpers';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm bg-neutral-100' });

/** Learning journey mobile. */
export default function LearningJourneyMobile({ shouldDisplay = true }: ShouldDisplayProps) {
  return (
    <section className={cn('py-14', !shouldDisplay && 'hidden')}>
      <div className={cn('flex flex-col gap-7 px-4', 'xs:px-6', 'sm:gap-9 sm:px-9')}>
        <SEOSkeletonLoading
          key={`${getSEOSkeletonLoadingKey(shouldDisplay)}-title`}
          skeleton={<TitleSkeleton SkeletonLoading={SkeletonLoading} />}
          content={<TitleContent />}
        />
        <SEOSkeletonLoading
          key={`${getSEOSkeletonLoadingKey(shouldDisplay)}-card`}
          skeleton={<CardSkeleton SkeletonLoading={SkeletonLoading} />}
          content={<CardContent />}
        />
      </div>
    </section>
  );
}
