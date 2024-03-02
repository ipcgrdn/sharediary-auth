import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ui/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareDiary",
  description: "How was your day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
      <Providers>{children}</Providers></body>
    </html>
  );
}
