import { type ReactNode } from 'react';

import { IconAppearanceProps, PropsWithClassName } from '@/shared/utils/types';
import {
  HeartIcon,
  JavaScriptLearningIcon,
  LanguageIcon,
  MusicIcon,
  HtmlIcon,
  JavaScriptIcon,
  NodeIcon,
  ReactIcon,
  TypeScriptIcon,
  AngularIcon,
} from '@/shared/icons';

/** Desktop large. */
export const DESKTOP_LARGE = 'large' as const;

/** Desktop small. */
export const DESKTOP_SMALL = 'small' as const;

/** Desktop size. */
export type DesktopSize = typeof DESKTOP_LARGE | typeof DESKTOP_SMALL;

// prettier-ignore
export type Learning = {

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
export const LEARNING_JOURNEY_SOLDIER_QUOTE = (
  <>
    Keep <span className="font-bold text-blue-500">pushing</span> forward as a soldier,{' '}
    <span className="font-bold text-red-500">growing</span> and{' '}
    <span className="whitespace-nowrap">
      <span className="font-bold text-green-500">improving</span> my skills.
    </span>
  </>
);

/** Learning journey night bringer quote. */
export const LEARNING_JOURNEY_NIGHT_BRINGER_QUOTE = (
  <>
    Let the light fade - I was never meant to follow it, only to
    <span className="whitespace-nowrap"> surpass it.</span>
  </>
);

/** Learning journey dawn bringer quote. */
export const LEARNING_JOURNEY_DAWN_BRINGER_QUOTE = (
  <>
    Let the darkness come - I was not shaped to fear it, only to
    <span className="whitespace-nowrap"> outshine it.</span>
  </>
);

// prettier-ignore

type FlagImage = {

  /** Name. */
  readonly name: string;

  /** Alt. */
  readonly alt: string;
};

/** Flag images. */
export const FLAG_IMAGES: readonly FlagImage[] = [
  { name: 'america.webp', alt: 'America flag' },
  { name: 'republic-china.webp', alt: 'Republic of China flag' },
  { name: 'europe.webp', alt: 'Europe flag' },
  { name: 'hongkong.webp', alt: 'Hong Kong flag' },
  { name: 'france.webp', alt: 'France flag' },
  { name: 'communist-china.webp', alt: 'Communist China flag' },
  { name: 'russia.webp', alt: 'Russia flag' },
  { name: 'ukraine.webp', alt: 'Ukraine flag' },
  { name: 'uk.webp', alt: 'United Kingdom flag' },
  { name: 'germany.webp', alt: 'Germany flag' },
];

// prettier-ignore
type TechnologyOverview = {

  /** Name. */
  readonly name: string;

  /** Icon. */
  readonly Icon: (props: PropsWithClassName) => ReactNode;
}

/** Technologies overview. */
export const TECHNOLOGIES_OVERVIEW: readonly TechnologyOverview[] = [
  { name: 'HTML / CSS', Icon: HtmlIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'React / Next', Icon: ReactIcon },
  { name: 'Angular', Icon: AngularIcon },
  { name: 'Node / Express', Icon: NodeIcon },
];

/** Language. */
export type Language = 'English' | 'Chinese' | 'Vietnamese';

/** English language. */
export const ENGLISH_LANGUAGE = 'English';

/** Chinese language. */
export const CHINESE_LANGUAGE = 'Chinese';

/** Vietnamese language. */
export const VIETNAMESE_LANGUAGE = 'Vietnamese';

/** Languages. */
export const LANGUAGES: readonly Language[] = [ENGLISH_LANGUAGE, CHINESE_LANGUAGE, VIETNAMESE_LANGUAGE];

// prettier-ignore
type PersonalStatement = {

  /** Badge. */
  readonly badge: string;

  /** Author. */
  readonly author: string;

  /** Quote. */
  readonly quote: string;

  /** Motto. */
  readonly motto: string;
};

type Statements = Readonly<Record<Language, PersonalStatement>>;

/** Personal statements. */
export const STATEMENTS: Statements = {
  [ENGLISH_LANGUAGE]: {
    badge: 'On learning',
    author: 'Ky Tran',
    quote: 'I pledge to be first under heaven',
    motto: "I vow to be as the Sun's light, piercing through the ages",
  },
  [CHINESE_LANGUAGE]: {
    badge: '修學 / 修学',
    author: '陳日祺 / 陈日祺',
    quote: '自許人間第一流 / 自许人间第一流',
    motto: '願如太陽之光，亙古長照，穿越時光 / 愿如太阳之光，亘古长照，穿越时光',
  },
  [VIETNAMESE_LANGUAGE]: {
    badge: 'Tu học',
    author: 'Trần Nhật Kỳ',
    quote: 'Tự hứa nhân gian đệ nhất lưu',
    motto: 'Nguyện như ánh Mặt Trời, chiếu xuyên qua Thời Gian',
  },
};
