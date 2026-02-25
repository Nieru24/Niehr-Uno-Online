import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import Header from '@/components/ui/header';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Niehr Project: Online Uno',
  description: 'Uno online multiplayer game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} flex min-h-screen flex-col bg-[#1a1d1d] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
