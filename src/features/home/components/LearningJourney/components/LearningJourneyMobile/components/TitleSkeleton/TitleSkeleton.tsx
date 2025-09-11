import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Title skeleton */
export default function TitleSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return <SkeletonLoading className="h-[158px] w-full" />;
}
