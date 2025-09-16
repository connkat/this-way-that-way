import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { gtUltraFine, gtUltraMedian, gtUltraStandard } from "@/styles/fonts";
import "@/app/globals.css";
import "@/styles/animations.css";

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
  authors: [
    {
      name: "Kat Connolly",
      url: "https://connkat.com",
    },
  ],
  description:
    "A monthly interview series about taking a distinctive path in career and life. Recorded live at House 831 in Calgary, Canada",
  openGraph: {
    title: "This Way That Way",
    description:
      "A monthly interview series about taking a distinctive path in career and life. Recorded live at House 831 in Calgary, Canada",
    type: "website",
    url: "https://this-way-that-way.netlify.app",
    siteName: "This Way That Way",
    images: [
      {
        url: "https://this-way-that-way.netlify.app/house-upstairs.jpg",
        width: 1200,
        height: 800,
        alt: "This Way That Way - Career and Life Paths",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "This Way That Way",
    description:
      "A monthly interview series about taking a distinctive path in career and life. Recorded live at House 831 in Calgary, Canada",
    images: ["https://this-way-that-way.netlify.app/house-upstairs.jpg"],
  },
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/favicon.ico",
    },
  ],
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
