import { BurgerIcon } from '@/shared/icons';

/** Sidebar. */
export default function Sidebar() {
  return (
    <div className="flex cursor-pointer items-center fill-neutral-800">
      <BurgerIcon className="size-10" />
    </div>
  );
}
