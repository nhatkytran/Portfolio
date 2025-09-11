import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Title skeleton */
export default function TitleSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return <SkeletonLoading className="w-full max-w-[474px]" />;
}
