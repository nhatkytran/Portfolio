'use client';

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
        <SEOSkeletonLoading
          skeleton={<TitleSkeleton SkeletonLoading={SkeletonLoading} />}
          content={<TitleContent title={title} />}
        />
      </div>
    </div>
  );
}
