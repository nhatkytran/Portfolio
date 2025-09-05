'use client';

import { cn } from '@/shared/utils/helpers';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** The title of the hero introduction. */
  readonly title: string;
};

/** Hero introduction component. */
export default function HeroIntroduction({ title }: Props) {
  return (
    <div
      style={{ backgroundImage: "url('/images/hero/hero-bg.png')" }}
      className={cn(
        'flex items-end justify-center',
        'h-[256px] bg-black py-10',
        'sm:h-[276px] sm:py-14',
        'lg:h-[296px] lg:py-20',
      )}
    >
      <div className={cn('max-w-8xl w-full px-4', 'xs:px-6', 'sm:px-9')}>
        <FadeInMotion
          as="h2"
          className={cn(
            'font-riot-sans-bold text-4xl tracking-wider text-neutral-50 uppercase italic sm:text-5xl',
            'lg:text-6xl',
          )}
        >
          {title}
        </FadeInMotion>
      </div>
    </div>
  );
}
