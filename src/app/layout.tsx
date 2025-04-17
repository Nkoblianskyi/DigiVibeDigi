'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../styles/index.scss'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { segment: string };
}) {
  if (params.segment === 'site') {
    return <html lang="es"><body>{children}</body></html>; // БЕЗ Layout
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
