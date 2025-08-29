'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/shared/utils/helpers';
import { useMotionSliding } from '@/shared/hooks';

const FLAGS_LOOP_TIME = 10;
const INITIAL_X_TRANSLATION_VALUE = 16;

const FLAGS = [
  'america.webp',
  'republic-china.webp',
  'europe.webp',
  'hongkong.webp',
  'france.webp',
  'communist-china.webp',
  'russia.webp',
  'ukraine.webp',
  'uk.webp',
  'germany.webp',
];

/** Freedom lover. */
export default function FreedomLover() {
  const [slidingRef, xTranslation] = useMotionSliding({
    dataLoopTime: FLAGS_LOOP_TIME,
    initialXTranslationValue: INITIAL_X_TRANSLATION_VALUE,
  });

  return (
    <section>
      <div className="flex items-center justify-center pt-4 pb-16">
        <div className="max-w-8xl flex w-full flex-col gap-4 px-9">
          <h2 className="font-inter text-4xl font-semibold">Freedom Lover</h2>
          <p className={cn('max-w-[660px]', 'font-inter text-base font-semibold text-neutral-600')}>
            Ideologies are strategies, not destinies. <span className="font-bold text-blue-500">Capitalism</span>,{' '}
            <span className="font-bold text-red-600">Communism</span>, even{' '}
            <span className="font-bold text-neutral-800">Fascism</span> - victory belongs to those who use them with
            discipline, not those who worship them.
          </p>
        </div>
      </div>
      <div className="relative h-[200px] overflow-hidden">
        <motion.div
          ref={slidingRef}
          style={{ x: xTranslation }}
          className={cn('flex items-center gap-4', 'absolute top-0')}
        >
          {Array(FLAGS_LOOP_TIME)
            .fill(FLAGS)
            .flat()
            .map((flag, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-center justify-center',
                  'relative aspect-video h-[120px]',
                  'rounded-sm border border-neutral-100 bg-neutral-50 transition-all',
                  'hover:scale-105',
                )}
              >
                <Image src={`/images/flags/${flag}`} alt={flag.split('.')[0]} width={100} height={0} />
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
