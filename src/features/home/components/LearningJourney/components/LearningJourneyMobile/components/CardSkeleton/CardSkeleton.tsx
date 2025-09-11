import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Card skeleton */
export default function CardSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return <SkeletonLoading className="h-[412px] w-full" />;
}
