import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { gtUltraFine, gtUltraMedian, gtUltraStandard } from "@/styles/fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "This Way That Way",
  description: "Created by github.com/connkat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gtUltraFine.variable} ${gtUltraMedian.variable} ${gtUltraStandard.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
