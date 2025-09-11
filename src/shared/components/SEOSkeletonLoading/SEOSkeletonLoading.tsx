'use client';

import { createElement, JSX, ReactNode, useEffect, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';

const RENDER_DELAY_DURATION = 100;

// prettier-ignore
type Props = {

  /** SEO skeleton loading component. */
  readonly skeleton: ReactNode;

  /** Content to render. */
  readonly content: JSX.Element;
};

/** SEO skeleton loading component. */
export default function SEOSkeletonLoading({ skeleton, content }: Props) {
  const { initialLoading } = useInitialLoading();
  const [isRenderDelayed, setIsRenderDelayed] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (initialLoading) {
        setIsRenderDelayed(false);
      }
    }, RENDER_DELAY_DURATION);
    return () => clearTimeout(timeoutId);
  }, [setIsRenderDelayed, initialLoading]);

  if (initialLoading) {
    return skeleton;
  }

  return createElement(content.type, {
    ...content.props,
    className: cn(content.props.className, isRenderDelayed && 'opacity-0'),
  });
}
