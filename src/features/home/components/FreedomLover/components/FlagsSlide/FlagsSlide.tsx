'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/shared/utils/helpers';
import { useMotionSliding } from '@/shared/hooks';
import { FLAG_IMAGES } from '@/features/home/data';

const FLAGS_LOOP_TIME = 10;
const INITIAL_X_TRANSLATION_VALUE = 16;

/**
 *
 */
export default function FlagsSlide() {
  const [slidingRef, xTranslation] = useMotionSliding({
    dataLoopTime: FLAGS_LOOP_TIME,
    initialXTranslationValue: INITIAL_X_TRANSLATION_VALUE,
  });

  return (
    <div className={cn('relative h-[180px] overflow-hidden', 'sm:h-[200px]')}>
      <motion.div
        ref={slidingRef}
        style={{ x: xTranslation }}
        className={cn('flex items-center gap-4', 'absolute top-0')}
      >
        {Array(FLAGS_LOOP_TIME)
          .fill(FLAG_IMAGES)
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
  );
}
