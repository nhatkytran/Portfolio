import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { fonts } from '@/shared/config';
import { cn, getFontsVariables } from '@/shared/utils/helpers';
import { CONTENTS } from '@/shared/constants';
import Header from '@/features/layout/components/Header';

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
        <Header />
        {children}
        <div className="h-[320px] bg-neutral-900">Footer</div>
      </body>
    </html>
  );
}
