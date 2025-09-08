'use client';

import { createElement, JSX, ReactNode, useEffect, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useInitialLoading } from '@/shared/hooks';

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
    const timeoutId = setTimeout(() => setIsRenderDelayed(false), 100);
    return () => clearTimeout(timeoutId);
  }, [setIsRenderDelayed]);

  if (initialLoading) {
    return skeleton;
  }

  return createElement(content.type, {
    ...content.props,
    className: cn(content.props.className, isRenderDelayed && 'opacity-0'),
  });
}
