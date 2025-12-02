import AnimationImage from './components/AnimationImage';
import BackgroundImage from './components/BackgroundImage';
import Idiom from './components/Idiom';

import { cn } from '@/shared/utils/helpers';

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
      <Idiom
        className={cn('top-[46px] right-[16px] from-neutral-100', 'xs:right-[24px]', 'sm:right-[36px]')}
        idiom="少 年 壯 志 懐 天 夢"
      />
      <Idiom
        className={cn(
          'top-[92px] right-[46px] from-neutral-300',
          'xs:right-[56px]',
          'sm:top-[112px] sm:right-[76px]',
          'lg:right-[80px]',
        )}
        idiom="自 許 人 間 第 一 流"
      />
      <BackgroundImage />
    </div>
  );
}
