'use client';

import { useOpen } from '@/shared/hooks';
import { ArrowLeft, BurgerIcon } from '@/shared/icons';
import Modal from '@/features/utilities/components/Modal';

/** Sidebar. */
export default function Sidebar() {
  const { isOpen, handleOpen, handleClose } = useOpen();

  return (
    <>
      <div className="flex cursor-pointer items-center fill-neutral-800" onClick={handleOpen}>
        <BurgerIcon className="size-10" />
      </div>
      <Modal isOpen={true} onClose={handleClose}>
        <div className="absolute top-0 right-0 h-full w-full max-w-[492px] bg-white px-8">
          <div className="flex items-center gap-4 py-4">
            <div className="cursor-pointer p-1">
              <ArrowLeft />
            </div>
            <div className="flex items-center gap-2 tracking-wider text-black uppercase">
              <p className="font-riot-regular text-xl">/</p>
              <p className="font-riot-bold text-sm">Ky Tran</p>
            </div>
          </div>
          <div>List</div>
        </div>
      </Modal>
    </>
  );
}
