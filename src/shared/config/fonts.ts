import localFont from 'next/font/local';

const riotFontRegular = localFont({
  src: '../../../public/fonts/Riot/Riot-Regular.woff2',
  variable: '--font-riot-regular',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotFontItalic = localFont({
  src: '../../../public/fonts/Riot/Riot-Regular-Italic.woff2',
  variable: '--font-riot-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotFontBold = localFont({
  src: '../../../public/fonts/Riot/Riot-Bold.woff2',
  variable: '--font-riot-bold',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotFontBoldItalic = localFont({
  src: '../../../public/fonts/Riot/Riot-Bold-Italic.woff2',
  variable: '--font-riot-bold-italic',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const riotFonts = [riotFontRegular, riotFontItalic, riotFontBold, riotFontBoldItalic];

/** List of fonts. */
export const fonts = [...riotFonts];
