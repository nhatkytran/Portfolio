import { cn } from '@/shared/utils/helpers';
import Logo from '@/features/layout/components/Header/components/Logo';
import Navbar from '@/features/layout/components/Header/components/Navbar';
import Bringer from '@/features/layout/components/Header/components/Bringer';
import Sidebar from '@/features/layout/components/Header/components/Sidebar';

/** Header. */
export default function Header() {
  return (
    <header
      className={cn(
        'flex min-h-[72px] items-center justify-between',
        'bg-neutral-900 px-9 text-neutral-50',
        'lg:min-h-[80px]',
      )}
    >
      <div className="flex items-center justify-start">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center justify-end gap-2.5">
        <Bringer />
        <Sidebar />
      </div>
    </header>
  );
}
