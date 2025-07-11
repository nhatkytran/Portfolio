import type { Metadata } from 'next';

import './globals.css';

// TODO (Ky Tran): Improve SEO and add open graph (https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).
export const metadata: Metadata = {
  title: 'Champion | Ky Tran',
  description: 'Ky Tran\'s Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
