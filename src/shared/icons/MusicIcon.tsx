import { LearningIconProps } from '@/shared/utils/types';

/** Music icon. */
export default function MusicIcon({ width = 22, height = 22, fill = '#f1f5f0' }: LearningIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512.000000 512.000000">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
        {/* eslint-disable-next-line max-len */}
        <path d="M2456 4680 c-35 -11 -72 -44 -94 -85 -16 -27 -17 -141 -20 -1308 -2 -1207 -3 -1278 -20 -1273 -91 28 -252 33 -373 11 -404 -70 -719 -366 -737 -691 -6 -110 8 -174 55 -267 66 -126 206 -229 378 -279 111 -31 321 -32 445 -1 184 46 344 134 466 257 86 86 136 162 178 270 l31 81 3 878 3 878 22 -6 c53 -15 290 -139 377 -197 108 -72 258 -211 331 -307 28 -36 84 -134 125 -218 41 -84 84 -159 96 -167 104 -73 191 95 192 369 0 152 -14 241 -60 385 -96 301 -282 530 -614 759 -299 206 -450 342 -504 454 -29 59 -45 148 -46 257 0 69 -22 132 -56 162 -47 41 -116 56 -178 38z" />
      </g>
    </svg>
  );
}
