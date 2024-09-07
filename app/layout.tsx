import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from "next";
import Header from "@/components/Header.component";
import Navigation from "@/components/Navigation.component";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KamuTech Demo",
  description: "Calendar demo project.",
};

export const viewport: Viewport = {
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="flex flex-row">
          <Navigation />
          <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white overflow-x-auto">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
