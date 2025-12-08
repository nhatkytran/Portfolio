import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { PORTAL_ID } from '@/features/layout/data';

/** Portal component. */
export default function Portal({ children }: PropsWithChildren) {
  const container = document.getElementById(PORTAL_ID);
  if (!container) {
    throw new Error(`Element with id "${PORTAL_ID}" not found.`);
  }
  return createPortal(children, container);
}
