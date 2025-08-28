'use client';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import FadeInMotion from '@/shared/components/FadeInMotion';
import SkeletonLoading from '@/features/home/components/Hero/components/SkeletonLoading';

/** Hero. */
export default function Hero() {
  const { initialLoading } = useInitialLoading({ initialLoadingState: true });

  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <div
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        className={cn('flex items-center justify-center', 'bg-black py-10', 'sm:py-14', 'lg:py-20', 'xl:pb-24')}
      >
        <div
          className={cn(
            'max-w-8xl w-full px-4',
            'flex flex-col items-center justify-between',
            'xs:px-6',
            'sm:flex-row sm:px-9',
          )}
        >
          {initialLoading ? (
            <div className={cn('flex flex-3 flex-col gap-6', 'w-full', 'sm:pr-8', 'mp:gap-8')}>
              <SkeletonLoading
                className={cn(
                  'h-[36px] max-w-[160px] rounded-3xl',
                  'mp:h-[40px] mp:max-w-[186px]',
                  'lg:h-[44px] lg:max-w-[195px]',
                )}
              />
              <SkeletonLoading className={cn('h-[24px] max-w-[182px]', 'mp:h-[28px] mp:max-w-[205px]')} />
              <SkeletonLoading
                className={cn('h-[36px] max-w-[364px]', 'xs:max-w-[416px]', 'lg:h-[40px] lg:max-w-[468px]')}
              />
              <div className="flex flex-col gap-2">
                <SkeletonLoading className={cn('h-[20px] max-w-[460px]', 'mp:max-w-[720px]')} />
                <SkeletonLoading className={cn('h-[20px] max-w-[180px]', 'mp:max-w-[260px]')} />
              </div>
              <SkeletonLoading className={cn('h-[48px] max-w-[272px]', 'mp:h-[56px] mp:max-w-[346px]')} />
            </div>
          ) : (
            <div className={cn('flex flex-3 flex-col gap-6', 'sm:pr-8', 'mp:gap-8')}>
              <FadeInMotion
                as="span"
                className={cn(
                  'w-fit px-6 py-2',
                  'font-mark-pro-bold text-xs text-neutral-200 uppercase',
                  'rounded-3xl border-2 border-neutral-400',
                  'mp:text-[15px]',
                  'lg:text-base',
                )}
              >
                Web Developer
              </FadeInMotion>
              <FadeInMotion
                as="p"
                transition={{ delay: 0.05 }}
                className={cn('font-riot-sans-bold text-base text-white uppercase', 'mp:text-lg')}
              >
                Ky Tran - (陳 / 陈) 日 祺
              </FadeInMotion>
              <FadeInMotion
                as="h2"
                transition={{ delay: 0.1 }}
                className={cn(
                  'text-mark-pro-bold text-[28px] font-bold tracking-wider text-neutral-50',
                  'xs:text-[32px]',
                  'lg:text-4xl',
                )}
              >
                On The <span className={cn('relative top-0.25', 'font-riot-bold-italic text-red-600')}>Frontlines</span>
                &nbsp;of&nbsp;Code
              </FadeInMotion>
              <FadeInMotion
                as="p"
                transition={{ delay: 0.15 }}
                className={cn('font-inter text-sm font-semibold tracking-wide text-neutral-200', 'mp:text-base')}
              >
                Serving as a Frontend Web Developer since July 2024, armed with{' '}
                <span className="text-amber-300">Vanilla JavaScript</span>, <span>Next</span>,{' '}
                <span className="text-blue-400">React</span>, <span className="text-red-500">Angular</span>, and
                self-training&nbsp;in&nbsp;<span className="text-green-400">Vue</span>.
              </FadeInMotion>
              <FadeInMotion transition={{ delay: 0.2 }} className="py-3">
                <button
                  className={cn(
                    'w-fit rounded-sm bg-red-600 px-6 py-4',
                    'font-mark-pro-bold text-xs text-white uppercase',
                    'hover:bg-red-700',
                    'mp:text-base',
                  )}
                >
                  Deploy Me on Your Next Mission
                </button>
              </FadeInMotion>
            </div>
          )}
          <div className={cn('h-[432px]', 'sm:h-0 sm:flex-2')} />
        </div>
        <div>
          <div
            style={{ backgroundImage: "url('/images/ky-tran.jpg')" }}
            className={cn(
              'hero-image-clip-path h-[432px] w-full',
              'absolute right-0 bottom-0 flex-2 self-stretch',
              'bg-cover bg-center bg-no-repeat',
              'sm:top-0 sm:h-full sm:w-[42%]',
            )}
          >
            <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
            <div
              className={cn(
                'size-[101%] bg-neutral-800',
                'absolute top-0 left-0',
                'opacity-0 transition duration-200 ease-in-out',
                initialLoading && 'opacity-100',
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
