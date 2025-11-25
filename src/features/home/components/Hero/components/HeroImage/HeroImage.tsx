import AnimationImage from './AnimationImage';
import BackgroundImage from './BackgroundImage';

import { cn } from '@/shared/utils/helpers';

/** Hero image. */
export default function HomePage() {
  return (
    <div
      className={cn(
        'hero-image-clip-path h-[442px] w-full',
        'absolute right-0 bottom-0 flex-2 self-stretch',
        'md:top-0 md:h-full md:w-[42%]',
      )}
    >
      <AnimationImage src="/images/hero/ky-tran.jpg" shouldBeNightbringer />
      <AnimationImage src="/images/hero/ky-tran-light.jpg" shouldBeNightbringer={false} />
      <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
      <BackgroundImage />
    </div>
  );
}
