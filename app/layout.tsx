import type { Metadata } from "next";
import { Inter } from "next/font/google";
//imports globals css from utils
import "@/public/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio Atm",
  description: "Desafio Atm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full h-screen">
      <body className={`${inter.className} min-h-full h-screen h-full`}>
        {children}
      </body>
    </html>
  );
}
