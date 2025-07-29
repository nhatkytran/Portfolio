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
        'flex min-h-[60px] items-center justify-center',
        'bg-neutral-900 px-4 text-neutral-50',
        'xs:px-6',
        'sm:min-h-[72px] sm:px-9',
        'lg:min-h-[80px]',
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center justify-start">
          <Logo />
          <Navbar />
        </div>
        <div className="flex items-center justify-end gap-2.5">
          <Bringer className="hidden sm:block" />
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
