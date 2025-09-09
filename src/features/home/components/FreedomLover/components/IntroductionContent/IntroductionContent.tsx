import { cn } from '@/shared/utils/helpers';
import FadeInMotion from '@/shared/components/FadeInMotion';

/** Introduction content. */
export default function IntroductionContent() {
  return (
    <>
      <FadeInMotion as="h2" className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>
        Freedom Lover
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
        <span className="font-bold text-blue-500">Passionate</span> in code,{' '}
        <span className="font-bold text-red-500">skilled</span> in Front-end,{' '}
        <span className="font-bold text-green-500">advancing</span> to JavaScript Full-stack.
        <br className="hidden lg:block" />A freedom lover {/* prettier-ignore */}
        <span className="font-bold text-yellow-500">thriving</span> with diverse teams, always{' '}
        <span className="font-bold text-pink-500">learning</span>,{' '}
        <span className="whitespace-nowrap">ready to deliver.</span>
      </FadeInMotion>
    </>
  );
}
