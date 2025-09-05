import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { fonts } from '@/shared/config';
import { cn, getFontsVariables } from '@/shared/utils/helpers';
import { PORTAL_ID, CONTENTS } from '@/shared/constants';
import Header from '@/features/layout/components/Header';
import Footer from '@/features/layout/components/Footer';
import Utility from '@/features/layout/components/Utility';

import './globals.css';

// TODO (Ky Tran): Improve SEO and add open graph (https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).
export const metadata: Metadata = {
  title: `Champion | ${CONTENTS.ENGLISH_NAME}`,
  description: `${CONTENTS.ENGLISH_NAME}'s Portfolio`,
};

/** Root layout for the application. */
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(getFontsVariables(fonts), 'font-spiegel-regular antialiased')}>
        <Analytics />
        <SpeedInsights />
        <div id={PORTAL_ID} />
        <Utility />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
