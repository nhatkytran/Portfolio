import { useMode } from '@/shared/zustand';
import { DAWNBRINGER_MODE, NIGHTBRINGER_MODE } from '@/features/layout/data';

/** Use bringer. */
export function useBringer() {
  const mode = useMode();
  const isNightbringer = mode === NIGHTBRINGER_MODE;
  const isDawnbringer = mode === DAWNBRINGER_MODE;
  return { isNightbringer, isDawnbringer };
}
