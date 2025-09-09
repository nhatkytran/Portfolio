import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { ArrowExploreIcon } from '@/shared/icons';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Link content. */
export default function LinkContent() {
  const { isNightbringer } = useBringer();
  return (
    <FadeInMotion className="flex items-center gap-1">
      <ArrowExploreIcon fill={isNightbringer ? '#e80029' : '#007dd2'} />
      <p
        className={cn(
          'font-inter text-sm font-semibold uppercase underline',
          isNightbringer ? 'text-red-600' : 'text-sky-600',
        )}
      >
        Full site
      </p>
    </FadeInMotion>
  );
}
