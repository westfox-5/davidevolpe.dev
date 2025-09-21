import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


import FloatingBubbles from "../components/FloatingBubbles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Davide Volpe",
  description: "davidevolpe.dev",
  robots: "noindex, nofollow",
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased container mx-auto`}
      >
        <FloatingBubbles />
        {children}
      </body>
    </html>
  );
}
