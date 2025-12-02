import AnimationImage from './AnimationImage';
import BackgroundImage from './BackgroundImage';

import { cn } from '@/shared/utils/helpers';

/** Hero image. */
export default function HomePage() {
  return (
    <div
      className={cn(
        'hero-image-clip-path h-[420px] w-full',
        'absolute right-0 bottom-0 flex-2 self-stretch',
        'md:top-0 md:h-full md:w-[42%]',
      )}
    >
      <AnimationImage src="/images/hero/ky-tran.jpg" shouldBeNightbringer />
      <AnimationImage src="/images/hero/ky-tran-light.jpg" shouldBeNightbringer={false} />
      <div className={cn('hero-image-overlay-bg size-[101%]', 'absolute top-0 left-0')} />
      <div
        className={cn(
          'font-beaufort-bold leading-none [text-orientation:upright] [writing-mode:vertical-rl]',
          'absolute top-[46px] right-[16px] min-h-full text-sm text-transparent opacity-80',
          'bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text',
          'xs:right-[24px]',
          'sm:right-[36px] sm:text-base',
          'lg:text-lg',
        )}
      >
        少 年 壯 志 懷 天 夢
      </div>
      <div
        className={cn(
          'font-beaufort-bold leading-none [text-orientation:upright] [writing-mode:vertical-rl]',
          'absolute top-[92px] right-[46px] min-h-full text-sm text-transparent opacity-80',
          'bg-gradient-to-b from-neutral-300 to-neutral-600 bg-clip-text',
          'xs:right-[56px]',
          'sm:top-[112px] sm:right-[76px] sm:text-base',
          'lg:right-[80px] lg:text-lg',
        )}
      >
        自 許 人 間 第 一 流
      </div>
      <BackgroundImage />
    </div>
  );
}
