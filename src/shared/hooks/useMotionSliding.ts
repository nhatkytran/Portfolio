import { useCallback, useEffect } from 'react';
import useMeasure from 'react-use-measure';
import {
  type ValueAnimationTransition,
  AnimationPlaybackControlsWithThen,
  animate,
  useMotionValue,
} from 'framer-motion';

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

  /** Delay before starting to slide (in seconds). */
  readonly delayInSeconds?: number;
};

/** Motion slide content horizontally. */
export function useMotionSliding({
  slideSide = 'left',
  duration = 50,
  dataLoopTime = 10,
  initialXTranslationValue = 0,
  animateOptions = {},
  delayInSeconds = 1,
}: Props): [ReturnType<typeof useMeasure>[0], ReturnType<typeof useMotionValue<number>>] {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(initialXTranslationValue);

  /** Handle animate. */
  const handleAnimate = useCallback(() => {
    const startPosition = xTranslation.get();
    const sidePoint = slideSide === 'left' ? -1 : 1;
    const finalPosition = (width / dataLoopTime) * sidePoint - startPosition * sidePoint;
    return animate(xTranslation, [startPosition, finalPosition], {
      ease: 'linear',
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
      ...animateOptions,
    });
  }, [xTranslation, width, animateOptions, dataLoopTime, duration, slideSide]);

  useEffect(() => {
    let controls: AnimationPlaybackControlsWithThen | null = null;
    const timeoutId = setTimeout(() => (controls = handleAnimate()), delayInSeconds * 1000);
    return () => {
      clearTimeout(timeoutId);
      controls?.stop();
    };
  }, [handleAnimate, delayInSeconds]);

  return [ref, xTranslation];
}
