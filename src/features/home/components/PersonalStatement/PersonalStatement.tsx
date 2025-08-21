'use client';

import { useRef, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useResponsiveDisplay, useWindowEventListener } from '@/shared/hooks';
import { DISPLAY_SCREEN } from '@/shared/constants';
import Waves from '@/features/home/components/PersonalStatement/Waves';

const ENGLISH_LANGUAGE = 'English';
const CHINESE_LANGUAGE = 'Chinese';
const VIETNAMESE_LANGUAGE = 'Vietnamese';

type Language = 'English' | 'Chinese' | 'Vietnamese';

const LANGUAGES: readonly Language[] = [ENGLISH_LANGUAGE, CHINESE_LANGUAGE, VIETNAMESE_LANGUAGE];

/**
 * Gets the language line styles.
 * @param language The language to get styles for.
 */
const getLanguageLineStyles = (language: Language): string => {
  if (language === CHINESE_LANGUAGE) {
    return 'left-[33%]';
  }
  if (language === VIETNAMESE_LANGUAGE) {
    return 'left-[66%]';
  }
  return 'left-0';
};

/** Personal statement. */
export default function PersonalStatement() {
  const { display } = useResponsiveDisplay();
  const languageContainerRef = useRef<HTMLDivElement>(null);
  const [languageLineWidth, setLanguageLineWidth] = useState<number>(0);
  const [language, setLanguage] = useState<Language>(ENGLISH_LANGUAGE);
  const languageLineStyles = getLanguageLineStyles(language);

  /**
   * Handles language change.
   * @param language The language to change to.
   */
  const handleLanguage = (language: Language) => () => {
    setLanguage(language);
  };

  /** Handles language line width. */
  const handleLanguageLineWidth = () => {
    if (languageContainerRef.current != null) {
      setLanguageLineWidth(languageContainerRef.current.offsetWidth / LANGUAGES.length);
    }
  };

  useWindowEventListener({ eventName: 'resize', isInitialCall: true, handler: handleLanguageLineWidth });

  if (display == null) {
    return null;
  }

  return (
    <section
      className={cn('flex flex-col items-center justify-center gap-10 pt-14', 'xs:gap-12', 'md:gap-14', 'lg:pt-20')}
    >
      <div className={cn('flex flex-col gap-6 px-4', 'font-mark-pro-bold w-full max-w-4xl', 'xs:px-6', 'sm:px-9')}>
        <p className="text-center text-xs tracking-wider text-neutral-700">
          Like armor, a soldier&apos;s statement adapts,
          <br />
          {`but it is always worn into battle${
            display !== DISPLAY_SCREEN.MOBILE && ', a shield for the spirit and a reminder of purpose'
          }.`}
        </p>
        <div ref={languageContainerRef} className="relative">
          <div className="flex items-center justify-between">
            {LANGUAGES.map(lang => (
              <button
                key={lang}
                onClick={handleLanguage(lang)}
                className={cn(
                  'flex-1 py-3.5 text-xs tracking-widest uppercase',
                  'xs:text-sm',
                  language === lang ? 'text-neutral-800' : 'text-neutral-500',
                )}
              >
                {lang}
              </button>
            ))}
          </div>
          <span
            style={{ width: `${languageLineWidth}px` }}
            className={cn(
              'personal-statement-line-transition',
              'absolute bottom-0 left-0 block h-[2px] bg-neutral-500',
              languageLineStyles,
            )}
          />
        </div>
        <div
          className={cn(
            'relative flex flex-col gap-3.5',
            'rounded-sm bg-neutral-100 px-7 py-8',
            'xs:px-10 xs:py-9',
            'md:gap-4 md:px-14',
          )}
        >
          <span
            className={cn(
              'w-fit px-6 py-1.5',
              'text-sm text-neutral-600',
              'rounded-3xl border-2 border-neutral-500',
              'md:px-7 md:text-sm',
            )}
          >
            On learning
          </span>
          <p className="text-sm tracking-wider text-neutral-600">Ky Tran</p>
          <p className={cn('xs:text-lg text-base tracking-wider text-neutral-700', 'md:text-xl')}>
            I pledge to be first under heaven
          </p>
          <p className={cn('text-sm tracking-wider text-neutral-600', 'md:text-base')}>
            I vow to be as the Sun&apos;s light, piercing through the ages
          </p>
        </div>
      </div>
      <Waves />
    </section>
  );
}
