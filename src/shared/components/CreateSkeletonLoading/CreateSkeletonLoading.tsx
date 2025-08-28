import { cn } from '@/shared/utils/helpers';
import { PropsWithClassName } from '@/shared/utils/types';

/** Creates a skeleton loading component. */
export default function CreateSkeletonLoading({
  className: defaultClassName,
}: PropsWithClassName): (props: PropsWithClassName) => React.JSX.Element {
  return function SkeletonLoading({ className }: PropsWithClassName) {
    return <span className={cn(defaultClassName, className)} />;
  };
}
