import { cn } from '@/shared/utils/helpers';
import { PropsWithIsLight } from '@/shared/utils/types';
import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Title skeleton. */
export default function TitleSkeleton({ SkeletonLoading, isLight = true }: PropsWithIsLight<SkeletonLoadingProps>) {
  return (
    <SkeletonLoading
      className={cn(
        'h-[30px] w-[218px]',
        'sm:h-[48px] sm:w-[268px]',
        'lg:h-[40px] lg:w-[302px]',
        isLight ? 'bg-neutral-150' : 'bg-neutral-800',
      )}
    />
  );
}
