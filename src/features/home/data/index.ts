import { type ReactNode } from 'react';

import { LearningIconProps } from '@/shared/utils/types';
import { HeartIcon, JavaScriptIcon, LanguageIcon, MusicIcon } from '@/shared/icons';

// prettier-ignore
type Learning = {

  /** Name. */
  readonly name: string;

  /** Icon. */
  readonly Icon: (props: LearningIconProps) => ReactNode;
};

/** Learnings. */
export const LEARNINGS: readonly Learning[] = [
  { name: 'Coding - Full Stack Developer', Icon: JavaScriptIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Fitness and Nutrition', Icon: HeartIcon },
];

/** Learning journey night bringer quote. */
export const LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE =
  'Let the light fade - I was never meant to follow it, only to surpass it.';

/** Learning journey dawn bringer quote. */
export const LEARNING_JOURNEY_DAWN_BRINGER_QUOTE =
  'Let the darkness come - I was not shaped to fear it, only to outshine it.';
