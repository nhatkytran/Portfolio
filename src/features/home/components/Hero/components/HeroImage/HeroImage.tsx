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
      <div
        className={cn(
          'font-beaufort-bold leading-none [text-orientation:upright] [writing-mode:vertical-rl]',
          'absolute top-[72px] right-[36px] min-h-full text-[20px] text-white/60',
        )}
      >
        少 年 壯 志 懷 天 夢
      </div>
      <div
        className={cn(
          'font-beaufort-bold leading-none [text-orientation:upright] [writing-mode:vertical-rl]',
          'absolute top-[138px] right-[82px] min-h-full text-[20px] text-white/60',
        )}
      >
        自 許 人 間 第 一 流
      </div>
      <BackgroundImage />
    </div>
  );
}
