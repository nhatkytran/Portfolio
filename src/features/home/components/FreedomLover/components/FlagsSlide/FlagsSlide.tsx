'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';
import { useMotionSliding } from '@/shared/hooks';
import { FLAG_IMAGES } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

const FLAGS_LOOP_TIME = 10;
const INITIAL_X_TRANSLATION_VALUE = 16;
const DELAY_IN_SECONDS = 1.2;

/** Flags slide. */
export default function FlagsSlide() {
  const { initialLoading } = useInitialLoading();

  const [slidingRef, xTranslation] = useMotionSliding({
    dataLoopTime: FLAGS_LOOP_TIME,
    initialXTranslationValue: INITIAL_X_TRANSLATION_VALUE,
    delayInSeconds: DELAY_IN_SECONDS,
  });

  const flags = useMemo(() => Array.from({ length: FLAGS_LOOP_TIME }, () => FLAG_IMAGES).flat(), []);

  return (
    <div className={cn('relative h-[180px] overflow-hidden', 'sm:h-[200px]')}>
      <motion.div
        ref={slidingRef}
        style={{ x: xTranslation }}
        className={cn('flex items-center gap-4', 'absolute top-0')}
      >
        {flags.map(({ name, alt }, index) => (
          <div
            key={index}
            className={cn(
              'group flex items-center justify-center',
              'relative aspect-video h-[120px]',
              'rounded-sm border border-neutral-100 bg-neutral-50',
              initialLoading && 'animate-pulse',
            )}
          >
            <FadeInMotion transition={{ delay: index * 0.05 + 1 }}>
              <Image
                src={`/images/flags/${name}`}
                alt={alt}
                width={100}
                height={0}
                className={cn('transition-all', 'group-hover:scale-105')}
              />
            </FadeInMotion>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
