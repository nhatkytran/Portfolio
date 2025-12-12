import { cn } from '@/shared/utils/helpers';
import { cultureLoverCopy } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Introduction content. */
export default function IntroductionContent() {
  return (
    <>
      <FadeInMotion as="h2" className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>
        {cultureLoverCopy.title}
      </FadeInMotion>
      <FadeInMotion
        as="p"
        className={cn(
          'max-w-[660px]',
          'font-inter text-sm font-semibold text-neutral-700',
          'sm:text-[15px]',
          'lg:text-base',
        )}
      >
        {cultureLoverCopy.subtitle}
      </FadeInMotion>
    </>
  );
}
