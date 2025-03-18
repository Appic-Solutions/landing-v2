import type { Metadata } from "next";
import "../styles/globals.css";
import { ReactNode } from "react";
import HeaderSection from "@/views/layout/components/header";
import FooterSection from "@/views/layout/components/footer";
import AOSWrapper from "@/libs/wrappers/aos";

export const metadata: Metadata = {
  title: "Appic Dao",
  description: "Appic cross-chain swap built on ICP",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="bg-black font-rethink-sans">
      <body className="relative max-w-[1920px] mx-auto">
        <HeaderSection />
        <AOSWrapper>{children}</AOSWrapper>
        <FooterSection />
      </body>
    </html>
  );
}
