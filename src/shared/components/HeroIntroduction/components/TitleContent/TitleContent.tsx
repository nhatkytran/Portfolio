import { cn } from '@/shared/utils/helpers';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** The title of the hero introduction. */
  readonly title: string;
};

/** Title content. */
export default function TitleContent({ title }: Props) {
  return (
    <FadeInMotion
      as="h2"
      className={cn(
        'font-riot-sans-bold w-fit',
        'text-4xl tracking-wider text-neutral-50 uppercase italic sm:text-5xl',
        'lg:text-6xl',
        'hover:animate-pulse',
      )}
    >
      {title}
    </FadeInMotion>
  );
}
