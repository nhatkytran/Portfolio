'use client';

import { useRef, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useResponsiveDisplay, useWindowEventListener } from '@/shared/hooks';
import { DISPLAY_SCREEN } from '@/shared/constants';

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
    <section className="flex items-center justify-center pt-20 pb-24">
      <div className={cn('flex w-full max-w-4xl flex-col gap-6 px-4', 'xs:px-6', 'sm:px-9')}>
        <p className="font-mark-pro-bold text-center text-xs tracking-wider text-neutral-700">
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
                  'font-mark-pro-bold flex-1 py-3.5 text-xs tracking-widest uppercase',
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
        <div className="relative flex flex-col gap-4 rounded-sm bg-neutral-50 px-14 py-9">
          <span
            className={cn(
              'font-mark-pro-bold w-fit rounded-3xl border-2 border-neutral-500 px-7 py-1.5 text-sm text-neutral-600',
            )}
          >
            On learning
          </span>
          <p className="font-mark-pro-bold text-sm tracking-wider text-neutral-600">Ky Tran</p>
          <p className="font-mark-pro-bold text-[20px] tracking-wider text-neutral-700">
            I pledge to be first under heaven
          </p>
          <p className="font-mark-pro-bold z-1 text-base tracking-wider text-neutral-600">
            I vow to be as the Sun&apos;s light, piercing through the ages
          </p>
        </div>
      </div>
    </section>
  );
}
