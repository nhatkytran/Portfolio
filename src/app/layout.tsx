import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { fonts } from '@/shared/config';
import { cn, getFontsVariables } from '@/shared/utils/helpers';
import Header from '@/features/layout/components/Header';

import './globals.css';

// TODO (Ky Tran): Improve SEO and add open graph (https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).
export const metadata: Metadata = {
  title: 'Champion | Ky Tran',
  description: "Ky Tran's Portfolio",
};

/** Root layout for the application. */
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn(getFontsVariables(fonts), 'font-spiegel-regular antialiased')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
