import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, DM_Serif_Display } from "next/font/google";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Sandra Kiel — Playpreneur, Speaker & Mentor",
  description:
    "Sandra Kiel is a playpreneur, keynote speaker, and mentor helping bold leaders and organizations unlock creativity through the power of play. Women in Tech advocate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${spaceGrotesk.variable}
        ${dmSerifDisplay.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col bg-[#06060f] text-[#F8FAFC]" suppressHydrationWarning>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
