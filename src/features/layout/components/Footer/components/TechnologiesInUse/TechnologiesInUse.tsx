import { cn } from '@/shared/utils/helpers';
import { TECHNOLOGY_ICONS } from '@/features/layout/data';

/** Technologies in use. */
export default function TechnologiesInUse() {
  return (
    <div className="flex w-full items-center justify-center bg-neutral-800">
      <div
        className={cn(
          'flex items-center justify-between',
          'w-full max-w-4xl px-4 py-5',
          'xs:px-6 xs:py-6',
          'sm:px-9',
          'lg:py-7',
        )}
      >
        {TECHNOLOGY_ICONS.map((Icon, index) => (
          <Icon key={index} className={cn('size-6', 'xs:size-6.5', 'lg:size-7.5')} />
        ))}
      </div>
    </div>
  );
}
