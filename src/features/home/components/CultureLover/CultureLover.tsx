'use client';

import { cn } from '@/shared/utils/helpers';
import FlagsSlide from '@/features/home/components/CultureLover/components/FlagsSlide';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';
import IntroductionSkeleton from '@/features/home/components/CultureLover/components/IntroductionSkeleton';
import IntroductionContent from '@/features/home/components/CultureLover/components/IntroductionContent';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm bg-neutral-100' });

/** Culture lover. */
export default function CultureLover() {
  return (
    <section>
      <div className={cn('flex items-center justify-center pb-12', 'sm:pt-4 sm:pb-16')}>
        <div className={cn('max-w-8xl flex w-full flex-col gap-4 px-4', 'xs:px-6', 'sm:px-9')}>
          <SEOSkeletonLoading
            skeleton={<IntroductionSkeleton SkeletonLoading={SkeletonLoading} />}
            content={<IntroductionContent />}
          />
        </div>
      </div>
      <FlagsSlide />
    </section>
  );
}
