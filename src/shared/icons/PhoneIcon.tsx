import { LearningIconProps } from '@/shared/utils/types';

/** Phone icon. */
export default function PhoneIcon({ width = 24, height = 24, fill = '#efefef' }: LearningIconProps) {
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M17.016 18.984v-13.969h-10.031v13.969h10.031zM17.016 1.031q0.797 0 1.383 0.586t0.586 1.383v18q0 0.797-0.586 1.406t-1.383 0.609h-10.031q-0.797 0-1.383-0.609t-0.586-1.406v-18q0-0.797 0.586-1.406t1.383-0.609z" />
    </svg>
  );
}
