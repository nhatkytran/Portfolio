import { motion, HTMLMotionProps, MotionConfigProps } from 'framer-motion';
import { PropsWithChildren, ElementType } from 'react';

import { HTMLElements, PropsWithClassName } from '@/shared/utils/types';

type FadeInMotionProps<T extends ElementType> = PropsWithChildren<
  PropsWithClassName<{ as?: T }> & HTMLMotionProps<T extends keyof HTMLElements ? T : 'div'> & MotionConfigProps
>;

/** Fade in motion component. */
export default function FadeInMotion<T extends ElementType = 'div'>({
  as,
  children,
  className,
  transition,
}: FadeInMotionProps<T>) {
  const MotionComponent = motion(as || 'div');

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ...transition }}
    >
      {children}
    </MotionComponent>
  );
}
