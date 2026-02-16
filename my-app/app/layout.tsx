import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niehr Project: Online Uno",
  description: "Uno online multiplayer game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased bg-[#1a1d1d] min-h-screen flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
