import { type ReactNode } from 'react';

import { cn } from '@/shared/utils/helpers';
import { IconAppearanceProps, PropsWithClassName } from '@/shared/utils/types';
import { HeartIcon, JavaScriptLearningIcon, LanguageIcon, MusicIcon } from '@/shared/icons/learning';
import { HtmlIcon, JavaScriptIcon, ReactIcon, TypeScriptIcon, AngularIcon } from '@/shared/icons/technologies';
import { VueJSIcon } from '@/shared/icons/skills/fe';

// prettier-ignore
type HeroPoem = {

  /** First line. */
  readonly first: string;

  /** Second line. */
  readonly second: string;
};

/** Hero poem. */
export const heroPoem: HeroPoem = {
  first: '少 年 壯 志 懐 天 夢',
  second: '自 許 人 間 第 一 流',
};

/** Desktop large. */
export const DESKTOP_LARGE = 'large' as const;

/** Desktop small. */
export const DESKTOP_SMALL = 'small' as const;

/** Desktop size. */
export type DesktopSize = typeof DESKTOP_LARGE | typeof DESKTOP_SMALL;

// prettier-ignore
type HeroCopy = {

  /** Role. */
  readonly role: string;

  /** Name. */
  readonly name: string;

  /** Title getter. */
  readonly getTitle: (isNightbringer: boolean) => ReactNode;

  /** Sub title. */
  readonly subTitle: ReactNode;

  /** Call to action. */
  readonly cta: string;
}

/** The copy for the hero section. */
export const heroCopy: HeroCopy = {
  role: 'Front-end Developer',
  name: 'Ky Tran - 陳/陈 日 祺',

  /**
   * Title getter.
   * @param isNightbringer Whether is nightbringer.
   */
  getTitle: (isNightbringer: boolean) => (
    <>
      On The{' '}
      <span className="whitespace-nowrap">
        <span
          className={cn('relative top-0.25', 'font-riot-bold-italic', isNightbringer ? 'text-red-600' : 'text-sky-500')}
        >
          Frontlines
        </span>{' '}
        of Code
      </span>
    </>
  ),

  subTitle: (
    <>
      Serving as a Front-end Developer since July 2024, armed with
      <span className="text-amber-300"> JavaScript</span> and its frameworks:{' '}
      <span className="whitespace-nowrap text-blue-400">React / Next</span> -{' '}
      <span className="text-red-500">Angular</span> - <span className="text-green-400">Vue</span>.
    </>
  ),

  cta: 'Deploy Me on Your Next Mission',
};

// prettier-ignore
type LearningJourneyCopy = {

  /** Large desktop title. */
  readonly largeDesktopTitle: string;

  /** Desktop title. */
  readonly desktopTitle: string;

  /** Mobile title. */
  readonly mobileTitle: string;

  /** Full site call to action text. */
  readonly fullSiteCta: string;

  /** Improvement status text. */
  readonly improvementStatus: string;

  /** On learning status text. */
  readonly onLearningStatus: string;

  /** Sub title */
  readonly subTitle: ReactNode;

  /** Nightbringer quote */
  readonly nightbringerQuote: ReactNode;

  /** Dawnbringer quote */
  readonly dawnbringerQuote: ReactNode;
}

/** The copy for learning journey section. */
export const learningJourneyCopy: LearningJourneyCopy = {
  largeDesktopTitle: 'On The Learning Journey',
  desktopTitle: 'Learning Journey',
  mobileTitle: 'Learning Journey',
  fullSiteCta: 'Full Site',
  improvementStatus: 'Improvement Status',
  onLearningStatus: 'On Learning',

  subTitle: (
    <>
      Going deep in <span className="font-bold text-blue-500">Front-end coding</span>, preparing for{' '}
      <span className="font-bold text-red-500">Ielts</span> and <span className="font-bold text-green-500">Hsk</span>.
      Keep pushing as a soldier.
    </>
  ),

  nightbringerQuote: (
    <>
      Let the light fade - I was never meant to follow it, only to
      <span className="whitespace-nowrap"> surpass it.</span>
    </>
  ),

  dawnbringerQuote: (
    <>
      Let the darkness come - I was not shaped to fear it, only to
      <span className="whitespace-nowrap"> outshine it.</span>
    </>
  ),
};

// prettier-ignore
export type Learning = {

  /** Name. */
  readonly name: string;

  /** Icon. */
  readonly Icon: (props: IconAppearanceProps) => ReactNode;
};

/** Learnings. */
export const LEARNINGS: readonly Learning[] = [
  { name: 'Coding - Front-end Development', Icon: JavaScriptLearningIcon },
  { name: 'Language - English and Chinese', Icon: LanguageIcon },
  { name: 'Music - Piano and Guitar', Icon: MusicIcon },
  { name: 'Health - Boxing and Tai Chi', Icon: HeartIcon },
];

/** Learning icon styles. */
export const LEARNING_ICON_STYLES: readonly IconAppearanceProps[] = [
  { width: 18, height: 18, fill: '#111111' },
  { width: 16, height: 16, fill: '#111111' },
  { width: 17, height: 17, fill: '#111111' },
  { width: 13, height: 14, fill: '#111111' },
];

// prettier-ignore
type CultureLoverCopy = {

  /** Title. */
  readonly title: string;

  /** Sub title. */
  readonly subtitle: ReactNode;
};

/** The copy for the culture lover section. */
export const cultureLoverCopy: CultureLoverCopy = {
  title: 'Culture Lover',
  subtitle: (
    <>
      I love working with diverse cultures and teams, always learning,{' '}
      <span className="whitespace-nowrap">ready to deliver.</span>
    </>
  ),
};

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
  { name: 'taiwan.webp', alt: 'Taiwan flag' },
  { name: 'singapore.webp', alt: 'Singapore flag' },
  { name: 'hongkong.webp', alt: 'Hong Kong flag' },
  { name: 'france.webp', alt: 'France flag' },
  { name: 'china.webp', alt: 'China flag' },
  { name: 'russia.webp', alt: 'Russia flag' },
  { name: 'ukraine.webp', alt: 'Ukraine flag' },
  { name: 'uk.webp', alt: 'United Kingdom flag' },
  { name: 'germany.webp', alt: 'Germany flag' },
];

// prettier-ignore
type TechnologyOverviewCopy = {

  /** Title. */
  readonly title: string;

  /** Sub title. */
  readonly subTitle: ReactNode;
}

/** The copy for the technologies overview section. */
export const technologyOverviewCopy: TechnologyOverviewCopy = {
  title: 'Technologies',
  subTitle: (
    <>
      My gear <span className="font-bold text-blue-500">evolves</span> with every battle, and here are some of the
      technologies <span className="whitespace-nowrap">at my side</span>.
    </>
  ),
};

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
  { name: 'Vue / Nuxt', Icon: VueJSIcon },
];

// prettier-ignore
type PersonalStatementCopy = {

  /** Title. */
  readonly title: ReactNode;
}

/** The copy for the personal statement section. */
export const personalStatementCopy: PersonalStatementCopy = {
  title: (
    <>
      Like armor, a soldier&apos;s <span className="font-bold text-blue-500">statement</span> adapts,
      <br />
      yet it is always worn into battle - a shield for the <span className="font-bold text-red-500">spirit</span>
      <span className="whitespace-nowrap">
        {' '}
        and a reminder of <span className="font-bold text-green-500">purpose</span>.
      </span>
    </>
  ),
};

/** English language. */
export const ENGLISH_LANGUAGE = 'English' as const;

/** Chinese language. */
export const CHINESE_LANGUAGE = 'Chinese' as const;

/** Vietnamese language. */
export const VIETNAMESE_LANGUAGE = 'Vietnamese' as const;

/** Language. */
export type Language = typeof ENGLISH_LANGUAGE | typeof CHINESE_LANGUAGE | typeof VIETNAMESE_LANGUAGE;

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
    quote: 'I promise to shine above all',
    motto: 'I strive to shine like the Sun, cutting through time.',
  },
  [CHINESE_LANGUAGE]: {
    badge: '修 學/学',
    author: '陳/陈 日 祺',
    quote: '自 許/许 人 間/间 第 一 流',
    motto: '願/愿 如 太 陽/阳 之 光，穿 越 時/时 光 而 長/长 照 .',
  },
  [VIETNAMESE_LANGUAGE]: {
    badge: 'Tu học',
    author: 'Trần Nhật Kỳ',
    quote: 'Tự hứa nhân gian đệ nhất lưu',
    motto: 'Nguyện như ánh Mặt Trời, chiếu xuyên qua Thời Gian.',
  },
};
