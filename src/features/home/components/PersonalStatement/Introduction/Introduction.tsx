import { useResponsiveDisplay } from '@/shared/hooks';
import { DISPLAY_SCREEN } from '@/shared/constants';

/** Introduction. */
export default function Introduction() {
  const { display } = useResponsiveDisplay();
  const shouldDisplayMoreContent = display != null && display !== DISPLAY_SCREEN.MOBILE;

  return (
    <p className="text-center text-xs tracking-wider text-neutral-700">
      Like armor, a soldier&apos;s statement adapts,
      <br />
      {`but it is always worn into battle${
        shouldDisplayMoreContent && ', a shield for the spirit and a reminder of purpose'
      }.`}
    </p>
  );
}
