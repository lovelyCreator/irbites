import Navbar from './components/navbar';
import Head from 'next/head';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from 'next/font/google';
import "./globals.css";
import BottomBar from './components/bottomBar';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "irbites",
  description: "medical education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
    <link rel="icon" href="/favicon.png" sizes="any" />
    </Head>
      <body className={`${inter.variable}`}>
        <Navbar /> 
        {children}
        <BottomBar/>
      </body>
    </html>
  );
}
