import { useRef, useState } from 'react';

import { type Language, LANGUAGES, CHINESE_LANGUAGE, ENGLISH_LANGUAGE } from '@/features/home/data';
import { cn } from '@/shared/utils/helpers';
import { useWindowEventListener } from '@/shared/hooks';

// prettier-ignore
type Props = {

  /** Language. */
  readonly language: Language;

  /** Handles language change. */
  readonly onLanguageChange: (language: Language) => void;
};

/** Language selection. */
export default function LanguageSelection({ language, onLanguageChange }: Props) {
  const languageContainerRef = useRef<HTMLDivElement>(null);
  const [languageLineWidth, setLanguageLineWidth] = useState(0);

  const languageLineStyles = ((language: Language) => {
    if (language === ENGLISH_LANGUAGE) {
      return 'left-0';
    }
    return language === CHINESE_LANGUAGE ? 'left-[33%]' : 'left-[66%]';
  })(language);

  /**
   * Handles language change.
   * @param language The language to change to.
   */
  const handleLanguage = (language: Language) => () => onLanguageChange(language);

  /** Handles language line width. */
  const handleLanguageLineWidth = () => {
    if (languageContainerRef.current != null) {
      setLanguageLineWidth(languageContainerRef.current.offsetWidth / LANGUAGES.length);
    }
  };

  useWindowEventListener({ eventName: 'resize', isInitialCall: true, handler: handleLanguageLineWidth });

  return (
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
          'h-[2px] bg-red-600',
          'absolute bottom-0 left-0 block',
          languageLineStyles,
        )}
      />
    </div>
  );
}
