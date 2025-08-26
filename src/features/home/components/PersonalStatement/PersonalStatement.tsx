'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/utils/helpers';
import { useResponsiveDisplay, useWindowEventListener } from '@/shared/hooks';
import { DISPLAY_SCREEN } from '@/shared/constants';
import Waves from '@/features/home/components/PersonalStatement/Waves';

const TRANSLATION_ANIMATION_DURATION = 500;

const ENGLISH_LANGUAGE = 'English';
const CHINESE_LANGUAGE = 'Chinese';
const VIETNAMESE_LANGUAGE = 'Vietnamese';

type Language = 'English' | 'Chinese' | 'Vietnamese';

const LANGUAGES: readonly Language[] = [ENGLISH_LANGUAGE, CHINESE_LANGUAGE, VIETNAMESE_LANGUAGE];

const quotes = {
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
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [languageLineWidth, setLanguageLineWidth] = useState(0);
  const [language, setLanguage] = useState<Language>(ENGLISH_LANGUAGE);
  const languageLineStyles = getLanguageLineStyles(language);

  /**
   * Handles language change.
   * @param language The language to change to.
   */
  const handleLanguage = (language: Language) => () => {
    setIsTranslating(true);
    setLanguage(language);
  };

  /** Handles language line width. */
  const handleLanguageLineWidth = () => {
    if (languageContainerRef.current != null) {
      setLanguageLineWidth(languageContainerRef.current.offsetWidth / LANGUAGES.length);
    }
  };

  useWindowEventListener({ eventName: 'resize', isInitialCall: true, handler: handleLanguageLineWidth });

  useEffect(() => {
    if (isTranslating) {
      setTimeout(() => setIsTranslating(false), TRANSLATION_ANIMATION_DURATION);
    }
  }, [isTranslating]);

  if (display == null) {
    return null;
  }

  return (
    <section
      className={cn('flex flex-col items-center justify-center gap-10 pt-14', 'xs:gap-12', 'md:gap-14', 'lg:pt-20')}
    >
      <div
        className={cn('flex flex-col gap-6 px-4', 'font-inter w-full max-w-4xl font-semibold', 'xs:px-6', 'sm:px-9')}
      >
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
                  language === lang ? 'text-red-600' : 'text-neutral-500',
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
              'absolute bottom-0 left-0 block h-[2px] bg-red-600',
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
          {isTranslating && (
            <>
              <span className="h-[36px] w-full max-w-[140px] rounded-3xl bg-neutral-200"></span>
              <span className="h-[20px] w-full max-w-[124px] rounded-3xl bg-neutral-200"></span>
              <span className="h-[28px] w-full max-w-[350px] rounded-3xl bg-neutral-200"></span>
              <span className="h-[24px] w-full max-w-[480px] rounded-3xl bg-neutral-200"></span>
            </>
          )}
          {!isTranslating && (
            <>
              <span
                className={cn(
                  'w-fit px-6 py-2',
                  'text-xs text-neutral-600 uppercase',
                  'rounded-3xl border-2 border-neutral-500',
                  'md:px-7',
                )}
              >
                {quotes[language].badge}
              </span>
              <p className="text-sm tracking-wider text-neutral-600">{quotes[language].author}</p>
              <p className={cn('text-base font-bold tracking-wider text-red-600', 'xs:text-lg', 'md:text-xl')}>
                {quotes[language].quote}
              </p>
              <p className={cn('text-sm tracking-wider text-neutral-600 opacity-90', 'md:text-base')}>
                {quotes[language].motto}
              </p>
            </>
          )}
        </div>
      </div>
      <Waves />
    </section>
  );
}
