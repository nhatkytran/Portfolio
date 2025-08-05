import { PropsWithClassName, LearningIconProps } from '@/shared/utils/types';

/** Arrow explore icon. */
export default function ArrowExploreIcon({ className, fill = 'currentColor' }: PropsWithClassName & LearningIconProps) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M2 3.91489C2 2.85733 2.85733 2 3.91489 2H8.10802V3.78723H3.91489C3.84439 3.78723 3.78723 3.84439 3.78723 3.91489V12.0851C3.78723 12.1556 3.84439 12.2128 3.91489 12.2128H8.36257C8.39643 12.2128 8.4289 12.1993 8.45284 12.1754L10.949 9.67921H7.89198V7.89198H13.1064C13.5999 7.89198 14 8.29207 14 8.7856V14H12.2128V10.943L9.71661 13.4391C9.35749 13.7983 8.87043 14 8.36257 14H3.91489C2.85733 14 2 13.1427 2 12.0851V3.91489Z"
        fill={fill}
      ></path>
    </svg>
  );
}
