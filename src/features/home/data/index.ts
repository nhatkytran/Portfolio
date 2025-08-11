import { type ReactNode } from 'react';

import { IconAppearanceProps } from '@/shared/utils/types';
import { HeartIcon, JavaScriptLearningIcon, LanguageIcon, MusicIcon } from '@/shared/icons';

// prettier-ignore
type Learning = {

  /** Name. */
  readonly name: string;

  /** Icon. */
  readonly Icon: (props: IconAppearanceProps) => ReactNode;
};

/** Learnings. */
export const LEARNINGS: readonly Learning[] = [
  { name: 'Coding - Full Stack Developer', Icon: JavaScriptLearningIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Fitness and Nutrition', Icon: HeartIcon },
];

/** Learning icon styles. */
export const LEARNING_ICON_STYLES: readonly IconAppearanceProps[] = [
  {
    width: 18,
    height: 18,
    fill: '#111111',
  },
  {
    width: 16,
    height: 16,
    fill: '#111111',
  },
  {
    width: 17,
    height: 17,
    fill: '#111111',
  },
  {
    width: 13,
    height: 14,
    fill: '#111111',
  },
];

/** Learning journey soldier quote. */
export const LEARNING_JOURNEY_SOLDIER_QUOTE = 'Keep pushing forward as a soldier, growing and improving my skills.';

/** Learning journey night bringer quote. */
export const LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE =
  'Let the light fade - I was never meant to follow it, only to surpass it.';

/** Learning journey dawn bringer quote. */
export const LEARNING_JOURNEY_DAWN_BRINGER_QUOTE =
  'Let the darkness come - I was not shaped to fear it, only to outshine it.';
