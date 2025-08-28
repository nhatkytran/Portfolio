import { cn } from '@/shared/utils/helpers';

/** Hero. */
export default function Hero() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat">
      <div
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        className={cn('flex items-center justify-center bg-black py-10', 'sm:py-14', 'lg:py-20', 'xl:pb-24')}
      >
        <div
          className={cn(
            'max-w-8xl flex w-full flex-col items-center justify-between px-4',
            'xs:px-6',
            'sm:flex-row sm:px-9',
          )}
        >
          <div className={cn('flex flex-3 flex-col gap-6', 'sm:pr-8', 'mp:gap-8')}>
            <span
              className={cn(
                'w-fit px-6 py-2',
                'font-mark-pro-bold text-xs text-neutral-200 uppercase',
                'rounded-3xl border-2 border-neutral-400',
                'mp:text-[15px]',
                'lg:text-base',
              )}
            >
              Web Developer
            </span>
            <p className={cn('font-riot-sans-bold text-base text-white uppercase', 'mp:text-lg')}>
              Ky Tran - (陳 / 陈) 日 祺
            </p>
            <h2
              className={cn(
                'text-mark-pro-bold text-[28px] font-bold tracking-wider text-neutral-50',
                'xs:text-3xl',
                'mp:text-4xl',
              )}
            >
              On The <span className="font-riot-bold-italic relative top-0.25 text-red-600">Frontlines</span>
              &nbsp;of&nbsp;Code
            </h2>
            <p className={cn('font-inter text-sm font-semibold tracking-wide text-neutral-200', 'mp:text-base')}>
              Serving as a Frontend Web Developer since July 2024, armed with{' '}
              <span className="text-amber-300">Vanilla JavaScript</span>, <span>Next</span>,{' '}
              <span className="text-blue-400">React</span>, <span className="text-red-500">Angular</span>, and
              self-training&nbsp;in&nbsp;<span className="text-green-400">Vue</span>.
            </p>
            <div className="py-3">
              <button
                className={cn(
                  'font-mark-pro-bold w-fit rounded-sm bg-red-600 px-6 py-4 text-xs text-white uppercase',
                  'hover:bg-red-700',
                  'mp:text-base',
                )}
              >
                Deploy Me on Your Next Mission
              </button>
            </div>
          </div>
          <div className={cn('h-[432px]', 'sm:h-0 sm:flex-2')} />
        </div>
        <div>
          <div
            style={{ backgroundImage: "url('/images/ky-tran.jpg')" }}
            className={cn(
              'hero-image-clip-path',
              'absolute right-0 bottom-0 h-[432px] w-full flex-2 self-stretch',
              'bg-cover bg-center bg-no-repeat',
              'sm:top-0 sm:h-full sm:w-[42%]',
            )}
          >
            <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
          </div>
        </div>
      </div>
    </section>
  );
}
