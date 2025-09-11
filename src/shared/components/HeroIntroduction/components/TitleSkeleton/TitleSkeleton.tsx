import { cn } from '@/shared/utils/helpers';
import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Title skeleton. */
export default function TitleSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return (
    <SkeletonLoading className={cn('h-[40px] w-[242px]', 'sm:h-[48px] sm:w-[322px]', 'lg:h-[60px] lg:w-[404px]')} />
  );
}
