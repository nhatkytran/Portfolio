import AnimationImage from './components/AnimationImage';
import BackgroundImage from './components/BackgroundImage';
import Poem from './components/Poem';

import { cn } from '@/shared/utils/helpers';
import { HERO_POEM } from '@/features/home/data';

/** Hero image. */
export default function HomePage() {
  return (
    <div
      className={cn(
        'hero-image-clip-path absolute right-0 bottom-0 h-[420px] w-full flex-2 self-stretch',
        'md:top-0 md:h-full md:w-[42%]',
      )}
    >
      <AnimationImage src="/images/hero/ky-tran.jpg" shouldBeNightbringer />
      <AnimationImage src="/images/hero/ky-tran-light.jpg" shouldBeNightbringer={false} />
      <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
      <Poem
        className={cn('top-[46px] right-[16px] from-neutral-100', 'xs:right-[24px]', 'sm:right-[36px]')}
        idiom={HERO_POEM.first}
        transitionDelay={1.4}
      />
      <Poem
        className={cn(
          'top-[92px] right-[46px] from-neutral-300',
          'xs:right-[56px]',
          'sm:top-[112px] sm:right-[76px]',
          'lg:right-[80px]',
        )}
        idiom={HERO_POEM.second}
        transitionDelay={1.6}
      />
      <BackgroundImage />
    </div>
  );
}
