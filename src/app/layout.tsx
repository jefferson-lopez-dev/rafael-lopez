import { Footer } from "@/components/footer";
import { MusicaProvider } from "@/context/musica";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Lopez",
  creator: "Jefferson Lopez",
  description: "Disfruta de todas las canciones de jose rafacel lopez",
  openGraph: {
    images: {
      url: "https://res.cloudinary.com/jeffersoncloud/image/upload/v1717890607/rafael-lopez/c8x4qjmknwejp55utgbz.jpg",
      width: 1200,
      height: 630,
    },
  },
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
