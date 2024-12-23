import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Footer from "@/components/Footer";

import "./globals.css";
import Hero from "@/components/Hero";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vault anime",
  description: "The layout for the app",
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode; 
}) {
  return (
   <html lang="en">
    <body className={dmSans.className}>
      <main className="max-w-7xl mx-auto bg-[#0F1117]">
        <Hero />
        {children}
        <Footer />
      </main>
    </body>
   </html>
  );
}