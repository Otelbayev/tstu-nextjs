import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";

const canela = localFont({
  src: "../public/fonts/RobotoSerif.ttf",
  variable: "--font-canela",
  weight: "500",
  style: "normal",
  display: "swap",
});

const geistSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Transport Universiteti",
  description: "Transport Universitetining rasmiy sayti",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${canela.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
