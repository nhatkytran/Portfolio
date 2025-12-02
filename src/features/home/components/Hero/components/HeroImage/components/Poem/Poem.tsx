import { cn } from '@/shared/utils/helpers';
import { PropsWithClassName } from '@/shared/utils/types';

// prettier-ignore
type Props = {

  /** The idiom text to display. */
  readonly idiom: string;
};

/** Poem. */
export default function Poem({ idiom, className }: PropsWithClassName<Props>) {
  return (
    <p
      className={cn(
        'absolute top-0 right-0 min-h-full opacity-80',
        'font-beaufort-bold leading-none [text-orientation:upright] [writing-mode:vertical-rl]',
        'bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-sm text-transparent',
        'sm:text-base',
        'lg:text-lg',
        className,
      )}
    >
      {idiom}
    </p>
  );
}
