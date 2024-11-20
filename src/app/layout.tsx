import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/header";

import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Watch Something",
  description: "A player to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.className} antialiased placeholder:overflow-hidden `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

//bg-[url('../../public/bg.gif')]
