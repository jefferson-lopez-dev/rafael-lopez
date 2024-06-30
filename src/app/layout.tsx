import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Lopez",
  description: "Disfruta de todas las canciones de jose rafacel lopez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body
        className={`${GeistSans.className} bg-[url('/bg-ruido.png')] select-none`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
