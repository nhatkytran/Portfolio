import { cn } from '@/shared/utils/helpers';

/** Hero. */
export default function Hero() {
  return (
    <section className="flex min-h-[600px] items-center justify-center bg-black">
      <div className="max-w-8xl flex w-full justify-between px-9">
        <div className="flex flex-3 flex-col gap-8">
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
            On the Frontlines of Code.
          </h2>
          <p className="font-inter text-base font-semibold tracking-wide text-neutral-200">
            Serving as a Frontend Web Developer since July 2024, armed with <span>Vanilla JavaScript</span>,{' '}
            <span>Next</span>, <span>React</span>, <span>Angular</span>, and self-training in <span>Vue</span>.
          </p>
          <div className="py-3">
            <button className="font-mark-pro-bold w-fit rounded-sm bg-red-600 px-6 py-4 text-sm text-white uppercase">
              Deploy Me on Your Next Mission
            </button>
          </div>
        </div>
        <div className="flex-2">2</div>
      </div>
    </section>
  );
}
