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
      <div className={cn('flex items-center justify-center pb-12', 'sm:pt-4 sm:pb-16')}>
        <div className={cn('max-w-8xl flex w-full flex-col gap-4 px-4', 'xs:px-6', 'sm:px-9')}>
          <h2 className={cn('font-inter text-[26px] font-semibold', 'sm:text-[32px]', 'lg:text-4xl')}>Freedom Lover</h2>
          <p
            className={cn(
              'max-w-[660px]',
              'font-inter text-sm font-semibold text-neutral-600',
              'sm:text-[15px]',
              'lg:text-base',
            )}
          >
            Ideologies are strategies, not destinies. <span className="font-bold text-blue-500">Capitalism</span>,{' '}
            <span className="font-bold text-red-600">Communism</span>, even{' '}
            <span className="font-bold text-neutral-800">Fascism</span> - victory belongs to those who
            use&nbsp;them&nbsp;with&nbsp;discipline, not&nbsp;those&nbsp;who&nbsp;worship&nbsp;them.
          </p>
        </div>
      </div>
      <div className={cn('relative h-[180px] overflow-hidden', 'sm:h-[200px]')}>
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
                  'group flex items-center justify-center',
                  'relative aspect-video h-[120px]',
                  'rounded-sm border border-neutral-100 bg-neutral-50',
                )}
              >
                <Image
                  src={`/images/flags/${flag}`}
                  alt={flag.split('.')[0]}
                  width={100}
                  height={0}
                  className={cn('transition-all', 'group-hover:scale-105')}
                />
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
