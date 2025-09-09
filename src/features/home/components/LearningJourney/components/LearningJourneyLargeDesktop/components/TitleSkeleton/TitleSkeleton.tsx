import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Title skeleton. */
export default function TitleSkeleton({ SkeletonLoading }: SkeletonLoadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <SkeletonLoading className="h-[40px] w-[440px]" />
      <SkeletonLoading className="h-[24px] w-[512px]" />
    </div>
  );
}
