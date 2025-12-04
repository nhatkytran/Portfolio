import { PropsWithChildren, ElementType } from 'react';
import { motion, HTMLMotionProps, MotionConfigProps } from 'framer-motion';

import { HTMLElements, PropsWithClassName } from '@/shared/utils/types';

type FadeInMotionProps<T extends ElementType> = PropsWithChildren<
  PropsWithClassName<{ as?: T }> & HTMLMotionProps<T extends keyof HTMLElements ? T : 'div'> & MotionConfigProps
>;

/** Fade in motion component. */
export default function FadeInMotion<T extends ElementType = 'div'>({
  as,
  children,
  className,
  onClick,
  exit,
  transition,
}: FadeInMotionProps<T>) {
  const MotionComponent = motion.create(as || 'div');

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      exit={exit}
      transition={{ duration: 0.3, ...transition }}
    >
      {children}
    </MotionComponent>
  );
}
