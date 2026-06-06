import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopControls from "@/components/TopControls";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Jarold David — Full-Stack Developer & UI/UX Designer",
  description:
    "Christian Jarold David builds pixel-perfect web interfaces, practical backend systems, and AI-assisted workflows for real products.",
  keywords: ["Christian Jarold David", "Portfolio", "Full-Stack Developer", "UI/UX Designer"],
  authors: [{ name: "Christian Jarold David" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Sidebar />
        <TopControls />
        <ScrollToTop />
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
