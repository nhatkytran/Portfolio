import { cn } from '@/shared/utils/helpers';
import { useBringer } from '@/shared/hooks';
import { Learning } from '@/features/home/data';
import FadeInMotion from '@/shared/components/FadeInMotion';

// prettier-ignore

type Props = {

  /** Learning. */
  readonly learning: Learning;

  /** Index. */
  readonly index: number;
};

/** Card content. */
export default function CardContent({ learning: { name, Icon }, index }: Props) {
  const { isNightbringer } = useBringer();

  return (
    <FadeInMotion
      as="li"
      className={cn(
        'rounded-md p-0.5 transition duration-100',
        isNightbringer ? 'learning-item-bg-hover' : 'learning-item-bg-dawn-hover',
      )}
      transition={{ delay: index * 0.05 }}
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
            'font-inter px-4 py-2 text-lg font-bold tracking-wider',
          )}
        >
          {name}
        </p>
      </div>
    </FadeInMotion>
  );
}
