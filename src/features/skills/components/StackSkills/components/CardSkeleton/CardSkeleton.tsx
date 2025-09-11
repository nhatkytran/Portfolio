import { cn } from '@/shared/utils/helpers';
import { PropsWithIsLight } from '@/shared/utils/types';
import { SkeletonLoadingProps } from '@/shared/utils/types';

/** Card skeleton. */
export default function CardSkeleton({ SkeletonLoading, isLight = true }: PropsWithIsLight<SkeletonLoadingProps>) {
  return (
    <SkeletonLoading
      className={cn(
        'h-[140px]',
        'xxs:h-[144px]',
        'xs:h-[152px]',
        'lg:h-[160px]',
        isLight ? 'bg-neutral-150' : 'bg-neutral-800',
      )}
    />
  );
}
