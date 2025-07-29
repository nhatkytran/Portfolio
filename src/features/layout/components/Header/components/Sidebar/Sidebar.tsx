'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/utils/helpers';
import { useOpen } from '@/shared/hooks';
import { ArrowLeftIcon, BringerIcon, BurgerIcon, CloseIcon, TriangleDownIcon } from '@/shared/icons';
import { appNavigationLinks } from '@/features/layout/data/appNavigationLinks';
import Modal from '@/features/utilities/components/Modal';
import Divider from '@/shared/components/Divider';

/** Sidebar. */
export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, handleOpen, handleClose } = useOpen();

  return (
    <div className="lg:hidden">
      <div className="flex cursor-pointer items-center fill-neutral-800" onClick={handleOpen}>
        <BurgerIcon className="size-10" />
      </div>
      <Modal isOpen={isOpen} onClose={handleClose} />
      <div
        className={cn(
          'h-full w-full max-w-[492px]',
          'fixed top-0 right-0 flex translate-x-full flex-col justify-between',
          'z-60 bg-white px-4 pb-4 text-black transition-transform duration-250',
          'xxs:px-6 xs:px-8',
          isOpen && 'translate-x-0',
        )}
      >
        <div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="cursor-pointer p-1" onClick={handleClose}>
                <ArrowLeftIcon />
              </Link>
              <div className="flex items-center gap-2 tracking-wider uppercase">
                <p className="font-riot-regular text-xl">/</p>
                <p className="font-riot-bold relative top-0.25 text-sm tracking-widest">Ky Tran</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BringerIcon className={cn('size-8 cursor-pointer fill-sky-400', 'hover:fill-sky-500', 'sm:hidden')} />
              <div
                onClick={handleClose}
                className={cn('flex items-center', 'cursor-pointer rounded-md bg-neutral-100 p-0.5')}
              >
                <CloseIcon className="size-8 stroke-neutral-900" />
              </div>
            </div>
          </div>
          <Divider />
          <ul className="flex flex-col gap-1.5 py-7">
            {appNavigationLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} onClick={handleClose} className="group flex items-center justify-between py-3">
                  <span
                    className={cn(
                      'font-inter text-sm font-semibold tracking-widest uppercase',
                      'group-hover:underline group-hover:underline-offset-4',
                      pathname === href && 'text-yellow-amber-honey',
                    )}
                  >
                    {label}
                  </span>
                  <TriangleDownIcon className="rotate-[-90deg] opacity-60" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Divider />
          <p className="font-riot-bold-italic text-right text-sm tracking-widest text-red-600">
            -- Live on the dark side --
          </p>
        </div>
      </div>
    </div>
  );
}
