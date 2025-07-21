import { useEffect } from 'react';

/**
 * Freezes the body of the page.
 * @param isLocked - Whether the body should be frozen.
 */
export function useBodyFreeze(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflowY = 'scroll';

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflowY = '';
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}
