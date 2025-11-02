import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cristobal(amat);",
  description: "Portfolio Cristobal Amat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-d_bg bg-l_bg_h text-l_fg dark:text-d_fg`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
