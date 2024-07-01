import { Header } from "@/components";
import { Navigation } from "@/components/navigation";
import { SongBackground } from "@/components/song-background";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Rafael Lopez",
  description: "Sigueme en mis redes sociales",
  creator: "Jefferson Lopez",
  twitter: {
    card: "player",
    images: {
      url: "https://res.cloudinary.com/jeffersoncloud/image/upload/v1719782062/rafael-lopez/rysgaretilgjkuq1j3vi.jpg",
      alt: "Rafael Lopez",
    },
  },
  openGraph: {
    siteName: "Rafael Lopez",
    type: "website",
    images: {
      url: "https://res.cloudinary.com/jeffersoncloud/image/upload/v1719782062/rafael-lopez/rysgaretilgjkuq1j3vi.jpg",
      alt: "Rafael Lopez",
    },
  },
};

export default function LayoutContacto({ children }: { children: ReactNode }) {
  return (
    <main className="px-5 min-h-[90dvh] gap-4 flex flex-col items-center select-none">
      <Header />
      <Navigation />
      {children}
    </main>
  );
}
