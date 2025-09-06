import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import CreateSkeletonLoading from '@/shared/components/CreateSkeletonLoading';
import FadeInMotion from '@/shared/components/FadeInMotion';

const SkeletonLoading = CreateSkeletonLoading({ className: 'animate-pulse rounded-sm bg-neutral-100' });

/** Freedom lover introduction. */
export default function Introduction() {
  const { initialLoading } = useInitialLoading();

  return (
    <div className={cn('max-w-8xl flex w-full flex-col gap-4 px-4', 'xs:px-6', 'sm:px-9')}>
      {initialLoading ? (
        <>
          <SkeletonLoading
            className={cn('h-[36px] w-[188px]', 'sm:h-[38px] sm:w-[232px]', 'lg:h-[40px] lg:w-[260px]')}
          />
          <div className="flex flex-col gap-2">
            <SkeletonLoading className={cn('h-[20px] max-w-[460px]', 'mp:max-w-[620px]')} />
            <SkeletonLoading className={cn('h-[20px] max-w-[240px]', 'mp:max-w-[600px]')} />
          </div>
        </>
      ) : (
        <>
          <FadeInMotion as="h2" className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>
            Freedom Lover
          </FadeInMotion>
          <FadeInMotion
            as="p"
            className={cn(
              'max-w-[660px]',
              'font-inter text-sm font-semibold text-neutral-600',
              'sm:text-[15px]',
              'lg:text-base',
            )}
          >
            <span className="font-bold text-blue-500">Passionate</span> in code,{' '}
            <span className="font-bold text-red-500">skilled</span> in Front-end,{' '}
            <span className="font-bold text-green-500">advancing</span> to JavaScript Full-stack.
            <br className="hidden lg:block" />A freedom lover{' '}
            <span className="font-bold text-yellow-500">thriving</span> with diverse teams, always{' '}
            <span className="font-bold text-pink-500">learning</span>,{' '}
            <span className="whitespace-nowrap">ready to deliver.</span>
          </FadeInMotion>
        </>
      )}
    </div>
  );
}
