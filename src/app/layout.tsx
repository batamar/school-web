import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Орчлон Сургууль - Боловсролын шилдэг байгууллага",
  description: "Орчлон Сургууль нь Монголд дэлхийн жишигт нийцсэн боловсрол олгож, 1995 оноос хойш оюун төгөлдөр, ирээдүй бүтээж байна.",
  keywords: "Орчлон Сургууль, боловсрол, Монгол, олон улсын сургууль, сургалт",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
