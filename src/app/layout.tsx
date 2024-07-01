import { Footer } from "@/components/footer";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
import { MusicaProvider } from "@/context/musica";
import { SongBackground } from "@/components/song-background";

export const metadata: Metadata = {
  title: "Rafael Lopez",
  creator: "Jefferson Lopez",
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
        <MusicaProvider>
          {children}
          <Footer />
        </MusicaProvider>
      </body>
    </html>
  );
}
