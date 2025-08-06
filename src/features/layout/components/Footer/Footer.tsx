import { cn } from '@/shared/utils/helpers';
import { TECHNOLOGY_ICONS } from '@/features/layout/data';

/** Footer. */
export default function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="flex w-full items-center justify-center bg-neutral-900">
        <div
          className={cn(
            'flex w-full max-w-4xl items-center justify-between',
            'px-4 py-5',
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
    </footer>
  );
}
