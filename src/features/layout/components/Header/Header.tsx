import { cn } from '@/shared/utils/helpers';
import Logo from '@/features/layout/components/Header/components/Logo';
import Navbar from '@/features/layout/components/Header/components/Navbar';
import Bringer from '@/features/layout/components/Header/components/Bringer';

/** Header. */
export default function Header() {
  return (
    <header className={cn('flex min-h-[80px] items-center justify-between', 'bg-neutral-900 px-9 text-neutral-50')}>
      <div className="flex items-center justify-start">
        <Logo />
        <Navbar />
      </div>
      <Bringer />
    </header>
  );
}
