import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "./store/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Redux",
  description: "Pita studying redux system to make skill improvements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
