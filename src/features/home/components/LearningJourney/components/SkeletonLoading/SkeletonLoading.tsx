import { cn } from '@/shared/utils/helpers';
import { PropsWithClassName } from '@/shared/utils/types';

/** Skeleton loading for learning journey. */
export default function SkeletonLoading({ className }: PropsWithClassName) {
  return <span className={cn('rounded-sm bg-neutral-100', className)} />;
}
