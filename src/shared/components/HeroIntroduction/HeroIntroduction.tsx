'use client';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import FadeInMotion from '@/shared/components/FadeInMotion';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'block rounded-sm bg-neutral-800 animate-pulse' });

// prettier-ignore
type Props = {

  /** The title of the hero introduction. */
  readonly title: string;
};

/** Hero introduction component. */
export default function HeroIntroduction({ title }: Props) {
  const { initialLoading } = useInitialLoading();

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
        {initialLoading ? (
          <SkeletonLoading
            className={cn('h-[40px] w-[242px]', 'sm:h-[48px] sm:w-[322px]', 'lg:h-[60px] lg:w-[404px]')}
          />
        ) : (
          <FadeInMotion
            as="h2"
            className={cn(
              'font-riot-sans-bold w-fit',
              'text-4xl tracking-wider text-neutral-50 uppercase italic sm:text-5xl',
              'lg:text-6xl',
              'hover:animate-pulse',
            )}
          >
            {title}
          </FadeInMotion>
        )}
      </div>
    </div>
  );
}
