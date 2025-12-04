'use client';

import FadeInMotion from '../FadeInMotion';

import TitleSkeleton from './components/TitleSkeleton';
import TitleContent from './components/TitleContent';

import { cn } from '@/shared/utils/helpers';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import SEOSkeletonLoading from '@/shared/components/SEOSkeletonLoading';

const SkeletonLoading = CreateSkeletonLoading({ className: 'block rounded-sm bg-neutral-800 animate-pulse' });

// prettier-ignore
type Props = {

  /** The title of the hero introduction. */
  readonly title: string;

  /** The idiom of the hero introduction. */
  readonly idiom: string;
};

/** Hero introduction component. */
export default function HeroIntroduction({ title, idiom }: Props) {
  return (
    <div
      className={cn(
        'relative flex items-end justify-center',
        'bg-[url("/images/hero/hero-bg.png")] bg-cover bg-left-bottom bg-no-repeat',
        'h-[326px] bg-black py-10',
        'sm:h-[376px] sm:py-14',
        'lg:h-[426px] lg:py-20',
      )}
    >
      <div className={cn('max-w-8xl w-full px-4', 'xs:px-6', 'sm:px-9')}>
        <SEOSkeletonLoading
          skeleton={<TitleSkeleton SkeletonLoading={SkeletonLoading} />}
          content={<TitleContent title={title} />}
        />
      </div>
      <FadeInMotion
        as="p"
        transition={{ duration: 0.4, delay: 0.2 }}
        className={cn(
          'absolute top-[44px] right-[16px] min-h-full opacity-90',
          'font-beaufort-medium leading-none [text-orientation:upright] [writing-mode:vertical-rl]',
          'bg-gradient-to-b from-neutral-100 to-neutral-400 bg-clip-text text-[20px] text-transparent',
          'xs:right-[24px]',
          'sm:top-[48px] sm:right-[36px] sm:text-[24px]',
          'lg:text-[28px]',
        )}
      >
        {idiom}
      </FadeInMotion>
    </div>
  );
}
