import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { PropsWithIndex } from '@/shared/utils/types';
import { DESKTOP_LARGE, DESKTOP_SMALL, DesktopSize, Learning } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore
type Props = {

  /** Size. */
  readonly size: DesktopSize;
  
  /** Learning. */
  readonly learning: Learning;
};

/** Card content desktop. */
export default function CardContentDesktop({ learning: { name, Icon }, size, index }: PropsWithIndex<Props>) {
  const { isNightbringer } = useBringer();
  const [isLargeDesktop, isSmallDesktop] = [size === DESKTOP_LARGE, size === DESKTOP_SMALL];

  return (
    <FadeInMotion
      as="li"
      transition={{ delay: index * 0.05 }}
      className={cn(
        'rounded-md p-0.5 transition duration-100',
        isSmallDesktop && 'min-w-[284px]',
        isNightbringer ? 'learning-item-bg-hover' : 'learning-item-bg-dawn-hover',
      )}
    >
      <div
        className={cn(
          'flex h-full min-h-[100px]',
          'overflow-hidden rounded-md border-2 border-white bg-neutral-50',
          'hover:rounded-sm',
        )}
      >
        <div
          className={cn(
            'learning-item-clip-path',
            'flex w-14 items-center justify-center',
            isNightbringer ? 'bg-red-600' : 'bg-sky-600',
          )}
        >
          <Icon />
        </div>
        <p
          className={cn(
            'flex flex-1 items-center justify-center',
            'font-inter px-4 py-2 font-bold tracking-wider',
            isLargeDesktop && 'text-lg',
            isSmallDesktop && 'lgx:text-lg text-base',
          )}
        >
          {name}
        </p>
      </div>
    </FadeInMotion>
  );
}
