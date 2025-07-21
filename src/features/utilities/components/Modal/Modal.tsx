import { MouseEventHandler, PropsWithChildren } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useBodyFreeze } from '@/features/utilities/hooks';

// prettier-ignore
type Props = PropsWithChildren & {

  /** Whether the modal is open. */
  readonly isOpen: boolean;

  /** Callback to close the modal. */
  readonly onClose: () => void;
};

/**
 * Modal component.
 * @param props - The props for the Modal component.
 * @param props.children - The children to render inside the modal.
 * @param props.isOpen - Whether the modal is open.
 * @param props.onClose - Callback to close the modal.
 */
export default function Modal({ children, isOpen, onClose }: Props) {
  useBodyFreeze(isOpen);

  /**
   * Prevents the stopPropagation event.
   * @param event - The mouse event.
   */
  const handlePreventStopPropagation: MouseEventHandler<HTMLDivElement> = event => event.stopPropagation();

  if (!isOpen) return null;

  return (
    <div
      className={cn('fixed inset-0 z-50 flex items-center justify-center', 'cursor-default bg-black/80')}
      onClick={onClose}
    >
      <div onClick={handlePreventStopPropagation}>{children}</div>
    </div>
  );
}
