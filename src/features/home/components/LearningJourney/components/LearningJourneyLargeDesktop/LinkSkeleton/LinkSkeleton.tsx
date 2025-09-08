import { cn } from '@/shared/utils/helpers';
import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Link skeleton. */
export default function LinkSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return <SkeletonLoading className={cn('block', 'h-[28px] w-[96px]')} />;
}
