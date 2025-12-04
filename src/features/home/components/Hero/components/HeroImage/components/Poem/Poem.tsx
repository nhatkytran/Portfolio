'use client';

import { ValueTransition } from 'framer-motion';

import { cn } from '@/shared/utils/helpers';
import { PropsWithClassName } from '@/shared/utils/types';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** The idiom text to display. */
  readonly idiom: string;

  /** The delay of the transition. */
  readonly transitionDelay: ValueTransition['delay'];
};

/** Poem. */
export default function Poem({ className, idiom, transitionDelay }: PropsWithClassName<Props>) {
  return (
    <FadeInMotion
      as="p"
      transition={{ duration: 0.4, delay: transitionDelay }}
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
    </FadeInMotion>
  );
}
