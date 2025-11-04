import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cresco Risk Management - Gestione dei crediti anomali",
  description:
    "Cresco Risk Management opera nel settore della gestione dei crediti anomali, perseguendo l'obiettivo della riduzione dei costi di recupero dei crediti problematici.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
