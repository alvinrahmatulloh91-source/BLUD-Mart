import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SMKN 1 BANTUL - SKANSABA BLUD-MART",
  description: "Platform Digital BLUD SMKN 1 Bantul - Portal Unit Produksi dan Jasa",
  keywords: ["SMKN 1 Bantul", "BLUD", "Unit Produksi", "Skansaba BLUD-Mart"],
  authors: [{ name: "SMKN 1 Bantul" }],
  openGraph: {
    title: "SMKN 1 BANTUL - SKANSABA BLUD-MART",
    description: "Platform Digital BLUD SMKN 1 Bantul",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
