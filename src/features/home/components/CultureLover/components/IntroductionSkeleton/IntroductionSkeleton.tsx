import { cn } from '@/shared/utils/helpers';
import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Introduction skeleton. */
export default function IntroductionSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return (
    <>
      <SkeletonLoading className={cn('h-[36px] w-[188px]', 'sm:h-[38px] sm:w-[232px]', 'lg:h-[40px] lg:w-[260px]')} />
      <div className="flex flex-col gap-2">
        <SkeletonLoading className={cn('h-[20px] max-w-[460px]', 'mp:max-w-[620px]')} />
        <SkeletonLoading className={cn('h-[20px] max-w-[240px]', 'mp:max-w-[600px]')} />
      </div>
    </>
  );
}
