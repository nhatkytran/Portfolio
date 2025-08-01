import { LearningIconProps, PropsWithClassName } from '@/shared/utils/types';

/** Arrow up right icon. */
export default function ArrowUpRightIcon({
  className,
  width = 20,
  height = 20,
  fill = '#e80029',
}: PropsWithClassName & LearningIconProps) {
  return (
    <svg width={width} height={height} className={className} viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0.000000,480.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
        {/* eslint-disable-next-line max-len */}
        <path d="M591 4359 c-120 -23 -225 -135 -253 -269 -30 -146 60 -301 211 -362 l56 -23 1290 -3 1289 -3 -1400 -1402 c-1574 -1575 -1449 -1438 -1448 -1597 0 -102 24 -161 94 -230 69 -70 128 -94 230 -94 159 -1 22 -126 1598 1448 l1402 1401 0 -1250 c0 -811 4 -1272 10 -1314 20 -122 86 -207 199 -259 81 -37 186 -36 264 2 95 46 165 136 187 238 8 39 10 514 8 1768 l-3 1715 -28 56 c-32 66 -99 132 -165 162 l-47 22 -1725 1 c-949 1 -1745 -2 -1769 -7z" />
      </g>
    </svg>
  );
}
