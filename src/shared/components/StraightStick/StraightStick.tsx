import { cn } from '@/shared/utils/helpers';
import { PropsWithClassName } from '@/shared/utils/types';

/** Straight stick. */
export default function StraightStick({ className }: PropsWithClassName) {
  return <div className={cn('absolute top-0 left-0 z-[0] h-1.5 w-full transition-all', className)} />;
}
