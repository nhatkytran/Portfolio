import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Quote skeleton. */
export default function QuoteSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return <SkeletonLoading className="h-[20px] w-[496px]" />;
}
