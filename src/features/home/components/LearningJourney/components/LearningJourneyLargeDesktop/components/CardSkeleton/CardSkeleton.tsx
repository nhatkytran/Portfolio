import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Card skeleton. */
export default function CardSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return <SkeletonLoading className="h-[104px] w-full max-w-[305px]" />;
}
