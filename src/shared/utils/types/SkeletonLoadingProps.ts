import { JSX } from 'react';

import { PropsWithClassName } from '@/shared/utils/types';

// prettier-ignore
export type SkeletonLoadingProps = {

  /** Skeleton loading component. */
  readonly SkeletonLoading: (props: PropsWithClassName) => JSX.Element;
};
