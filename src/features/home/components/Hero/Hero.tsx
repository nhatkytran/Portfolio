import { cn } from '@/shared/utils/helpers';

/** Hero. */
export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-black pt-20 pb-24">
      <div className="max-w-8xl flex w-full items-center justify-between px-9">
        <div className="flex flex-3 flex-col gap-8 pr-8">
          <span
            className={cn(
              'w-fit px-6 py-2',
              'font-mark-pro-bold text-sm text-neutral-200 uppercase',
              'rounded-3xl border-2 border-neutral-400',
            )}
          >
            Web Developer
          </span>
          <p className="font-riot-sans-bold text-[18px] text-white uppercase">Ky Tran - (陳 / 陈) 日 祺</p>
          <h2 className="text-mark-pro-bold text-4xl font-bold tracking-wider text-neutral-50">
            On The <span className="font-riot-bold-italic relative top-0.25 text-red-600">Frontlines</span> of Code
          </h2>
          <p className="font-inter text-base font-semibold tracking-wide text-neutral-200">
            Serving as a Frontend Web Developer since July 2024, armed with{' '}
            <span className="text-amber-300">Vanilla JavaScript</span>, <span>Next</span>,{' '}
            <span className="text-blue-400">React</span>, <span className="text-red-400">Angular</span>, and
            self-training in <span className="text-green-400">Vue</span>.
          </p>
          <div className="py-3">
            <button
              className={cn(
                'font-mark-pro-bold w-fit rounded-sm bg-red-600 px-6 py-4 text-sm text-white uppercase',
                'hover:bg-red-700',
              )}
            >
              Deploy Me on Your Next Mission
            </button>
          </div>
        </div>
        <div className="flex-2" />
      </div>
      <div>
        <div
          style={{ backgroundImage: "url('/images/ky-tran.jpg')" }}
          className={cn(
            'hero-image-clip-path',
            'absolute top-0 right-0 bottom-0 w-[42%] flex-2 self-stretch',
            'bg-cover bg-center bg-no-repeat',
          )}
        >
          <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
        </div>
      </div>
    </section>
  );
}
