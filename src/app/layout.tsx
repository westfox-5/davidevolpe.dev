import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";



import FloatingBubbles from "../components/FloatingBubbles";
import ScrollToTopButton from "../components/ScrollToTopButton";

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
    <html lang="en" className="overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]`}
      >
        <FloatingBubbles />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}
