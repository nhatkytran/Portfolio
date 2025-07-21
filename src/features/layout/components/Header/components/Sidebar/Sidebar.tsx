'use client';

import { useOpen } from '@/shared/hooks';
import { BurgerIcon } from '@/shared/icons';
import Modal from '@/features/utilities/components/Modal';

/** Sidebar. */
export default function Sidebar() {
  const { isOpen, handleOpen, handleClose } = useOpen();

  return (
    <>
      <div className="flex cursor-pointer items-center fill-neutral-800" onClick={handleOpen}>
        <BurgerIcon className="size-10" />
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div>Modal</div>
      </Modal>
    </>
  );
}
