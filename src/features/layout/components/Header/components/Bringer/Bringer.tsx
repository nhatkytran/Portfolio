import { BringerIcon } from '@/shared/icons';

/** Bringer - Night / Dawn. */
export default function Bringer() {
  return (
    <div className="group flex cursor-pointer items-center gap-1 px-4 py-1.5">
      <span className="font-riot-bold text-sm tracking-wider uppercase group-hover:text-sky-400">To Dawn</span>
      <BringerIcon className="size-3.5 group-hover:fill-sky-400" />
    </div>
  );
}
