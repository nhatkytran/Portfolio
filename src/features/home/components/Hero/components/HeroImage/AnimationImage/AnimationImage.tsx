'use client';

import Image, { ImageProps } from 'next/image';

import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { CONTENTS } from '@/shared/constants';

// prettier-ignore
type Props = Pick<ImageProps, 'src'> & {

  /** Whether the image should be shown when the user is a nightbringer. */
  readonly shouldBeNightbringer?: boolean;
};

/** Animation image. */
export default function AnimationImage({ src, shouldBeNightbringer = true }: Props) {
  const { isNightbringer } = useBringer();
  const shouldShowImage = shouldBeNightbringer ? isNightbringer : !isNightbringer;

  return (
    <Image
      className={cn('opacity-0 transition duration-320 ease-in-out', shouldShowImage && 'opacity-100')}
      src={src}
      alt={CONTENTS.ENGLISH_NAME}
      fill
    />
  );
}
