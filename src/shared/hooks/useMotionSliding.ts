import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { type ValueAnimationTransition, animate, useMotionValue } from 'framer-motion';

// prettier-ignore
type Props = {

  /** The side which the slide goes. */
  readonly slideSide?: 'left' | 'right';

  /** Sliding speed. */
  readonly duration?: number;

  /** The number of times the data needs to loop. */
  readonly dataLoopTime?: number;

  /** Initial x translation value. */
  readonly initialXTranslationValue?: number;

  /** Animate options. */
  readonly animateOptions?: ValueAnimationTransition<number>;
};

/** Motion slide content horizontally. */
export function useMotionSliding({
  slideSide = 'left',
  duration = 50,
  dataLoopTime = 10,
  initialXTranslationValue = 0,
  animateOptions = {},
}: Props): [ReturnType<typeof useMeasure>[0], ReturnType<typeof useMotionValue<number>>] {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(initialXTranslationValue);

  useEffect(() => {
    const startPosition = 0;
    const finalPosition = (width / dataLoopTime) * (slideSide === 'left' ? -1 : 1);
    const controls = animate(xTranslation, [startPosition, finalPosition], {
      ease: 'linear',
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      ...animateOptions,
    });
    return controls.stop;
  }, [xTranslation, width, animateOptions, dataLoopTime, duration, slideSide]);

  return [ref, xTranslation];
}
