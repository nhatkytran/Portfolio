import { BringerIcon } from '@/shared/icons';
import { cn } from '@/shared/utils/helpers';

/** Bringer - Night / Dawn. */
export default function Bringer() {
  return (
    <div className="group relative flex cursor-pointer items-center gap-1 px-4 py-1.5">
      <span className="font-riot-bold text-sm tracking-[0.2em] uppercase group-hover:text-sky-400">To.Dawn</span>
      <BringerIcon
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'size-12 opacity-20 group-hover:fill-sky-400',
        )}
      />
    </div>
  );
}
