import Image from 'next/image';

import { cn } from '@/shared/utils/helpers';

const FLAGS_LOOP_TIME = 10;

const FLAGS = [
  'america.webp',
  'republic-china.webp',
  'hongkong.webp',
  'communist-china.webp',
  'ukraine.webp',
  'russia.webp',
  'europe.webp',
  'uk.webp',
  'france.webp',
  'germany.webp',
];

/** Freedom lover. */
export default function FreedomLover() {
  return (
    <section className="flex items-center justify-center py-20 pb-0">
      <div className="max-w-8xl flex w-full flex-col gap-16 px-9">
        <div className="flex flex-col gap-4">
          <h2 className="font-inter text-4xl font-semibold">Freedom Lover</h2>
          <p className="font-inter max-w-[660px] text-base font-semibold text-neutral-600">
            Ideologies are strategies, not destinies. <span className="font-bold text-blue-500">Capitalism</span>,{' '}
            <span className="font-bold text-red-600">Communism</span>, even{' '}
            <span className="font-bold text-neutral-800">Fascism</span> - victory belongs to those who use them with
            discipline, not those who worship them.
          </p>
        </div>
        <div className="relative h-[160px]">
          <div className="absolute top-0 flex items-center gap-4">
            {Array(FLAGS_LOOP_TIME)
              .fill(FLAGS)
              .flat()
              .map((flag, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative flex aspect-video h-[120px] items-center justify-center border border-neutral-300',
                    'rounded-sm',
                  )}
                >
                  <Image
                    src={`/images/flags/${flag}`}
                    alt={flag.split('.')[0]}
                    width={100}
                    height={0}
                    className="border border-neutral-200"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
