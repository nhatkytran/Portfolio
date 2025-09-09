import { cn } from '@/shared/utils/helpers';
import { PropsWithIsLight } from '@/shared/utils/types';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** Title of the stack skills. */
  readonly title: string;
};

/** Title content. */
export default function TitleContent({ isLight = true, title }: PropsWithIsLight<Props>) {
  return (
    <FadeInMotion
      as="h2"
      className={cn(
        'font-inter text-[26px] font-semibold tracking-wider',
        'sm:text-[32px]',
        'lg:text-4xl',
        isLight ? 'text-black' : 'text-neutral-50',
      )}
    >
      {title}
    </FadeInMotion>
  );
}
