import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Copyright from "@/components/Copyright";
import Navbar from "@/components/Navbar/Navbar";
import NavbarTop from "@/components/Navbar/NavbarTop";
import NewsTicker from "@/components/Homepage/NewsTicker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islambag Ashraf Ali High School",
  description: "Home of quality education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        <NavbarTop />
        <Navbar />
        <main>{children}</main>
        <Copyright />
      </body>
    </html>
  );
}
